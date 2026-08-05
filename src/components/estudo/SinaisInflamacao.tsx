import { useState } from "react";
import { AlertTriangle, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const SINAIS = [
  { id: "inchaco", titulo: "Corpo inchado", texto: "A sensação de peso e o inchaço nem sempre são ganho de gordura, muitas vezes acompanham processos inflamatórios." },
  { id: "cansaco", titulo: "Cansaço constante", texto: "Quando o organismo gasta energia lidando com inflamação, sobra menos disposição para o dia." },
  { id: "digestao", titulo: "Digestão pesada", texto: "Queimação, azia e desconforto após as refeições estão entre as queixas mais associadas à mucosa gástrica irritada." },
  { id: "humor", titulo: "Oscilação de humor", texto: "Estresse crônico e inflamação caminham juntos e afetam sono, foco e paciência." },
  { id: "dores", titulo: "Dores recorrentes", texto: "Dores articulares e musculares sem causa aparente costumam aparecer nesse cenário." },
  { id: "imunidade", titulo: "Recuperação lenta", texto: "Demorar para se recuperar de gripes e infecções simples sugere um sistema imunológico sobrecarregado." },
];

const leitura = (n: number) => {
  if (n === 0) return "Nenhum sinal marcado. Ainda assim, vale entender como a qualidade da água participa do equilíbrio ácido-base do organismo.";
  if (n <= 2) return "Poucos sinais marcados. Vale observar a rotina e conversar com um profissional de saúde antes que o quadro se instale.";
  if (n <= 4) return "Vários sinais marcados. Esse é justamente o perfil de queixas que motivou a investigação conduzida na Universidade Federal do Pará.";
  return "Muitos sinais marcados. Procure avaliação profissional. A leitura deste dossiê ajuda a entender um dos fatores envolvidos: a água que você bebe todos os dias.";
};

/**
 * Autoavaliação dos sinais de inflamação silenciosa.
 * Serve como ponte entre a experiência do leitor e o problema estudado.
 */
const SinaisInflamacao = () => {
  const [marcados, setMarcados] = useState<string[]>([]);
  const alternar = (id: string) =>
    setMarcados((atual) => (atual.includes(id) ? atual.filter((i) => i !== id) : [...atual, id]));

  return (
    <section id="sinais" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-amber)/0.5)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-amber))]">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
              Antes de continuar
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">
              A inflamação silenciosa não dói de imediato
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              Ela avança devagar, misturada à rotina. Marque os sinais que você reconhece em você e veja onde a
              pesquisa desta publicação toca a sua vida.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {SINAIS.map((s) => {
            const ativo = marcados.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => alternar(s.id)}
                aria-pressed={ativo}
                className={`rounded-2xl border p-5 text-left transition ${
                  ativo
                    ? "border-[hsl(var(--pc-blue))] bg-[hsl(var(--pc-blue)/0.06)]"
                    : "border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] hover:border-[hsl(var(--pc-cyan))]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      ativo
                        ? "border-transparent bg-[hsl(var(--pc-blue))] text-[hsl(var(--pc-paper))]"
                        : "border-[hsl(var(--pc-line))]"
                    }`}
                  >
                    {ativo && <Check className="h-3.5 w-3.5" aria-hidden />}
                  </span>
                  <span className="font-display text-base font-semibold">{s.titulo}</span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{s.texto}</span>
              </button>
            );
          })}
        </div>

        <div className="pc-card mx-auto mt-8 max-w-4xl rounded-2xl p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
            {marcados.length} de {SINAIS.length} sinais marcados
          </p>
          <p key={marcados.length} className="pc-fade-in mt-3 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            {leitura(marcados.length)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SinaisInflamacao;
