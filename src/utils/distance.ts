// Haversine great-circle distance in km
export function distanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export type Temperature = "correct" | "hot" | "warm" | "cold" | "freezing";

export function getTemperature(km: number): Temperature {
  if (km === 0) return "correct";
  if (km < 1500) return "hot";
  if (km < 4000) return "warm";
  if (km < 8000) return "cold";
  return "freezing";
}

export function temperatureColor(temp: Temperature): string {
  switch (temp) {
    case "correct":
      return "#22c55e";
    case "hot":
      return "#ef4444";
    case "warm":
      return "#f97316";
    case "cold":
      return "#3b82f6";
    case "freezing":
      return "#1e3a5f";
  }
}

export function temperatureLabel(temp: Temperature): string {
  switch (temp) {
    case "correct":
      return "Correct!";
    case "hot":
      return "Hot";
    case "warm":
      return "Warm";
    case "cold":
      return "Cold";
    case "freezing":
      return "Freezing";
  }
}

export function temperatureEmoji(temp: Temperature): string {
  switch (temp) {
    case "correct":
      return "🟢";
    case "hot":
      return "🔴";
    case "warm":
      return "🟠";
    case "cold":
      return "🔵";
    case "freezing":
      return "⬛";
  }
}
