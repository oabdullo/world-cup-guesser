import { useState, useCallback } from "react";
import { PLAYERS } from "./data/players";
import { ALL_COUNTRIES } from "./data/countries";
import { distanceKm } from "./utils/distance";
import { PlayerCard } from "./components/PlayerCard";
import { GuessInput } from "./components/GuessInput";
import { GuessList } from "./components/GuessList";
import { WorldMap } from "./components/WorldMap";

interface Guess {
  country: string;
  distanceKm: number;
}

function pickRandom() {
  return PLAYERS[Math.floor(Math.random() * PLAYERS.length)];
}

const LEGEND = [
  { emoji: "🟢", label: "Correct" },
  { emoji: "🔴", label: "Hot  <1 500 km" },
  { emoji: "🟠", label: "Warm  <4 000 km" },
  { emoji: "🔵", label: "Cold  <8 000 km" },
  { emoji: "⬛", label: "Freezing  8 000+ km" },
];

export default function App() {
  const [player, setPlayer] = useState(pickRandom);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [solved, setSolved] = useState(false);

  const answerCountry = ALL_COUNTRIES.find((c) => c.name === player.country);

  const handleGuess = useCallback(
    (country: string) => {
      if (solved) return;
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
    [player, answerCountry, solved],
  );

  function newGame() {
    setPlayer(pickRandom());
    setGuesses([]);
    setSolved(false);
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#0f172a",
        color: "#f1f5f9",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.25rem 1rem 3rem",
        gap: "1.25rem",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 800,
            background: "linear-gradient(90deg, #3b82f6, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          World Cup Guesser
        </h1>
        <p
          style={{
            margin: "0.2rem 0 0",
            color: "#64748b",
            fontSize: "0.82rem",
          }}
        >
          Guess the player's nationality — the map shows how close you are
        </p>
      </header>

      {/* Main two-column layout */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          gap: "1.25rem",
          alignItems: "flex-start",
          /* stack on narrow screens */
          flexWrap: "wrap",
        }}
      >
        {/* ── Left panel ── */}
        <div
          style={{
            width: 240,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            /* on narrow screens, take full width and sit above map */
            flex: "0 0 240px",
          }}
        >
          <PlayerCard player={player} revealed={solved} />

          {solved ? (
            <div
              style={{
                padding: "0.85rem 1rem",
                background: "#14532d",
                border: "1px solid #22c55e",
                borderRadius: "0.75rem",
                color: "#86efac",
                fontWeight: 700,
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              ✅ Got it in {guesses.length}{" "}
              {guesses.length === 1 ? "guess" : "guesses"}!
            </div>
          ) : (
            <GuessInput
              onGuess={handleGuess}
              disabled={solved}
              guessedCountries={guesses.map((g) => g.country)}
            />
          )}

          <button
            onClick={newGame}
            style={{
              padding: "0.55rem 1rem",
              borderRadius: "0.6rem",
              border: "1px solid #334155",
              background: "transparent",
              color: "#64748b",
              fontSize: "0.85rem",
              cursor: "pointer",
              textAlign: "left",
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
            gap: "0.75rem",
          }}
        >
          <WorldMap
            guesses={guesses}
            answerCountry={player.country}
            solved={solved}
          />

          {/* Legend below map */}
          <div
            style={{
              display: "flex",
              gap: "0.6rem",
              flexWrap: "wrap",
              fontSize: "0.73rem",
              color: "#94a3b8",
            }}
          >
            {LEGEND.map(({ emoji, label }) => (
              <span
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                {emoji} {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
