import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, Coffee, Sparkles, Droplet, Quote, X } from "lucide-react";
import heroPourover from "@/assets/cafe-hero-pourover.jpg";
import caseWilliam from "@/assets/cafe-case-williamsons.jpg";
import terracotaAmbiente from "@/assets/cafe-terracota-ambiente.jpg";
import smartFilterProduct from "@/assets/indica-prod-terracota.png";
import logoBranca from "@/assets/acqualive-logo-white.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATS_CONTATO =
  "https://wa.me/555192928468?text=Olá!%20Vim%20pela%20página%20Parcerias%20Café%20e%20quero%20conhecer%20as%20soluções%20Acqualive.";
const WHATS_SOLUCOES =
  "https://wa.me/555192928468?text=Olá!%20Quero%20conhecer%20os%20Smart%20Filters%20Acqualive%20para%20o%20preparo%20de%20café.";

type Sense = { word: string; note: string };
const SENSES: Sense[] = [
  { word: "Doçura", note: "Açúcares naturais que aparecem quando a extração está em equilíbrio." },
  { word: "Acidez", note: "A vivacidade do café, valorizada por uma água sem excessos minerais." },
  { word: "Corpo", note: "A sensação na boca, mais limpa quando a água é livre de cloro." },
  { word: "Aroma", note: "Os voláteis do grão se expressam melhor em água de boa qualidade." },
  { word: "Equilíbrio", note: "A harmonia entre todas as notas, começa pela base líquida." },
  { word: "Extração", note: "A dança entre água e moagem que define a xícara final." },
];

type CaseVideo = {
  id: string;
  youtubeId: string;
  tag: string;
  title: string;
  desc: string;
  duration: string;
  ratio: "vertical" | "horizontal";
};

const VIDEOS: CaseVideo[] = [
  {
    id: "v1",
    youtubeId: "J8ukTmhKWgY",
    tag: "Bastidores · Short",
    title: "A água certa para o café certo",
    desc: "Ramon mostra, em segundos, como a escolha da água muda a percepção do café especial na xícara.",
    duration: "0:45",
    ratio: "vertical",
  },
  {
    id: "v2",
    youtubeId: "NPURY1qXxzE",
    tag: "Cafeteria · Short",
    title: "O ritual da extração começa na água",
    desc: "Por dentro da rotina da William & Sons: o cuidado com cada detalhe que antecede o primeiro gole.",
    duration: "0:52",
    ratio: "vertical",
  },
  {
    id: "v3",
    youtubeId: "LbltSGGQ_vk",
    tag: "Mini documentário",
    title: "William & Sons × Acqualive: a parceria",
    desc: "O case completo: por que uma boutique de cafés especiais escolheu a Acqualive como base da sua receita.",
    duration: "2:14",
    ratio: "horizontal",
  },
];

// Scroll reveal hook
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// Counter animation
const Counter = ({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const ParceriasCafe = () => {
  const [openVideo, setOpenVideo] = useState<CaseVideo | null>(null);
  const [activeSense, setActiveSense] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min((y / h) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-cafe-body text-cafe-cream antialiased">
      <Helmet>
        <title>Parcerias Café | Acqualive × William & Sons Coffee Co.</title>
        <meta
          name="description"
          content="A água é mais de 90% de uma xícara de café. Conheça a parceria entre Acqualive e William & Sons Coffee Co. — quando a excelência no café encontra excelência na água."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/parcerias-cafe" />
        <meta property="og:title" content="Parcerias Café | Acqualive × William & Sons" />
        <meta
          property="og:description"
          content="Antes do café tocar a xícara, ele encontra a água. Descubra o case Acqualive com a William & Sons Coffee Co."
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
          .font-cafe-display { font-family: 'Cormorant Garamond', Georgia, serif; }
          .font-cafe-body { font-family: 'Inter', system-ui, sans-serif; }
          .text-cafe-cream { color: #e8d9c0; }
          .text-cafe-gold { color: #c9a86a; }
          .text-cafe-mute { color: #9b8a73; }
          .bg-cafe-base { background-color: #0e0805; }
          .bg-cafe-cream { background-color: #e8d9c0; }
          .bg-cafe-cream-hover:hover { background-color: #f4ead8; }
          .bg-cafe-gold { background-color: #c9a86a; }

          /* Reveal */
          [data-reveal] { opacity: 0; transform: translateY(28px); transition: opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); }
          [data-reveal].is-revealed { opacity: 1; transform: translateY(0); }
          [data-reveal-delay="1"] { transition-delay: 80ms; }
          [data-reveal-delay="2"] { transition-delay: 160ms; }
          [data-reveal-delay="3"] { transition-delay: 240ms; }
          [data-reveal-delay="4"] { transition-delay: 320ms; }
          [data-reveal-delay="5"] { transition-delay: 400ms; }

          /* Grain */
          .grain::before {
            content: ''; position: absolute; inset: 0; pointer-events: none;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.6  0 0 0 0 0.45  0 0 0 0 0.25  0 0 0 0.12 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
            mix-blend-mode: overlay; opacity: 0.5;
          }

          /* Steam */
          @keyframes steamRise {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: .55; }
            100% { transform: translateY(-80px) scale(1.4); opacity: 0; }
          }
          .steam { animation: steamRise 4.2s ease-out infinite; }
          .steam.delay-1 { animation-delay: 0.9s; }
          .steam.delay-2 { animation-delay: 1.8s; }
          .steam.delay-3 { animation-delay: 2.6s; }

          /* Water drop */
          @keyframes dripFall {
            0% { transform: translateY(-12px) scaleY(0.6); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translateY(120px) scaleY(1.3); opacity: 0; }
          }
          .drip { animation: dripFall 2.6s ease-in infinite; }

          /* Shimmer text */
          @keyframes goldShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .gold-shimmer {
            background: linear-gradient(90deg, #c9a86a 0%, #f5e3b3 25%, #c9a86a 50%, #8c6a3a 75%, #c9a86a 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: goldShimmer 6s linear infinite;
          }

          /* Marquee */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { animation: marquee 40s linear infinite; }

          /* Sense pill hover */
          .sense-pill { transition: all .35s cubic-bezier(.2,.7,.2,1); }
          .sense-pill:hover, .sense-pill.is-active {
            transform: translateY(-2px);
            color: #f5e3b3;
            text-shadow: 0 0 24px rgba(245,227,179,0.45);
          }

          /* Cup glow pulse */
          @keyframes cupGlow {
            0%, 100% { opacity: .55; transform: scale(1); }
            50% { opacity: .85; transform: scale(1.06); }
          }
          .cup-glow { animation: cupGlow 5s ease-in-out infinite; }

          /* Floating dots */
          @keyframes floatY {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
          .float-y { animation: floatY 6s ease-in-out infinite; }

          /* Play ripple */
          @keyframes ripple {
            0% { transform: scale(1); opacity: .6; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          .ripple { animation: ripple 2.2s ease-out infinite; }
        `}</style>
      </Helmet>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cafe-gold via-[#f5e3b3] to-cafe-gold transition-[width] duration-150"
          style={{ width: `${progress}%`, boxShadow: "0 0 12px rgba(201,168,106,0.6)" }}
        />
      </div>

      {/* Continuous warm dark backdrop */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 700px at 80% -10%, rgba(201,168,106,0.18), transparent 60%), radial-gradient(900px 600px at 0% 30%, rgba(140,70,40,0.20), transparent 65%), radial-gradient(1100px 800px at 50% 110%, rgba(80,35,15,0.35), transparent 70%), linear-gradient(180deg, #120a06 0%, #0e0805 40%, #0a0503 100%)",
        }}
      />
      <div aria-hidden className="grain fixed inset-0 -z-10" />

      {/* Floating brand dots */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <span className="absolute top-[20%] left-[8%] h-1.5 w-1.5 rounded-full bg-cafe-gold/40 float-y" />
        <span className="absolute top-[60%] right-[12%] h-1 w-1 rounded-full bg-cafe-gold/50 float-y" style={{ animationDelay: "1.5s" }} />
        <span className="absolute top-[80%] left-[22%] h-1 w-1 rounded-full bg-cafe-cream/30 float-y" style={{ animationDelay: "3s" }} />
        <span className="absolute top-[35%] right-[30%] h-1.5 w-1.5 rounded-full bg-cafe-gold/30 float-y" style={{ animationDelay: "2s" }} />
      </div>

      {/* Top bar — sticky after scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          scrollY > 60
            ? "py-4 bg-[#0e0805]/80 backdrop-blur-md border-b border-cafe-gold/10"
            : "py-7 bg-transparent border-b border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <img src={logoBranca} alt="Acqualive" className="h-7 w-auto opacity-95" />
          <span className="hidden sm:inline text-cafe-mute text-xs tracking-[0.25em] uppercase">
            × William &amp; Sons
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-cafe-mute">
          <a href="#manifesto" className="hover:text-cafe-cream transition-colors">Manifesto</a>
          <a href="#case" className="hover:text-cafe-cream transition-colors">O Case</a>
          <a href="#solucao" className="hover:text-cafe-cream transition-colors">Solução</a>
        </nav>
        <a
          href={WHATS_CONTATO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cafe-gold/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cafe-cream hover:bg-cafe-gold/10 transition"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          Falar agora
        </a>
      </header>

      <div id="top" />

      {/* 1. HERO */}
      <section className="relative px-6 md:px-12 pt-36 md:pt-40 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div
              data-reveal
              className="inline-flex items-center gap-3 mb-8 rounded-full border border-cafe-gold/30 bg-white/[0.02] px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-cafe-gold/60 ripple" />
                <span className="relative h-2 w-2 rounded-full bg-cafe-gold" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-cafe-gold">
                Case real · William &amp; Sons Coffee Co.
              </span>
            </div>

            <h1
              data-reveal
              data-reveal-delay="1"
              className="font-cafe-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4.4rem] tracking-tight text-cafe-cream"
            >
              Uma boa xícara de café{" "}
              <em className="gold-shimmer not-italic font-medium italic">começa antes</em>{" "}
              do primeiro gole.
            </h1>

            <p data-reveal data-reveal-delay="2" className="mt-7 max-w-xl text-lg md:text-xl text-cafe-cream/80 leading-relaxed">
              Em uma cafeteria de cafés especiais, cada detalhe importa: o grão, a torra, a receita, o barista — e a água.
            </p>
            <p data-reveal data-reveal-delay="3" className="mt-5 max-w-xl text-base text-cafe-mute leading-relaxed">
              Mais de <span className="text-cafe-gold font-medium"><Counter to={90} suffix="%" /></span> de uma xícara de café é água. Por isso, a qualidade da água influencia diretamente a extração, o equilíbrio e a experiência final.
            </p>

            <div data-reveal data-reveal-delay="4" className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#manifesto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cafe-cream text-[#1a0f08] px-7 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(232,217,192,0.5)]"
                style={{ color: "#1a0f08" }}
              >
                Descubra o papel da água no café
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#case"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cafe-gold/40 px-7 py-4 text-sm font-medium tracking-wide text-cafe-cream hover:bg-cafe-gold/10 hover:border-cafe-gold/70 transition-all"
              >
                Ver parceria com a William &amp; Sons
              </a>
            </div>

            {/* Mini stats strip */}
            <div data-reveal data-reveal-delay="5" className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: 90, s: "%", l: "água na xícara" },
                { n: 100, s: "%", l: "cafés especiais" },
                { n: 1, s: "ª", l: "parceria do gênero" },
              ].map((s, i) => (
                <div key={i} className="border-l border-cafe-gold/20 pl-4">
                  <p className="font-cafe-display text-3xl text-cafe-cream">
                    <Counter to={s.n} suffix={s.s} />
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cafe-mute mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image with parallax */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative" data-reveal data-reveal-delay="2">
            <div
              className="relative"
              style={{ transform: `translateY(${Math.min(scrollY * 0.08, 40)}px)` }}
            >
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60 cup-glow"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(201,168,106,0.35), transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-cafe-gold/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                <img
                  src={heroPourover}
                  alt="Café especial sendo coado em uma cafeteria premium"
                  width={1536}
                  height={1024}
                  className="relative w-full object-cover transition-transform duration-[2.4s] ease-out hover:scale-105"
                />
                {/* Drip animation overlay */}
                <span
                  aria-hidden
                  className="absolute left-[44%] top-[14%] h-3 w-1 rounded-full bg-cafe-cream/70 drip"
                />
                <span
                  aria-hidden
                  className="absolute left-[46%] top-[14%] h-2 w-1 rounded-full bg-cafe-cream/50 drip"
                  style={{ animationDelay: "1.1s" }}
                />
              </div>

              <div className="absolute -bottom-5 -left-5 hidden md:block bg-[#0e0805]/90 backdrop-blur border border-cafe-gold/20 rounded-xl px-5 py-3">
                <p className="font-cafe-display italic text-cafe-gold text-lg leading-tight">
                  Antes do café tocar a xícara,
                </p>
                <p className="font-cafe-display italic text-cafe-cream text-lg leading-tight">
                  ele encontra a água.
                </p>
              </div>

              {/* Floating sticker */}
              <div className="absolute -top-4 -right-4 hidden md:flex h-24 w-24 items-center justify-center rounded-full border border-cafe-gold/30 bg-[#0e0805]/80 backdrop-blur float-y">
                <div className="text-center">
                  <p className="font-cafe-display text-cafe-gold text-xl leading-none">90%</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-cafe-mute mt-1">água</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div aria-hidden className="relative border-y border-cafe-gold/10 py-5 overflow-hidden bg-black/20">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              {[
                "Cafés Especiais",
                "Extração Equilibrada",
                "Microtorrefação",
                "Água Alcalina",
                "PRAL Negativo",
                "Rica em Magnésio",
                "William & Sons Coffee Co.",
                "Acqualive Smart Filters",
              ].map((w, i) => (
                <span key={i} className="font-cafe-display italic text-2xl md:text-3xl text-cafe-cream/40">
                  <span className="text-cafe-gold/60 mr-12">✦</span>
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. MANIFESTO SENSORIAL */}
      <section id="manifesto" className="relative px-6 md:px-12 py-28 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <span data-reveal className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold inline-flex items-center gap-3">
            <span className="h-px w-8 bg-cafe-gold/50" /> Manifesto <span className="h-px w-8 bg-cafe-gold/50" />
          </span>
          <h2 data-reveal data-reveal-delay="1" className="mt-6 font-cafe-display text-4xl md:text-6xl leading-[1.05] text-cafe-cream">
            O ingrediente que <em className="italic gold-shimmer not-italic font-medium" style={{ fontStyle: "italic" }}>quase ninguém vê</em>,
            <br className="hidden md:block" /> mas todo mundo sente.
          </h2>
          <p data-reveal data-reveal-delay="2" className="mt-8 mx-auto max-w-2xl text-lg text-cafe-cream/75 leading-relaxed">
            O café carrega notas, doçura, acidez, corpo e aroma. Mas é a água que conduz a extração e ajuda tudo isso a aparecer na xícara.
          </p>
        </div>

        {/* Interactive cup with hover words */}
        <div data-reveal data-reveal-delay="2" className="relative mx-auto mt-20 max-w-4xl">
          <div className="relative aspect-[16/10] flex items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-x-10 inset-y-6 rounded-full blur-3xl cup-glow"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(201,168,106,0.28), transparent 70%)",
              }}
            />

            {/* Animated steam */}
            <div className="absolute left-1/2 top-[15%] -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <div className="relative h-24 w-32">
                <span className="steam absolute left-1/2 bottom-0 -translate-x-1/2 h-16 w-6 rounded-full bg-cafe-cream/30 blur-md" />
                <span className="steam delay-1 absolute left-[40%] bottom-0 h-12 w-4 rounded-full bg-cafe-cream/25 blur-md" />
                <span className="steam delay-2 absolute left-[55%] bottom-0 h-14 w-5 rounded-full bg-cafe-cream/20 blur-md" />
                <span className="steam delay-3 absolute left-[60%] bottom-0 h-10 w-3 rounded-full bg-cafe-cream/25 blur-md" />
              </div>
            </div>

            {/* Cup */}
            <div className="relative z-10 flex flex-col items-center pt-12">
              <svg
                viewBox="0 0 240 200"
                className="w-44 md:w-56 h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                fill="none"
              >
                <defs>
                  <linearGradient id="cupGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#d28b5a" />
                    <stop offset="1" stopColor="#7a3e22" />
                  </linearGradient>
                  <radialGradient id="coffee" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#4a2410" />
                    <stop offset="1" stopColor="#1a0a04" />
                  </radialGradient>
                </defs>
                <ellipse cx="115" cy="60" rx="75" ry="14" fill="url(#coffee)" />
                <path d="M40 60 Q40 160 90 170 L140 170 Q190 160 190 60 Z" fill="url(#cupGrad)" />
                <path d="M190 80 Q230 90 220 130 Q210 160 175 150" stroke="url(#cupGrad)" strokeWidth="10" fill="none" />
                <ellipse cx="115" cy="60" rx="70" ry="11" fill="#1a0a04" />
                <ellipse cx="100" cy="55" rx="15" ry="3" fill="#3a1d0e" opacity="0.7" />
              </svg>
            </div>

            {/* Floating interactive words */}
            {SENSES.map((s, i) => {
              const positions = [
                "top-2 left-4 md:left-12",
                "top-6 right-6 md:right-16",
                "top-1/2 left-0 md:-left-4 -translate-y-1/2",
                "top-1/2 right-0 md:-right-4 -translate-y-1/2",
                "bottom-6 left-10 md:left-24",
                "bottom-2 right-10 md:right-28",
              ];
              const isActive = activeSense === i;
              return (
                <button
                  key={s.word}
                  type="button"
                  onMouseEnter={() => setActiveSense(i)}
                  onMouseLeave={() => setActiveSense(null)}
                  onFocus={() => setActiveSense(i)}
                  onBlur={() => setActiveSense(null)}
                  className={`sense-pill ${isActive ? "is-active" : ""} absolute ${positions[i]} font-cafe-display italic text-2xl md:text-4xl text-cafe-cream/80 cursor-default`}
                  style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
                >
                  {s.word}
                </button>
              );
            })}
          </div>

          {/* Hover description */}
          <div className="mt-6 mx-auto max-w-xl h-16 flex items-center justify-center text-center">
            <p
              key={activeSense ?? -1}
              className="text-sm md:text-base text-cafe-mute leading-relaxed transition-all duration-500"
              style={{
                opacity: activeSense !== null ? 1 : 0.5,
                transform: `translateY(${activeSense !== null ? 0 : 4}px)`,
              }}
            >
              {activeSense !== null
                ? SENSES[activeSense].note
                : "Passe o mouse sobre cada palavra para entender o que a água revela."}
            </p>
          </div>
        </div>

        <p data-reveal className="mt-12 mx-auto max-w-2xl text-center text-base text-cafe-mute leading-relaxed">
          Quando a água tem mais qualidade, o café expressa melhor o que o grão, a torra e a receita foram pensados para entregar.
        </p>
      </section>

      <div aria-hidden className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />
      </div>

      {/* 3. CASE WILLIAM & SONS */}
      <section id="case" className="relative px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span data-reveal className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold inline-flex items-center gap-3">
              <span className="h-px w-8 bg-cafe-gold/50" /> O case
            </span>
            <h2 data-reveal data-reveal-delay="1" className="mt-6 font-cafe-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cafe-cream">
              Quando a excelência no café encontra <em className="italic gold-shimmer font-medium">excelência na água.</em>
            </h2>
            <p data-reveal data-reveal-delay="2" className="mt-7 text-base md:text-lg text-cafe-cream/75 leading-relaxed">
              A William &amp; Sons Coffee Co. é uma boutique cafeteria e microtorrefação de cafés especiais. Em sua busca por entregar uma experiência da semente à xícara, a água se torna uma etapa essencial da receita.
            </p>

            <blockquote data-reveal data-reveal-delay="3" className="mt-10 relative pl-8">
              <Quote className="absolute left-0 top-1 h-6 w-6 text-cafe-gold/60" />
              <p className="font-cafe-display italic text-2xl md:text-[1.75rem] leading-snug text-cafe-cream">
                Quanto melhor a água, melhor a extração. A gente consegue melhorar doçura, acidez, corpo e tornar o café cada vez mais equilibrado.
              </p>
              <footer className="mt-5 flex items-center gap-3 text-sm text-cafe-mute tracking-wide">
                <span className="h-10 w-10 rounded-full bg-gradient-to-br from-cafe-gold/40 to-[#7a3e22] flex items-center justify-center font-cafe-display text-cafe-cream">
                  R
                </span>
                <div>
                  <p className="text-cafe-gold">Ramon</p>
                  <p className="text-xs">William &amp; Sons Coffee Co.</p>
                </div>
              </footer>
            </blockquote>

            <p data-reveal data-reveal-delay="4" className="mt-8 text-sm md:text-base text-cafe-mute leading-relaxed max-w-lg">
              Essa parceria mostra como a Acqualive pode estar presente em marcas que valorizam sabor, experiência e consistência em cada detalhe.
            </p>
          </div>

          {/* Video card with frame */}
          <div className="lg:col-span-7 relative" data-reveal data-reveal-delay="2">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative block w-full overflow-hidden rounded-[1.25rem] ring-1 ring-cafe-gold/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
              aria-label="Reproduzir vídeo do case William & Sons"
            >
              <img
                src={caseWilliam}
                alt="Barista preparando café especial na cafeteria William & Sons"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,8,5,0.0) 40%, rgba(14,8,5,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-cafe-cream/95 text-[#1a0f08] shadow-[0_20px_60px_-10px_rgba(201,168,106,0.5)] transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 md:h-8 md:w-8 fill-current ml-1" />
                  <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-cafe-gold/60 ripple" />
                </span>
              </div>
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cafe-gold/90">Mini documentário</p>
                  <p className="font-cafe-display text-2xl md:text-3xl text-cafe-cream italic">
                    William &amp; Sons × Acqualive
                  </p>
                </div>
                <span className="hidden md:inline-block text-xs text-cafe-mute tracking-[0.2em] uppercase">
                  2:14
                </span>
              </div>
            </button>

            {/* Tasting badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { l: "Doçura", v: "+", d: "destacada" },
                { l: "Acidez", v: "+", d: "viva" },
                { l: "Equilíbrio", v: "+", d: "consistente" },
              ].map((b, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
                  className="rounded-xl border border-cafe-gold/15 bg-white/[0.02] backdrop-blur px-4 py-3 hover:border-cafe-gold/40 hover:bg-white/[0.04] transition-all"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cafe-mute">{b.l}</p>
                  <p className="font-cafe-display text-2xl text-cafe-gold leading-none mt-1">
                    {b.v}
                    <span className="text-cafe-cream text-base italic ml-1">{b.d}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />
      </div>

      {/* 4. SOLUÇÃO ACQUALIVE */}
      <section id="solucao" className="relative px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative" data-reveal>
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-70 cup-glow"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(180,90,45,0.35), transparent 70%)",
              }}
            />
            <div
              className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-cafe-gold/15 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
              style={{ transform: `translateY(${Math.min((scrollY - 1200) * 0.04, 24)}px)` }}
            >
              <img
                src={terracotaAmbiente}
                alt="Smart Filter Terracota Acqualive em uma cafeteria premium"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>

            {/* Floating spec badge */}
            <div className="absolute -bottom-4 -right-4 md:-right-6 rounded-2xl bg-[#0e0805]/95 backdrop-blur border border-cafe-gold/25 px-5 py-4 shadow-2xl float-y">
              <div className="flex items-center gap-3">
                <Droplet className="h-5 w-5 text-cafe-gold" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cafe-mute">pH alcalino</p>
                  <p className="font-cafe-display text-2xl text-cafe-cream leading-none">
                    8.5<span className="text-cafe-gold text-sm ml-1">+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span data-reveal className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold inline-flex items-center gap-3">
              <span className="h-px w-8 bg-cafe-gold/50" /> A solução
            </span>
            <h2 data-reveal data-reveal-delay="1" className="mt-6 font-cafe-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-cafe-cream">
              A água que acompanha <em className="italic gold-shimmer font-medium">cafés de alto padrão.</em>
            </h2>
            <p data-reveal data-reveal-delay="2" className="mt-7 text-base md:text-lg text-cafe-cream/75 leading-relaxed max-w-xl">
              Os Smart Filters Acqualive ajudam a transformar a água comum em uma água de mais qualidade para o consumo e para o preparo de bebidas.
            </p>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { t: "Água alcalina", d: "pH equilibrado para o paladar." },
                { t: "Rica em magnésio", d: "Mineral essencial no dia a dia." },
                { t: "PRAL negativo", d: "Ajuda no equilíbrio do organismo." },
                { t: "Reduz cloro e impurezas", d: "Sabor mais limpo e neutro." },
                { t: "Pronta para o preparo", d: "Da espresso ao filtrado." },
                { t: "Design Smart Terracota", d: "Cabe em qualquer ambiente." },
              ].map((b, i) => (
                <li
                  key={b.t}
                  data-reveal
                  className="group rounded-xl border border-cafe-gold/10 bg-white/[0.015] px-4 py-3.5 hover:border-cafe-gold/40 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-4 w-4 text-cafe-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-cafe-cream text-[14px] font-medium leading-tight">{b.t}</p>
                      <p className="text-cafe-mute text-xs mt-0.5">{b.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p data-reveal className="mt-10 font-cafe-display italic text-xl text-cafe-cream/90 max-w-lg">
              Para cafeterias, empresas e pessoas que sabem que o detalhe muda tudo.
            </p>

            <div data-reveal className="mt-10">
              <a
                href={WHATS_SOLUCOES}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-cafe-cream text-[#1a0f08] px-7 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(232,217,192,0.5)]"
                style={{ color: "#1a0f08" }}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Quero conhecer as soluções Acqualive
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="relative px-6 md:px-12 py-28 md:py-40 overflow-hidden">
        <div className="mx-auto max-w-4xl text-center relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[460px] rounded-full blur-3xl cup-glow"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,168,106,0.28), transparent 70%)",
            }}
          />
          <h2 data-reveal className="relative font-cafe-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cafe-cream">
            Seu café pode começar com uma <em className="italic gold-shimmer font-medium">água melhor.</em>
          </h2>
          <p data-reveal data-reveal-delay="1" className="relative mt-8 mx-auto max-w-2xl text-lg text-cafe-cream/75 leading-relaxed">
            Leve a qualidade da água Acqualive para sua casa, empresa ou cafeteria — e descubra como esse detalhe pode transformar a experiência da xícara.
          </p>

          <div data-reveal data-reveal-delay="2" className="relative mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATS_CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cafe-cream text-[#1a0f08] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(232,217,192,0.5)]"
              style={{ color: "#1a0f08" }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a Acqualive
            </a>
            <a
              href={WHATS_SOLUCOES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cafe-gold/40 px-8 py-4 text-sm font-medium tracking-wide text-cafe-cream hover:bg-cafe-gold/10 hover:border-cafe-gold/70 transition-all"
            >
              Conhecer Smart Filters
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 md:px-12 pt-16 pb-12 border-t border-cafe-gold/10">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            <img src={logoBranca} alt="Acqualive" className="h-7 w-auto" />
            <span className="font-cafe-display italic text-xl text-cafe-cream/80 tracking-wide">
              TriWay
            </span>
            <span className="font-cafe-display italic text-xl text-cafe-cream/80 tracking-wide">
              William &amp; Sons Coffee Co.
            </span>
          </div>
          <p className="font-cafe-display italic text-xl md:text-2xl gold-shimmer text-center">
            Acqualive. A melhor versão da sua água.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cafe-mute">
            © {new Date().getFullYear()} Acqualive · Parcerias Café
          </p>
        </div>
      </footer>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden ring-1 ring-cafe-gold/30 bg-black animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-black/60 text-cafe-cream hover:bg-black/80 flex items-center justify-center"
              aria-label="Fechar vídeo"
            >
              ×
            </button>
            <div className="flex h-full w-full items-center justify-center text-center text-cafe-cream/70 p-8">
              <div>
                <p className="font-cafe-display italic text-2xl text-cafe-gold mb-3">
                  Vídeo do case em breve
                </p>
                <p className="text-sm text-cafe-mute">
                  O mini documentário com a William &amp; Sons Coffee Co. será adicionado aqui.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParceriasCafe;
