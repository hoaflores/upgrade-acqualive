import { BookMarked, Clock, Layers, User, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { CAPÍTULOS } from "@/data/estudo-juliana";

const palavras = CAPÍTULOS.reduce(
  (total, c) =>
    total +
    c.blocos.reduce(
      (t, b) => t + ("texto" in b ? b.texto.split(/\s+/).length : b.itens.join(" ").split(/\s+/).length),
      0,
    ),
  0,
);

const minutos = Math.max(1, Math.round(palavras / 200));

const FICHA = [
  { icone: User, rótulo: "Pesquisa", valor: "Dra. Juliana Chaves, UFPA" },
  { icone: Layers, rótulo: "Capítulos", valor: `${CAPÍTULOS.length} capítulos ilustrados` },
  { icone: Clock, rótulo: "Leitura completa", valor: `${minutos} minutos` },
  { icone: FileText, rótulo: "Formato", valor: "Leitura interativa e PDF" },
];

/**
 * Ficha de abertura do ebook. Dá ao leitor a sensação de estar abrindo
 * uma publicação, com dados editoriais e orientação de leitura.
 */
const FichaEbook = () => (
  <section className="border-b border-[hsl(var(--pc-line))] py-14 md:py-20">
    <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <ScrollReveal>
        <div className="relative">
          <div className="pc-card relative overflow-hidden rounded-2xl border-l-[10px] border-l-[hsl(var(--pc-blue))] p-8 shadow-[0_40px_70px_-50px_hsl(var(--pc-blue))]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--pc-amber))]">
              Edição 01
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
              Água alcalina ionizada, inflamação e expressão genética
            </h2>
            <p className="mt-3 text-sm text-[hsl(var(--pc-ink-soft))]">
              Dossiê científico Acqualive, baseado na pesquisa conduzida na Universidade Federal do Pará.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-[hsl(var(--pc-line))] pt-6">
              <BookMarked className="h-5 w-5 text-[hsl(var(--pc-blue))]" aria-hidden />
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--pc-ink-soft))]">
                Publicação educativa
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
            Ficha do ebook
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Como usar este material</h3>
          <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            Leia do começo ao fim para acompanhar a investigação como uma história, ou use o índice lateral para ir
            direto ao capítulo que interessa. Termos técnicos sublinhados abrem explicações ao toque, e os módulos
            interativos permitem testar na prática o que o texto acabou de explicar.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {FICHA.map(({ icone: Icone, rótulo, valor }) => (
              <div key={rótulo} className="pc-card rounded-2xl p-5">
                <Icone className="h-5 w-5 text-[hsl(var(--pc-cyan))]" aria-hidden />
                <dt className="mt-3 text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">{rótulo}</dt>
                <dd className="mt-1 text-sm font-semibold">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FichaEbook;
