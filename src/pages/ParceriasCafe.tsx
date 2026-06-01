import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Play, ArrowRight, Coffee } from "lucide-react";
import heroPourover from "@/assets/cafe-hero-pourover.jpg";
import caseWilliam from "@/assets/cafe-case-williamsons.jpg";
import terracotaAmbiente from "@/assets/cafe-terracota-ambiente.jpg";
import logoBranca from "@/assets/acqualive-logo-white.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATS_CONTATO =
  "https://wa.me/555192928468?text=Olá!%20Vim%20pela%20página%20Parcerias%20Café%20e%20quero%20conhecer%20as%20soluções%20Acqualive.";
const WHATS_SOLUCOES =
  "https://wa.me/555192928468?text=Olá!%20Quero%20conhecer%20os%20Smart%20Filters%20Acqualive%20para%20o%20preparo%20de%20café.";

const SENSES = ["Doçura", "Acidez", "Corpo", "Aroma", "Equilíbrio", "Extração"];

const ParceriasCafe = () => {
  const [videoOpen, setVideoOpen] = useState(false);

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
          .grain::before {
            content: '';
            position: absolute; inset: 0; pointer-events: none;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.6  0 0 0 0 0.45  0 0 0 0 0.25  0 0 0 0.12 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
            mix-blend-mode: overlay; opacity: 0.5;
          }
        `}</style>
      </Helmet>

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

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-8">
        <img src={logoBranca} alt="Acqualive" className="h-7 md:h-8 w-auto opacity-90" />
        <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cafe-mute">
          <span className="h-px w-8 bg-cafe-gold/50" />
          Parcerias premium
        </span>
      </header>

      {/* 1. HERO */}
      <section className="relative px-6 md:px-12 pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-cafe-gold/30 bg-white/[0.02] px-4 py-1.5">
              <Coffee className="h-3.5 w-3.5 text-cafe-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-cafe-gold">
                Case real · William & Sons Coffee Co.
              </span>
            </div>

            <h1 className="font-cafe-display text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4.4rem] tracking-tight text-cafe-cream">
              Uma boa xícara de café <em className="text-cafe-gold not-italic font-medium italic">começa antes</em> do primeiro gole.
            </h1>

            <p className="mt-7 max-w-xl text-lg md:text-xl text-cafe-cream/80 leading-relaxed">
              Em uma cafeteria de cafés especiais, cada detalhe importa: o grão, a torra, a receita, o barista — e a água.
            </p>
            <p className="mt-5 max-w-xl text-base text-cafe-mute leading-relaxed">
              Mais de 90% de uma xícara de café é água. Por isso, a qualidade da água influencia diretamente a extração, o equilíbrio e a experiência final.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                Ver parceria com a William & Sons
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(201,168,106,0.35), transparent 70%)",
                }}
              />
              <img
                src={heroPourover}
                alt="Café especial sendo coado em uma cafeteria premium"
                width={1536}
                height={1024}
                className="relative w-full rounded-[1.25rem] object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-cafe-gold/15"
              />
              <div className="absolute -bottom-5 -left-5 hidden md:block bg-[#0e0805]/90 backdrop-blur border border-cafe-gold/20 rounded-xl px-5 py-3">
                <p className="font-cafe-display italic text-cafe-gold text-lg leading-tight">
                  Antes do café tocar a xícara,
                </p>
                <p className="font-cafe-display italic text-cafe-cream text-lg leading-tight">
                  ele encontra a água.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle divider — water line */}
      <div aria-hidden className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />
      </div>

      {/* 2. MANIFESTO SENSORIAL */}
      <section id="manifesto" className="relative px-6 md:px-12 py-28 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold">
            Manifesto
          </span>
          <h2 className="mt-6 font-cafe-display text-4xl md:text-6xl leading-[1.05] text-cafe-cream">
            O ingrediente que <em className="italic text-cafe-gold not-italic font-medium" style={{fontStyle:'italic'}}>quase ninguém vê</em>,
            <br className="hidden md:block" /> mas todo mundo sente.
          </h2>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-cafe-cream/75 leading-relaxed">
            O café carrega notas, doçura, acidez, corpo e aroma. Mas é a água que conduz a extração e ajuda tudo isso a aparecer na xícara.
          </p>
        </div>

        {/* Words around a cup */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="relative aspect-[16/10] flex items-center justify-center">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-x-10 inset-y-6 rounded-full blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(201,168,106,0.25), transparent 70%)",
              }}
            />
            {/* Cup */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative">
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
                  {/* steam */}
                  <path d="M100 30 Q110 10 100 -10" stroke="#c9a86a" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
                  <path d="M130 25 Q140 5 130 -15" stroke="#c9a86a" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
                  <path d="M115 35 Q125 15 115 -5" stroke="#c9a86a" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
                  {/* cup */}
                  <ellipse cx="115" cy="60" rx="75" ry="14" fill="url(#coffee)" />
                  <path d="M40 60 Q40 160 90 170 L140 170 Q190 160 190 60 Z" fill="url(#cupGrad)" />
                  <path d="M190 80 Q230 90 220 130 Q210 160 175 150" stroke="url(#cupGrad)" strokeWidth="10" fill="none" />
                  <ellipse cx="115" cy="60" rx="70" ry="11" fill="#1a0a04" />
                  <ellipse cx="100" cy="55" rx="15" ry="3" fill="#3a1d0e" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Floating words */}
            {SENSES.map((word, i) => {
              const positions = [
                "top-2 left-4 md:left-12",
                "top-6 right-6 md:right-16",
                "top-1/2 left-0 md:-left-4 -translate-y-1/2",
                "top-1/2 right-0 md:-right-4 -translate-y-1/2",
                "bottom-6 left-10 md:left-24",
                "bottom-2 right-10 md:right-28",
              ];
              return (
                <span
                  key={word}
                  className={`absolute ${positions[i]} font-cafe-display italic text-2xl md:text-4xl text-cafe-cream/80`}
                  style={{
                    textShadow: "0 2px 20px rgba(0,0,0,0.6)",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        <p className="mt-16 mx-auto max-w-2xl text-center text-base text-cafe-mute leading-relaxed">
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
            <span className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold">
              O case
            </span>
            <h2 className="mt-6 font-cafe-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cafe-cream">
              Quando a excelência no café encontra <em className="italic text-cafe-gold font-medium">excelência na água.</em>
            </h2>
            <p className="mt-7 text-base md:text-lg text-cafe-cream/75 leading-relaxed">
              A William & Sons Coffee Co. é uma boutique cafeteria e microtorrefação de cafés especiais. Em sua busca por entregar uma experiência da semente à xícara, a água se torna uma etapa essencial da receita.
            </p>

            <blockquote className="mt-10 border-l-2 border-cafe-gold/60 pl-6">
              <p className="font-cafe-display italic text-2xl md:text-[1.75rem] leading-snug text-cafe-cream">
                “Quanto melhor a água, melhor a extração. A gente consegue melhorar doçura, acidez, corpo e tornar o café cada vez mais equilibrado.”
              </p>
              <footer className="mt-5 text-sm text-cafe-mute tracking-wide">
                <span className="text-cafe-gold">Ramon</span> · William & Sons Coffee Co.
              </footer>
            </blockquote>

            <p className="mt-8 text-sm md:text-base text-cafe-mute leading-relaxed max-w-lg">
              Essa parceria mostra como a Acqualive pode estar presente em marcas que valorizam sabor, experiência e consistência em cada detalhe.
            </p>
          </div>

          {/* Video/case visual */}
          <div className="lg:col-span-7 relative">
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
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
                  <span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-cafe-gold/40 animate-ping opacity-30" />
                </span>
              </div>
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cafe-gold/90">Mini documentário</p>
                  <p className="font-cafe-display text-2xl md:text-3xl text-cafe-cream italic">
                    William & Sons × Acqualive
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <div aria-hidden className="mx-auto max-w-5xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cafe-gold/30 to-transparent" />
      </div>

      {/* 4. SOLUÇÃO ACQUALIVE */}
      <section className="relative px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(180,90,45,0.35), transparent 70%)",
              }}
            />
            <img
              src={terracotaAmbiente}
              alt="Smart Filter Terracota Acqualive em uma cafeteria premium"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full rounded-[1.25rem] object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-cafe-gold/15"
            />
          </div>

          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.35em] text-cafe-gold">
              A solução
            </span>
            <h2 className="mt-6 font-cafe-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-cafe-cream">
              A água que acompanha <em className="italic text-cafe-gold font-medium">cafés de alto padrão.</em>
            </h2>
            <p className="mt-7 text-base md:text-lg text-cafe-cream/75 leading-relaxed max-w-xl">
              Os Smart Filters Acqualive ajudam a transformar a água comum em uma água de mais qualidade para o consumo e para o preparo de bebidas.
            </p>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                "Água alcalina",
                "Rica em magnésio",
                "PRAL negativo",
                "Reduz cloro e impurezas",
                "Mais qualidade no preparo diário",
                "Sabor mais limpo e equilibrado",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-cafe-cream/90">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cafe-gold flex-shrink-0" />
                  <span className="text-[15px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-cafe-display italic text-xl text-cafe-cream/90 max-w-lg">
              Para cafeterias, empresas e pessoas que sabem que o detalhe muda tudo.
            </p>

            <div className="mt-10">
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
      <section className="relative px-6 md:px-12 py-28 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,168,106,0.25), transparent 70%)",
            }}
          />
          <h2 className="relative font-cafe-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cafe-cream">
            Seu café pode começar com uma <em className="italic text-cafe-gold font-medium">água melhor.</em>
          </h2>
          <p className="relative mt-8 mx-auto max-w-2xl text-lg text-cafe-cream/75 leading-relaxed">
            Leve a qualidade da água Acqualive para sua casa, empresa ou cafeteria — e descubra como esse detalhe pode transformar a experiência da xícara.
          </p>

          <div className="relative mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
          <p className="font-cafe-display italic text-xl md:text-2xl text-cafe-gold text-center">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden ring-1 ring-cafe-gold/30 bg-black"
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
                  O mini documentário com a William & Sons Coffee Co. será adicionado aqui.
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
