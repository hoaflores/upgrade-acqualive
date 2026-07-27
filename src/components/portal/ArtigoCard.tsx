import { ArrowUpRight, FileText } from "lucide-react";
import { IMPACTO_LABEL, TIPO_LABEL, IDIOMA_LABEL, type Referência } from "@/data/portal-cientifico";

interface Props {
  referência: Referência;
  onAbrir: (r: Referência) => void;
  destaque?: boolean;
}

const ArtigoCard = ({ referência: r, onAbrir, destaque = false }: Props) => (
  <article
    className={`pc-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 hover:-translate-y-1.5 ${
      destaque ? "ring-1 ring-[hsl(var(--pc-amber)/0.45)]" : ""
    }`}
  >
    <span
      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--pc-blue))] via-[hsl(var(--pc-cyan))] to-[hsl(var(--pc-amber))] transition-transform duration-500 group-hover:scale-x-100"
      aria-hidden
    />
    <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
      <span
        className={`rounded-full px-2.5 py-1 ${
          r.impacto === "alto"
            ? "bg-[hsl(var(--pc-amber))] text-[hsl(var(--pc-paper))]"
            : "border border-[hsl(var(--pc-line))] text-[hsl(var(--pc-ink-soft))]"
        }`}
      >
        {IMPACTO_LABEL[r.impacto]}
      </span>
      <span className="text-[hsl(var(--pc-ink-soft))]">{TIPO_LABEL[r.tipo]}</span>
      <span className="text-[hsl(var(--pc-ink-soft))]">· {IDIOMA_LABEL[r.idioma]}</span>
    </div>

    <h3 className="font-display text-lg font-semibold leading-snug text-[hsl(var(--pc-ink))] transition-colors group-hover:text-[hsl(var(--pc-blue))]">
      {r.titulo}
    </h3>
    <p className="mt-2 text-xs text-[hsl(var(--pc-ink-soft))]">
      {r.autores} · {r.fonte} · <span className="pc-tabnum">{r.ano}</span>
    </p>
    <p className="mt-4 line-clamp-4 flex-1 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.resumo}</p>

    <div className="mt-5 flex flex-wrap gap-1.5">
      {r.eixos.map((e) => (
        <span
          key={e}
          className="rounded-full bg-[hsl(var(--pc-paper-2))] px-2.5 py-1 text-[11px] text-[hsl(var(--pc-blue))] transition group-hover:bg-[hsl(var(--pc-cyan)/0.14)]"
        >
          {e}
        </span>
      ))}
    </div>

    <button
      type="button"
      onClick={() => onAbrir(r)}
      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-[hsl(var(--pc-blue))] transition group-hover:gap-3"
    >
      <FileText className="h-4 w-4" aria-hidden />
      Ler resumo completo
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </button>
  </article>
);

export default ArtigoCard;
