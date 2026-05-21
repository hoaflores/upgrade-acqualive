import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Beaker, Microscope, Globe2, Award, Users, Leaf, Sparkles, ChevronDown } from "lucide-react";

const ACQUA_LOGO = "https://www.acqualive.com.br/cdn/shop/files/Logo_ACQUALIVE_horizontal_180x.png";

const STATS = [
  { value: "30+", label: "anos de pesquisa" },
  { value: "150K+", label: "famílias atendidas" },
  { value: "600M+", label: "garrafas evitadas" },
  { value: "98%", label: "remoção de cloro" },
  { value: "99%", label: "remoção de agrotóxicos" },
  { value: "20+", label: "lojas no Brasil" },
];

const TIMELINE = [
  { year: "2009", title: "O insight", text: "Mauro Mumbach e Sidney Rodrigues estudam PRAL e mineralização inspirados em Sardenha e Okinawa." },
  { year: "2010", title: "Fundação", text: "Nasce a Acqualive, não como marca de filtros, mas como empresa de tecnologia em saúde." },
  { year: "2014", title: "Reconhecimento científico", text: "PRAL Negativo é publicado na SAN, consolidando o pilar científico da marca." },
  { year: "2017", title: "Primeiro estudo clínico", text: "Dra. Juliana Chaves conduz o primeiro estudo clínico do Brasil com água alcalina mineralizada." },
  { year: "2020", title: "Reconhecimento internacional", text: "Resultados publicados no PubMed e apresentados em congresso em Praga." },
  { year: "2026", title: "TRIWAY consolidada", text: "Três patentes próprias, 150 mil famílias e a maior referência em água alcalina mineralizada do Brasil." },
];

const PILLARS = [
  { icon: Microscope, title: "Ciência", text: "Única marca do segmento com estudo clínico internacional publicado." },
  { icon: Beaker, title: "Tecnologia TRIWAY", text: "Três patentes próprias que transformam a água da torneira em água alcalina mineralizada." },
  { icon: Leaf, title: "Sustentabilidade", text: "Mais de 600 milhões de garrafas plásticas evitadas em 16 anos de marca." },
  { icon: Award, title: "Endossos", text: "Médicos, atletas e especialistas recomendam Acqualive como base de saúde preventiva." },
];

const PARTNERSHIPS = [
  {
    tag: "01",
    title: "Embaixador de marca",
    text: "Médicos, atletas e especialistas que incorporam Acqualive à sua rotina e ao seu discurso de saúde preventiva.",
  },
  {
    tag: "02",
    title: "Conteúdo e co-criação",
    text: "Projetos editoriais, vídeos e séries científicas produzidas em parceria com a curadoria do Portal Científico Acqualive.",
  },
  {
    tag: "03",
    title: "Afiliado e comissionamento",
    text: "Modelo de receita recorrente para parceiros com audiência qualificada interessada em longevidade e bem-estar.",
  },
];

const AUDIENCE = [
  "Famílias preocupadas com qualidade de vida e longevidade",
  "Médicos, nutricionistas e profissionais da saúde preventiva",
  "Atletas e praticantes de performance",
  "Comunidades de bem-estar e biohacking",
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative w-full px-6 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Reveal = ({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const MidiaKit = () => {
  const { slug } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const partnerName = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#0a1628] font-[Inter,sans-serif] antialiased overflow-x-hidden">
      <Helmet>
        <title>Mídia Kit Acqualive | Saúde, ciência e longevidade</title>
        <meta
          name="description"
          content="Mídia kit oficial Acqualive: a única marca de água alcalina mineralizada do Brasil com estudo clínico internacional publicado. Parcerias estratégicas para saúde e longevidade."
        />
        <link rel="canonical" href={`https://paginas.acqualive.com.br/midia-kit${slug ? `/${slug}` : ""}`} />
      </Helmet>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#1d4380] origin-left z-50"
        style={{ scaleX: progressScale }}
      />

      {/* Nav */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#fafaf7]/70 border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
          <img src={ACQUA_LOGO} alt="Acqualive" className="h-7 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-[#0a1628]/70">
            <a href="#sobre" className="hover:text-[#0a1628] transition-colors">Sobre</a>
            <a href="#ciencia" className="hover:text-[#0a1628] transition-colors">Ciência</a>
            <a href="#numeros" className="hover:text-[#0a1628] transition-colors">Números</a>
            <a href="#parcerias" className="hover:text-[#0a1628] transition-colors">Parcerias</a>
          </div>
          <Button
            onClick={() => window.print()}
            size="sm"
            className="bg-[#0a1628] hover:bg-[#1d4380] text-white rounded-full text-xs tracking-wide gap-2 shadow-none"
          >
            <Download className="w-3.5 h-3.5" />
            Baixar PDF
          </Button>
        </div>
      </motion.header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background animated gradient blobs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#1d4380]/15 to-transparent blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#f26923]/10 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="h-px w-12 bg-[#0a1628]/40" />
              <span className="text-[11px] tracking-[0.32em] uppercase text-[#0a1628]/60 font-medium">
                Mídia Kit Oficial {partnerName ? `· ${partnerName}` : "· 2026"}
              </span>
            </motion.div>

            <h1 className="font-[Fraunces,serif] font-light text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] max-w-5xl">
              {"Saúde começa".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="italic text-[#1d4380] inline-block"
              >
                pela água.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 max-w-2xl text-lg md:text-xl text-[#0a1628]/70 leading-relaxed font-light"
            >
              A Acqualive é a única marca de água alcalina mineralizada do Brasil com estudo clínico
              internacional publicado. 16 anos transformando a água da torneira na base da saúde
              preventiva de mais de 150 mil famílias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-14 flex flex-wrap items-center gap-6"
            >
              <a
                href="#sobre"
                className="group inline-flex items-center gap-3 text-sm tracking-[0.18em] uppercase font-medium border-b border-[#0a1628] pb-2 hover:gap-5 transition-all"
              >
                Conhecer a marca
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#0a1628]/50">Role</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ChevronDown className="w-4 h-4 text-[#0a1628]/50" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MANIFESTO / SOBRE */}
      <Section className="py-32 md:py-40" >
        <div id="sobre" className="grid md:grid-cols-12 gap-10">
          <Reveal>
            <div className="md:col-span-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#1d4380] font-medium">01 — Manifesto</span>
            </div>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mb-12">
                Não somos uma marca de filtros. Somos uma <span className="italic text-[#1d4380]">empresa de tecnologia em saúde.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-[#0a1628]/75 leading-relaxed font-light max-w-3xl">
                Inspirados pelas zonas azuis de Sardenha e Okinawa, onde as pessoas vivem mais e melhor,
                Mauro Mumbach e Sidney Rodrigues fundaram a Acqualive em 2010 com uma convicção: a água
                certa é a base esquecida da longevidade. Hoje, 16 anos depois, somos a maior referência
                em água alcalina mineralizada do Brasil.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* PILARES */}
      <Section className="py-24 md:py-32 bg-[#0a1628] text-white -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 rounded-none">
        <div id="ciencia" className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/50 font-medium">02 — Pilares</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mt-6 mb-20 max-w-3xl">
              Quatro fundamentos que sustentam toda a marca.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#0a1628] p-10 hover:bg-[#0e1d36] transition-colors duration-500"
              >
                <p.icon className="w-7 h-7 text-[#f26923] mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                <h3 className="font-[Fraunces,serif] text-2xl font-light mb-4">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* NÚMEROS */}
      <Section className="py-32 md:py-40">
        <div id="numeros">
          <Reveal>
            <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#1d4380] font-medium">03 — Em números</span>
                <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mt-6 max-w-3xl">
                  O peso quantitativo de <span className="italic">16 anos.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-[#fafaf7] p-10 md:p-14 group hover:bg-white transition-colors"
              >
                <div className="font-[Fraunces,serif] font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-[#0a1628] group-hover:text-[#1d4380] transition-colors duration-500">
                  {s.value}
                </div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-[#0a1628]/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section className="py-32 md:py-40 bg-[#f3f0ea] -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#1d4380] font-medium">04 — Linha do tempo</span>
            <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mt-6 mb-20 max-w-3xl">
              De um insight em Sardenha a <span className="italic">três patentes próprias.</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-[#0a1628]/15" />
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 gap-12 pb-16 last:pb-0 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="font-[Fraunces,serif] text-5xl md:text-6xl font-light text-[#1d4380] tracking-[-0.02em]">{t.year}</div>
                </div>
                <div className={`${i % 2 === 0 ? "md:pl-16" : "md:text-right md:pr-16"} relative`}>
                  <span className="absolute -left-[34px] md:left-auto md:right-auto top-2 w-4 h-4 rounded-full bg-[#fafaf7] border-2 border-[#1d4380]" style={i % 2 === 0 ? { left: "-42px" } : {}} />
                  <h3 className="font-[Fraunces,serif] text-2xl font-light mb-3">{t.title}</h3>
                  <p className="text-[#0a1628]/70 leading-relaxed font-light max-w-md inline-block">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* AUDIÊNCIA */}
      <Section className="py-32 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal>
            <div className="md:col-span-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#1d4380] font-medium">05 — Audiência</span>
            </div>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mb-16 max-w-3xl">
                Quem confia na <span className="italic">Acqualive.</span>
              </h2>
            </Reveal>
            <div className="space-y-px">
              {AUDIENCE.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group flex items-center gap-6 py-6 border-b border-black/10 hover:border-[#1d4380] transition-colors"
                >
                  <Users className="w-5 h-5 text-[#1d4380] flex-shrink-0" strokeWidth={1.3} />
                  <span className="text-lg md:text-xl font-light text-[#0a1628]/85 group-hover:text-[#0a1628] group-hover:translate-x-2 transition-all">
                    {a}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PARCERIAS */}
      <Section className="py-32 md:py-40 bg-[#0a1628] text-white -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20">
        <div id="parcerias" className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/50 font-medium">06 — Parcerias</span>
            <h2 className="font-[Fraunces,serif] font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] mt-6 mb-20 max-w-3xl">
              Três formatos para <span className="italic text-[#f26923]">construir junto.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {PARTNERSHIPS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="border border-white/10 p-10 hover:border-[#f26923]/60 hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="flex items-baseline justify-between mb-10">
                  <span className="font-[Fraunces,serif] text-5xl font-light text-[#f26923]">{p.tag}</span>
                  <Sparkles className="w-4 h-4 text-white/30" strokeWidth={1.2} />
                </div>
                <h3 className="font-[Fraunces,serif] text-2xl font-light mb-4">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-40 md:py-56 text-center">
        <Reveal>
          <Globe2 className="w-10 h-10 mx-auto text-[#1d4380] mb-10" strokeWidth={1} />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-[Fraunces,serif] font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.03em] max-w-4xl mx-auto">
            Vamos construir algo <span className="italic text-[#1d4380]">memorável?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-lg text-[#0a1628]/70 font-light max-w-xl mx-auto">
            Conte com nossa equipe para desenhar a melhor proposta de parceria entre você e Acqualive.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0a1628] hover:bg-[#1d4380] text-white rounded-full px-10 py-7 text-sm tracking-[0.15em] uppercase shadow-none"
            >
              <a href="https://wa.me/555192928468?text=Olá,%20vim%20pelo%20mídia%20kit%20Acqualive%20e%20quero%20conversar%20sobre%20parceria." target="_blank" rel="noopener noreferrer">
                Falar com a Acqualive
              </a>
            </Button>
            <Button
              onClick={() => window.print()}
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-sm tracking-[0.15em] uppercase border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white shadow-none gap-2"
            >
              <Download className="w-4 h-4" />
              Baixar PDF
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 text-xs tracking-[0.18em] uppercase text-[#0a1628]/50">
          <img src={ACQUA_LOGO} alt="Acqualive" className="h-6 w-auto opacity-60" />
          <span>Mídia Kit Oficial · 2026</span>
          <a href="https://www.acqualive.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a1628] transition-colors">
            acqualive.com.br
          </a>
        </div>
      </footer>

      <style>{`
        @media print {
          header, .fixed { display: none !important; }
          section { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default MidiaKit;
