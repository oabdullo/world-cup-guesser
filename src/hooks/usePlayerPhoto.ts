import { useState, useEffect } from "react";

interface WikiSummary {
  thumbnail?: { source: string };
  type?: string;
}

async function fetchWikiPhoto(name: string): Promise<string | null> {
  const attempts = [name, `${name} (footballer)`, `${name} (soccer)`];

  for (const title of attempts) {
    try {
      const encoded = encodeURIComponent(title.replace(/ /g, "_"));
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`,
        { headers: { "Api-User-Agent": "WorldCupGuesser/1.0" } },
      );
      if (!res.ok) continue;
      const data: WikiSummary = await res.json();
      if (data.type === "disambiguation") continue;
      if (data.thumbnail?.source) return data.thumbnail.source;
    } catch {
      // network error, try next
    }
  }
  return null;
}

export function usePlayerPhoto(playerName: string) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setPhotoUrl(null);
    fetchWikiPhoto(playerName).then((url) => {
      if (!cancelled) {
        setPhotoUrl(url);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [playerName]);

  return { photoUrl, loading };
}
