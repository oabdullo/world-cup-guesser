import {
  getTemperature,
  temperatureColor,
  temperatureEmoji,
  temperatureLabel,
} from "../utils/distance";

interface Guess {
  country: string;
  distanceKm: number;
}

interface Props {
  guesses: Guess[];
}

export function GuessList({ guesses }: Props) {
  if (guesses.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#64748b",
          marginBottom: "0.2rem",
        }}
      >
        Your Guesses
      </div>
      {[...guesses].reverse().map((g, i) => {
        const temp = getTemperature(g.distanceKm);
        const color = temperatureColor(temp);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.5rem 0.85rem",
              borderRadius: "0.5rem",
              background: "#1e293b",
              border: `1px solid ${color}44`,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span style={{ fontSize: "1rem" }}>{temperatureEmoji(temp)}</span>
              <span style={{ color: "#f1f5f9", fontSize: "0.9rem" }}>
                {g.country}
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>
                {g.distanceKm === 0
                  ? "0 km"
                  : `~${Math.round(g.distanceKm).toLocaleString()} km`}
              </span>
              <span
                style={{
                  color,
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  minWidth: "56px",
                  textAlign: "right",
                }}
              >
                {temperatureLabel(temp)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
