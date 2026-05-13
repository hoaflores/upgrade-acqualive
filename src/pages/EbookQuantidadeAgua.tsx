import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Download, Loader2, Check, ChevronLeft, ChevronRight, Droplet } from "lucide-react";

/* =====================================================================
 * E-BOOK: Como beber mais água sem sofrer
 * Identidade visual: azul profundo + laranja, tipografia grunge.
 * Interatividade: checklists com estado, carrossel de receitas, plano
 * pessoal editável, barra de progresso. Tudo "print:hidden" some no PDF
 * e versões estáticas aparecem para quem imprime.
 * ===================================================================== */

const NAVY = "#1f3d8c";
const ORANGE = "#e85d2f";

const SITE = "https://www.acqualive.com.br";
const PORQUE = "https://www.acqualive.com.br/pages/porque-acqualive";

/* ---------- Helpers visuais ---------- */
const BrushTitle = ({
  number,
  title,
  italic,
}: {
  number?: string;
  title: string;
  italic?: string;
}) => (
  <div className="relative my-10 print:my-6">
    <div
      className="relative inline-block px-8 py-6"
      style={{
        background: NAVY,
        clipPath:
          "polygon(2% 8%, 8% 2%, 18% 6%, 30% 0%, 45% 5%, 58% 1%, 72% 7%, 85% 2%, 96% 6%, 100% 18%, 98% 30%, 100% 45%, 96% 60%, 100% 72%, 95% 85%, 99% 95%, 88% 98%, 72% 96%, 58% 100%, 45% 96%, 30% 100%, 18% 95%, 5% 98%, 1% 88%, 4% 72%, 0% 58%, 3% 42%, 0% 28%, 5% 15%)",
      }}
    >
      {number && (
        <div
          className="font-display text-white/95 text-3xl md:text-5xl leading-none mb-1"
          style={{ fontFamily: "'Rubik Distressed', system-ui" }}
        >
          {number}
        </div>
      )}
      <h2
        className="text-white text-3xl md:text-5xl uppercase leading-tight tracking-wide"
        style={{ fontFamily: "'Rubik Distressed', system-ui" }}
      >
        {title}
      </h2>
      {italic && (
        <div
          className="text-2xl md:text-4xl mt-1"
          style={{ fontFamily: "'Sacramento', cursive", color: ORANGE }}
        >
          {italic}
        </div>
      )}
    </div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="uppercase text-2xl md:text-3xl tracking-wider mb-4"
    style={{ fontFamily: "'Rubik Distressed', system-ui", color: ORANGE }}
  >
    {children}
  </h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[17px] leading-relaxed mb-4 text-[#102347]">{children}</p>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-2xl md:text-3xl my-6 leading-snug"
    style={{ fontFamily: "'Sacramento', cursive", color: NAVY }}
  >
    {children}
  </p>
);

const Page = ({
  children,
  bg = "white",
  className = "",
}: {
  children: React.ReactNode;
  bg?: "white" | "navy" | "soft";
  className?: string;
}) => {
  const styles =
    bg === "navy"
      ? { background: NAVY, color: "white" }
      : bg === "soft"
      ? { background: "#f5f7fb" }
      : { background: "white" };
  return (
    <section
      style={styles}
      className={`relative w-full px-6 md:px-16 py-16 md:py-24 print:py-10 print:px-10 print:break-after-page overflow-hidden ${className}`}
    >
      <div className="max-w-4xl mx-auto relative">{children}</div>
    </section>
  );
};

const Footer = () => (
  <div className="mt-16 pt-6 border-t border-[#cfd6e7] text-sm text-[#1f3d8c]/70 flex items-center justify-between print:mt-8">
    <div>
      <strong style={{ color: NAVY, fontFamily: "'Bowlby One', system-ui" }}>
        ACQUALIVE
      </strong>
      <span className="ml-2">Água de qualidade para uma rotina mais leve.</span>
    </div>
    <Droplet className="w-4 h-4" style={{ color: ORANGE }} />
  </div>
);

/* ---------- Reveal ao rolar ---------- */
const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out print:!opacity-100 print:!translate-y-0"
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------- Checklist interativo ---------- */
const InteractiveCheck = ({
  id,
  label,
  state,
  setState,
}: {
  id: string;
  label: string;
  state: Record<string, boolean>;
  setState: (s: Record<string, boolean>) => void;
}) => {
  const checked = !!state[id];
  return (
    <button
      onClick={() => setState({ ...state, [id]: !checked })}
      className="group flex items-start gap-3 w-full text-left py-2 print:py-1"
    >
      <span
        className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
          checked ? "scale-105" : ""
        }`}
        style={{
          borderColor: NAVY,
          background: checked ? NAVY : "transparent",
        }}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white print:hidden" />}
      </span>
      <span
        className="text-[16px] leading-snug"
        style={{ color: NAVY, textDecoration: checked ? "line-through" : "none" }}
      >
        {label}
      </span>
    </button>
  );
};

/* ---------- Input do plano pessoal ---------- */
const PlanInput = ({
  label,
  id,
  state,
  setState,
}: {
  label: string;
  id: string;
  state: Record<string, string>;
  setState: (s: Record<string, string>) => void;
}) => (
  <div className="mb-4">
    <label className="block text-sm uppercase tracking-wider mb-1" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
      {label}
    </label>
    <input
      type="text"
      value={state[id] || ""}
      onChange={(e) => setState({ ...state, [id]: e.target.value })}
      className="w-full bg-transparent border-b-2 py-2 text-lg focus:outline-none transition-colors print:border-b print:border-[#1f3d8c]"
      style={{ borderColor: NAVY, color: NAVY }}
      placeholder="Escreva aqui..."
    />
  </div>
);

/* ---------- Receitas (carrossel + grid no PDF) ---------- */
type Receita = {
  n: number;
  nome: string;
  ingredientes: string[];
  momento: string;
  dica: string;
  emoji: string;
};

const RECEITAS: Receita[] = [
  {
    n: 1,
    nome: "Limão + hortelã",
    ingredientes: ["3 rodelas de limão", "Folhas de hortelã", "Água fresquinha"],
    momento: "Pela manhã ou em dias mais quentes.",
    dica: "Amasse levemente a hortelã com as mãos para liberar mais aroma.",
    emoji: "🍋",
  },
  {
    n: 2,
    nome: "Morango + manjericão",
    ingredientes: ["2 morangos fatiados", "Folhas de manjericão", "Água fresquinha"],
    momento: "Durante a tarde ou em momentos de pausa.",
    dica: "Quanto mais madura a fruta, mais sabor ela libera naturalmente.",
    emoji: "🍓",
  },
  {
    n: 3,
    nome: "Abacaxi + gengibre",
    ingredientes: ["Cubos de abacaxi", "1 fatia fina de gengibre", "Água fresquinha"],
    momento: "Depois das refeições ou em dias mais quentes.",
    dica: "Use pouco gengibre no começo para o sabor não ficar forte demais.",
    emoji: "🍍",
  },
  {
    n: 4,
    nome: "Pepino + limão",
    ingredientes: ["Fatias finas de pepino", "Rodelas de limão", "Água fresquinha"],
    momento: "Ao longo do dia inteiro.",
    dica: "Deixe na geladeira para o sabor ficar mais suave e refrescante.",
    emoji: "🥒",
  },
  {
    n: 5,
    nome: "Laranja + canela em pau",
    ingredientes: ["Rodelas de laranja", "1 pedaço pequeno de canela em pau", "Água natural ou fresquinha"],
    momento: "Fim da tarde ou dias mais frios.",
    dica: "A canela libera sabor aos poucos. Quanto mais tempo descansar, mais intenso fica o aroma.",
    emoji: "🍊",
  },
  {
    n: 6,
    nome: "Maçã verde + hortelã",
    ingredientes: ["Fatias finas de maçã verde", "Folhas de hortelã", "Água fresquinha"],
    momento: "Durante o trabalho ou estudo.",
    dica: "A maçã verde costuma deixar a água mais refrescante do que maçãs doces.",
    emoji: "🍏",
  },
  {
    n: 7,
    nome: "Melancia + hortelã",
    ingredientes: ["Cubos de melancia", "Folhas de hortelã", "Água fresquinha"],
    momento: "Tarde quente ou após atividade leve.",
    dica: "Use pouca polpa para manter a leveza da bebida.",
    emoji: "🍉",
  },
  {
    n: 8,
    nome: "Uva roxa + limão siciliano",
    ingredientes: ["Uvas roxas amassadas", "Rodelas de limão siciliano", "Água fresquinha"],
    momento: "Fim da tarde, em momento de pausa.",
    dica: "As uvas liberam doçura natural sem precisar de açúcar.",
    emoji: "🍇",
  },
  {
    n: 9,
    nome: "Abacaxi + alecrim",
    ingredientes: ["Cubos de abacaxi", "1 raminho de alecrim", "Água fresquinha"],
    momento: "Manhã ou início da tarde.",
    dica: "O alecrim deixa um aroma diferente e marcante.",
    emoji: "🌿",
  },
  {
    n: 10,
    nome: "Frutas vermelhas + limão",
    ingredientes: ["Mix de frutas vermelhas", "Rodelas de limão", "Água fresquinha"],
    momento: "Em qualquer hora do dia.",
    dica: "As frutas, ervas e especiarias ajudam muito na experiência.",
    emoji: "🫐",
  },
];

const ReceitaCard = ({ r }: { r: Receita }) => (
  <div
    className="rounded-2xl p-6 md:p-8 h-full flex flex-col"
    style={{ background: "white", border: `2px solid ${NAVY}` }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
        style={{ background: ORANGE }}
      >
        {r.emoji}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
          Receita {r.n}
        </div>
        <h4
          className="text-2xl md:text-3xl uppercase leading-tight"
          style={{ fontFamily: "'Rubik Distressed', system-ui", color: NAVY }}
        >
          {r.nome}
        </h4>
      </div>
    </div>
    <SectionLabel>Você vai precisar</SectionLabel>
    <ul className="mb-4 space-y-1">
      {r.ingredientes.map((i, k) => (
        <li key={k} className="flex gap-2 text-[15px]" style={{ color: NAVY }}>
          <span style={{ color: ORANGE }}>•</span>
          {i}
        </li>
      ))}
    </ul>
    <div className="mt-auto space-y-3">
      <div>
        <div className="text-xs uppercase tracking-widest" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
          Melhor momento
        </div>
        <p className="text-[15px]" style={{ color: NAVY }}>{r.momento}</p>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
          Dica do chef
        </div>
        <p className="text-[15px]" style={{ color: NAVY }}>{r.dica}</p>
      </div>
    </div>
  </div>
);

const ReceitasCarousel = () => {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % RECEITAS.length);
  const prev = () => setI((i - 1 + RECEITAS.length) % RECEITAS.length);
  return (
    <>
      {/* Carrossel apenas em tela */}
      <div className="print:hidden">
        <div className="relative">
          <div key={i} className="animate-fade-in">
            <ReceitaCard r={RECEITAS[i]} />
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ background: NAVY }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-1.5">
              {RECEITAS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: k === i ? 28 : 10,
                    background: k === i ? ORANGE : "#cfd6e7",
                  }}
                  aria-label={`Receita ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ background: NAVY }}
              aria-label="Próxima"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* No PDF, todas as receitas em grid */}
      <div className="hidden print:grid grid-cols-2 gap-4">
        {RECEITAS.map((r) => (
          <ReceitaCard key={r.n} r={r} />
        ))}
      </div>
    </>
  );
};

/* ---------- Truques ---------- */
const TRUQUES = [
  { n: 1, t: "Comece o dia com água antes de qualquer coisa", d: "Antes do café. Antes do celular. Antes da correria começar. Um copo de água ao acordar é uma das formas mais simples de criar o hábito." },
  { n: 2, t: "Associe água a hábitos que já existem", d: "Depois de escovar os dentes. Antes das refeições. Ao chegar em casa. Seu cérebro aprende por associação e a repetição cria o caminho." },
  { n: 3, t: "Deixe a água no seu campo de visão", d: "Um copo na mesa. Uma garrafa na bolsa. Uma jarra bonita na cozinha. O que está visível, o cérebro escolhe." },
  { n: 4, t: "Use lembretes leves", d: "Poucos alarmes estratégicos. Aplicativos simples. Garrafas com marcações suaves. O objetivo é um empurrão gentil, não cobrança." },
  { n: 5, t: "Crie estações de água pela casa", d: "Garrafa na mesa de trabalho, copo ao lado da cama, jarra na cozinha. Quanto mais pontos, mais oportunidades naturais." },
  { n: 6, t: "Beba água antes de decidir se está com fome", d: "Às vezes o que parece vontade de comer é só sede. Uma pausa simples, um respiro, mais atenção ao corpo." },
  { n: 7, t: "Tenha uma água que você realmente goste de beber", d: "Água fresquinha, leve e agradável muda tudo. Quanto melhor a experiência, mais natural o hábito." },
];

/* ---------- Componente principal ---------- */
export default function EbookQuantidadeAgua() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [plan, setPlan] = useState<Record<string, string>>({});
  const [printing, setPrinting] = useState(false);

  const handleDownload = () => {
    setPrinting(true);
    const style = document.createElement("style");
    style.id = "ebook-print";
    style.textContent = `
      @media print {
        @page { size: A4; margin: 12mm; }
        html, body { background: white !important; }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .no-print, .print\\:hidden { display: none !important; }
        section { page-break-inside: avoid; }
      }
    `;
    document.head.appendChild(style);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        style.remove();
        setPrinting(false);
      }, 600);
    }, 300);
  };

  const totalChecks = Object.values(checks).filter(Boolean).length;

  return (
    <>
      <Helmet>
        <title>Como beber mais água sem sofrer | E-book Acqualive</title>
        <meta
          name="description"
          content="Guia leve e prático para transformar hidratação em hábito. 7 truques, 10 receitas de água saborizada e plano de 21 dias. Presente Acqualive."
        />
        <link rel="canonical" href="https://www.acqualive.com.br/ebook-quantidade-agua" />
      </Helmet>

      <style>{`
        @keyframes float-drop {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        .float-drop { animation: float-drop 5s ease-in-out infinite; }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 10px 30px rgba(232,93,47,0.4); }
          50% { box-shadow: 0 16px 40px rgba(232,93,47,0.65); }
        }
        .pulse-soft { animation: pulse-soft 2.4s ease-in-out infinite; }
      `}</style>

      <div
        className="min-h-screen w-full"
        style={{ fontFamily: "'DM Sans', system-ui", color: NAVY }}
      >
        {/* ============ TOP BAR com botão grande ============ */}
        <header
          className="sticky top-0 z-50 w-full print:hidden border-b-4"
          style={{ background: NAVY, borderColor: ORANGE }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-3 text-white min-w-0">
              <Droplet className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" style={{ color: ORANGE }} />
              <div className="min-w-0">
                <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">
                  E-book Acqualive
                </div>
                <div
                  className="text-sm md:text-xl uppercase leading-tight truncate"
                  style={{ fontFamily: "'Rubik Distressed', system-ui" }}
                >
                  Como beber mais água sem sofrer
                </div>
              </div>
            </div>
            <button
              onClick={handleDownload}
              disabled={printing}
              className="pulse-soft flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold uppercase text-sm md:text-base text-white transition-transform hover:scale-105 active:scale-100 disabled:opacity-60"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, #f7931e)`,
                fontFamily: "'Bowlby One', system-ui",
                letterSpacing: "0.05em",
              }}
            >
              {printing ? (
                <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
              ) : (
                <Download className="w-5 h-5 md:w-6 md:h-6" />
              )}
              <span className="hidden sm:inline">Baixar E-book em PDF</span>
              <span className="sm:hidden">Baixar PDF</span>
            </button>
          </div>
        </header>

        {/* ============ CAPA ============ */}
        <Page bg="navy" className="!py-20 md:!py-32">
          <Reveal>
            <div className="text-center">
              <div
                className="inline-block px-4 py-1 rounded-full mb-8 uppercase text-xs tracking-widest"
                style={{ background: ORANGE, color: "white", fontFamily: "'Bowlby One', system-ui" }}
              >
                Bônus especial Acqualive
              </div>
              <h1
                className="text-white uppercase leading-[0.85]"
                style={{ fontFamily: "'Rubik Distressed', system-ui" }}
              >
                <span className="block text-5xl md:text-7xl">Como beber</span>
                <span className="block text-6xl md:text-8xl my-2" style={{ color: ORANGE }}>
                  mais água
                </span>
                <span className="block text-4xl md:text-6xl">sem sofrer</span>
              </h1>
              <div
                className="mt-4 text-3xl md:text-5xl"
                style={{ fontFamily: "'Sacramento', cursive", color: ORANGE }}
              >
                um guia leve e prático
              </div>

              <p className="text-white/85 text-lg max-w-xl mx-auto mt-8 leading-relaxed">
                Transforme hidratação em hábito sem pressão, sem culpa e sem complicar a rotina.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                {[
                  "7 truques simples para lembrar de beber água",
                  "10 receitas de águas saborizadas zero açúcar",
                  "Sinais para perceber se você está bem hidratado",
                  "O que não conta como hidratação",
                  "Plano de 21 dias para criar o hábito",
                  "Cupom de R$100 de presente no final",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-white">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-center gap-3 print:hidden">
                <Droplet className="w-12 h-12 float-drop" style={{ color: ORANGE, animationDelay: "0s" }} />
                <Droplet className="w-8 h-8 float-drop" style={{ color: "white", animationDelay: "0.6s" }} />
                <Droplet className="w-10 h-10 float-drop" style={{ color: ORANGE, animationDelay: "1.2s" }} />
              </div>
            </div>
          </Reveal>
        </Page>

        {/* ============ BOAS-VINDAS ============ */}
        <Page>
          <Reveal>
            <BrushTitle title="Boas-vindas" italic="comece por aqui" />
            <SectionLabel>Beber mais água pode ser mais simples do que parece</SectionLabel>
            <Paragraph>
              Você já sabe que beber água é importante. Mas, na prática, nem sempre é tão fácil
              assim. A rotina corre, o dia passa, o copo fica esquecido na mesa, a garrafa
              continua cheia na bolsa e, quando você percebe, já está com sede há horas.
            </Paragraph>
            <Paragraph>
              E tudo bem. Isso acontece com muita gente.
            </Paragraph>
            <Paragraph>
              A verdade é que beber mais água não precisa depender de cobrança ou força de vontade
              o tempo todo. Na maioria das vezes, o segredo está em deixar esse hábito mais fácil,
              mais visível e mais prazeroso.
            </Paragraph>
            <Quote>O objetivo não é perfeição. É constância.</Quote>
            <Paragraph>
              Você não precisa mudar tudo de uma vez. Comece com um copo a mais. Uma garrafa por
              perto. Uma receita nova. Um lembrete simples. Um pequeno ritual pela manhã.
            </Paragraph>
            <Paragraph>
              Aos poucos, beber água deixa de parecer obrigação e passa a ser um gesto diário de
              saúde e bem-estar. Com você, com sua rotina, com a sua casa.
            </Paragraph>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ COMO USAR ============ */}
        <Page bg="soft">
          <Reveal>
            <BrushTitle title="Como usar" italic="este e-book" />
            <Paragraph>
              O objetivo aqui não é ser perfeito. É tornar a hidratação mais leve, simples e
              possível na sua rotina. Quanto mais fácil for beber água, menos você depende de
              motivação.
            </Paragraph>

            <div className="grid md:grid-cols-3 gap-5 my-8">
              {[
                { n: "01", t: "Escolha 2 truques", d: "Pegue dois truques que parecem mais simples para a sua rotina agora. Pequenas mudanças funcionam melhor quando parecem naturais." },
                { n: "02", t: "Teste 2 receitas", d: "Se a água parece sem graça, escolha duas combinações desta semana e descubra quais sabores combinam com o seu dia." },
                { n: "03", t: "Use o plano de 21 dias", d: "No final, você vai encontrar um plano simples para transformar hidratação em hábito. Sem regras rígidas." },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="rounded-2xl p-6 h-full" style={{ background: "white", border: `2px solid ${NAVY}` }}>
                    <div
                      className="text-5xl mb-2"
                      style={{ fontFamily: "'Rubik Distressed', system-ui", color: ORANGE }}
                    >
                      {s.n}
                    </div>
                    <h4 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{s.t}</h4>
                    <p className="text-[15px]" style={{ color: NAVY }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <SectionLabel>Mini exercício para hoje</SectionLabel>
            <div className="rounded-2xl p-6 print:p-4" style={{ background: "white", border: `2px dashed ${NAVY}` }}>
              <InteractiveCheck
                id="ex-truque"
                label="Já sei qual truque quero testar primeiro"
                state={checks}
                setState={setChecks}
              />
              <InteractiveCheck
                id="ex-receita"
                label="Já escolhi a receita que vou experimentar esta semana"
                state={checks}
                setState={setChecks}
              />
              <InteractiveCheck
                id="ex-visivel"
                label="Já decidi onde vou deixar minha água mais visível hoje"
                state={checks}
                setState={setChecks}
              />
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 1 ============ */}
        <Page>
          <Reveal>
            <BrushTitle number="Capítulo 1" title="Por que beber" italic="parece tão difícil?" />
            <Paragraph>
              Se você já prometeu para si mesmo que dessa vez vai beber mais água, mas poucos dias
              depois voltou a esquecer, saiba que isso é mais comum do que parece.
            </Paragraph>
            <Paragraph>
              Muita gente acredita que o problema está na falta de disciplina. Mas, na prática,
              quase nunca é só isso. A rotina moderna faz a gente funcionar no automático o tempo
              inteiro. E, no meio disso, beber água acaba ficando sempre para depois.
            </Paragraph>
            <Quote>O problema não é só lembrar. É o ambiente ao seu redor.</Quote>
            <Paragraph>
              Quando algo está fácil, acessível e ao alcance da mão, seu cérebro escolhe quase sem
              perceber. Com a água funciona da mesma forma. Se ela está longe, escondida ou sem
              sabor agradável, o cérebro simplesmente não prioriza.
            </Paragraph>

            <SectionLabel>Pequena reflexão</SectionLabel>
            <p className="mb-3" style={{ color: NAVY }}>Hoje, o que mais dificulta sua hidratação?</p>
            <div className="grid md:grid-cols-2 gap-x-6 rounded-2xl p-6" style={{ background: "#f5f7fb" }}>
              {[
                ["c1-esqueco", "Eu esqueço"],
                ["c1-sede", "Não sinto sede"],
                ["c1-sabor", "Não gosto muito do sabor da água"],
                ["c1-corrida", "Minha rotina é corrida"],
                ["c1-outras", "Acabo escolhendo outras bebidas"],
                ["c1-habito", "Não tenho o hábito ainda"],
              ].map(([id, label]) => (
                <InteractiveCheck key={id} id={id} label={label} state={checks} setState={setChecks} />
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl text-white" style={{ background: NAVY }}>
              <p className="leading-relaxed">
                Foi pensando nessa praticidade que muitas pessoas passaram a buscar soluções de
                purificação em casa, deixando a água sempre disponível, com melhor sabor e pronta
                para beber ao longo do dia. A proposta da Acqualive é justamente facilitar esse
                acesso à água de qualidade na rotina da casa.
              </p>
              <a
                href={PORQUE}
                target="_blank"
                rel="noopener"
                className="inline-block mt-4 px-6 py-3 rounded-lg font-bold uppercase text-sm transition-transform hover:scale-105 print:hidden"
                style={{ background: ORANGE, color: "white", fontFamily: "'Bowlby One', system-ui" }}
              >
                Conheça a Acqualive
              </a>
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 2 — TRUQUES ============ */}
        <Page bg="soft">
          <Reveal>
            <BrushTitle number="Capítulo 2" title="7 truques" italic="para beber mais água" />
            <Paragraph>
              Os hábitos mais fortes não acontecem porque a pessoa lembra o tempo todo. Eles
              acontecem porque o ambiente ajuda, a rotina facilita e o cérebro começa a repetir
              quase no automático.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {TRUQUES.map((t, i) => (
                <Reveal key={t.n} delay={i * 80}>
                  <div
                    className="rounded-2xl p-6 h-full transition-transform hover:-translate-y-1"
                    style={{ background: "white", border: `2px solid ${NAVY}` }}
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <div
                        className="text-5xl leading-none"
                        style={{ fontFamily: "'Rubik Distressed', system-ui", color: ORANGE }}
                      >
                        {t.n}
                      </div>
                      <h4
                        className="text-xl uppercase"
                        style={{ fontFamily: "'Rubik Distressed', system-ui", color: NAVY }}
                      >
                        {t.t}
                      </h4>
                    </div>
                    <p className="text-[15px]" style={{ color: NAVY }}>{t.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <SectionLabel>Desafio simples para hoje</SectionLabel>
            <div className="rounded-2xl p-6" style={{ background: "white", border: `2px dashed ${NAVY}` }}>
              <InteractiveCheck id="d2-truques" label="Vou começar com 2 truques ainda hoje" state={checks} setState={setChecks} />
              <InteractiveCheck id="d2-lugar" label="Escolhi 1 lugar da casa para deixar água mais visível" state={checks} setState={setChecks} />
              <InteractiveCheck id="d2-momento" label="Defini 1 momento fixo do dia para criar um ritual de hidratação" state={checks} setState={setChecks} />
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 3 — RECEITAS ============ */}
        <Page>
          <Reveal>
            <BrushTitle number="Capítulo 3" title="10 receitas" italic="de águas saborizadas" />
            <Paragraph>
              Água saborizada não é suco. A ideia aqui é apenas adicionar aroma, frescor e uma
              sensação mais agradável usando frutas, ervas e especiarias naturais. Quanto mais
              leve, melhor.
            </Paragraph>
            <Paragraph>
              Deixe os ingredientes descansando alguns minutos antes de consumir para liberar mais
              sabor. Se quiser uma experiência ainda mais refrescante, deixe na geladeira por 1 a 2
              horas.
            </Paragraph>

            <div className="mt-8">
              <ReceitasCarousel />
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 4 — SINAIS ============ */}
        <Page bg="soft">
          <Reveal>
            <BrushTitle number="Capítulo 4" title="Sinais" italic="que mostram se você está bem hidratado" />
            <Paragraph>
              O corpo costuma dar vários sinais ao longo do dia, alguns bem discretos, mostrando
              quando está recebendo menos água do que precisa. Aprender a observar pequenos sinais
              ajuda muito a criar uma relação mais consciente com a hidratação.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              {[
                { t: "A sede", d: "É o aviso mais conhecido. Mas, na correria, muita gente acaba ignorando esse sinal e adia a hidratação." },
                { t: "Cor da urina", d: "Urina mais clara costuma indicar boa ingestão de líquidos. Cores muito escuras podem ser um sinal de atenção." },
                { t: "Boca seca", d: "Sensação constante de boca seca e lábios ressecados podem aparecer com baixa ingestão de água." },
                { t: "Cansaço e foco", d: "Sensação de mente cansada e queda de concentração podem estar ligadas à hidratação." },
                { t: "Dor de cabeça leve", d: "Pequenos desconfortos podem aparecer, embora existam muitas causas possíveis." },
                { t: "Frequência ao banheiro", d: "Passar muitas horas sem ir pode indicar pouca ingestão. Equilíbrio é o mais importante." },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="rounded-2xl p-5" style={{ background: "white", borderLeft: `6px solid ${ORANGE}` }}>
                    <h4 className="text-xl uppercase mb-1" style={{ fontFamily: "'Rubik Distressed', system-ui", color: NAVY }}>
                      {s.t}
                    </h4>
                    <p className="text-[15px]" style={{ color: NAVY }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <SectionLabel>Pequena pausa para observar seu dia</SectionLabel>
            <div className="rounded-2xl p-6 grid md:grid-cols-2 gap-x-6" style={{ background: "white", border: `2px dashed ${NAVY}` }}>
              {[
                ["s4-boca", "Boca seca"],
                ["s4-sede", "Sede constante"],
                ["s4-cabeca", "Dor de cabeça leve"],
                ["s4-cansaco", "Cansaço ao longo do dia"],
                ["s4-foco", "Dificuldade de concentração"],
                ["s4-horas", "Passar horas sem beber água"],
                ["s4-trocar", "Trocar água por outras bebidas com frequência"],
              ].map(([id, label]) => (
                <InteractiveCheck key={id} id={id} label={label} state={checks} setState={setChecks} />
              ))}
            </div>

            <p className="text-sm italic mt-6 opacity-75" style={{ color: NAVY }}>
              Este e-book tem caráter educativo e não substitui orientação médica, nutricional ou
              profissional. Procure orientação se perceber sinais persistentes.
            </p>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 5 — O QUE NÃO CONTA ============ */}
        <Page>
          <Reveal>
            <BrushTitle number="Capítulo 5" title="O que não conta" italic="como hidratação" />
            <Paragraph>
              Algumas bebidas podem fazer parte do dia, mas não substituem a água como base
              principal da hidratação. A ideia não é cortar tudo nem criar lista de proibições, é
              entender que a água precisa continuar ocupando espaço na rotina.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-5 my-8">
              <div className="rounded-2xl p-6" style={{ background: "#eaf5ec", border: `2px solid #2d8a5e` }}>
                <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: "#2d8a5e", fontFamily: "'Bowlby One', system-ui" }}>
                  Prioridade principal
                </div>
                {["Água pura", "Água filtrada", "Água saborizada sem açúcar"].map((x) => (
                  <div key={x} className="flex items-center gap-2 mb-2" style={{ color: NAVY }}>
                    <Check className="w-5 h-5" style={{ color: "#2d8a5e" }} />
                    {x}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6" style={{ background: "#fdecea", border: `2px solid ${ORANGE}` }}>
                <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
                  Pode estar na rotina, mas não substitui água
                </div>
                {["Café", "Chá", "Sucos", "Refrigerantes", "Energéticos", "Bebidas alcoólicas"].map((x) => (
                  <div key={x} className="flex items-center gap-2 mb-2" style={{ color: NAVY }}>
                    <span style={{ color: ORANGE }}>•</span>
                    {x}
                  </div>
                ))}
              </div>
            </div>

            <Quote>O problema não é tomar outras bebidas. É esquecer da água.</Quote>
            <Paragraph>
              Uma estratégia simples: a cada xícara de café, um copo de água. Pequeno ajuste,
              grande diferença ao longo do dia.
            </Paragraph>

            <SectionLabel>Pequeno desafio</SectionLabel>
            <div className="rounded-2xl p-6" style={{ background: "#f5f7fb", border: `2px dashed ${NAVY}` }}>
              <InteractiveCheck id="d5-quantas" label="Vou observar quantas vezes escolho outra bebida antes da água" state={checks} setState={setChecks} />
              <InteractiveCheck id="d5-momento" label="Vou identificar em quais momentos do dia isso acontece mais" state={checks} setState={setChecks} />
              <InteractiveCheck id="d5-facil" label="Vou pensar no que pode tornar a água mais fácil de escolher" state={checks} setState={setChecks} />
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 6 — 21 DIAS ============ */}
        <Page bg="soft">
          <Reveal>
            <BrushTitle number="Capítulo 6" title="21 dias" italic="para criar o hábito" />
            <Paragraph>
              Hábitos duradouros normalmente não começam com mudanças radicais. Eles começam com
              pequenas ações repetidas muitas vezes. Não criar perfeição, criar constância.
            </Paragraph>

            {[
              {
                w: "Semana 1",
                t: "Lembrar",
                d: "Dias 1 ao 7. O foco é criar presença e fazer a água aparecer mais na sua rotina.",
                items: [
                  ["w1-visivel", "Deixar água visível nos ambientes"],
                  ["w1-garrafa", "Escolher uma garrafa ou copo favorito"],
                  ["w1-acordar", "Beber água ao acordar"],
                  ["w1-fixos", "Escolher 2 momentos fixos do dia"],
                  ["w1-receita", "Testar pelo menos 1 receita saborizada"],
                  ["w1-sede", "Evitar esperar sentir muita sede"],
                ],
              },
              {
                w: "Semana 2",
                t: "Facilitar",
                d: "Dias 8 ao 14. Reduzir ainda mais o esforço. Bons hábitos sobrevivem quando dão pouco trabalho.",
                items: [
                  ["w2-estacoes", "Criar estações de água pela casa"],
                  ["w2-pronta", "Manter água pronta na geladeira"],
                  ["w2-novas", "Experimentar novas receitas saborizadas"],
                  ["w2-pausa", "Usar água como pausa durante o dia"],
                  ["w2-perto", "Levar água para perto de onde você passa mais tempo"],
                  ["w2-associar", "Associar água a hábitos já existentes"],
                ],
              },
              {
                w: "Semana 3",
                t: "Transformar em rotina",
                d: "Dias 15 ao 21. A ideia é começar a enxergar hidratação como parte natural do dia.",
                items: [
                  ["w3-rituais", "Continuar os pequenos rituais"],
                  ["w3-acessivel", "Manter água acessível"],
                  ["w3-ajustar", "Ajustar o que funcionou melhor para você"],
                  ["w3-radicais", "Evitar metas radicais"],
                  ["w3-corpo", "Observar como o corpo responde"],
                  ["w3-constancia", "Priorizar constância em vez de perfeição"],
                ],
              },
            ].map((sem, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl p-6 mb-6" style={{ background: "white", border: `2px solid ${NAVY}` }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <div
                      className="px-3 py-1 rounded-md text-white text-sm uppercase tracking-wider"
                      style={{ background: ORANGE, fontFamily: "'Bowlby One', system-ui" }}
                    >
                      {sem.w}
                    </div>
                    <h4 className="text-2xl uppercase" style={{ fontFamily: "'Rubik Distressed', system-ui", color: NAVY }}>
                      {sem.t}
                    </h4>
                  </div>
                  <p className="text-[15px] mb-4" style={{ color: NAVY }}>{sem.d}</p>
                  <div className="grid md:grid-cols-2 gap-x-4">
                    {sem.items.map(([id, label]) => (
                      <InteractiveCheck key={id} id={id} label={label} state={checks} setState={setChecks} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Barra de progresso */}
            <div className="rounded-2xl p-6 print:hidden" style={{ background: NAVY, color: "white" }}>
              <div className="flex justify-between items-baseline mb-2">
                <div className="uppercase text-sm tracking-widest" style={{ fontFamily: "'Bowlby One', system-ui" }}>
                  Seu progresso
                </div>
                <div className="text-2xl font-bold" style={{ color: ORANGE }}>
                  {totalChecks} marcações
                </div>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (totalChecks / 30) * 100)}%`,
                    background: `linear-gradient(90deg, ${ORANGE}, #f7931e)`,
                  }}
                />
              </div>
              <p className="text-sm mt-3 opacity-85">
                Pequenas ações repetidas constroem hábitos reais.
              </p>
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 7 — PLANO PESSOAL ============ */}
        <Page>
          <Reveal>
            <BrushTitle number="Capítulo 7" title="Seu plano" italic="pessoal de hidratação" />
            <Paragraph>
              Cada pessoa tem uma dificuldade diferente. Antes de terminar este e-book, vamos
              criar um plano simples, realista e possível para o seu dia.
            </Paragraph>

            <div className="rounded-2xl p-6 md:p-8 mt-6" style={{ background: "#f5f7fb", border: `2px solid ${NAVY}` }}>
              <SectionLabel>Meu plano pessoal</SectionLabel>
              <PlanInput id="p-desafio" label="Meu maior desafio hoje é" state={plan} setState={setPlan} />
              <PlanInput id="p-habito" label="O hábito mais fácil para eu começar é" state={plan} setState={setPlan} />
              <PlanInput id="p-lugar" label="O lugar onde vou deixar água mais visível é" state={plan} setState={setPlan} />
              <PlanInput id="p-receita" label="A receita saborizada que quero testar primeiro é" state={plan} setState={setPlan} />
              <PlanInput id="p-horario" label="Meu horário mais fácil para beber água é" state={plan} setState={setPlan} />
            </div>

            <Quote>O segredo não é intensidade. É continuidade.</Quote>

            <div className="mt-8 p-6 rounded-2xl text-white" style={{ background: NAVY }}>
              <p className="leading-relaxed">
                Quando a água está acessível, fresquinha, agradável e pronta para beber, o cérebro
                começa a escolher esse hábito com mais naturalidade. A Acqualive trabalha com
                soluções pensadas para facilitar esse cuidado diário de forma prática para toda a
                família.
              </p>
              <a
                href={SITE}
                target="_blank"
                rel="noopener"
                className="inline-block mt-4 px-6 py-3 rounded-lg font-bold uppercase text-sm transition-transform hover:scale-105 print:hidden"
                style={{ background: ORANGE, color: "white", fontFamily: "'Bowlby One', system-ui" }}
              >
                Ir para o site Acqualive
              </a>
            </div>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ CAP 8 — CHECKLIST FINAL ============ */}
        <Page bg="soft">
          <Reveal>
            <BrushTitle number="Capítulo 8" title="Checklist final" italic="da hidratação leve" />
            <Paragraph>
              Beber mais água não precisa ser baseado em cobrança ou regras difíceis. Passe por
              este checklist e veja quais pontos já fazem parte da sua rotina e quais você ainda
              pode ajustar aos poucos.
            </Paragraph>

            {[
              {
                t: "Ambiente",
                items: [
                  ["a-visivel", "Deixo água visível durante o dia"],
                  ["a-fixo", "Tenho um lugar fixo para água em casa"],
                  ["a-trabalho", "Mantenho água próxima enquanto trabalho ou estudo"],
                  ["a-garrafa", "Levo uma garrafa comigo quando saio"],
                  ["a-pronta", "Tenho água pronta e fácil de servir"],
                ],
              },
              {
                t: "Rotina",
                items: [
                  ["r-acordar", "Bebo água logo ao acordar"],
                  ["r-fixos", "Tenho momentos fixos para hidratação"],
                  ["r-associei", "Associei água a hábitos do dia a dia"],
                  ["r-pausas", "Faço pequenas pausas para beber água"],
                  ["r-horas", "Evito passar muitas horas sem hidratação"],
                ],
              },
              {
                t: "Experiência",
                items: [
                  ["e-saborizadas", "Testei águas saborizadas"],
                  ["e-sabores", "Descobri sabores que gosto mais"],
                  ["e-sinais", "Passei a perceber melhor os sinais do corpo"],
                  ["e-agradavel", "Deixei a água mais agradável de beber"],
                  ["e-troca", "Reduzi a troca constante por outras bebidas"],
                ],
              },
              {
                t: "Mentalidade",
                items: [
                  ["m-perfeicao", "Parei de me cobrar perfeição"],
                  ["m-tempo", "Entendi que hábitos levam tempo"],
                  ["m-pequeno", "Comecei pequeno"],
                  ["m-constancia", "Foco mais em constância do que em metas radicais"],
                  ["m-simples", "Estou tornando a hidratação mais simples para mim"],
                ],
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="rounded-2xl p-6 mb-5" style={{ background: "white", border: `2px solid ${NAVY}` }}>
                  <h4
                    className="text-2xl uppercase mb-3"
                    style={{ fontFamily: "'Rubik Distressed', system-ui", color: ORANGE }}
                  >
                    {b.t}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-x-4">
                    {b.items.map(([id, label]) => (
                      <InteractiveCheck key={id} id={id} label={label} state={checks} setState={setChecks} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Quote>Não existe fórmula perfeita. Existe o que funciona para você.</Quote>
            <Footer />
          </Reveal>
        </Page>

        {/* ============ PRESENTE ESPECIAL ============ */}
        <Page bg="navy">
          <Reveal>
            <div className="text-center">
              <div
                className="inline-block px-4 py-1 rounded-full mb-6 uppercase text-xs tracking-widest"
                style={{ background: ORANGE, color: "white", fontFamily: "'Bowlby One', system-ui" }}
              >
                Presente especial Acqualive
              </div>
              <h2
                className="text-white text-4xl md:text-6xl uppercase leading-tight"
                style={{ fontFamily: "'Rubik Distressed', system-ui" }}
              >
                Seu presente
                <span className="block mt-2" style={{ color: ORANGE }}>
                  está aqui
                </span>
              </h2>
              <p className="text-white/85 mt-6 max-w-xl mx-auto">
                Como agradecimento por fazer parte da família Acqualive, você ganhou um cupom
                especial de R$100 de desconto no seu purificador de bancada Acqualive.
              </p>

              <div
                className="mt-10 mx-auto max-w-md rounded-3xl p-8 relative"
                style={{
                  background: "white",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
                  Use o cupom
                </div>
                <div
                  className="text-5xl md:text-6xl mb-2"
                  style={{ fontFamily: "'Rubik Distressed', system-ui", color: NAVY, letterSpacing: "0.05em" }}
                >
                  HIDRATA100
                </div>
                <div className="text-2xl font-bold" style={{ color: ORANGE, fontFamily: "'Bowlby One', system-ui" }}>
                  R$100 de desconto
                </div>
                <div className="text-sm mt-1" style={{ color: NAVY }}>
                  no purificador de bancada Acqualive
                </div>

                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener"
                  className="pulse-soft inline-block mt-6 px-8 py-4 rounded-xl text-white font-bold uppercase tracking-wide print:hidden"
                  style={{
                    background: `linear-gradient(135deg, ${ORANGE}, #f7931e)`,
                    fontFamily: "'Bowlby One', system-ui",
                  }}
                >
                  Resgatar agora
                </a>
              </div>

              <p className="text-white/70 text-sm mt-8 max-w-md mx-auto">
                Porque quando a água está sempre por perto, hidratar-se bem fica muito mais fácil.
              </p>
            </div>
          </Reveal>
        </Page>

        {/* ============ FOOTER GERAL ============ */}
        <footer className="py-10 text-center text-sm" style={{ background: NAVY, color: "white" }}>
          <strong style={{ fontFamily: "'Bowlby One', system-ui" }}>ACQUALIVE</strong>
          <div className="opacity-80 mt-1">Água de qualidade para uma rotina mais leve.</div>
        </footer>
      </div>
    </>
  );
}
