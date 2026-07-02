import { useMemo, useState, useCallback } from "react";
import { cidadesAtendimento } from "@/data/especialistas";
import { fuzzySearch, haversineKm, normalize } from "@/utils/fuzzySearch";
import type { CidadeAtendimento } from "@/types/mapa";

export function useMapaSolo() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const cidadesOrdenadas = useMemo(
    () =>
      [...cidadesAtendimento].sort((a, b) =>
        normalize(a.cidade).localeCompare(normalize(b.cidade)),
      ),
    [],
  );

  const resultados = useMemo(() => {
    if (!query.trim()) return cidadesOrdenadas;
    return fuzzySearch(query, cidadesAtendimento, (c) => `${c.cidade} ${c.estado}`).map(
      (m) => m.item,
    );
  }, [query, cidadesOrdenadas]);

  const selecionada: CidadeAtendimento | null = useMemo(
    () => cidadesAtendimento.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );

  const selecionarCidade = useCallback((id: string) => setSelectedId(id), []);

  /** Encontra especialista mais próximo (fallback quando cidade não existe). */
  const buscarMaisProximo = useCallback(
    (origem: { lat: number; lng: number }) => {
      let best: CidadeAtendimento | null = null;
      let bestDist = Infinity;
      for (const c of cidadesAtendimento) {
        const d = haversineKm(origem, { lat: c.lat, lng: c.lng });
        if (d < bestDist) {
          bestDist = d;
          best = c;
        }
      }
      if (best) setSelectedId(best.id);
      return best;
    },
    [],
  );

  return {
    query,
    setQuery,
    resultados,
    cidadesOrdenadas,
    selecionada,
    selecionarCidade,
    buscarMaisProximo,
  };
}
