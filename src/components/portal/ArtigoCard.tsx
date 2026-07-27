import { ArrowUpRight, FileText } from "lucide-react";
import { IMPACTO_LABEL, TIPO_LABEL, IDIOMA_LABEL, type Referencia } from "@/data/portal-cientifico";

interface Props {
  referencia: Referencia;
  onAbrir: (r: Referencia) => void;
  destaque?: boolean;
}

const ArtigoCard = ({ referencia: r, onAbrir, destaque = false }: Props) => (
  <article
    className={`pc-card group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
      destaque ? "ring-1 ring-[hsl(var(--pc-amber)/0.45)]" : ""
    }`}
  >
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

    <h3 className="font-display text-lg font-semibold leading-snug text-[hsl(var(--pc-ink))]">{r.titulo}</h3>
    <p className="mt-2 text-xs text-[hsl(var(--pc-ink-soft))]">
      {r.autores} · {r.fonte} · {r.ano}
    </p>
    <p className="mt-4 line-clamp-4 flex-1 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.resumo}</p>

    <div className="mt-5 flex flex-wrap gap-1.5">
      {r.eixos.map((e) => (
        <span
          key={e}
          className="rounded-full bg-[hsl(var(--pc-paper-2))] px-2.5 py-1 text-[11px] text-[hsl(var(--pc-blue))]"
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
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </button>
  </article>
);

export default ArtigoCard;
