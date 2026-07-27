import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import { PERGUNTAS_GUIA, REFERÊNCIAS, type Referência } from "@/data/portal-cientifico";

interface Props {
  onAbrirArtigo: (r: Referência) => void;
}

const PerguntasGuia = ({ onAbrirArtigo }: Props) => (
  <section id="perguntas" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] py-20 md:py-28">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
            Perguntas frequentes com referência
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            As dúvidas mais comuns, <span className="pc-underline-amber">respondidas pela ciência</span>
          </h2>
        </div>
      </ScrollReveal>

      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {PERGUNTAS_GUIA.map((g, i) => (
          <AccordionItem
            key={g.pergunta}
            value={`q-${i}`}
            className="pc-card rounded-2xl border px-5"
          >
            <AccordionTrigger className="text-left font-display font-semibold hover:text-[hsl(var(--pc-blue))]">
              {g.pergunta}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              {g.resposta}
              <ul className="mt-4 space-y-1.5">
                {g.refs
                  .map((id) => REFERÊNCIAS.find((r) => r.id === id))
                  .filter((r): r is Referência => !!r)
                  .map((r) => (
                    <li key={r.id}>
                      <button
                        type="button"
                        onClick={() => onAbrirArtigo(r)}
                        className="text-left text-sm font-semibold text-[hsl(var(--pc-blue))] underline-offset-4 hover:underline"
                      >
                        {r.autores} ({r.ano}) · {r.titulo}
                      </button>
                    </li>
                  ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default PerguntasGuia;
