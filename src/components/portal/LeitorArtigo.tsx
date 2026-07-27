import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, BookOpenCheck, Quote } from "lucide-react";
import {
  IDIOMA_LABEL,
  IMPACTO_LABEL,
  TIPO_LABEL,
  type Referencia,
} from "@/data/portal-cientifico";
import { abrirFonteExterna } from "./portalUtils";

interface Props {
  referencia: Referencia | null;
  onOpenChange: (open: boolean) => void;
}

const LeitorArtigo = ({ referencia, onOpenChange }: Props) => {
  if (!referencia) return null;
  const r = referencia;
  const citacao = `${r.autores} (${r.ano}). ${r.tituloOriginal ?? r.titulo}. ${r.fonte}.`;

  return (
    <Dialog open={!!r} onOpenChange={onOpenChange}>
      <DialogContent className="portal-theme max-w-3xl max-h-[88vh] overflow-y-auto border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper))] p-0">
        <div className="pc-radial px-6 pt-8 pb-6 md:px-9">
          <DialogHeader className="space-y-3 text-left">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="rounded-full bg-[hsl(var(--pc-blue))] px-3 py-1 text-[hsl(var(--pc-paper))]">
                {IMPACTO_LABEL[r.impacto]}
              </span>
              <span className="rounded-full border border-[hsl(var(--pc-line))] px-3 py-1 text-[hsl(var(--pc-ink-soft))]">
                {TIPO_LABEL[r.tipo]}
              </span>
              <span className="rounded-full border border-[hsl(var(--pc-line))] px-3 py-1 text-[hsl(var(--pc-ink-soft))]">
                {IDIOMA_LABEL[r.idioma]}
              </span>
            </div>
            <DialogTitle className="font-display text-2xl leading-snug text-[hsl(var(--pc-ink))] md:text-3xl">
              {r.titulo}
            </DialogTitle>
            <p className="text-sm text-[hsl(var(--pc-ink-soft))]">
              {r.autores} · {r.fonte} · {r.ano}
            </p>
          </DialogHeader>
        </div>

        <div className="space-y-8 px-6 pb-9 md:px-9">
          <section>
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <BookOpenCheck className="h-5 w-5 text-[hsl(var(--pc-cyan))]" aria-hidden />
              Resumo em portugues
            </h3>
            <p className="text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.resumo}</p>
          </section>

          <section>
            <h3 className="mb-3 font-display text-lg font-semibold">Pontos-chave</h3>
            <ul className="space-y-2">
              {r.pontos.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-[hsl(var(--pc-ink-soft))]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--pc-amber))]" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] p-5">
            <h3 className="mb-2 font-display text-base font-semibold">Por que isso importa na pratica</h3>
            <p className="text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.aplicacao}</p>
          </section>

          <section>
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold">
              <Quote className="h-4 w-4 text-[hsl(var(--pc-cyan))]" aria-hidden />
              Como citar
            </h3>
            <p className="rounded-xl border border-dashed border-[hsl(var(--pc-line))] p-4 font-mono text-xs leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              {citacao}
            </p>
          </section>

          <button
            type="button"
            onClick={() => abrirFonteExterna(r.url)}
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-6 py-3 text-sm font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
          >
            Abrir fonte original
            <ExternalLink className="h-4 w-4" aria-hidden />
          </button>
          <p className="-mt-4 text-xs text-[hsl(var(--pc-ink-soft))]">
            {r.acessoAberto ? "Acesso aberto." : "Resumo publico; texto completo pode exigir assinatura."} A fonte abre em
            janela separada para voce nao perder a leitura.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeitorArtigo;
