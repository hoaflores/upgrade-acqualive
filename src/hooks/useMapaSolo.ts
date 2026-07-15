import { useMemo, useState, useCallback, useEffect } from "react";
import { fuzzySearch, haversineKm, normalize } from "@/utils/fuzzySearch";
import type { CidadeAtendimento, Especialista } from "@/types/mapa";
import { supabase } from "@/integrations/supabase/client";

/** Agrupa franqueados por cidade+estado. */
function agruparFranqueados(rows: any[]): CidadeAtendimento[] {
  const map = new Map<string, CidadeAtendimento>();
  for (const r of rows) {
    const key = `${normalize(r.cidade)}-${r.estado.toLowerCase()}`;
      const esp: Especialista = {
        id: r.id,
        nome: r.nome,
        whatsapp: r.whatsapp,
        instagram: r.instagram ?? undefined,
        email: r.email ?? undefined,
        foto: r.foto ?? undefined,
        telefone: r.telefone ?? undefined,
        observacoes: r.observacoes ?? undefined,
        horario_atendimento: r.horario_atendimento ?? undefined,
      };
    const existing = map.get(key);
    if (existing) {
      existing.especialistas.push(esp);
    } else {
      map.set(key, {
        id: key,
        cidade: r.cidade,
        estado: r.estado,
        lat: Number(r.lat),
        lng: Number(r.lng),
        especialistas: [esp],
      });
    }
  }
  return Array.from(map.values());
}

export function useMapaSolo() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [cidades, setCidades] = useState<CidadeAtendimento[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let cancel = false;
    supabase
      .from("franqueados")
      .select("id,nome,cidade,estado,lat,lng,whatsapp,instagram,foto,observacoes,horario_atendimento,ativo")
      .eq("ativo", true)
      .order("cidade")
      .then(({ data, error }) => {
        if (cancel) return;
        if (!error && data) setCidades(agruparFranqueados(data));
        setCarregando(false);
      });
    return () => {
      cancel = true;
    };
  }, []);

  const cidadesOrdenadas = useMemo(
    () =>
      [...cidades].sort((a, b) =>
        normalize(a.cidade).localeCompare(normalize(b.cidade)),
      ),
    [cidades],
  );

  const resultados = useMemo(() => {
    if (!query.trim()) return cidadesOrdenadas;
    return fuzzySearch(query, cidades, (c) => `${c.cidade} ${c.estado}`).map(
      (m) => m.item,
    );
  }, [query, cidadesOrdenadas, cidades]);

  const selecionada: CidadeAtendimento | null = useMemo(
    () => cidades.find((c) => c.id === selectedId) ?? null,
    [selectedId, cidades],
  );

  const selecionarCidade = useCallback((id: string) => setSelectedId(id), []);

  const buscarMaisProximo = useCallback(
    (origem: { lat: number; lng: number }) => {
      let best: CidadeAtendimento | null = null;
      let bestDist = Infinity;
      for (const c of cidades) {
        const d = haversineKm(origem, { lat: c.lat, lng: c.lng });
        if (d < bestDist) {
          bestDist = d;
          best = c;
        }
      }
      if (best) setSelectedId(best.id);
      return best;
    },
    [cidades],
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
