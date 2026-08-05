import { createContext, useContext, useMemo, useRef } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { REGEX_TERMOS, definiçãoDe } from "./glossario";

/** Guarda quais termos já foram destacados para não poluir a leitura com repetições. */
const CtxGlossário = createContext<Set<string> | null>(null);

export const ProvedorGlossário = ({ children }: { children: React.ReactNode }) => {
  const vistos = useRef(new Set<string>());
  return <CtxGlossário.Provider value={vistos.current}>{children}</CtxGlossário.Provider>;
};

const TermoGlossário = ({ termo, definição }: { termo: string; definição: string }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        type="button"
        className="cursor-help rounded-sm border-b border-dashed border-[hsl(var(--pc-cyan))] font-medium text-[hsl(var(--pc-blue))] transition hover:bg-[hsl(var(--pc-cyan)/0.12)]"
        aria-label={`Ver definição de ${termo}`}
      >
        {termo}
      </button>
    </PopoverTrigger>
    <PopoverContent
      align="start"
      className="portal-theme w-80 border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper))] text-left"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">Glossário</p>
      <p className="mt-2 font-display text-base font-bold text-[hsl(var(--pc-ink))]">{termo}</p>
      <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{definição}</p>
    </PopoverContent>
  </Popover>
);

/** Texto corrido com termos técnicos clicáveis na primeira aparição. */
const TextoGlossario = ({ texto }: { texto: string }) => {
  const vistos = useContext(CtxGlossário);

  const partes = useMemo(() => {
    if (!vistos) return [texto];
    const pedaços = texto.split(REGEX_TERMOS);
    return pedaços.map((p, i) => {
      const def = definiçãoDe(p);
      const chave = p.toLowerCase();
      if (!def || vistos.has(chave)) return p;
      vistos.add(chave);
      return <TermoGlossário key={`${chave}-${i}`} termo={p} definição={def} />;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  return <p>{partes}</p>;
};

export default TextoGlossario;
