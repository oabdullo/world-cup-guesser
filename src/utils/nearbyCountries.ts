import type { Country } from "../data/countries";
import { distanceKm } from "./distance";

const ROARK_HINT_COUNT = 4;

export function getNearbyCountries(
  answer: Country,
  allCountries: Country[],
  guessedNames: string[],
  limit = ROARK_HINT_COUNT,
): Country[] {
  const guessed = new Set(guessedNames);

  return allCountries
    .filter((c) => c.name !== answer.name && !guessed.has(c.name))
    .map((c) => ({
      country: c,
      distanceKm: distanceKm(answer.lat, answer.lng, c.lat, c.lng),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit)
    .map(({ country }) => country);
}
