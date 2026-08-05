import { useState } from "react";
import { Droplets, Sparkles, ShieldCheck, Zap, Activity, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CARACTERÍSTICAS = [
  {
    id: "pura",
    nome: "Pura",
    icone: Droplets,
    texto:
      "Água livre de cloro, metais pesados e microrganismos. Menos sobrecarga para o organismo e mais segurança no consumo diário.",
  },
  {
    id: "alcalina",
    nome: "Alcalina",
    icone: FlaskConical,
    texto:
      "pH acima da neutralidade. É a característica que permitiu estudar o efeito da água sobre a acidez gástrica e sobre a carga ácida da dieta.",
  },
  {
    id: "alcalinizante",
    nome: "Alcalinizante",
    icone: Activity,
    texto:
      "Contribui para o equilíbrio ácido-base do organismo, ajudando a compensar o excesso de ácidos da alimentação moderna.",
  },
  {
    id: "magnesiana",
    nome: "Magnesiana",
    icone: Sparkles,
    texto:
      "Presença de magnésio biodisponível, mineral envolvido no funcionamento de músculos, ossos e sistema cardiovascular.",
  },
  {
    id: "funcional",
    nome: "Funcional",
    icone: Zap,
    texto:
      "Estrutura molecular que favorece a absorção celular, tema recorrente na literatura sobre hidratação profunda.",
  },
  {
    id: "antioxidante",
    nome: "Antioxidante",
    icone: ShieldCheck,
    texto:
      "Potencial de oxirredução negativo, associado à neutralização de radicais livres ligados ao envelhecimento celular.",
  },
];

const REVOLUÇÕES = [
  {
    titulo: "Modulação da inflamação",
    texto:
      "A pesquisa observou mudanças na expressão de microRNAs relacionados a processos inflamatórios, sugerindo que a água consumida participa dessa sinalização.",
  },
  {
    titulo: "Resposta imunológica",
    texto:
      "Os microRNAs analisados também estão envolvidos na regulação da resposta imune, o que abre uma agenda de pesquisa para além do estômago.",
  },
  {
    titulo: "Hidratação celular",
    texto:
      "A composição mineral e a ionização influenciam a forma como a água é absorvida pelas células, tema documentado no protocolo do estudo.",
  },
  {
    titulo: "Equilíbrio metabólico",
    texto:
      "Uma dieta com carga ácida elevada exige compensação constante do organismo. A água alcalina mineralizada entra nessa conta do lado oposto.",
  },
];

/** Explica a tecnologia estudada e os eixos de efeito observados, de forma navegável. */
const TecnologiaTriWay = () => {
  const [ativa, setAtiva] = useState(CARACTERÍSTICAS[0].id);
  const atual = CARACTERÍSTICAS.find((c) => c.id === ativa) ?? CARACTERÍSTICAS[0];
  const Icone = atual.icone;

  return (
    <section id="tecnologia" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
              A água utilizada na pesquisa
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Seis características que precisavam ser descritas
            </h2>
            <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              A tecnologia TriWay filtra, mineraliza e ioniza em três etapas. Para a ciência, cada uma dessas
              propriedades é uma variável que precisa constar no protocolo. Toque em cada característica para entender
              o que ela significa.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {CARACTERÍSTICAS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setAtiva(c.id)}
                aria-pressed={c.id === ativa}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  c.id === ativa
                    ? "border-transparent bg-[hsl(var(--pc-blue))] text-[hsl(var(--pc-paper))]"
                    : "border-[hsl(var(--pc-line))] text-[hsl(var(--pc-ink-soft))] hover:border-[hsl(var(--pc-cyan))] hover:text-[hsl(var(--pc-blue))]"
                }`}
              >
                {c.nome}
              </button>
            ))}
          </div>

          <div key={atual.id} className="pc-card pc-fade-in mt-6 rounded-2xl p-7">
            <Icone className="h-6 w-6 text-[hsl(var(--pc-cyan))]" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-bold">{atual.nome}</h3>
            <p className="mt-3 leading-relaxed text-[hsl(var(--pc-ink-soft))]">{atual.texto}</p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <ScrollReveal>
            <h3 className="text-center font-display text-2xl font-bold">Quatro frentes observadas pela pesquisa</h3>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {REVOLUÇÕES.map((r, i) => (
              <ScrollReveal key={r.titulo} delay={i * 80}>
                <div className="pc-card h-full rounded-2xl p-6">
                  <p className="pc-tabnum font-display text-3xl font-bold text-[hsl(var(--pc-cyan))]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 font-display text-lg font-bold">{r.titulo}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.texto}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologiaTriWay;
