import { useState, useRef, useEffect } from "react";
import { ALL_COUNTRIES } from "../data/countries";

interface Props {
  onGuess: (country: string) => void;
  disabled: boolean;
  guessedCountries: string[];
}

export function GuessInput({ onGuess, disabled, guessedCountries }: Props) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = value.trim()
    ? ALL_COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(value.toLowerCase()) &&
          !guessedCountries.includes(c.name),
      ).slice(0, 8)
    : [];

  function submit(name: string) {
    const match = ALL_COUNTRIES.find(
      (c) => c.name.toLowerCase() === name.toLowerCase(),
    );
    if (!match) return;
    onGuess(match.name);
    setValue("");
    setOpen(false);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") submit(value);
    if (e.key === "Escape") setOpen(false);
  }

  useEffect(() => {
    setOpen(suggestions.length > 0);
  }, [suggestions.length]);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => setOpen(suggestions.length > 0)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          disabled={disabled}
          placeholder="Type a country name…"
          autoComplete="off"
          style={{
            flex: 1,
            padding: "0.65rem 1rem",
            borderRadius: "0.6rem",
            border: "1px solid #334155",
            background: "#1e293b",
            color: "#f1f5f9",
            fontSize: "0.95rem",
            outline: "none",
          }}
        />
        <button
          onClick={() => submit(value)}
          disabled={disabled || !value.trim()}
          style={{
            padding: "0.65rem 1.2rem",
            borderRadius: "0.6rem",
            border: "none",
            background: disabled ? "#334155" : "#2563eb",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          Guess
        </button>
      </div>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "0.6rem",
            margin: 0,
            padding: "0.25rem 0",
            listStyle: "none",
            zIndex: 50,
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          {suggestions.map((c) => (
            <li
              key={c.code}
              onMouseDown={() => submit(c.name)}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                color: "#f1f5f9",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = "#334155")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "transparent")
              }
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
