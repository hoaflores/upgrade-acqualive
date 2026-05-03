import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useDayanReveal } from "@/hooks/useDayanReveal";
import betetiCapa from "@/assets/beteti-capa.jpg";
import betetiMic from "@/assets/beteti-microfone.png";
import betetiCamera from "@/assets/beteti-camera.png";
import betetiTerno from "@/assets/beteti-terno.png";
import betetiLivro from "@/assets/beteti-livro.png";
import betetiEstudio from "@/assets/beteti-estudio.webp";

const WHATSAPP =
  "https://wa.me/555192928468?text=Ol%C3%A1!%20Vim%20pela%20reportagem%20do%20Fernando%20Beteti.%20Quero%20um%20Acqualive.";

/* ============================================================
   NAV
============================================================ */
const BetetiNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV = [
    { label: "A reportagem", href: "#reportagem" },
    { label: "Vídeos", href: "#videos" },
    { label: "A dor", href: "#dor" },
    { label: "A solução", href: "#solucao" },
    { label: "Oferta", href: "#oferta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[hsl(var(--bt-line))]"
          : "bg-transparent"
      }`}
    >
      {/* Breaking news ticker */}
      <div className="bg-[hsl(var(--bt-red))] text-white py-1.5 overflow-hidden">
        <div className="bt-ticker">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8 shrink-0">
              {[
                "URGENTE — 99,9% da água da torneira no Brasil contém cloro residual",
                "INVESTIGAÇÃO — restos de hormônios e fármacos detectados em águas tratadas",
                "ALERTA — caixas d'água sem limpeza viram criadouros silenciosos",
                "REPORTAGEM ESPECIAL — a água que você bebe pode estar te adoecendo",
              ].map((t, i) => (
                <span
                  key={`${k}-${i}`}
                  className="bt-eyebrow text-white text-[10px] flex items-center gap-8 shrink-0"
                >
                  <span className="bt-live-dot" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="bt-display text-2xl text-[hsl(var(--bt-ink))] leading-none">
            Repórter <span className="bt-italic text-[hsl(var(--bt-red))]">Saúde</span>
          </span>
          <span className="bt-eyebrow text-[hsl(var(--bt-muted))] hidden sm:inline ml-2">
            por Fernando Beteti
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[hsl(var(--bt-ink-soft))]">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="bt-link">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#oferta"
          className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--bt-red))] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[hsl(var(--bt-blue-deep))] transition-colors"
        >
          Quero um Acqualive →
        </a>

        <a
          href="#oferta"
          className="md:hidden bg-[hsl(var(--bt-red))] text-white px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider"
        >
          Quero
        </a>
      </div>
    </header>
  );
};

/* ============================================================
   HERO — capa de jornal
============================================================ */
const BetetiHero = () => (
  <section
    id="top"
    className="relative pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bt-paper"
  >
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
      {/* Newspaper masthead */}
      <div className="dayan-reveal flex items-center justify-between border-y-4 border-double border-[hsl(var(--bt-ink))] py-3 mb-8">
        <span className="bt-eyebrow text-[hsl(var(--bt-muted))]">
          Edição especial
        </span>
        <span className="bt-mono text-xs text-[hsl(var(--bt-muted))] hidden sm:block">
          ANO XXX · BRASIL · SAÚDE PÚBLICA
        </span>
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          investigação
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
        {/* Coluna principal — manchete */}
        <div className="lg:col-span-8">
          <div className="dayan-reveal flex items-center gap-3 mb-5">
            <span className="bt-stamp">exclusivo</span>
            <span className="bt-eyebrow text-[hsl(var(--bt-muted))]">
              Por Fernando Beteti · Jornalista há 30 anos
            </span>
          </div>

          <h1 className="dayan-reveal dayan-reveal-delay-1 bt-display text-[2.6rem] sm:text-[3.4rem] lg:text-[5.4rem] xl:text-[6.2rem] text-[hsl(var(--bt-ink))]">
            A água do brasileiro
            <br />
            virou um{" "}
            <span className="bt-italic text-[hsl(var(--bt-red))]">
              escândalo
            </span>
            <br />
            que ninguém reporta.
          </h1>

          <div className="dayan-reveal dayan-reveal-delay-2 mt-8 max-w-2xl">
            <p className="bt-dropcap text-lg text-[hsl(var(--bt-ink-soft))] leading-relaxed">
              Há três décadas eu cubro saúde no Brasil. Já vi escândalos,
              fraudes e omissões. Mas nada me chocou tanto quanto descobrir o
              que está dentro do copo de água que você acabou de beber. Cloro,
              fluoreto, restos de hormônios, microplásticos e metais pesados —
              tudo dentro do limite "permitido" e fora de qualquer reportagem
              de horário nobre. Esta é a investigação que a indústria preferia
              que você nunca lesse.
            </p>
          </div>

          <div className="dayan-reveal dayan-reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#oferta"
              className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--bt-ink))] text-white px-7 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[hsl(var(--bt-red))] transition-colors"
            >
              Quero a água que o Beteti recomenda
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center gap-3 text-[hsl(var(--bt-ink))] py-4 font-bold uppercase tracking-wider text-sm bt-link"
            >
              Assistir à reportagem em vídeo
            </a>
          </div>

          {/* Manchetes secundárias */}
          <div className="dayan-reveal mt-12 grid sm:grid-cols-3 gap-6 border-t border-[hsl(var(--bt-line))] pt-7">
            {[
              {
                n: "30 anos",
                l: "de jornalismo investigativo em saúde",
              },
              {
                n: "+400 mil",
                l: "inscritos no canal Repórter Saúde",
              },
              {
                n: "1 reportagem",
                l: "que pode mudar o que entra no seu corpo",
              },
            ].map((s) => (
              <div key={s.n}>
                <div className="bt-display text-2xl text-[hsl(var(--bt-blue-deep))]">
                  {s.n}
                </div>
                <div className="text-xs text-[hsl(var(--bt-muted))] mt-2 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna lateral — retrato */}
        <div className="lg:col-span-4 dayan-reveal dayan-reveal-delay-2">
          <div className="relative">
            <div className="absolute -top-3 left-3 z-10 bg-[hsl(var(--bt-red))] text-white px-3 py-1 bt-eyebrow text-[10px]">
              <span className="bt-live-dot mr-2" />
              ao vivo
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-[hsl(var(--bt-blue-deep))]">
              <img
                src={betetiCapa}
                alt="Fernando Beteti, jornalista"
                className="absolute inset-0 w-full h-full object-cover object-right"
                width={1080}
                height={1440}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bt-blue-deep))]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="bt-italic text-xl leading-tight">
                  "A informação é o melhor remédio para a saúde."
                </p>
                <p className="bt-eyebrow text-white/70 mt-3 text-[10px]">
                  Fernando Beteti — Repórter Saúde
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden lg:flex flex-col items-end bg-[hsl(var(--bt-paper))] px-4 py-3 border border-[hsl(var(--bt-line))] shadow-xl">
              <span className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[10px]">
                Profissão
              </span>
              <span className="bt-italic text-base text-[hsl(var(--bt-ink))]">
                Jornalista
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   REPORTAGEM (carta aberta)
============================================================ */
const BetetiReportagem = () => (
  <section
    id="reportagem"
    className="relative py-24 lg:py-32 bg-white"
  >
    <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
      <div className="dayan-reveal flex items-center gap-3 mb-8">
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          01 / Carta aberta
        </span>
        <span className="flex-1 h-px bg-[hsl(var(--bt-line))]" />
        <span className="bt-mono text-xs text-[hsl(var(--bt-muted))]">
          tempo de leitura · 3 min
        </span>
      </div>

      <h2 className="dayan-reveal bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05] max-w-3xl">
        Eu cobri trinta anos de notícia. E descobri que a{" "}
        <span className="bt-italic text-[hsl(var(--bt-red))]">
          maior delas
        </span>{" "}
        estava no meu copo.
      </h2>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-12 text-[hsl(var(--bt-ink-soft))]">
        <div className="dayan-reveal space-y-5 text-base lg:text-lg leading-relaxed">
          <p>
            Comecei a trabalhar como jornalista em 1995. Passei por rádio,
            televisão, agência de notícias, fui CEO da minha própria operação
            e hoje, no canal Repórter Saúde, mais de 400 mil pessoas
            acompanham o que apuramos sobre saúde, alimentação e prevenção.
          </p>
          <p>
            Em todos esses anos, aprendi uma regra: <em className="bt-italic">a notícia
            mais perigosa é a que ninguém quer dar.</em> E é exatamente isso
            que acontece com a água que abastece as casas brasileiras.
          </p>
          <p>
            Existe uma diferença gigante entre <em className="bt-italic">água
            potável</em> — que não te mata na hora — e <em className="bt-italic">água
            ideal</em>, aquela que o corpo realmente precisa para funcionar,
            envelhecer bem e prevenir doenças crônicas.
          </p>
        </div>

        <div className="dayan-reveal dayan-reveal-delay-1 space-y-5 text-base lg:text-lg leading-relaxed">
          <p>
            Os limites de cloro, fluoreto, alumínio e fármacos considerados
            "seguros" foram desenhados para não causar morte aguda. Não para
            preservar sua tireoide, sua microbiota, seu fígado e o cérebro
            dos seus filhos.
          </p>
          <p>
            Por isso essa página existe. Reuni aqui as principais reportagens
            que produzi sobre o assunto, ao lado de especialistas que
            estudam a água há décadas, e a única solução que eu, pessoalmente,
            recomendo para quem assiste o nosso canal: o filtro Acqualive.
          </p>
          <p className="bt-italic text-[hsl(var(--bt-ink))] text-xl border-l-4 border-[hsl(var(--bt-red))] pl-5">
            "Não é dramatização. É reportagem. E é sobre o que vai entrar
            no seu corpo amanhã de manhã."
          </p>
          <p className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[11px]">
            — Fernando Beteti
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   VIDEOS
============================================================ */
const VIDEOS = [
  {
    id: "hUOj1BbSr3k",
    n: "01",
    cat: "Entrevista",
    title: "A médica que curou a azia trocando a água",
    desc: "Sidney Rodrigues conta o caso clínico que mudou a forma dele de enxergar a água.",
  },
  {
    id: "G74XNiv7MUY",
    n: "02",
    cat: "Investigação",
    title: "Os 2 segredos da água Acqualive",
    desc: "O que faz desse filtro o único que eu recomendo no canal — em detalhe técnico.",
  },
  {
    id: "nd6zhHTWR5s",
    n: "03",
    cat: "Alerta",
    title: "Algo na sua caixa d'água pode estar te adoecendo",
    desc: "O que vive escondido na caixa que ninguém limpa — e o que isso faz com você.",
  },
  {
    id: "x1SgUYcT6Ak",
    n: "04",
    cat: "Especialista",
    title: "Dr. Dayan Siebra: como escolher a água ideal",
    desc: "Cirurgião cardiovascular explica por que a água que cura é diferente da que vende.",
  },
  {
    id: "pkwYtusmIo4",
    n: "05",
    cat: "Reportagem",
    title: "Esta água inflama seu corpo — e você nem sabe",
    desc: "PRAL, pH, oxidação: o que os exames mostram quando você troca a água.",
  },
  {
    id: "9MN4PxggKu4",
    n: "06",
    cat: "Polêmica",
    title: "A água que bebemos tem hormônios e restos de remédio",
    desc: "Reportagem com Sidney Rodrigues sobre o que o tratamento convencional não retira.",
  },
  {
    id: "5VipdvlZHHM",
    n: "07",
    cat: "Cortes",
    title: "O cemitério que o cloro deixa na água",
    desc: "Trihalometanos: o subproduto do cloro que poucos jornalistas se atrevem a citar.",
  },
];

const BetetiVideos = () => (
  <section
    id="videos"
    className="relative py-24 lg:py-32 bg-[hsl(var(--bt-paper))] bt-paper"
  >
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-5 dayan-reveal">
          <span className="bt-eyebrow text-[hsl(var(--bt-red))] flex items-center gap-2">
            <span className="bt-live-dot" /> 02 / Em vídeo
          </span>
          <h2 className="bt-display mt-4 text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.02]">
            Antes de me ler,
            <br />
            <span className="bt-italic text-[hsl(var(--bt-red))]">me assista.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 dayan-reveal dayan-reveal-delay-1">
          <p className="text-lg text-[hsl(var(--bt-ink-soft))] leading-relaxed">
            Sou jornalista de vídeo. É na frente da câmera que eu apuro,
            confronto e mostro a fonte. Selecionei sete reportagens minhas,
            algumas com o Dr. Dayan Siebra e o pesquisador Sidney Rodrigues,
            que explicam por que a água do Brasil é uma emergência silenciosa —
            e por que existe uma saída.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {VIDEOS.map((v, i) => (
          <article
            key={v.id}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} group`}
          >
            <div className="relative aspect-video overflow-hidden bg-[hsl(var(--bt-blue-deep))] border border-[hsl(var(--bt-line))]">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-5 flex items-start gap-4">
              <span className="bt-display text-3xl text-[hsl(var(--bt-red))] leading-none">
                {v.n}
              </span>
              <div className="flex-1">
                <span className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[10px]">
                  {v.cat}
                </span>
                <h3 className="bt-display text-xl text-[hsl(var(--bt-ink))] leading-tight mt-1">
                  {v.title}
                </h3>
                <p className="text-sm text-[hsl(var(--bt-muted))] mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   DOR — sintomas / problemas
============================================================ */
const SINTOMAS = [
  {
    n: "01",
    t: "Cansaço sem explicação",
    d: "Você dorme, come, descansa — e mesmo assim acorda exausto. A desidratação celular crônica é uma das causas mais subestimadas pela medicina convencional.",
  },
  {
    n: "02",
    t: "Inflamação que não passa",
    d: "Dores articulares, inchaço, gordura abdominal teimosa. Água ácida e oxidada alimenta o ambiente inflamatório do corpo.",
  },
  {
    n: "03",
    t: "Pele seca e envelhecida",
    d: "70% da pele é água. Quando o líquido que entra no corpo é cheio de cloro e metais, o colágeno paga o preço primeiro.",
  },
  {
    n: "04",
    t: "Problemas digestivos",
    d: "Azia, refluxo, prisão de ventre. Água com pH errado destrói o equilíbrio gástrico e a microbiota intestinal.",
  },
  {
    n: "05",
    t: "Tireoide em desordem",
    d: "Fluoreto adicionado à água tratada compete com o iodo. Reportagens internacionais já ligam o consumo crônico a hipotireoidismo.",
  },
  {
    n: "06",
    t: "Hormônios desregulados",
    d: "O tratamento convencional não filtra resíduos de anticoncepcionais, antidepressivos e antibióticos. Você toma o medicamento de outra pessoa todos os dias.",
  },
];

const BetetiDor = () => (
  <section id="dor" className="relative py-24 lg:py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
      <div className="dayan-reveal flex items-center gap-3 mb-8">
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          03 / O preço escondido
        </span>
        <span className="flex-1 h-px bg-[hsl(var(--bt-line))]" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <h2 className="lg:col-span-7 dayan-reveal bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05]">
          Você convive com sintomas que o seu médico
          <br />
          <span className="bt-italic text-[hsl(var(--bt-red))]">
            nunca associou
          </span>{" "}
          à sua água.
        </h2>
        <p className="lg:col-span-4 lg:col-start-9 dayan-reveal dayan-reveal-delay-1 text-lg text-[hsl(var(--bt-ink-soft))] leading-relaxed">
          Em décadas de reportagem, recebi milhares de relatos. A história
          se repete. As pessoas só conectam o problema à água depois que
          trocam — e os sintomas começam a desaparecer.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--bt-line))] border border-[hsl(var(--bt-line))]">
        {SINTOMAS.map((s, i) => (
          <article
            key={s.n}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-white p-7 lg:p-9 hover:bg-[hsl(var(--bt-paper))] transition-colors`}
          >
            <div className="flex items-baseline gap-3">
              <span className="bt-display text-3xl text-[hsl(var(--bt-red))]">
                {s.n}
              </span>
              <span className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[10px]">
                sintoma
              </span>
            </div>
            <h3 className="bt-display text-2xl text-[hsl(var(--bt-ink))] mt-4 leading-tight">
              {s.t}
            </h3>
            <p className="text-sm text-[hsl(var(--bt-ink-soft))] mt-3 leading-relaxed">
              {s.d}
            </p>
          </article>
        ))}
      </div>

      {/* Manchete intercalada */}
      <div className="dayan-reveal mt-20 bt-dark p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute inset-0 dayan-grain" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-2">
            <img
              src={betetiCamera}
              alt="Fernando Beteti em transmissão"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full mx-auto bg-white/5"
            />
          </div>
          <div className="lg:col-span-10">
            <span className="bt-eyebrow text-white/60">
              Análise · Repórter Saúde
            </span>
            <p className="bt-display text-2xl lg:text-4xl text-white mt-3 leading-[1.15]">
              "O brasileiro foi educado a confiar no tratamento da
              torneira. O problema é que o tratamento foi feito para evitar
              que você morresse hoje —{" "}
              <span className="bt-italic text-[hsl(var(--bt-accent))]">
                não para que você viva bem amanhã.
              </span>"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SOLUÇÃO — pilares da água ideal
============================================================ */
const PILARES = [
  {
    n: "01",
    t: "Sem cloro residual",
    d: "Remoção de até 99,9% do cloro e dos trihalometanos formados quando ele reage com matéria orgânica.",
  },
  {
    n: "02",
    t: "pH alcalino entre 8,5 e 10",
    d: "A faixa que o corpo busca para neutralizar a acidez crônica da alimentação moderna.",
  },
  {
    n: "03",
    t: "Minerais preservados",
    d: "Cálcio, magnésio e potássio mantidos. Nada de água destilada vazia que rouba minerais do seu corpo.",
  },
  {
    n: "04",
    t: "Antioxidante (ORP negativo)",
    d: "Capacidade de doar elétrons e neutralizar radicais livres — o oposto da água engarrafada parada na prateleira.",
  },
  {
    n: "05",
    t: "Estrutura molecular menor",
    d: "Hidratação celular real — não apenas líquido passando pelo corpo.",
  },
  {
    n: "06",
    t: "Sem microplásticos",
    d: "Um copo de água de garrafa PET pode conter milhares de partículas. Filtragem física resolve.",
  },
];

const BetetiSolucao = () => (
  <section
    id="solucao"
    className="relative py-24 lg:py-32 bg-[hsl(var(--bt-paper))] bt-paper"
  >
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
      <div className="dayan-reveal flex items-center gap-3 mb-8">
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          04 / A água ideal
        </span>
        <span className="flex-1 h-px bg-[hsl(var(--bt-line))]" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <h2 className="lg:col-span-7 dayan-reveal bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05]">
          Existe uma água que o corpo{" "}
          <span className="bt-italic text-[hsl(var(--bt-red))]">
            reconhece como sua.
          </span>
        </h2>
        <p className="lg:col-span-4 lg:col-start-9 dayan-reveal dayan-reveal-delay-1 text-lg text-[hsl(var(--bt-ink-soft))] leading-relaxed">
          Pesquisadores chamam de "água ideal" a que cumpre seis critérios.
          Quando todos estão presentes, o corpo deixa de gastar energia para
          se proteger do líquido que recebe — e começa a se reparar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--bt-line))] border border-[hsl(var(--bt-line))]">
        {PILARES.map((p, i) => (
          <article
            key={p.n}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-[hsl(var(--bt-paper))] p-7 lg:p-9 group hover:bg-white transition-colors`}
          >
            <div className="flex items-baseline justify-between">
              <span className="bt-display text-4xl text-[hsl(var(--bt-blue-deep))]">
                {p.n}
              </span>
              <span className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[10px]">
                pilar
              </span>
            </div>
            <h3 className="bt-display text-2xl text-[hsl(var(--bt-ink))] mt-5 leading-tight">
              {p.t}
            </h3>
            <p className="text-sm text-[hsl(var(--bt-ink-soft))] mt-3 leading-relaxed">
              {p.d}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   ACQUALIVE — a solução concreta
============================================================ */
const BetetiAcqualive = () => (
  <section className="relative py-24 lg:py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 dayan-reveal">
          <div className="relative">
            <img
              src={betetiEstudio}
              alt="Fernando Beteti no estúdio Repórter Saúde"
              className="w-full h-auto object-cover border border-[hsl(var(--bt-line))]"
            />
            <div className="absolute -bottom-5 -right-5 bg-[hsl(var(--bt-red))] text-white px-5 py-3 hidden md:block">
              <span className="bt-eyebrow text-white/80 text-[10px] block">
                Recomendação editorial
              </span>
              <span className="bt-display text-xl">
                Acqualive
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="dayan-reveal bt-eyebrow text-[hsl(var(--bt-red))] block mb-5">
            05 / A escolha do Repórter Saúde
          </span>

          <h2 className="dayan-reveal dayan-reveal-delay-1 bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05]">
            O único filtro que entra
            <br />
            no meu programa{" "}
            <span className="bt-italic text-[hsl(var(--bt-red))]">
              com nome e sobrenome.
            </span>
          </h2>

          <div className="dayan-reveal dayan-reveal-delay-2 mt-8 space-y-5 text-[hsl(var(--bt-ink-soft))] text-lg leading-relaxed">
            <p>
              Recebo apresentações de marcas o tempo todo. A maioria não
              passa do primeiro filtro técnico. O Acqualive entrega os{" "}
              <em className="bt-italic">seis pilares da água ideal</em> em
              um único equipamento brasileiro, com tecnologia patenteada e
              décadas de pesquisa por trás.
            </p>
            <p>
              É por isso que ele é o único parceiro fixo do canal Repórter
              Saúde quando o assunto é água. Não é publicidade comum: é
              recomendação editorial. Eu testei, minha família bebe, e os
              especialistas que entrevisto também.
            </p>
          </div>

          <ul className="dayan-reveal dayan-reveal-delay-3 mt-8 space-y-3">
            {[
              "Tecnologia brasileira, com peças trocáveis",
              "Filtragem em múltiplos estágios + alcalinização natural",
              "Sem desperdício de água (não é osmose reversa)",
              "Atende família inteira, instalação simples",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-[hsl(var(--bt-ink))] text-base"
              >
                <span className="bt-display text-xl text-[hsl(var(--bt-red))] leading-none mt-0.5">
                  →
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="dayan-reveal mt-10">
            <a
              href="#oferta"
              className="group inline-flex items-center gap-3 bg-[hsl(var(--bt-ink))] text-white px-7 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[hsl(var(--bt-red))] transition-colors"
            >
              Ver a oferta para leitores do Beteti
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   QUEM É BETETI
============================================================ */
const BetetiBio = () => (
  <section className="relative py-24 lg:py-32 bt-dark overflow-hidden">
    <div className="absolute inset-0 dayan-grain" />
    <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 dayan-reveal">
          <img
            src={betetiLivro}
            alt="Fernando Beteti com seu livro"
            className="w-full h-auto object-contain max-w-md mx-auto"
          />
        </div>

        <div className="lg:col-span-7 text-white">
          <span className="dayan-reveal bt-eyebrow text-[hsl(var(--bt-accent))]">
            Quem assina esta reportagem
          </span>
          <h2 className="dayan-reveal dayan-reveal-delay-1 bt-display text-4xl lg:text-6xl mt-5 leading-[1.05]">
            Fernando Beteti.
            <br />
            <span className="bt-italic text-white/80">
              30 anos cobrindo o que a saúde brasileira esconde.
            </span>
          </h2>

          <div className="dayan-reveal dayan-reveal-delay-2 grid sm:grid-cols-2 gap-8 mt-10 text-white/80 text-base leading-relaxed">
            <p>
              Jornalista profissional, CEO do canal Repórter Saúde no
              YouTube e colunista de rádio. Já entrevistou centenas de
              médicos, pesquisadores e cientistas — sempre com a mesma
              vocação: traduzir o que a medicina integrativa sabe e a
              imprensa de massa não conta.
            </p>
            <p>
              Autor do livro <em className="bt-italic">"Não aceitei a
              sentença de morte que deram para minha filha"</em>, sobre a
              jornada de cura que o motivou a investigar saúde a fundo. É
              esse Beteti que está te falando agora — e que assina a
              recomendação do Acqualive.
            </p>
          </div>

          <div className="dayan-reveal grid grid-cols-3 gap-6 mt-12 border-t border-white/15 pt-8">
            {[
              { n: "+30", l: "anos de jornalismo" },
              { n: "+400k", l: "inscritos no canal" },
              { n: "100s", l: "de especialistas entrevistados" },
            ].map((s) => (
              <div key={s.n}>
                <div className="bt-display text-3xl text-[hsl(var(--bt-accent))]">
                  {s.n}
                </div>
                <div className="text-xs text-white/60 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   OFERTA
============================================================ */
const BetetiOferta = () => (
  <section
    id="oferta"
    className="relative py-24 lg:py-32 bg-[hsl(var(--bt-paper))] bt-paper"
  >
    <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
      <div className="dayan-reveal flex items-center gap-3 mb-8">
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          06 / Oferta editorial
        </span>
        <span className="flex-1 h-px bg-[hsl(var(--bt-line))]" />
        <span className="bt-mono text-xs text-[hsl(var(--bt-muted))]">
          exclusivo para o público do Beteti
        </span>
      </div>

      <div className="bg-white border-2 border-[hsl(var(--bt-ink))] p-8 lg:p-14 relative">
        <span className="absolute -top-4 left-8 bg-[hsl(var(--bt-red))] text-white px-4 py-1 bt-eyebrow text-[11px]">
          condições especiais
        </span>

        <h2 className="dayan-reveal bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05]">
          Leve para casa o filtro que eu uso{" "}
          <span className="bt-italic text-[hsl(var(--bt-red))]">
            e recomendo no ar.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="dayan-reveal space-y-4 text-[hsl(var(--bt-ink-soft))] text-base leading-relaxed">
            <p>
              Para quem chegou aqui pelas reportagens do Repórter Saúde,
              trabalhamos com condições comerciais especiais junto à
              Acqualive. Sem letra miúda, sem armadilha de assinatura.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                "Parcelamento em até 10x sem juros",
                "Frete grátis para todo o Brasil — consulte regiões disponíveis",
                "Garantia de saúde e bem-estar",
                "Atendimento humano por WhatsApp com a equipe Acqualive",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[hsl(var(--bt-ink))]"
                >
                  <span className="bt-display text-xl text-[hsl(var(--bt-red))] leading-none mt-0.5">
                    →
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="dayan-reveal dayan-reveal-delay-1 flex flex-col justify-center items-start gap-6">
            <div>
              <span className="bt-eyebrow text-[hsl(var(--bt-muted))] text-[11px]">
                Próximo passo
              </span>
              <p className="bt-display text-3xl text-[hsl(var(--bt-ink))] mt-2 leading-tight">
                Fale com a equipe Acqualive agora pelo WhatsApp.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(var(--bt-accent))] to-[hsl(var(--bt-red))] text-white px-7 py-5 font-bold uppercase tracking-wider text-sm shadow-2xl animate-pulse-soft hover:opacity-95 transition-opacity"
            >
              Quero meu Acqualive
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="bt-mono text-xs text-[hsl(var(--bt-muted))]">
              Ao clicar, você abre uma conversa direta no WhatsApp.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   FAQ
============================================================ */
const FAQS = [
  {
    q: "Por que o Beteti recomenda justamente o Acqualive?",
    a: "Porque é o único filtro brasileiro que entrega, em um único equipamento, os seis pilares da água ideal: sem cloro residual, pH alcalino, minerais preservados, antioxidante, estrutura molecular menor e sem microplásticos. Já testei, entrevistei os especialistas envolvidos, e a minha família bebe.",
  },
  {
    q: "Eu já tenho filtro em casa. Preciso trocar?",
    a: "A maioria dos filtros comuns só retém sedimentos e parte do cloro. Nenhum dos populares chega aos seis pilares da água ideal. Se você quer prevenção e saúde a longo prazo, vale conversar com a equipe Acqualive para uma análise.",
  },
  {
    q: "Funciona em apartamento, com caixa d'água compartilhada?",
    a: "Sim. O Acqualive é instalado no ponto de uso e trata a água que chega na sua torneira, independente da caixa d'água do prédio.",
  },
  {
    q: "E o pós-venda?",
    a: "Atendimento humano por WhatsApp, manutenção com refis disponíveis e suporte para qualquer dúvida. Não é venda e desaparece — é um equipamento para a vida.",
  },
];

const BetetiFAQ = () => (
  <section className="relative py-24 lg:py-32 bg-white">
    <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
      <div className="dayan-reveal flex items-center gap-3 mb-12">
        <span className="bt-eyebrow text-[hsl(var(--bt-red))]">
          07 / Tira-dúvidas
        </span>
        <span className="flex-1 h-px bg-[hsl(var(--bt-line))]" />
      </div>

      <h2 className="dayan-reveal bt-display text-4xl lg:text-6xl text-[hsl(var(--bt-ink))] leading-[1.05] mb-12">
        Perguntas que a redação{" "}
        <span className="bt-italic text-[hsl(var(--bt-red))]">mais recebeu.</span>
      </h2>

      <div className="divide-y divide-[hsl(var(--bt-line))] border-y border-[hsl(var(--bt-line))]">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="dayan-reveal group py-7 cursor-pointer"
          >
            <summary className="flex items-start justify-between gap-6 list-none">
              <h3 className="bt-display text-xl lg:text-2xl text-[hsl(var(--bt-ink))] leading-tight flex-1">
                <span className="bt-mono text-sm text-[hsl(var(--bt-red))] mr-3">
                  0{i + 1}
                </span>
                {f.q}
              </h3>
              <span className="bt-display text-2xl text-[hsl(var(--bt-red))] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-base text-[hsl(var(--bt-ink-soft))] leading-relaxed mt-4 pr-12 max-w-3xl">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   FOOTER
============================================================ */
const BetetiFooter = () => (
  <footer className="bt-dark text-white relative overflow-hidden">
    <div className="absolute inset-0 dayan-grain" />
    <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6">
          <span className="bt-display text-4xl lg:text-5xl">
            Repórter <span className="bt-italic text-[hsl(var(--bt-accent))]">Saúde</span>
          </span>
          <p className="bt-eyebrow text-white/60 mt-3">
            por Fernando Beteti · em parceria editorial com Acqualive
          </p>
        </div>
        <div className="md:col-span-3 text-sm text-white/70 space-y-2">
          <p>Acqualive Brasil</p>
          <p>Atendimento humano por WhatsApp</p>
          <p className="bt-mono text-xs text-white/50 mt-3">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
        <div className="md:col-span-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-white text-[hsl(var(--bt-ink))] px-5 py-3 font-bold uppercase tracking-wider text-xs hover:bg-[hsl(var(--bt-accent))] hover:text-white transition-colors"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/* ============================================================
   PAGE
============================================================ */
const FernandoBeteti = () => {
  useDayanReveal();

  return (
    <>
      <Helmet>
        <title>Fernando Beteti, a água do Brasil é uma emergência silenciosa | Acqualive</title>
        <meta
          name="description"
          content="Reportagem especial do jornalista Fernando Beteti sobre a água que entra no seu copo. Cloro, hormônios, microplásticos e a saída: o filtro Acqualive."
        />
        <meta property="og:title" content="Fernando Beteti × Acqualive" />
        <meta
          property="og:description"
          content="A água do brasileiro virou um escândalo que ninguém reporta. Carta aberta de um jornalista de 30 anos."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/fernando-beteti" />
      </Helmet>

      <main className="beteti-page min-h-screen">
        <BetetiNav />
        <BetetiHero />
        <BetetiReportagem />
        <BetetiVideos />
        <BetetiDor />
        <BetetiSolucao />
        <BetetiAcqualive />
        <BetetiBio />
        <BetetiOferta />
        <BetetiFAQ />
        <BetetiFooter />
      </main>
    </>
  );
};

export default FernandoBeteti;
