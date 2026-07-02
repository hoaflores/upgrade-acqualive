import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, LocateFixed, MapPin, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fuzzySearch } from "@/utils/fuzzySearch";
import type { CidadeAtendimento } from "@/types/mapa";

export const REPRESENTANTE_WHATSAPP_URL =
  "https://wa.me/555192928468?text=Ol%C3%A1!%20Quero%20ser%20um%20representante%20Acqualive%20Solo%20na%20minha%20cidade.";


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
  const [focused, setFocused] = useState(false);
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

      {/* Glow anel quando focado */}
      <div
        aria-hidden
        className={cn(
          "absolute -inset-px rounded-[20px] transition-opacity duration-500 pointer-events-none",
          focused ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, hsl(215 62% 55% / 0.35), transparent 70%)",
          filter: "blur(14px)",
        }}
      />

      <div
        className={cn(
          "relative rounded-2xl bg-white/80 backdrop-blur-xl border transition-all duration-300",
          focused
            ? "border-primary/40 shadow-[0_20px_60px_-24px_hsl(var(--primary)/_0.45),0_1px_0_hsl(0_0%_100%)_inset]"
            : "border-border shadow-[0_10px_40px_-24px_hsl(var(--primary)/_0.25),0_1px_0_hsl(0_0%_100%)_inset]",
        )}
      >
        <Search
          className={cn(
            "absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors",
            focused ? "text-primary" : "text-muted-foreground",
          )}
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
          onFocus={() => {
            setOpen(true);
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          onKeyDown={onKeyDown}
          placeholder="Digite sua cidade  ·  Curitiba, Belém, São Paulo…"
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls="lista-sugestoes"
          aria-autocomplete="list"
          className="w-full h-16 pl-14 pr-40 bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none rounded-2xl"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <AnimatePresence>
            {query && (
              <motion.button
                key="clear"
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onQueryChange("")}
                aria-label="Limpar busca"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.button
            type="button"
            onClick={onGeolocalizar}
            disabled={geoLoading}
            whileTap={{ scale: 0.97 }}
            aria-label="Usar minha localização"
            className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-primary/8 text-primary text-xs font-semibold border border-primary/10 hover:bg-primary/12 hover:border-primary/25 transition-colors disabled:opacity-60"
          >
            {geoLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <LocateFixed className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Minha localização</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && query.trim() && (
          <motion.ul
            id="lista-sugestoes"
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 left-0 right-0 mt-3 max-h-80 overflow-y-auto rounded-2xl border border-border/60 bg-white/95 backdrop-blur-xl shadow-[0_30px_70px_-30px_hsl(var(--primary)/_0.4)] p-1.5"
          >
            {sugestoes.length === 0 ? (
              <li className="px-4 py-5 text-sm text-muted-foreground text-center">
                Nenhuma cidade corresponde. Tente outro nome ou use a sua
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
                      "w-full text-left px-3.5 py-3 flex items-center justify-between gap-3 rounded-xl transition-all",
                      i === activeIdx
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted/50 text-foreground",
                    )}
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors",
                          i === activeIdx
                            ? "bg-primary/15 text-primary"
                            : "bg-muted/50 text-muted-foreground",
                        )}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium truncate">{c.cidade}</span>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground px-1.5 py-0.5 rounded bg-muted/40">
                      {c.estado}
                    </span>
                  </button>
                </li>
              ))
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuscaEspecialista;
