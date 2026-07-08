import type { Country } from "../data/countries";

interface Props {
  suggestions: Country[];
  onSelect: (country: string) => void;
}

export function RoarkSuggestions({ suggestions, onSelect }: Props) {
  if (suggestions.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.45rem",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#a78bfa",
          fontWeight: 600,
        }}
      >
        Roark hints — nearby countries
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {suggestions.map((country) => (
          <button
            key={country.code}
            type="button"
            onClick={() => onSelect(country.name)}
            style={{
              padding: "0.4rem 0.7rem",
              borderRadius: "999px",
              border: "1px solid #7c3aed",
              background: "rgba(124, 58, 237, 0.12)",
              color: "#ddd6fe",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
}
