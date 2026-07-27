import { useMemo, useState } from "react";
import { EIXOS, REFERENCIAS, type Referencia } from "@/data/portal-cientifico";
import ArtigoCard from "./ArtigoCard";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  onAbrirArtigo: (r: Referencia) => void;
}

const BibliotecaArtigos = ({ onAbrirArtigo }: Props) => {
  const [eixo, setEixo] = useState<string>("Todos");
  const [visiveis, setVisiveis] = useState(9);

  const lista = useMemo(() => {
    const ordem = { alto: 0, medio: 1, base: 2 } as const;
    return REFERENCIAS.filter((r) => eixo === "Todos" || r.eixos.includes(eixo)).sort(
      (a, b) => ordem[a.impacto] - ordem[b.impacto] || b.ano - a.ano,
    );
  }, [eixo]);

  return (
    <section id="biblioteca" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">Biblioteca</p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              A enciclopedia da <span className="pc-underline-amber">agua alcalina</span>
            </h2>
            <p className="mt-4 text-[hsl(var(--pc-ink-soft))]">
              Estudos originais, revisoes, documentos da OMS e verbetes enciclopedicos, todos com resumo em portugues
              escrito para leigos e para profissionais de saude.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {["Todos", ...EIXOS].map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => {
                setEixo(e);
                setVisiveis(9);
              }}
              aria-pressed={eixo === e}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                eixo === e
                  ? "bg-[hsl(var(--pc-blue))] text-[hsl(var(--pc-paper))]"
                  : "border border-[hsl(var(--pc-line))] bg-white/70 text-[hsl(var(--pc-ink-soft))] hover:border-[hsl(var(--pc-cyan))]"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lista.slice(0, visiveis).map((r, i) => (
            <ScrollReveal key={r.id} delay={(i % 3) * 90}>
              <ArtigoCard referencia={r} onAbrir={onAbrirArtigo} destaque={r.impacto === "alto"} />
            </ScrollReveal>
          ))}
        </div>

        {visiveis < lista.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisiveis((v) => v + 9)}
              className="rounded-full border border-[hsl(var(--pc-blue))] px-8 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-[hsl(var(--pc-blue))] hover:text-[hsl(var(--pc-paper))]"
            >
              Carregar mais referencias ({lista.length - visiveis})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BibliotecaArtigos;
