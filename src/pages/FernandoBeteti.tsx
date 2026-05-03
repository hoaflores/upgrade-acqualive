import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useDayanReveal } from "@/hooks/useDayanReveal";
import betetiCapa from "@/assets/beteti-capa.jpg";
import betetiCamera from "@/assets/beteti-camera.png";
import betetiLivro from "@/assets/beteti-livro.png";
import betetiEstudio from "@/assets/beteti-estudio.webp";
import betetiPerfil from "@/assets/beteti-perfil.png";
import betetiFoto2 from "@/assets/beteti-foto2.webp";

const WHATSAPP =
  "https://wa.me/555192928468?text=Ol%C3%A1!%20Vim%20pela%20reportagem%20do%20Fernando%20Beteti.%20Quero%20um%20Acqualive.";

const TODAY_PT = new Date().toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});

/* ============================================================
   TOPBAR + NAV (estilo portal)
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
    { label: "Reportagem", href: "#reportagem" },
    { label: "Vídeos", href: "#videos" },
    { label: "Investigação", href: "#dor" },
    { label: "A solução", href: "#solucao" },
    { label: "Acqualive", href: "#oferta" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar preta */}
      <div className="bg-[hsl(var(--bt-ink))] text-white/80 text-[11px]">
        <div className="max-w-[1300px] mx-auto px-5 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="bt-tag bt-tag-alert text-[9px] py-1 px-2">
              <span className="bt-live-dot mr-1.5" /> ao vivo
            </span>
            <span className="hidden sm:inline bt-meta text-white/70">
              {TODAY_PT}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 bt-meta text-white/70">
            <span>Brasil · Saúde Pública</span>
            <a href="#oferta" className="hover:text-white transition-colors">
              Apoie a reportagem
            </a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[hsl(var(--bt-line))]"
            : "bg-white border-b border-[hsl(var(--bt-line))]"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-baseline gap-3 min-w-0">
            <span className="bt-display text-2xl lg:text-3xl text-[hsl(var(--bt-ink))] tracking-tight whitespace-nowrap">
              FERNANDO BETETI
            </span>
            <span className="bt-meta hidden lg:inline text-[hsl(var(--bt-muted))]">
              Repórter Saúde
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[hsl(var(--bt-ink-soft))]">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="bt-link">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#oferta"
            className="hidden md:inline-flex items-center gap-2 bg-[hsl(var(--bt-red))] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[hsl(var(--bt-ink))] transition-colors"
          >
            Quero um Acqualive
          </a>

          <a
            href="#oferta"
            className="md:hidden bg-[hsl(var(--bt-red))] text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
          >
            Quero
          </a>
        </div>

        {/* Categories bar (estilo portal) */}
        <div className="bg-[hsl(var(--bt-paper))] border-t border-[hsl(var(--bt-line))]">
          <div className="max-w-[1300px] mx-auto px-5 lg:px-8 h-10 flex items-center gap-6 overflow-x-auto">
            {[
              { label: "Atualidades", href: "#reportagem" },
              { label: "Investigação", href: "#dor" },
              { label: "Pesquisa", href: "#solucao" },
              { label: "Polêmica", href: "#reportagem" },
              { label: "Vídeo", href: "#videos" },
              { label: "Entrevista", href: "#videos" },
              { label: "Acqualive", href: "#oferta" },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className={`text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  i === 1
                    ? "text-[hsl(var(--bt-blue-deep))]"
                    : "text-[hsl(var(--bt-ink-soft))] hover:text-[hsl(var(--bt-blue-deep))]"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Breaking news ticker */}
      <div className="bg-[hsl(var(--bt-alert))] text-white py-1.5 overflow-hidden">
        <div className="bt-ticker">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10 shrink-0">
              {[
                "URGENTE · 99,9% da água da torneira no Brasil contém cloro residual",
                "INVESTIGAÇÃO · restos de hormônios e fármacos detectados em águas tratadas",
                "ALERTA · caixas d'água sem limpeza viram criadouros silenciosos",
                "REPORTAGEM ESPECIAL · a água que você bebe pode estar te adoecendo",
              ].map((t, i) => (
                <span
                  key={`${k}-${i}`}
                  className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-10 shrink-0"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

/* ============================================================
   HERO — capa de jornal com matéria principal
============================================================ */
const BetetiHero = () => (
  <section
    id="top"
    className="relative bg-white pt-[178px] lg:pt-[200px] pb-12 lg:pb-16"
  >
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
      {/* Section label */}
      <div className="dayan-reveal flex items-center justify-between mb-5">
        <span className="bt-meta text-[hsl(var(--bt-red))]">
          Reportagem Especial · Capa
        </span>
        <span className="bt-meta hidden sm:inline">Edição online</span>
      </div>
      <div className="dayan-reveal bt-rule-double mb-8 lg:mb-10" />

      {/* Layout 7-5: matéria principal + retrato */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-7 dayan-reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="bt-tag bt-tag-red">Investigação</span>
            <span className="bt-meta">Por Fernando Beteti</span>
          </div>

          <h1 className="bt-display text-[2.2rem] sm:text-[3rem] lg:text-[4.4rem] xl:text-[5rem] text-[hsl(var(--bt-ink))]">
            A água do brasileiro virou um{" "}
            <span className="bt-italic">escândalo</span> que ninguém reporta.
          </h1>

          <p className="mt-7 text-lg lg:text-xl text-[hsl(var(--bt-ink-soft))] bt-body max-w-2xl">
            Cloro residual, fluoreto, restos de hormônios, microplásticos e
            metais pesados. Tudo dentro do limite "permitido" e fora de
            qualquer reportagem de horário nobre. Esta é a investigação que a
            indústria preferia que você nunca lesse.
          </p>

          <div className="mt-8 flex items-center gap-4 text-[hsl(var(--bt-muted))] bt-meta">
            <span>{TODAY_PT}</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--bt-muted))]" />
            <span>5 min de leitura</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--bt-muted))]" />
            <span>Atualidades</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#oferta"
              className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--bt-ink))] text-white px-6 py-3.5 font-bold uppercase tracking-wider text-xs hover:bg-[hsl(var(--bt-red))] transition-colors"
            >
              Quero a água que o Beteti recomenda →
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center gap-2 text-[hsl(var(--bt-ink))] py-3.5 font-bold uppercase tracking-wider text-xs bt-link"
            >
              Assistir à reportagem em vídeo
            </a>
          </div>
        </div>

        {/* Retrato */}
        <div className="lg:col-span-5 dayan-reveal dayan-reveal-delay-1">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--bt-ink))]">
              <img
                src={betetiCapa}
                alt="Fernando Beteti, jornalista"
                className="absolute inset-0 w-full h-full object-cover object-right"
                width={1080}
                height={1350}
              />
              <span className="absolute top-4 left-4 bt-tag">
                <span className="bt-live-dot mr-2" />
                em pauta
              </span>
            </div>
            <figcaption className="mt-3 bt-meta text-[hsl(var(--bt-muted))]">
              Foto: Acervo Repórter Saúde · Fernando Beteti, jornalista há 30 anos
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Stats em linha — barra de jornal */}
      <div className="dayan-reveal mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--bt-line))] border border-[hsl(var(--bt-line))]">
        {[
          { n: "30 anos", l: "de jornalismo investigativo em saúde" },
          { n: "+400 mil", l: "inscritos no canal Repórter Saúde" },
          { n: "100s", l: "de especialistas entrevistados" },
          { n: "1 escolha", l: "editorial de filtro: Acqualive" },
        ].map((s) => (
          <div key={s.n} className="bg-white p-5 lg:p-6">
            <div className="bt-display text-2xl lg:text-3xl text-[hsl(var(--bt-ink))]">
              {s.n}
            </div>
            <div className="bt-meta text-[hsl(var(--bt-muted))] mt-2 leading-snug">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   GRID DE MANCHETES (estilo portal — abaixo do hero)
============================================================ */
const HEADLINES = [
  {
    id: "nd6zhHTWR5s",
    tag: "Fique de olho",
    title: "Algo na sua caixa d'água pode estar te adoecendo",
    excerpt:
      "Sedimentos, biofilme e contaminação por microrganismos. O que vive escondido na caixa que ninguém limpa.",
    cat: "Investigação",
  },
  {
    id: "9MN4PxggKu4",
    tag: "Polêmica",
    title: "A água que bebemos tem hormônios e restos de remédio",
    excerpt:
      "Reportagem com Sidney Rodrigues sobre o que o tratamento convencional não retira da torneira.",
    cat: "Polêmica",
  },
  {
    id: "pkwYtusmIo4",
    tag: "Pesquisa",
    title: "Esta água inflama seu corpo, e você nem sabe",
    excerpt:
      "PRAL, pH e oxidação. O que os exames mostram quando você troca a água que bebe.",
    cat: "Pesquisa",
  },
];

const BetetiHeadlines = () => (
  <section className="bg-[hsl(var(--bt-paper))] py-14 lg:py-20 border-y border-[hsl(var(--bt-line))]">
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center justify-between mb-6">
        <h2 className="bt-display text-2xl lg:text-3xl">Mais lidas da semana</h2>
        <a href="#videos" className="bt-meta text-[hsl(var(--bt-blue-deep))] bt-link">
          Ver todos os vídeos →
        </a>
      </div>
      <div className="bt-rule mb-8" />

      <div className="grid md:grid-cols-3 gap-8">
        {HEADLINES.map((h, i) => (
          <article
            key={h.id}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bt-card-hover group`}
          >
            <div className="bt-video-frame aspect-video mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${h.id}?rel=0&modestbranding=1`}
                title={h.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <span className="absolute top-3 left-3 bt-tag z-[3]">{h.tag}</span>
            </div>
            <span className="bt-meta text-[hsl(var(--bt-blue-deep))]">{h.cat}</span>
            <h3 className="bt-display text-xl lg:text-2xl text-[hsl(var(--bt-ink))] mt-2 leading-tight group-hover:text-[hsl(var(--bt-blue-deep))] transition-colors">
              {h.title}
            </h3>
            <p className="text-sm text-[hsl(var(--bt-ink-soft))] bt-body mt-3">
              {h.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 bt-meta text-[hsl(var(--bt-muted))]">
              <span>Por Fernando Beteti</span>
              <span className="w-1 h-1 rounded-full bg-[hsl(var(--bt-muted))]" />
              <span>Repórter Saúde</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   REPORTAGEM (carta aberta, formato matéria de portal)
============================================================ */
const BetetiReportagem = () => (
  <section id="reportagem" className="relative py-20 lg:py-28 bg-white">
    <div className="max-w-[820px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center gap-3 mb-5">
        <span className="bt-tag bt-tag-red">Atualidades</span>
        <span className="bt-meta">Reportagem · 01</span>
      </div>

      <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))]">
        Cobri 30 anos de notícia. Descobri que a maior delas estava no meu copo.
      </h2>

      <div className="dayan-reveal mt-5 flex items-center gap-4 bt-meta text-[hsl(var(--bt-muted))]">
        <span>Por Fernando Beteti</span>
        <span className="w-1 h-1 rounded-full bg-[hsl(var(--bt-muted))]" />
        <span>Atualizado em {TODAY_PT}</span>
        <span className="w-1 h-1 rounded-full bg-[hsl(var(--bt-muted))]" />
        <span>3 min</span>
      </div>

      <div className="bt-rule mt-6 mb-8" />

      <div className="dayan-reveal space-y-6 text-[hsl(var(--bt-ink))] text-lg bt-body">
        <p className="bt-dropcap">
          Comecei a trabalhar como jornalista em 1995. Passei por rádio,
          televisão, agência de notícias, fui CEO da minha própria operação e
          hoje, no canal Repórter Saúde, mais de 400 mil pessoas acompanham o
          que apuramos sobre saúde, alimentação e prevenção.
        </p>
        <p>
          Em todos esses anos, aprendi uma regra: a notícia mais perigosa é a
          que ninguém quer dar. E é exatamente isso que acontece com a água
          que abastece as casas brasileiras.
        </p>
        <blockquote className="border-l-4 border-[hsl(var(--bt-red))] pl-6 my-8">
          <p className="bt-display text-2xl lg:text-3xl text-[hsl(var(--bt-ink))] leading-snug">
            "Existe uma diferença gigante entre água potável, que não te mata
            na hora, e água ideal, aquela que o corpo realmente precisa para
            funcionar bem."
          </p>
          <footer className="bt-meta text-[hsl(var(--bt-muted))] mt-3">
            Fernando Beteti, Repórter Saúde
          </footer>
        </blockquote>
        <p>
          Os limites de cloro, fluoreto, alumínio e fármacos considerados
          "seguros" foram desenhados para não causar morte aguda. Não para
          preservar sua tireoide, sua microbiota, seu fígado e o cérebro dos
          seus filhos.
        </p>
        <p>
          Por isso essa página existe. Reuni aqui as principais reportagens
          que produzi sobre o assunto, ao lado de especialistas que estudam a
          água há décadas, e a única solução que eu, pessoalmente, recomendo
          para quem assiste o nosso canal: o filtro Acqualive.
        </p>
      </div>
    </div>
  </section>
);

/* ============================================================
   VIDEOS — galeria estilo "TV / Vídeos" do portal
============================================================ */
const VIDEOS = [
  {
    id: "G74XNiv7MUY",
    cat: "Investigação",
    title: "Os 2 segredos da água Acqualive",
    desc: "O que faz desse filtro o único que eu recomendo no canal, em detalhe técnico.",
    duration: "12 min",
  },
  {
    id: "hUOj1BbSr3k",
    cat: "Entrevista",
    title: "A médica que curou a azia trocando a água",
    desc: "Sidney Rodrigues conta o caso clínico que mudou a forma dele de enxergar a água.",
    duration: "8 min",
  },
  {
    id: "x1SgUYcT6Ak",
    cat: "Especialista",
    title: "Dr. Dayan Siebra: como escolher a água ideal",
    desc: "Cirurgião cardiovascular explica por que a água que cura é diferente da que vende.",
    duration: "10 min",
  },
  {
    id: "5VipdvlZHHM",
    cat: "Cortes",
    title: "O cemitério que o cloro deixa na água",
    desc: "Trihalometanos, o subproduto do cloro que poucos jornalistas se atrevem a citar.",
    duration: "6 min",
  },
];

const BetetiVideos = () => {
  const [feature, ...rest] = VIDEOS;
  return (
    <section
      id="videos"
      className="relative py-20 lg:py-28 bg-[hsl(var(--bt-paper))] border-y border-[hsl(var(--bt-line))]"
    >
      <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
        <div className="dayan-reveal flex items-end justify-between gap-6 mb-6">
          <div>
            <span className="bt-meta text-[hsl(var(--bt-blue-deep))]">02 · Vídeo</span>
            <h2 className="bt-display text-3xl lg:text-5xl mt-2 text-[hsl(var(--bt-ink))]">
              Reportagens em vídeo
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@FernandoBeteti"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline bt-meta text-[hsl(var(--bt-ink))] bt-link"
          >
            Canal completo no YouTube →
          </a>
        </div>
        <div className="bt-rule-double mb-10" />

        <p className="dayan-reveal max-w-2xl text-base text-[hsl(var(--bt-ink-soft))] bt-body mb-12">
          Sou jornalista de vídeo. É na frente da câmera que eu apuro,
          confronto e mostro a fonte. Quatro reportagens, com o Dr. Dayan
          Siebra e o pesquisador Sidney Rodrigues, que explicam por que a
          água do Brasil é uma emergência silenciosa, e por que existe uma
          saída.
        </p>

        {/* Layout: vídeo em destaque + grid 3 colunas */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Destaque */}
          <article className="dayan-reveal lg:col-span-8">
            <div className="bt-video-frame aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${feature.id}?rel=0&modestbranding=1`}
                title={feature.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <span className="absolute top-4 left-4 bt-tag bt-tag-red z-[3]">
                Em destaque
              </span>
              <span className="bt-play-badge">
                <span className="bt-play-tri" /> {feature.duration}
              </span>
            </div>
            <div className="mt-5 flex items-start gap-5">
              <span className="bt-counter shrink-0">01</span>
              <div>
                <span className="bt-tag">{feature.cat}</span>
                <h3 className="bt-display text-2xl lg:text-3xl text-[hsl(var(--bt-ink))] mt-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base text-[hsl(var(--bt-ink-soft))] bt-body mt-3 max-w-2xl">
                  {feature.desc}
                </p>
              </div>
            </div>
          </article>

          {/* Painel lateral azul-marinho */}
          <aside className="dayan-reveal dayan-reveal-delay-2 lg:col-span-4 bt-video-feature p-7 lg:p-9 flex flex-col">
            <span className="bt-meta text-white/60">Curadoria editorial</span>
            <h3 className="bt-display text-2xl lg:text-3xl text-white mt-3 leading-tight">
              Quatro reportagens. Uma única conclusão.
            </h3>
            <p className="text-sm text-white/75 bt-body mt-4">
              Selecionei os vídeos que mais geraram debate no canal. Assista
              em ordem, se conseguir. A história fica mais densa a cada
              episódio.
            </p>
            <div className="mt-auto pt-8">
              <div className="flex items-baseline gap-3 border-t border-white/15 pt-5">
                <span className="bt-display text-4xl text-white">04</span>
                <span className="bt-meta text-white/60">reportagens nesta sala</span>
              </div>
              <a
                href="#oferta"
                className="mt-5 inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider bt-link"
              >
                Ver a oferta editorial →
              </a>
            </div>
          </aside>
        </div>

        {/* Grid secundário */}
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((v, i) => (
            <article
              key={v.id}
              className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bt-card-hover`}
            >
              <div className="bt-video-frame aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <span className="bt-play-badge">
                  <span className="bt-play-tri" /> {v.duration}
                </span>
              </div>
              <div className="mt-4 flex items-start gap-4">
                <span className="bt-counter text-[2.5rem] shrink-0">
                  0{i + 2}
                </span>
                <div>
                  <span className="bt-tag">{v.cat}</span>
                  <h3 className="bt-display text-xl text-[hsl(var(--bt-ink))] mt-3 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--bt-ink-soft))] mt-2 bt-body leading-relaxed">
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
};

/* ============================================================
   DOR — sintomas (estilo lista de matéria de saúde)
============================================================ */
const SINTOMAS = [
  {
    n: "01",
    t: "Cansaço sem explicação",
    d: "Você dorme, come, descansa e mesmo assim acorda exausto. A desidratação celular crônica é uma das causas mais subestimadas pela medicina convencional.",
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
  <section id="dor" className="relative py-20 lg:py-28 bg-white">
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center gap-3 mb-5">
        <span className="bt-tag bt-tag-red">Investigação</span>
        <span className="bt-meta">03 · O preço escondido</span>
      </div>

      <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))] max-w-4xl">
        Você convive com sintomas que o seu médico nunca associou à sua água.
      </h2>
      <div className="bt-rule mt-6 mb-10" />

      <p className="dayan-reveal max-w-2xl text-lg text-[hsl(var(--bt-ink-soft))] bt-body mb-12">
        Em décadas de reportagem, recebi milhares de relatos. A história se
        repete. As pessoas só conectam o problema à água depois que trocam e
        os sintomas começam a desaparecer.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--bt-line))] border border-[hsl(var(--bt-line))]">
        {SINTOMAS.map((s, i) => (
          <article
            key={s.n}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-white p-7 lg:p-8`}
          >
            <div className="flex items-center gap-3">
              <span className="bt-tag">Sintoma {s.n}</span>
            </div>
            <h3 className="bt-display text-2xl text-[hsl(var(--bt-ink))] mt-4 leading-tight">
              {s.t}
            </h3>
            <p className="text-sm text-[hsl(var(--bt-ink-soft))] bt-body mt-3 leading-relaxed">
              {s.d}
            </p>
          </article>
        ))}
      </div>

      {/* Citação preta destacada (estilo box editorial) */}
      <div className="dayan-reveal mt-16 bt-dark p-10 lg:p-14">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-2">
            <img
              src={betetiCamera}
              alt="Fernando Beteti em transmissão"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full mx-auto bg-white/10"
            />
          </div>
          <div className="lg:col-span-10">
            <span className="bt-meta text-white/60">Análise · Repórter Saúde</span>
            <p className="bt-display text-2xl lg:text-4xl text-white mt-3 leading-tight">
              "O brasileiro foi educado a confiar no tratamento da torneira. O
              problema é que o tratamento foi feito para evitar que você
              morresse hoje, não para que você viva bem amanhã."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SOLUÇÃO — pilares
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
    d: "Capacidade de doar elétrons e neutralizar radicais livres, o oposto da água engarrafada parada na prateleira.",
  },
  {
    n: "05",
    t: "Estrutura molecular menor",
    d: "Hidratação celular real, não apenas líquido passando pelo corpo.",
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
    className="relative py-20 lg:py-28 bg-[hsl(var(--bt-paper))] border-y border-[hsl(var(--bt-line))]"
  >
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center gap-3 mb-5">
        <span className="bt-tag bt-tag-red">Pesquisa</span>
        <span className="bt-meta">04 · A água ideal</span>
      </div>

      <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))] max-w-4xl">
        Existe uma água que o corpo reconhece como sua.
      </h2>
      <div className="bt-rule mt-6 mb-10" />

      <p className="dayan-reveal max-w-2xl text-lg text-[hsl(var(--bt-ink-soft))] bt-body mb-12">
        Pesquisadores chamam de "água ideal" a que cumpre seis critérios.
        Quando todos estão presentes, o corpo deixa de gastar energia para se
        proteger do líquido que recebe e começa a se reparar.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--bt-line))] border border-[hsl(var(--bt-line))]">
        {PILARES.map((p, i) => (
          <article
            key={p.n}
            className={`dayan-reveal dayan-reveal-delay-${(i % 3) + 1} bg-white p-7 lg:p-8`}
          >
            <div className="flex items-center justify-between">
              <span className="bt-tag">Pilar {p.n}</span>
              <span className="bt-display text-3xl text-[hsl(var(--bt-line-strong))]">
                {p.n}
              </span>
            </div>
            <h3 className="bt-display text-2xl text-[hsl(var(--bt-ink))] mt-4 leading-tight">
              {p.t}
            </h3>
            <p className="text-sm text-[hsl(var(--bt-ink-soft))] bt-body mt-3 leading-relaxed">
              {p.d}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   ACQUALIVE
============================================================ */
const BetetiAcqualive = () => (
  <section className="relative py-20 lg:py-28 bg-white">
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 dayan-reveal">
          <figure className="relative">
            <img
              src={betetiEstudio}
              alt="Fernando Beteti no estúdio Repórter Saúde"
              className="w-full h-auto object-cover"
            />
            <span className="absolute top-4 left-4 bt-tag bt-tag-red">
              Recomendação editorial
            </span>
          </figure>
        </div>

        <div className="lg:col-span-6">
          <div className="dayan-reveal flex items-center gap-3 mb-5">
            <span className="bt-tag">Acqualive</span>
            <span className="bt-meta">05 · A escolha do Repórter Saúde</span>
          </div>

          <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))]">
            O único filtro que entra no meu programa{" "}
            <span className="bt-italic">com nome e sobrenome</span>.
          </h2>

          <div className="dayan-reveal mt-6 space-y-5 text-[hsl(var(--bt-ink-soft))] text-base lg:text-lg bt-body">
            <p>
              Recebo apresentações de marcas o tempo todo. A maioria não passa
              do primeiro filtro técnico. O Acqualive entrega os seis pilares
              da água ideal em um único equipamento brasileiro, com
              tecnologia patenteada e décadas de pesquisa por trás.
            </p>
            <p>
              É por isso que ele é o único parceiro fixo do canal Repórter
              Saúde quando o assunto é água. Não é publicidade comum: é
              recomendação editorial. Eu testei, minha família bebe, e os
              especialistas que entrevisto também.
            </p>
          </div>

          <ul className="dayan-reveal mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Tecnologia brasileira, com peças trocáveis",
              "Filtragem em múltiplos estágios + alcalinização natural",
              "Sem desperdício de água, não é osmose reversa",
              "Atende família inteira, instalação simples",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-sm text-[hsl(var(--bt-ink))] border-l-2 border-[hsl(var(--bt-red))] pl-3"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="dayan-reveal mt-8">
            <a
              href="#oferta"
              className="group inline-flex items-center gap-3 bg-[hsl(var(--bt-ink))] text-white px-7 py-4 font-bold uppercase tracking-wider text-xs hover:bg-[hsl(var(--bt-red))] transition-colors"
            >
              Ver a oferta para leitores do Beteti →
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
  <section className="relative py-20 lg:py-28 bt-dark overflow-hidden">
    <div className="relative max-w-[1300px] mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 dayan-reveal">
          <img
            src={betetiPerfil}
            alt="Fernando Beteti, Repórter Saúde"
            className="w-full h-auto object-contain max-w-md mx-auto"
          />
        </div>

        <div className="lg:col-span-7 text-white">
          <span className="dayan-reveal bt-meta text-[hsl(var(--bt-accent))]">
            Quem assina esta reportagem
          </span>
          <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl mt-3 leading-tight text-white">
            Fernando Beteti. 30 anos cobrindo o que a saúde brasileira esconde.
          </h2>

          <div className="dayan-reveal grid sm:grid-cols-2 gap-8 mt-8 text-white/80 text-base bt-body">
            <p>
              Jornalista profissional, CEO do canal Repórter Saúde no YouTube
              e colunista de rádio. Já entrevistou centenas de médicos,
              pesquisadores e cientistas, sempre com a mesma vocação: traduzir
              o que a medicina integrativa sabe e a imprensa de massa não conta.
            </p>
            <p>
              Autor do livro "Não aceitei a sentença de morte que deram para
              minha filha", sobre a jornada de cura que o motivou a investigar
              saúde a fundo. É esse Beteti que está te falando agora e que
              assina a recomendação do Acqualive.
            </p>
          </div>

          <div className="dayan-reveal grid grid-cols-3 gap-6 mt-10 border-t border-white/15 pt-7">
            {[
              { n: "+30", l: "anos de jornalismo" },
              { n: "+400k", l: "inscritos no canal" },
              { n: "100s", l: "de especialistas entrevistados" },
            ].map((s) => (
              <div key={s.n}>
                <div className="bt-display text-3xl text-[hsl(var(--bt-accent))]">
                  {s.n}
                </div>
                <div className="bt-meta text-white/60 mt-2">{s.l}</div>
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
    className="relative py-20 lg:py-28 bg-[hsl(var(--bt-paper))] border-y border-[hsl(var(--bt-line))]"
  >
    <div className="max-w-[1100px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center gap-3 mb-5">
        <span className="bt-tag bt-tag-red">Acqualive</span>
        <span className="bt-meta">06 · Oferta editorial</span>
      </div>

      <div className="bg-white border border-[hsl(var(--bt-line-strong))] p-7 lg:p-12 relative">
        <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))]">
          Leve para casa o filtro que eu uso e recomendo no ar.
        </h2>
        <div className="bt-rule mt-6 mb-8" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="dayan-reveal space-y-4 text-[hsl(var(--bt-ink-soft))] text-base bt-body">
            <p>
              Para quem chegou aqui pelas reportagens do Repórter Saúde,
              trabalhamos com condições comerciais especiais junto à
              Acqualive. Sem letra miúda, sem armadilha de assinatura.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                "Parcelamento em até 10x sem juros",
                "Frete grátis para todo o Brasil. Consulte regiões disponíveis",
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

          <div className="dayan-reveal flex flex-col justify-center items-start gap-5">
            <div>
              <span className="bt-meta text-[hsl(var(--bt-muted))]">
                Próximo passo
              </span>
              <p className="bt-display text-2xl lg:text-3xl text-[hsl(var(--bt-ink))] mt-2 leading-tight">
                Fale com a equipe Acqualive agora pelo WhatsApp.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(var(--bt-accent))] to-[hsl(var(--bt-red))] text-white px-7 py-5 font-bold uppercase tracking-wider text-sm shadow-2xl animate-pulse-soft hover:opacity-95 transition-opacity"
            >
              Quero meu Acqualive →
            </a>
            <span className="bt-meta text-[hsl(var(--bt-muted))]">
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
    a: "Atendimento humano por WhatsApp, manutenção com refis disponíveis e suporte para qualquer dúvida. Não é venda e desaparece, é um equipamento para a vida.",
  },
];

const BetetiFAQ = () => (
  <section className="relative py-20 lg:py-28 bg-white">
    <div className="max-w-[900px] mx-auto px-5 lg:px-8">
      <div className="dayan-reveal flex items-center gap-3 mb-5">
        <span className="bt-tag">Tira-dúvidas</span>
        <span className="bt-meta">07 · Perguntas frequentes</span>
      </div>

      <h2 className="dayan-reveal bt-display text-3xl lg:text-5xl text-[hsl(var(--bt-ink))] mb-8">
        Perguntas que a redação mais recebeu.
      </h2>
      <div className="bt-rule mb-2" />

      <div className="divide-y divide-[hsl(var(--bt-line))]">
        {FAQS.map((f, i) => (
          <details key={i} className="dayan-reveal group py-6 cursor-pointer">
            <summary className="flex items-start justify-between gap-6 list-none">
              <h3 className="bt-display text-xl lg:text-2xl text-[hsl(var(--bt-ink))] leading-tight flex-1">
                <span className="bt-meta text-[hsl(var(--bt-red))] mr-3 inline-block">
                  0{i + 1}
                </span>
                {f.q}
              </h3>
              <span className="bt-display text-2xl text-[hsl(var(--bt-red))] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-base text-[hsl(var(--bt-ink-soft))] bt-body mt-4 pr-12">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   FOOTER (estilo portal)
============================================================ */
const BetetiFooter = () => (
  <footer className="bt-dark text-white">
    <div className="max-w-[1300px] mx-auto px-5 lg:px-8 py-14">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <span className="bt-display text-3xl lg:text-4xl text-white">
            FERNANDO BETETI
          </span>
          <p className="bt-meta text-white/60 mt-2">
            Repórter Saúde · em parceria editorial com Acqualive
          </p>
          <p className="text-sm text-white/70 bt-body mt-5 max-w-md">
            A informação é o melhor remédio para a saúde. Reportagens,
            entrevistas e investigações sobre o que afeta o corpo e a vida do
            brasileiro.
          </p>
        </div>
        <div className="md:col-span-3 text-sm text-white/70">
          <span className="bt-meta text-white/50">Editorias</span>
          <ul className="mt-3 space-y-2">
            {["Atualidades", "Investigação", "Pesquisa", "Polêmica", "Vídeo"].map(
              (c) => (
                <li key={c}>
                  <a href="#reportagem" className="bt-link hover:text-white">
                    {c}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="md:col-span-4">
          <span className="bt-meta text-white/50">Fale com a Acqualive</span>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-white text-[hsl(var(--bt-ink))] px-5 py-3 font-bold uppercase tracking-wider text-xs hover:bg-[hsl(var(--bt-accent))] hover:text-white transition-colors"
          >
            Falar no WhatsApp →
          </a>
          <p className="bt-meta text-white/50 mt-5">
            © {new Date().getFullYear()} Repórter Saúde · Todos os direitos
            reservados.
          </p>
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
        <title>
          Fernando Beteti, a água do Brasil é uma emergência silenciosa | Acqualive
        </title>
        <meta
          name="description"
          content="Reportagem especial do jornalista Fernando Beteti sobre a água que entra no seu copo. Cloro, hormônios, microplásticos e a saída: o filtro Acqualive."
        />
        <meta property="og:title" content="Fernando Beteti × Acqualive" />
        <meta
          property="og:description"
          content="A água do brasileiro virou um escândalo que ninguém reporta. Carta aberta de um jornalista de 30 anos."
        />
        <link
          rel="canonical"
          href="https://paginas.acqualive.com.br/fernando-beteti"
        />
      </Helmet>

      <main className="beteti-page min-h-screen">
        <BetetiNav />
        <BetetiHero />
        <BetetiHeadlines />
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
