import type { Player } from "../data/players";
import { usePlayerPhoto } from "../hooks/usePlayerPhoto";

interface Props {
  player: Player;
  revealed: boolean;
}

const POSITION_COLORS: Record<string, string> = {
  Forward: "#ef4444",
  Midfielder: "#3b82f6",
  Defender: "#22c55e",
  Goalkeeper: "#f59e0b",
};

export function PlayerCard({ player, revealed }: Props) {
  const { photoUrl, loading } = usePlayerPhoto(player.name);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
        border: "1px solid #334155",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* Photo — tall portrait */}
      <div
        style={{
          width: "100%",
          aspectRatio: "3 / 4",
          background: "#0f172a",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #1e293b 25%, #2d3f55 50%, #1e293b 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s ease-in-out infinite",
            }}
          />
        ) : photoUrl ? (
          <img
            src={photoUrl}
            alt={player.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        ) : (
          <svg
            viewBox="0 0 80 100"
            width="60%"
            fill="none"
            style={{ opacity: 0.25 }}
          >
            <circle cx="40" cy="30" r="22" fill="#94a3b8" />
            <path
              d="M0 100c0-22.09 17.91-40 40-40s40 17.91 40 40"
              fill="#94a3b8"
            />
          </svg>
        )}

        {/* Gradient overlay so text is readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0f172a 0%, #0f172a22 50%, transparent 100%)",
          }}
        />

        {/* Position badge overlaid on photo */}
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: POSITION_COLORS[player.position] ?? "#475569",
            color: "#fff",
            fontSize: "0.68rem",
            fontWeight: 700,
            padding: "0.2rem 0.6rem",
            borderRadius: "999px",
            letterSpacing: "0.03em",
          }}
        >
          {player.position}
        </span>
      </div>

      {/* Info section */}
      <div
        style={{
          padding: "1rem 1.1rem 1.1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
        }}
      >
        <div
          style={{
            fontSize: "0.62rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#475569",
          }}
        >
          2026 World Cup Player
        </div>
        <div
          style={{
            fontSize: "1.15rem",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.15,
          }}
        >
          {player.name}
        </div>
        <div style={{ color: "#64748b", fontSize: "0.8rem" }}>
          {player.club}
        </div>

        {revealed && (
          <div
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 0.75rem",
              background: "#14532d",
              border: "1px solid #22c55e",
              borderRadius: "0.5rem",
              color: "#86efac",
              fontSize: "0.9rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            🌍 {player.country}
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
