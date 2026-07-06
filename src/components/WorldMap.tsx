import { useEffect, useRef, useState, useMemo } from "react";
import * as d3geo from "d3-geo";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import { ALL_COUNTRIES } from "../data/countries";
import {
  distanceKm,
  getTemperature,
  temperatureColor,
} from "../utils/distance";

interface Guess {
  country: string;
  distanceKm: number;
}

interface Props {
  guesses: Guess[];
  answerCountry: string;
  solved: boolean;
}

interface CountryFeature {
  type: string;
  id: string;
  properties: { name: string };
  geometry: unknown;
}

const ZOOM_SCALE = 4;
const SOLVE_ZOOM_DELAY_MS = 400;

export function WorldMap({ guesses, answerCountry, solved }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [dims, setDims] = useState({ w: 800, h: 450 });
  // Which country the map is currently centred on (null = world view)
  const [focusedCountry, setFocusedCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    ).then(async (r) => {
      const topo = (await r.json()) as Topology;
      const geo = topojson.feature(
        topo,
        topo.objects.countries as GeometryCollection,
      );
      setCountries((geo as unknown as { features: CountryFeature[] }).features);
    });
  }, []);

  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      setDims({ w, h: Math.round(w * 0.56) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Reset focus when a new game starts
  useEffect(() => {
    setFocusedCountry(null);
  }, [answerCountry]);

  // Zoom to the most recently guessed country
  useEffect(() => {
    if (guesses.length === 0) return;
    setFocusedCountry(guesses[guesses.length - 1].country);
  }, [guesses.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // After solving, shift focus to the answer country
  useEffect(() => {
    if (!solved) return;
    const t = setTimeout(
      () => setFocusedCountry(answerCountry),
      SOLVE_ZOOM_DELAY_MS,
    );
    return () => clearTimeout(t);
  }, [solved, answerCountry]);

  const projection = useMemo(
    () =>
      d3geo
        .geoNaturalEarth1()
        .scale(dims.w / 6.4)
        .translate([dims.w / 2, dims.h / 2]),
    [dims],
  );

  const path = useMemo(
    () => d3geo.geoPath().projection(projection),
    [projection],
  );

  // Map world-atlas numeric IDs → alpha-3 codes by centroid proximity
  const codeByNumeric = useMemo(() => {
    const map: Record<string, string> = {};
    for (const feature of countries) {
      const centroid = path.centroid(feature as Parameters<typeof path>[0]);
      if (!centroid || isNaN(centroid[0])) continue;
      const inverted = projection.invert?.([centroid[0], centroid[1]]);
      if (!inverted) continue;
      const [lng, lat] = inverted;
      let best = "";
      let bestDist = Infinity;
      for (const c of ALL_COUNTRIES) {
        const d = distanceKm(lat, lng, c.lat, c.lng);
        if (d < bestDist) {
          bestDist = d;
          best = c.code;
        }
      }
      if (bestDist < 1500) map[feature.id] = best;
    }
    return map;
  }, [countries, path, projection]);

  // Colour map: guessed countries → temperature colour
  const colorMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const guess of guesses) {
      const g = ALL_COUNTRIES.find((c) => c.name === guess.country);
      if (!g) continue;
      map[g.code] = temperatureColor(getTemperature(guess.distanceKm));
    }
    const answerData = ALL_COUNTRIES.find((c) => c.name === answerCountry);
    if (solved && answerData)
      map[answerData.code] = temperatureColor("correct");
    return map;
  }, [guesses, answerCountry, solved]);

  // Pixel coords of the focused country for the zoom pivot
  const zoomPivot = useMemo(() => {
    if (!focusedCountry) return null;
    const data = ALL_COUNTRIES.find((c) => c.name === focusedCountry);
    if (!data) return null;
    const projected = projection([data.lng, data.lat]);
    if (!projected) return null;
    const margin = 40;
    const cx = Math.max(margin, Math.min(dims.w - margin, projected[0]));
    const cy = Math.max(margin, Math.min(dims.h - margin, projected[1]));
    return { cx, cy };
  }, [focusedCountry, projection, dims]);

  const groupTransform = zoomPivot
    ? `translate(${zoomPivot.cx}px, ${zoomPivot.cy}px) scale(${ZOOM_SCALE}) translate(-${zoomPivot.cx}px, -${zoomPivot.cy}px)`
    : "scale(1)";

  return (
    <svg
      ref={svgRef}
      width={dims.w}
      height={dims.h}
      overflow="hidden"
      style={{
        display: "block",
        borderRadius: "0.75rem",
        background: "#0f172a",
      }}
    >
      <g
        style={{
          transform: groupTransform,
          transition: "transform 0.85s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {countries.map((feature) => {
          const code = codeByNumeric[feature.id];
          const fill = code ? (colorMap[code] ?? "#1e293b") : "#1e293b";
          const isGuessed = code ? !!colorMap[code] : false;
          return (
            <path
              key={feature.id}
              d={path(feature as Parameters<typeof path>[0]) ?? ""}
              fill={fill}
              stroke="#334155"
              strokeWidth={0.5}
              style={{
                transition: "fill 0.4s ease",
                filter: isGuessed ? "brightness(1.15)" : undefined,
              }}
            />
          );
        })}
      </g>

      {/* Zoom-out button */}
      {focusedCountry !== null && (
        <g
          style={{ cursor: "pointer" }}
          onClick={() => setFocusedCountry(null)}
        >
          <rect
            x={dims.w - 42}
            y={8}
            width={34}
            height={26}
            rx={6}
            fill="#1e293b"
            stroke="#475569"
          />
          <text
            x={dims.w - 25}
            y={25}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize={13}
            fontFamily="system-ui, sans-serif"
            style={{ userSelect: "none" }}
          >
            ⊖
          </text>
        </g>
      )}
    </svg>
  );
}
