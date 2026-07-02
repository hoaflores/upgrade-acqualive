/**
 * Utilitários de busca fuzzy para nomes de cidades.
 * - Ignora acentos, caixa e espaços extras.
 * - Corrige pequenos erros de digitação via distância de Levenshtein.
 */

export const normalize = (s: string): string =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const v0 = new Array(b.length + 1);
  const v1 = new Array(b.length + 1);
  for (let i = 0; i <= b.length; i++) v0[i] = i;
  for (let i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < b.length; j++) {
      const cost = a[i] === b[j] ? 0 : 1;
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
  }
  return v1[b.length];
}

export interface FuzzyMatch<T> {
  item: T;
  score: number; // menor é melhor
}

export function fuzzySearch<T>(
  query: string,
  items: T[],
  getText: (item: T) => string,
): FuzzyMatch<T>[] {
  const q = normalize(query);
  if (!q) return items.map((item) => ({ item, score: 0 }));

  return items
    .map((item) => {
      const text = normalize(getText(item));
      let score: number;
      if (text === q) score = 0;
      else if (text.startsWith(q)) score = 0.1;
      else if (text.includes(q)) score = 0.3;
      else {
        // pequenos erros de digitação
        const dist = levenshtein(q, text.slice(0, q.length + 2));
        score = 1 + dist / Math.max(q.length, 1);
      }
      return { item, score };
    })
    .filter((m) => m.score < 2.5)
    .sort((a, b) => a.score - b.score);
}

/** Distância aproximada em km entre duas coordenadas (Haversine). */
export function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
