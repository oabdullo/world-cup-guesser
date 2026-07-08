import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { PLAYERS } from "./data/players";
import { ALL_COUNTRIES } from "./data/countries";
import { distanceKm, getTemperature, temperatureEmoji } from "./utils/distance";
import { getNearbyCountries } from "./utils/nearbyCountries";
import { PlayerCard } from "./components/PlayerCard";
import { GuessInput } from "./components/GuessInput";
import { GuessList } from "./components/GuessList";
import { WorldMap } from "./components/WorldMap";
import { RoarkSuggestions } from "./components/RoarkSuggestions";

interface Guess {
  country: string;
  distanceKm: number;
}

const MAX_GUESSES = 5;
const ROARK_MODE_KEY = "world-cup-guesser-roark-mode";
const ROARK_HINT_AFTER_GUESSES = 2;

function pickRandom() {
  return PLAYERS[Math.floor(Math.random() * PLAYERS.length)];
}

const LEGEND = [
  { emoji: "🟢", label: "Correct" },
  { emoji: "🔴", label: "Hot < 1 500 km" },
  { emoji: "🟠", label: "Warm < 4 000 km" },
  { emoji: "🔵", label: "Cold < 8 000 km" },
  { emoji: "⬛", label: "Freezing 8 000+ km" },
];

function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const SHARE_URL = "https://worldcup.oabdullo.com";

interface ShareArgs {
  playerName: string;
  playerCountry: string;
  solved: boolean;
  guesses: { distanceKm: number }[];
  maxGuesses: number;
  durationMs: number;
}

function buildShareText({
  playerName,
  playerCountry,
  solved,
  guesses,
  maxGuesses,
  durationMs,
}: ShareArgs) {
  const grid = guesses
    .map((g) => temperatureEmoji(getTemperature(g.distanceKm)))
    .join("");
  const score = solved ? `${guesses.length}/${maxGuesses}` : `X/${maxGuesses}`;
  return [
    "World Cup Guesser ⚽",
    `${playerName} (${playerCountry})`,
    `${score} · ${formatDuration(durationMs)}`,
    "",
    grid,
    "",
    SHARE_URL,
  ].join("\n");
}

export default function App() {
  const [player, setPlayer] = useState(pickRandom);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [solved, setSolved] = useState(false);
  const [startTime, setStartTime] = useState<number>(() => Date.now());
  const [elapsedMs, setElapsedMs] = useState(0);
  // Frozen final time captured the moment the game ends
  const finalMsRef = useRef<number | null>(null);
  const [shareStatus, setShareStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const shareResetRef = useRef<number | null>(null);
  const [roarkMode, setRoarkMode] = useState(() => {
    try {
      return localStorage.getItem(ROARK_MODE_KEY) === "true";
    } catch {
      return false;
    }
  });

  const failed = !solved && guesses.length >= MAX_GUESSES;
  const gameOver = solved || failed;
  const answerCountry = ALL_COUNTRIES.find((c) => c.name === player.country);

  // Tick the timer 4x/second while the game is active
  useEffect(() => {
    if (gameOver) return;
    finalMsRef.current = null;
    const id = window.setInterval(() => {
      setElapsedMs(Date.now() - startTime);
    }, 250);
    return () => window.clearInterval(id);
  }, [startTime, gameOver]);

  // Freeze the timer at game end
  useEffect(() => {
    if (gameOver && finalMsRef.current === null) {
      const final = Date.now() - startTime;
      finalMsRef.current = final;
      setElapsedMs(final);
    }
  }, [gameOver, startTime]);

  const displayMs = gameOver ? (finalMsRef.current ?? elapsedMs) : elapsedMs;

  const roarkSuggestions = useMemo(() => {
    if (!roarkMode || !answerCountry || gameOver) return [];
    if (guesses.length < ROARK_HINT_AFTER_GUESSES) return [];
    return getNearbyCountries(
      answerCountry,
      ALL_COUNTRIES,
      guesses.map((g) => g.country),
    );
  }, [roarkMode, answerCountry, gameOver, guesses]);

  function toggleRoarkMode() {
    setRoarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(ROARK_MODE_KEY, String(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }

  const handleGuess = useCallback(
    (country: string) => {
      if (gameOver) return;
      const guessCountry = ALL_COUNTRIES.find((c) => c.name === country);
      if (!guessCountry || !answerCountry) return;
      const km =
        country === player.country
          ? 0
          : distanceKm(
              guessCountry.lat,
              guessCountry.lng,
              answerCountry.lat,
              answerCountry.lng,
            );
      setGuesses((prev) => [...prev, { country, distanceKm: km }]);
      if (country === player.country) setSolved(true);
    },
    [player, answerCountry, gameOver],
  );

  function newGame() {
    setPlayer(pickRandom());
    setGuesses([]);
    setSolved(false);
    finalMsRef.current = null;
    setStartTime(Date.now());
    setElapsedMs(0);
    setShareStatus("idle");
    if (shareResetRef.current !== null) {
      window.clearTimeout(shareResetRef.current);
      shareResetRef.current = null;
    }
  }

  const displayMsForShare = finalMsRef.current ?? elapsedMs;

  const handleShare = useCallback(async () => {
    const text = buildShareText({
      playerName: player.name,
      playerCountry: player.country,
      solved,
      guesses,
      maxGuesses: MAX_GUESSES,
      durationMs: displayMsForShare,
    });

    // Prefer native share sheet on mobile / supported browsers
    const nav = navigator as Navigator & {
      share?: (data: {
        text: string;
        title?: string;
        url?: string;
      }) => Promise<void>;
    };

    try {
      if (nav.share) {
        await nav.share({ title: "World Cup Guesser", text });
        return;
      }
      await navigator.clipboard.writeText(text);
      setShareStatus("copied");
    } catch (err) {
      // User cancelling the native share sheet also throws — treat as no-op.
      if (
        err instanceof DOMException &&
        (err.name === "AbortError" || err.name === "NotAllowedError")
      ) {
        return;
      }
      setShareStatus("error");
    } finally {
      if (shareResetRef.current !== null) {
        window.clearTimeout(shareResetRef.current);
      }
      shareResetRef.current = window.setTimeout(() => {
        setShareStatus("idle");
        shareResetRef.current = null;
      }, 2000);
    }
  }, [player, solved, guesses, displayMsForShare]);

  useEffect(() => {
    return () => {
      if (shareResetRef.current !== null) {
        window.clearTimeout(shareResetRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#0f172a",
        color: "#f1f5f9",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        padding: "2rem 1.5rem 3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(1.5rem, 4vw, 2.15rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              background: "linear-gradient(90deg, #3b82f6, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            World Cup Guesser
          </h1>
          <p
            style={{
              margin: "0.4rem 0 0",
              color: "#64748b",
              fontSize: "0.85rem",
            }}
          >
            Guess the player's nationality — the map shows how close you are
          </p>
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.85rem",
              padding: "0.45rem 0.85rem",
              borderRadius: "999px",
              border: `1px solid ${roarkMode ? "#7c3aed" : "#334155"}`,
              background: roarkMode ? "rgba(124, 58, 237, 0.12)" : "#1e293b",
              color: roarkMode ? "#ddd6fe" : "#94a3b8",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={roarkMode}
              onChange={toggleRoarkMode}
              style={{ accentColor: "#7c3aed" }}
            />
            Roark Mode
            <span
              style={{
                fontWeight: 400,
                color: roarkMode ? "#c4b5fd" : "#64748b",
              }}
            >
              — nearby hints after 2 guesses
            </span>
          </label>
        </header>

        {/* Main two-column layout */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* ── Left panel ── */}
          <div
            style={{
              flex: "0 0 280px",
              minWidth: 260,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <PlayerCard player={player} revealed={gameOver} />

            {/* Timer + guess dots row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
                padding: "0.25rem 0.15rem",
              }}
            >
              {/* Timer pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "999px",
                  background: solved
                    ? "#14532d"
                    : failed
                      ? "#450a0a"
                      : "#1e293b",
                  border: `1px solid ${
                    solved ? "#22c55e" : failed ? "#ef4444" : "#334155"
                  }`,
                  color: solved ? "#86efac" : failed ? "#fca5a5" : "#94a3b8",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  transition: "all 0.3s ease",
                }}
                aria-label="Elapsed time"
              >
                <span aria-hidden style={{ fontSize: "0.8rem" }}>
                  ⏱
                </span>
                {formatDuration(displayMs)}
              </div>

              {/* Guess counter — 5 dots */}
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {Array.from({ length: MAX_GUESSES }).map((_, i) => {
                  const guess = guesses[i];
                  const isCorrect = guess && guess.distanceKm === 0;
                  const isUsed = !!guess;
                  return (
                    <div
                      key={i}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: `2px solid ${isCorrect ? "#22c55e" : isUsed ? "#475569" : "#334155"}`,
                        background: isCorrect
                          ? "#14532d"
                          : isUsed
                            ? "#1e293b"
                            : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: isCorrect ? "#86efac" : "#64748b",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isCorrect ? "✓" : isUsed ? i + 1 : ""}
                    </div>
                  );
                })}
              </div>
            </div>

            {solved ? (
              <div
                style={{
                  padding: "0.9rem 1rem",
                  background: "#14532d",
                  border: "1px solid #22c55e",
                  borderRadius: "0.75rem",
                  color: "#86efac",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textAlign: "center",
                  lineHeight: 1.4,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <div>
                  ✅ Got it in {guesses.length}{" "}
                  {guesses.length === 1 ? "guess" : "guesses"}!
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "0.82rem",
                      marginTop: "0.3rem",
                      color: "#4ade80",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    Time: {formatDuration(displayMs)}
                  </div>
                </div>
                <ShareButton
                  status={shareStatus}
                  variant="success"
                  onClick={handleShare}
                />
              </div>
            ) : failed ? (
              <div
                style={{
                  padding: "0.9rem 1rem",
                  background: "#450a0a",
                  border: "1px solid #ef4444",
                  borderRadius: "0.75rem",
                  color: "#fca5a5",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textAlign: "center",
                  lineHeight: 1.4,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <div>
                  ❌ Out of guesses!
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: "0.82rem",
                      marginTop: "0.3rem",
                      color: "#f87171",
                    }}
                  >
                    It was <strong>{player.country}</strong> ·{" "}
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>
                      {formatDuration(displayMs)}
                    </span>
                  </div>
                </div>
                <ShareButton
                  status={shareStatus}
                  variant="failure"
                  onClick={handleShare}
                />
              </div>
            ) : (
              <>
                <GuessInput
                  onGuess={handleGuess}
                  disabled={gameOver}
                  guessedCountries={guesses.map((g) => g.country)}
                />
                {roarkSuggestions.length > 0 && (
                  <RoarkSuggestions
                    suggestions={roarkSuggestions}
                    onSelect={handleGuess}
                  />
                )}
              </>
            )}

            <button
              onClick={newGame}
              style={{
                padding: "0.6rem 1rem",
                borderRadius: "0.6rem",
                border: "1px solid #334155",
                background: "transparent",
                color: "#94a3b8",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
              }}
            >
              ↺ New Player
            </button>

            <GuessList guesses={guesses} />
          </div>

          {/* ── Right panel: map + legend ── */}
          <div
            style={{
              flex: 1,
              minWidth: 300,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <WorldMap
              guesses={guesses}
              answerCountry={player.country}
              solved={gameOver}
            />

            {/* Legend below map */}
            <div
              style={{
                display: "flex",
                gap: "0.4rem 1.1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "0.6rem 0.9rem",
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "0.6rem",
                fontSize: "0.74rem",
                color: "#94a3b8",
              }}
            >
              {LEGEND.map(({ emoji, label }) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span aria-hidden style={{ fontSize: "0.78rem" }}>
                    {emoji}
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ShareButtonProps {
  status: "idle" | "copied" | "error";
  variant: "success" | "failure";
  onClick: () => void;
}

function ShareButton({ status, variant, onClick }: ShareButtonProps) {
  const isSuccess = variant === "success";
  const baseColor = isSuccess ? "#22c55e" : "#ef4444";
  const label =
    status === "copied"
      ? "Copied!"
      : status === "error"
        ? "Copy failed"
        : "Share result";
  const icon = status === "copied" ? "✓" : status === "error" ? "⚠" : "📋";
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        padding: "0.5rem 0.9rem",
        borderRadius: "0.55rem",
        border: `1px solid ${baseColor}`,
        background: "rgba(255,255,255,0.04)",
        color: isSuccess ? "#bbf7d0" : "#fecaca",
        fontSize: "0.85rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <span aria-hidden>{icon}</span>
      {label}
    </button>
  );
}
