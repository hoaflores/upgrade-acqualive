import { useState } from "react";
import { Scale, RotateCcw } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type Carta = {
  id: string;
  mito: string;
  fato: string;
};

const CARTAS: Carta[] = [
  {
    id: "1",
    mito: "Toda água é igual, o que importa é só beber bastante.",
    fato:
      "Volume é apenas metade da história. pH, mineralização, presença de cloro e de microplásticos mudam o que entra no corpo junto com a água.",
  },
  {
    id: "2",
    mito: "O estômago é ácido, então água alcalina é neutralizada e não serve para nada.",
    fato:
      "O efeito estudado não é alcalinizar o estômago, e sim reduzir a carga ácida metabólica (PRAL) e inativar a pepsina em pH próximo de 8,8.",
  },
  {
    id: "3",
    mito: "Água mineral em garrafa PET é a opção mais segura.",
    fato:
      "Análises encontraram centenas de milhares de partículas de plástico por litro em águas engarrafadas, além de variação grande de pH e minerais.",
  },
  {
    id: "4",
    mito: "Filtrar a água tira os minerais e deixa a água pobre.",
    fato:
      "Isso vale para osmose reversa e destilação. Tecnologias de mineralização fazem o contrário: retiram contaminantes e devolvem cálcio, magnésio e potássio.",
  },
  {
    id: "5",
    mito: "Cloro na água de torneira não faz mal, ele evapora.",
    fato:
      "Parte evapora, mas subprodutos da desinfecção como trihalometanos permanecem dissolvidos e são monitorados por órgãos de saúde pública.",
  },
  {
    id: "6",
    mito: "Só quem treina pesado precisa se preocupar com hidratação.",
    fato:
      "Perdas de 1% a 2% do peso corporal em água já afetam atenção, humor e disposição em pessoas sedentárias, dentro de casa e no trabalho.",
  },
];

const MitosFatos = () => {
  const [abertas, setAbertas] = useState<string[]>([]);

  const alternar = (id: string) =>
    setAbertas((a) => (a.includes(id) ? a.filter((i) => i !== id) : [...a, id]));

  return (
    <section id="mitos" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-cyan)/0.45)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
              <Scale className="h-3.5 w-3.5" aria-hidden />
              Vire a carta
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">Mito ou evidência?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
              Clique em cada carta para ver o que a ciência responde para as frases que mais circulam sobre água.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {CARTAS.map((c, i) => {
            const aberta = abertas.includes(c.id);
            return (
              <ScrollReveal key={c.id} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => alternar(c.id)}
                  aria-pressed={aberta}
                  className="pc-flip group h-full min-h-[250px] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--pc-blue))] focus-visible:ring-offset-2"
                >
                  <div className={`pc-flip-inner ${aberta ? "is-flipped" : ""}`}>
                    <div className="pc-flip-face pc-card flex flex-col justify-between rounded-3xl p-6">
                      <span className="inline-flex w-fit rounded-full bg-[hsl(var(--pc-amber)/0.16)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--pc-amber))]">
                        Mito
                      </span>
                      <p className="mt-5 font-display text-lg font-semibold leading-snug">{c.mito}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--pc-blue))]">
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                        Ver o que diz a ciência
                      </span>
                    </div>
                    <div className="pc-flip-face pc-flip-back flex flex-col justify-between rounded-3xl border border-[hsl(var(--pc-cyan)/0.5)] bg-[hsl(var(--pc-blue))] p-6 text-[hsl(var(--pc-paper))]">
                      <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                        Evidência
                      </span>
                      <p className="mt-5 text-sm leading-relaxed text-white/90">{c.fato}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                        Voltar
                      </span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MitosFatos;
