import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, LocateFixed } from "lucide-react";
import { cn } from "@/lib/utils";
import { fuzzySearch } from "@/utils/fuzzySearch";
import type { CidadeAtendimento } from "@/types/mapa";

interface BuscaEspecialistaProps {
  query: string;
  onQueryChange: (v: string) => void;
  cidades: CidadeAtendimento[];
  onSelect: (id: string) => void;
  onGeolocalizar: () => void;
  geoLoading?: boolean;
}

const BuscaEspecialista = ({
  query,
  onQueryChange,
  cidades,
  onSelect,
  onGeolocalizar,
  geoLoading,
}: BuscaEspecialistaProps) => {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const sugestoes = query.trim()
    ? fuzzySearch(query, cidades, (c) => `${c.cidade} ${c.estado}`)
        .slice(0, 8)
        .map((m) => m.item)
    : [];

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => setActiveIdx(0), [query]);

  const handleSelect = (id: string) => {
    onSelect(id);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, sugestoes.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && sugestoes[activeIdx]) {
      e.preventDefault();
      handleSelect(sugestoes[activeIdx].id);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative w-full">
      <label htmlFor="busca-cidade" className="sr-only">
        Buscar cidade
      </label>
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
          aria-hidden
        />
        <input
          id="busca-cidade"
          type="text"
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Digite sua cidade (ex: Curitiba, Belém, São Paulo...)"
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls="lista-sugestoes"
          aria-autocomplete="list"
          className="w-full h-14 pl-12 pr-32 rounded-2xl bg-card border border-border shadow-soft text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-shadow"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Limpar busca"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onGeolocalizar}
            disabled={geoLoading}
            aria-label="Usar minha localização"
            className="inline-flex items-center gap-1.5 h-10 px-3 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/15 transition-colors disabled:opacity-60"
          >
            {geoLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <LocateFixed className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Minha localização</span>
          </button>
        </div>
      </div>

      {open && query.trim() && (
        <ul
          id="lista-sugestoes"
          role="listbox"
          className="absolute z-30 left-0 right-0 mt-2 max-h-80 overflow-y-auto rounded-xl border border-border bg-popover shadow-elevated"
        >
          {sugestoes.length === 0 ? (
            <li className="px-4 py-4 text-sm text-muted-foreground">
              Nenhuma cidade encontrada. Tente outro nome ou use a sua
              localização.
            </li>
          ) : (
            sugestoes.map((c, i) => (
              <li key={c.id} role="option" aria-selected={i === activeIdx}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => handleSelect(c.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 flex items-center justify-between gap-3 transition-colors",
                    i === activeIdx
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/40 text-foreground",
                  )}
                >
                  <span className="font-medium">{c.cidade}</span>
                  <span className="text-xs text-muted-foreground font-semibold">
                    {c.estado}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default BuscaEspecialista;
