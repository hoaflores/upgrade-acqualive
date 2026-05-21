import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Send, ArrowUpRight, Plus, Minus, Phone, Download } from "lucide-react";
import heroImg from "@/assets/midiakit-hero.jpg";
import waterImg from "@/assets/midiakit-water.jpg";
import scienceImg from "@/assets/midiakit-science.jpg";

const NAV = [
  { label: "INÍCIO", href: "#top" },
  { label: "SOBRE", href: "#sobre" },
  { label: "DIFERENCIAIS", href: "#diferenciais" },
  { label: "PRODUTOS", href: "#produtos" },
  { label: "PARCERIAS", href: "#parcerias" },
];

const PILLARS = [
  {
    title: "Ciência comprovada",
    text: "Única marca do segmento com estudo clínico internacional publicado. Dra. Juliana Chaves, 50 voluntários, pH 8.8, resultados no PubMed e apresentados em Praga.",
  },
  {
    title: "Tecnologia TRIWAY",
    text: "Três patentes próprias que transformam a água da torneira em água alcalina mineralizada. Remoção de 98% de cloro e até 99% de agrotóxicos comprovada por Unicamp.",
  },
  {
    title: "Saúde preventiva",
    text: "PRAL negativo: potencial alcalinizante que reduz riscos de diabetes, hipertensão, osteoporose, cálculos renais e Alzheimer. Inspirado nas zonas azuis de Sardenha e Okinawa.",
  },
  {
    title: "Sustentabilidade",
    text: "Mais de 600 milhões de garrafas plásticas evitadas em 16 anos de marca. 150 mil famílias atendidas, 20+ lojas no Brasil, três patentes próprias.",
  },
];

const PRODUCTS = [
  {
    code: "Modelo 01",
    name: "Acqualive V Self 10L Premium",
    img: "https://www.acqualive.com.br/cdn/shop/files/V_Self_10L_Premium_Branco_900x.png",
    specs: [
      { v: "10L", l: "Reservatório" },
      { v: "98%", l: "Remoção de cloro" },
      { v: "pH 8.8", l: "Alcalina" },
    ],
  },
  {
    code: "Modelo 02",
    name: "Acqualive Terracota",
    img: "https://www.acqualive.com.br/cdn/shop/files/Terracota_Bege_900x.png",
    specs: [
      { v: "6L", l: "Reservatório" },
      { v: "99%", l: "Agrotóxicos" },
      { v: "Barro", l: "Natural" },
    ],
  },
];

const PARTNERSHIPS = [
  {
    tag: "01",
    title: "Embaixador de marca",
    text: "Médicos, atletas e especialistas que incorporam Acqualive à sua rotina e ao discurso de saúde preventiva. Co-criação de autoridade.",
  },
  {
    tag: "02",
    title: "Conteúdo e co-criação",
    text: "Projetos editoriais, vídeos e séries científicas produzidas em parceria com a curadoria do Portal Científico Acqualive.",
  },
  {
    tag: "03",
    title: "Afiliado e comissionamento",
    text: "Modelo de receita recorrente para parceiros com audiência qualificada em longevidade, performance e bem-estar.",
  },
];

const TESTIMONIALS = [
  {
    name: "Dra. Juliana Chaves",
    role: "Pesquisadora clínica",
    text: "Conduzi o primeiro estudo brasileiro com água alcalina mineralizada Acqualive. Os resultados publicados no PubMed mostram impacto direto em saúde digestiva e qualidade de vida.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    name: "Maria Cleodete",
    role: "Cliente Acqualive · SP",
    text: "Não consigo mais viver sem. A água é outra coisa, leve, fresquinha, e a sensação de saúde e bem-estar da família mudou completamente.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
];

// Section eyebrow component
const Eyebrow = ({ num, label }: { num: string; label: string }) => (
  <div className="flex items-center justify-between mb-10">
    <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
      ({num}) <span className="ml-2 text-white/70 uppercase">{label}</span>
    </span>
    <span className="text-xs tracking-[0.3em] font-medium text-white/40 uppercase">Acqualive</span>
  </div>
);

const EyebrowLight = ({ num, label }: { num: string; label: string }) => (
  <div className="flex items-center justify-between mb-10">
    <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
      ({num}) <span className="ml-2 text-[#02265f]/70 uppercase">{label}</span>
    </span>
    <span className="text-xs tracking-[0.3em] font-medium text-[#02265f]/40 uppercase">Acqualive</span>
  </div>
);

const MidiaKit = () => {
  const { slug } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const { scrollYProgress: hp } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallax = useTransform(hp, [0, 1], [0, 120]);
  const heroFade = useTransform(hp, [0, 0.8], [1, 0]);

  const [openPillar, setOpenPillar] = useState<number>(0);

  const partnerName = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

  return (
    <div id="top" className="min-h-screen bg-[#0a0e17] text-white antialiased overflow-x-hidden" style={{ fontFamily: "'Archivo', sans-serif" }}>
      <Helmet>
        <title>Mídia Kit Acqualive | Saúde, ciência e longevidade</title>
        <meta name="description" content="Mídia kit oficial Acqualive: única marca de água alcalina mineralizada do Brasil com estudo clínico internacional. Parcerias estratégicas para saúde e longevidade." />
        <link rel="canonical" href={`https://paginas.acqualive.com.br/midia-kit${slug ? `/${slug}` : ""}`} />
      </Helmet>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#f26923] origin-left z-[60]"
        style={{ scaleX: progress }}
      />

      {/* HEADER */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between"
      >
        <a href="#top" className="text-xl tracking-[0.2em] font-bold">
          ACQUALIVE<span className="text-[#f26923]">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-xs tracking-[0.18em] font-medium">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/555192928468?text=Olá,%20vim%20pelo%20mídia%20kit%20Acqualive."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1d4380] hover:bg-[#02265f] transition-colors rounded-full px-6 py-3 text-xs tracking-[0.18em] font-medium"
          >
            Fale com a marca
          </a>
          <button
            onClick={() => window.print()}
            aria-label="Baixar PDF"
            className="w-11 h-11 rounded-full bg-white text-[#0a0e17] flex items-center justify-center hover:bg-[#f26923] hover:text-white transition-colors"
          >
            <Send className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      </motion.header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
        <motion.div style={{ y: heroParallax, scale: 1.05 }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Acqualive purificador em cenário arquitetônico"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/85 via-[#0a0e17]/40 to-[#0a0e17]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/60 via-transparent to-[#0a0e17]" />
        </motion.div>

        <motion.div style={{ opacity: heroFade }} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
          {/* Stat top right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-1/2 right-6 md:right-12 lg:right-20 -translate-y-1/2 hidden md:block text-right"
          >
            <div className="text-4xl md:text-5xl font-light tracking-tight">150K+</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mt-2">Famílias atendidas</div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="mt-8 ml-auto w-14 h-14 rounded-full bg-white text-[#0a0e17] flex items-center justify-center"
            >
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>
          </motion.div>

          {/* Headline */}
          <div className="max-w-4xl">
            {partnerName && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs tracking-[0.3em] uppercase text-[#f26923] mb-8 font-medium"
              >
                Mídia Kit · {partnerName}
              </motion.div>
            )}

            <h1 className="font-light text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-[-0.02em] uppercase">
              {["SAÚDE", "COMEÇA", "PELA"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-[#1d4380]"
                style={{ color: "#4a90e2" }}
              >
                ÁGUA
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                CERTA.
              </motion.span>
            </h1>
          </div>

          {/* Bottom row: play + description + CTA */}
          <div className="mt-auto pt-24 flex flex-wrap items-end justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-5 max-w-md"
            >
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group hover:bg-white hover:text-[#0a0e17] transition-all flex-shrink-0">
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              </button>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                A única marca de água alcalina mineralizada do Brasil com estudo clínico internacional publicado. 16 anos transformando a água da torneira na base da saúde preventiva.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              href="#sobre"
              className="inline-flex items-center gap-2 bg-[#1d4380] hover:bg-[#02265f] transition-colors rounded-full px-8 py-4 text-sm tracking-[0.15em] font-medium"
            >
              Conhecer a marca
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* (02) SOBRE */}
      <section id="sobre" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
              (02) <span className="ml-2 text-[#02265f]/70 uppercase">Sobre Nós</span>
            </span>
            <span className="text-xs tracking-[0.3em] font-medium text-[#02265f]/40 uppercase">Acqualive</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase">
                Tecnologia em <span className="text-[#1d4380]">saúde</span>, não apenas filtros
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15 }}
            >
              <p className="text-lg text-[#02265f]/80 leading-relaxed font-light mb-10">
                Inspirados pelas zonas azuis de Sardenha e Okinawa, Mauro Mumbach e Sidney Rodrigues fundaram a Acqualive em 2010 com uma convicção: a água certa é a base esquecida da longevidade.
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#f26923]" />
                    <h3 className="text-sm tracking-[0.2em] uppercase font-semibold">Ciência</h3>
                  </div>
                  <p className="text-[#02265f]/70 text-sm leading-relaxed font-light pl-5">
                    16 anos de pesquisa, três patentes próprias e o primeiro estudo clínico brasileiro publicado em PubMed sobre água alcalina mineralizada.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#f26923]" />
                    <h3 className="text-sm tracking-[0.2em] uppercase font-semibold">Sustentabilidade</h3>
                  </div>
                  <p className="text-[#02265f]/70 text-sm leading-relaxed font-light pl-5">
                    Mais de 600 milhões de garrafas plásticas evitadas. 150 mil famílias, 20+ lojas no Brasil e uma rede que cresce a cada ano.
                  </p>
                </div>
              </div>

              <a
                href="#diferenciais"
                className="inline-flex items-center gap-2 bg-[#02265f] hover:bg-[#1d4380] transition-colors text-white rounded-full px-8 py-4 text-sm tracking-[0.15em] font-medium"
              >
                Ver diferenciais
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 rounded-2xl overflow-hidden"
          >
            <img src={scienceImg} alt="Pesquisa científica Acqualive" className="w-full h-[420px] md:h-[560px] object-cover" loading="lazy" width={1920} height={1080} />
          </motion.div>
        </div>
      </section>

      {/* (03) DIFERENCIAIS — accordion + image */}
      <section id="diferenciais" className="relative bg-[#0a0e17] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="03" label="Por que Acqualive" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20"
          >
            Revolucionando saúde preventiva com <span className="text-[#4a90e2]">água alcalina mineralizada.</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img src={waterImg} alt="Água Acqualive sendo servida" className="w-full h-[500px] md:h-[640px] object-cover" loading="lazy" width={1080} height={1920} />
            </motion.div>

            <div className="space-y-0">
              {PILLARS.map((p, i) => {
                const open = openPillar === i;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="border-b border-white/15"
                  >
                    <button
                      onClick={() => setOpenPillar(open ? -1 : i)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors ${open ? "text-[#f26923]" : "text-white group-hover:text-[#f26923]"}`}>
                        {p.title}
                      </span>
                      <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 ml-4">
                        {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/65 text-sm leading-relaxed font-light pb-6 pr-10">
                            {p.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* (04) PRODUTOS EM DESTAQUE */}
      <section id="produtos" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
              (04) <span className="ml-2 text-[#02265f]/70 uppercase">Produtos em destaque</span>
            </span>
            <span className="text-xs tracking-[0.3em] font-medium text-[#02265f]/40 uppercase">Acqualive</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20"
          >
            Do dia a dia ao topo de gama, <span className="text-[#1d4380]">encontre seu Acqualive.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(2,38,95,0.2)]"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#eaf0fa] to-[#f5f3ee] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-[#02265f]/60 font-medium">
                    {p.code}
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight leading-tight max-w-[70%]">{p.name}</h3>
                    <a
                      href="https://www.acqualive.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-[#02265f]/20 flex items-center justify-center hover:bg-[#1d4380] hover:border-[#1d4380] hover:text-white transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#02265f]/10">
                    {p.specs.map((s) => (
                      <div key={s.l}>
                        <div className="text-xl md:text-2xl font-light tracking-tight text-[#1d4380]">{s.v}</div>
                        <div className="text-[10px] tracking-[0.2em] uppercase text-[#02265f]/60 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (05) PORTAL CIENTÍFICO */}
      <section className="relative bg-[#0a0e17] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="05" label="Portal Científico" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase mb-10">
                Curadoria de ciência da água <span className="text-[#4a90e2]">acessível a todos.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-10 max-w-xl">
                O Portal Científico Acqualive reúne estudos, artigos e a tradução do PRAL e da água alcalina mineralizada para o público brasileiro. Conteúdo revisado pela curadoria científica da marca.
              </p>
              <a
                href="https://lp.acqualive.com.br/portal-cientifico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1d4380] hover:bg-[#02265f] transition-colors rounded-full px-8 py-4 text-sm tracking-[0.15em] font-medium"
              >
                Visitar portal
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={scienceImg} alt="Portal Científico" className="w-full h-[420px] md:h-[520px] object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* (06) DEPOIMENTOS */}
      <section className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <EyebrowLight num="06" label="Depoimentos" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20"
          >
            Confiada por milhares, <span className="text-[#1d4380]">recomendada por especialistas.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(2,38,95,0.2)]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-medium tracking-tight">{t.name}</div>
                    <div className="text-xs tracking-[0.15em] uppercase text-[#02265f]/60 mt-1">{t.role}</div>
                  </div>
                </div>
                <p className="text-[#02265f]/80 leading-relaxed font-light">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (07) CTA BANNER */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#02265f]/85" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
              (07) <span className="ml-2 text-white/70 uppercase">Vamos conversar</span>
            </span>
          </div>

          <h2 className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.02em] uppercase max-w-5xl mb-10">
            Pronto para construir <span className="text-[#f26923]">algo memorável?</span>
          </h2>

          <p className="text-white/75 text-lg max-w-2xl font-light mb-12 leading-relaxed">
            Conte com nossa equipe para desenhar a melhor proposta de parceria entre você e Acqualive.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://wa.me/555192928468?text=Olá,%20vim%20pelo%20mídia%20kit%20Acqualive."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f26923] hover:bg-white hover:text-[#02265f] transition-colors rounded-full px-10 py-5 text-sm tracking-[0.15em] font-medium"
            >
              Falar com a Acqualive
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[#02265f] transition-colors rounded-full px-10 py-5 text-sm tracking-[0.15em] font-medium"
            >
              <Download className="w-4 h-4" />
              Baixar PDF
            </button>
            <div className="flex items-center gap-3 text-white/80 ml-2">
              <Phone className="w-4 h-4 text-[#f26923]" />
              <span className="text-sm tracking-wide">+55 51 9292-8468</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* (08) PARCERIAS */}
      <section id="parcerias" className="relative bg-[#0a0e17] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="08" label="Formatos de parceria" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20"
          >
            Três formatos para <span className="text-[#f26923]">construir junto.</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {PARTNERSHIPS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-[#f26923]/40 transition-all"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="text-5xl font-light text-[#f26923]">{p.tag}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#f26923] group-hover:rotate-45 transition-all" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0e17] border-t border-white/10 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs tracking-[0.2em] uppercase text-white/50">
          <a href="#top" className="text-white font-bold tracking-[0.2em]">ACQUALIVE<span className="text-[#f26923]">.</span></a>
          <span>Mídia Kit Oficial · 2026</span>
          <a href="https://www.acqualive.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            acqualive.com.br
          </a>
        </div>
      </footer>

      <style>{`
        @media print {
          header, .fixed, button { display: none !important; }
          section { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default MidiaKit;
