import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Play, Send, ArrowUpRight, ArrowLeft, ArrowRight, Plus, Minus, Phone, Download,
  Instagram, Youtube, Facebook, Globe, Mail, MapPin,
  FlaskConical, Award, Leaf, HeartPulse, Users, Building2, Microscope, FileText, Quote
} from "lucide-react";
import heroImg from "@/assets/midiakit-hero.jpg";
import waterImg from "@/assets/midiakit-water.jpg";
import scienceImg from "@/assets/midiakit-science.jpg";
import foundersImg from "@/assets/midiakit-founders.jpg";
import blueZonesImg from "@/assets/midiakit-bluezones.jpg";

/* ---------- DATA ---------- */

const NAV = [
  { label: "INÍCIO", href: "#top" },
  { label: "MARCA", href: "#sobre" },
  { label: "CIÊNCIA", href: "#ciencia" },
  { label: "PRODUTOS", href: "#produtos" },
  { label: "PARCERIAS", href: "#parcerias" },
];

const SUMMARY = [
  { num: "02", label: "A marca" },
  { num: "03", label: "Fundadores" },
  { num: "04", label: "Linha do tempo" },
  { num: "05", label: "Pilares" },
  { num: "06", label: "Ciência comprovada" },
  { num: "07", label: "Tecnologia TRIWAY" },
  { num: "08", label: "Portal Científico" },
  { num: "09", label: "Linha de produtos" },
  { num: "10", label: "Números" },
  { num: "11", label: "Audiência" },
  { num: "12", label: "Canais oficiais" },
  { num: "13", label: "Depoimentos" },
  { num: "14", label: "Parcerias" },
  { num: "15", label: "Contato" },
];

const TIMELINE = [
  { year: "2009", title: "O insight", text: "Mauro Mumbach e Sidney Rodrigues estudam PRAL, mineralização e as zonas azuis de Sardenha e Okinawa." },
  { year: "2010", title: "Fundação", text: "Nasce a Acqualive, não como marca de filtros, mas como empresa de tecnologia em saúde." },
  { year: "2012", title: "Refil Nanno", text: "Lançamento do refil Nanno, primeira geração da tecnologia proprietária de mineralização." },
  { year: "2014", title: "Reconhecimento científico", text: "Conceito PRAL Negativo publicado na SAN, consolidando o pilar científico da marca." },
  { year: "2015", title: "Expansão", text: "Acqualive vira franquia e começa a expansão pelo Brasil." },
  { year: "2017", title: "Primeiro estudo clínico", text: "Dra. Juliana Chaves conduz o primeiro estudo clínico brasileiro com água alcalina mineralizada, 50 voluntários, pH 8.8." },
  { year: "2020", title: "Internacional", text: "Resultados publicados no PubMed e apresentados em congresso científico em Praga." },
  { year: "2023", title: "Unicamp", text: "Estudo Unicamp comprova remoção de até 99% de agrotóxicos da água." },
  { year: "2026", title: "TRIWAY consolidada", text: "Três patentes próprias, 150 mil famílias, 20+ lojas e a maior referência em água alcalina mineralizada do Brasil." },
];

const PILLARS = [
  { icon: Microscope, title: "Ciência comprovada", text: "Única marca do segmento com estudo clínico internacional publicado. PubMed, Praga e Unicamp validando 16 anos de pesquisa." },
  { icon: FlaskConical, title: "Tecnologia TRIWAY", text: "Três patentes próprias que transformam a água da torneira em água alcalina mineralizada de alto desempenho." },
  { icon: HeartPulse, title: "Saúde preventiva", text: "PRAL negativo: potencial alcalinizante que reduz riscos associados a diabetes, hipertensão, osteoporose e Alzheimer." },
  { icon: Leaf, title: "Sustentabilidade", text: "Mais de 600 milhões de garrafas plásticas evitadas em 16 anos. Cada Acqualive substitui uma vida inteira de descarte." },
];

const STUDY_RESULTS = [
  { v: "8.8", l: "pH alcalino" },
  { v: "50", l: "Voluntários" },
  { v: "43%", l: "Melhora gastrite" },
  { v: "7%", l: "Remissão total" },
];

const TRIWAY = [
  { tag: "01", title: "Patente de mineralização", text: "Sistema proprietário que devolve magnésio ionizado e minerais essenciais à água da torneira." },
  { tag: "02", title: "Patente de alcalinização", text: "Tecnologia que eleva o pH da água sem aditivos químicos, atingindo até pH 8.8." },
  { tag: "03", title: "Patente de filtragem TRIWAY", text: "Tripla camada que remove 98% de cloro e até 99% de agrotóxicos, validado por Unicamp." },
];

const PRODUCTS = [
  {
    code: "Top de gama",
    name: "Acqualive V Self 10L Premium",
    img: "https://www.acqualive.com.br/cdn/shop/files/V_Self_10L_Premium_Branco_900x.png",
    price: "R$ 2.697",
    specs: [{ v: "10L", l: "Reservatório" }, { v: "98%", l: "Cloro" }, { v: "pH 8.8", l: "Alcalina" }],
  },
  {
    code: "Linha cerâmica",
    name: "Acqualive Terracota",
    img: "https://www.acqualive.com.br/cdn/shop/files/Terracota_Bege_900x.png",
    price: "R$ 3.147",
    specs: [{ v: "6L", l: "Reservatório" }, { v: "99%", l: "Agrotóxicos" }, { v: "Barro", l: "Natural" }],
  },
  {
    code: "Linha clássica",
    name: "Acqualive V Self 6L Premium",
    img: "https://www.acqualive.com.br/cdn/shop/files/V_Self_6L_Premium_Branco_900x.png",
    price: "R$ 2.597",
    specs: [{ v: "6L", l: "Reservatório" }, { v: "98%", l: "Cloro" }, { v: "pH 8.8", l: "Alcalina" }],
  },
  {
    code: "Entrada",
    name: "Acqualive V Self 6L",
    img: "https://www.acqualive.com.br/cdn/shop/files/V_Self_6L_Branco_900x.png",
    price: "R$ 1.847",
    specs: [{ v: "6L", l: "Reservatório" }, { v: "98%", l: "Cloro" }, { v: "pH 8.8", l: "Alcalina" }],
  },
  {
    code: "Cuidado",
    name: "Acqualive Shower",
    img: "https://www.acqualive.com.br/cdn/shop/files/AcqualiveShower_900x.png",
    price: "Sob consulta",
    specs: [{ v: "Banho", l: "Sem cloro" }, { v: "Pele", l: "Hidratada" }, { v: "Fácil", l: "Instalação" }],
  },
  {
    code: "Cuidado",
    name: "Acqualive Clean Care",
    img: "https://www.acqualive.com.br/cdn/shop/files/CleanCare_900x.png",
    price: "Sob consulta",
    specs: [{ v: "Higiene", l: "Profunda" }, { v: "Natural", l: "Fórmula" }, { v: "Acqualive", l: "Cuidado" }],
  },
];

const STATS = [
  { v: "30+", l: "anos de pesquisa" },
  { v: "16+", l: "anos de marca" },
  { v: "150K+", l: "famílias atendidas" },
  { v: "600M+", l: "garrafas evitadas" },
  { v: "98%", l: "remoção de cloro" },
  { v: "99%", l: "agrotóxicos (Unicamp)" },
  { v: "20+", l: "lojas no Brasil" },
  { v: "3", l: "patentes próprias" },
];

const AUDIENCE = [
  { icon: HeartPulse, title: "Famílias preventivas", text: "Pessoas que enxergam saúde como rotina, não como tratamento. Buscam longevidade ativa e qualidade de vida." },
  { icon: Microscope, title: "Profissionais de saúde", text: "Médicos, nutricionistas, dentistas e nutrólogos que recomendam Acqualive como base do protocolo preventivo." },
  { icon: Award, title: "Atletas e performance", text: "Praticantes amadores e profissionais que entendem hidratação alcalina como vantagem competitiva." },
  { icon: Users, title: "Bem-estar e biohacking", text: "Comunidades de longevidade, biohackers e curadores de hábitos saudáveis que buscam ciência aplicada." },
];

const CHANNELS = [
  { icon: Globe, name: "acqualive.com.br", href: "https://www.acqualive.com.br", label: "Site oficial" },
  { icon: Instagram, name: "@acqualivegroup", href: "https://instagram.com/acqualivegroup", label: "Instagram" },
  { icon: Youtube, name: "Acqualive", href: "https://youtube.com/@acqualive", label: "YouTube · 10,6K" },
  { icon: Facebook, name: "/acqualivedobrasil", href: "https://facebook.com/acqualivedobrasil", label: "Facebook" },
  { icon: FileText, name: "Portal Científico", href: "https://lp.acqualive.com.br/portal-cientifico", label: "Curadoria de ciência" },
  { icon: FileText, name: "Blog Acqualive", href: "https://blog.acqualive.com.br", label: "Conteúdo editorial" },
];

const TESTIMONIALS = [
  { name: "Dra. Juliana Chaves", role: "Pesquisadora clínica", text: "Conduzi o primeiro estudo brasileiro com água alcalina mineralizada Acqualive. Os resultados publicados em PubMed mostram impacto direto em saúde digestiva e qualidade de vida.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" },
  { name: "Maria Cleodete", role: "Cliente Acqualive · SP", text: "Não consigo mais viver sem. A água é outra coisa, leve, fresquinha, e a sensação de saúde e bem-estar da família mudou completamente.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
  { name: "Ilane Venturim", role: "Cliente Acqualive · RJ", text: "Confiança total. Acompanho a Acqualive há anos pela seriedade científica e pela transparência. Recomendo a todos os meus pacientes.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" },
  { name: "Mártin Lavies", role: "Cliente Acqualive · RS", text: "Investimento em saúde da família. O que eu economizo em água engarrafada já paga o equipamento. E o sabor é incomparável.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
];

const PARTNERSHIPS = [
  { tag: "01", title: "Embaixador de marca", subtitle: "Médicos, atletas e especialistas", text: "Profissionais e atletas que incorporam Acqualive à rotina e ao discurso de saúde preventiva. Co-criação de autoridade científica e presença em conteúdos editoriais." },
  { tag: "02", title: "Conteúdo e co-criação", subtitle: "Editorial, vídeo e séries científicas", text: "Projetos produzidos em parceria com a curadoria do Portal Científico Acqualive. Acesso a estúdio, time editorial e dados científicos exclusivos." },
  { tag: "03", title: "Afiliado e comissionamento", subtitle: "Receita recorrente sobre indicações", text: "Modelo de comissionamento para parceiros com audiência qualificada em longevidade, performance e bem-estar. Material de apoio e dashboard de performance." },
];

const PARTNER_CONTENT = [
  { type: "youtube", id: "pofP0CoaJtE", title: "Conversa sobre água alcalina", author: "Parceiro Acqualive" },
  { type: "youtube", id: "d6eF3ZdgV84", title: "Ciência da hidratação", author: "Parceiro Acqualive" },
  { type: "youtube", id: "j_Yz7C0FlLw", title: "Rotina de saúde preventiva", author: "Parceiro Acqualive" },
  { type: "youtube", id: "DDgaYDxQxjk", title: "Tecnologia TRIWAY explicada", author: "Parceiro Acqualive" },
  { type: "instagram", id: "DXXjGajR666", title: "Reel: bem-estar e água", author: "Parceiro Acqualive" },
  { type: "instagram", id: "DW6oOYVkWG8", title: "Reel: rotina fresquinha", author: "Parceiro Acqualive" },
  { type: "instagram", id: "DYXSAYBxkLF", title: "Reel: saúde no dia a dia", author: "Parceiro Acqualive" },
] as const;

/* ---------- HELPERS ---------- */

const Eyebrow = ({ num, label, light = false }: { num: string; label: string; light?: boolean }) => (
  <div className="flex items-center justify-between mb-10">
    <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">
      ({num}) <span className={`ml-2 uppercase ${light ? "text-[#02265f]/70" : "text-white/70"}`}>{label}</span>
    </span>
    <span className={`text-xs tracking-[0.3em] font-medium uppercase ${light ? "text-[#02265f]/40" : "text-white/40"}`}>
      Acqualive
    </span>
  </div>
);

/* ---------- PARTNER CONTENT CAROUSEL ---------- */

const PartnerContentSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    updateState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // drag-to-scroll
  const dragState = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.down) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.startLeft - dx;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    dragState.current.down = false;
    if (el) try { el.releasePointerCapture(e.pointerId); } catch {}
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="sec-13b" className="relative bg-[#f5f7fa] text-[#02265f] py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <Eyebrow num="13" label="Conteúdo de parceiros" />
        <Reveal>
          <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-4">
            Vozes que <span className="text-[#f26923]">amplificam</span> a marca.
          </h2>
          <p className="text-[#02265f]/70 text-lg font-light max-w-2xl mb-12">
            Parceiros, médicos e criadores que co-criam conteúdo conosco. Arraste, role ou use as setas.
          </p>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className="flex gap-6 md:gap-8 px-6 md:px-12 lg:px-20 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {PARTNER_CONTENT.map((item, i) => {
            const isYT = item.type === "youtube";
            const thumb = isYT
              ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
              : null;
            const href = isYT
              ? `https://youtu.be/${item.id}`
              : `https://www.instagram.com/reel/${item.id}/`;

            return (
              <motion.a
                key={item.id + i}
                data-card
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative shrink-0 w-[280px] md:w-[360px] lg:w-[420px] aspect-[9/14] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1d4380] to-[#02265f] border border-white/10"
              >
                {isYT && thumb ? (
                  <img
                    src={thumb}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,105,35,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(29,67,128,0.6),transparent_70%)]" />
                )}

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-6 h-6 md:w-7 md:h-7 text-[#02265f] ml-1" fill="currentColor" />
                </motion.div>

                {/* platform badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/15">
                  {isYT ? (
                    <Youtube className="w-3.5 h-3.5 text-[#f26923]" />
                  ) : (
                    <Instagram className="w-3.5 h-3.5 text-[#f26923]" />
                  )}
                  <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                    {isYT ? "YouTube" : "Reel"}
                  </span>
                </div>

                {/* footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs tracking-[0.25em] uppercase text-[#f26923] mb-2">
                    {String(i + 1).padStart(2, "0")} · {item.author}
                  </div>
                  <div className="text-lg md:text-xl font-light leading-tight">
                    {item.title}
                  </div>
                </div>
              </motion.a>
            );
          })}
        <div className="shrink-0 w-6" />
      </div>

      {/* controls */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full mt-10 flex items-center justify-between gap-6">
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f26923] transition-[width] duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
            className="w-12 h-12 rounded-full border border-white/20 hover:border-[#f26923] hover:bg-[#f26923]/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canNext}
            aria-label="Próximo"
            className="w-12 h-12 rounded-full border border-white/20 hover:border-[#f26923] hover:bg-[#f26923]/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-xs tracking-[0.3em] uppercase text-white/50 hidden md:inline">
          {PARTNER_CONTENT.length} episódios
        </span>
      </div>
    </section>
  );
};

const Reveal = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------- PAGE ---------- */

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
    <div id="top" className="min-h-screen bg-[#f5f7fa] text-[#02265f] antialiased overflow-x-hidden" style={{ fontFamily: "'Archivo', sans-serif" }}>
      <Helmet>
        <title>Mídia Kit Acqualive | Saúde, ciência e longevidade</title>
        <meta name="description" content="Mídia kit oficial Acqualive: única marca de água alcalina mineralizada do Brasil com estudo clínico internacional publicado. 16 anos, 150 mil famílias, 3 patentes próprias." />
        <link rel="canonical" href={`https://paginas.acqualive.com.br/midia-kit${slug ? `/${slug}` : ""}`} />
      </Helmet>

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#f26923] origin-left z-[60]" style={{ scaleX: progress }} />

      {/* HEADER */}
      <motion.header
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-white/60 border-b border-[#02265f]/5"
      >
        <a href="#top" className="text-xl tracking-[0.2em] font-bold text-[#02265f]">ACQUALIVE<span className="text-[#f26923]">.</span></a>
        <nav className="hidden lg:flex items-center gap-9 text-xs tracking-[0.18em] font-medium">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[#02265f]/70 hover:text-[#02265f] transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/555192928468?text=Olá,%20vim%20pelo%20mídia%20kit%20Acqualive." target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1d4380] hover:bg-[#02265f] transition-colors text-white rounded-full px-6 py-3 text-xs tracking-[0.18em] font-medium">
            Fale com a marca
          </a>
          <button onClick={() => window.print()} aria-label="Baixar PDF"
            className="w-11 h-11 rounded-full bg-[#02265f] text-white flex items-center justify-center hover:bg-[#f26923] transition-colors">
            <Send className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      </motion.header>

      {/* (01) HERO */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
        <motion.div style={{ y: heroParallax, scale: 1.05 }} className="absolute inset-0">
          <img src={heroImg} alt="Acqualive" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/85 via-[#0a0e17]/40 to-[#0a0e17]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/60 via-transparent to-[#0a0e17]" />
        </motion.div>

        <motion.div style={{ opacity: heroFade }} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-1/2 right-6 md:right-12 lg:right-20 -translate-y-1/2 hidden md:block text-right">
            <div className="text-4xl md:text-5xl font-light tracking-tight">150K+</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mt-2">Famílias atendidas</div>
            <motion.button whileHover={{ scale: 1.1, rotate: 45 }}
              className="mt-8 ml-auto w-14 h-14 rounded-full bg-white text-[#0a0e17] flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>
          </motion.div>

          <div className="max-w-4xl">
            {partnerName && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs tracking-[0.3em] uppercase text-[#f26923] mb-8 font-medium">
                Mídia Kit · {partnerName}
              </motion.div>
            )}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
              (01) Mídia Kit Oficial · 2026
            </motion.div>

            <h1 className="font-light text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-[-0.02em] uppercase">
              {["SAÚDE", "COMEÇA", "PELA"].map((word, i) => (
                <motion.span key={word} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-4">{word}</motion.span>
              ))}
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }}
                className="inline-block" style={{ color: "#4a90e2" }}>ÁGUA</motion.span><br />
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
                className="inline-block">CERTA.</motion.span>
            </h1>
          </div>

          <div className="mt-auto pt-24 flex flex-wrap items-end justify-between gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-5 max-w-md">
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group hover:bg-white hover:text-[#0a0e17] transition-all flex-shrink-0">
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              </button>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                A única marca de água alcalina mineralizada do Brasil com estudo clínico internacional publicado. 16 anos transformando a água da torneira na base da saúde preventiva.
              </p>
            </motion.div>
            <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.6 }}
              href="#sumario"
              className="inline-flex items-center gap-2 bg-[#1d4380] hover:bg-[#02265f] transition-colors rounded-full px-8 py-4 text-sm tracking-[0.15em] font-medium">
              Explorar mídia kit
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* SUMÁRIO / ÍNDICE */}
      <section id="sumario" className="relative bg-[#f5f7fa] border-t border-[#02265f]/5 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <span className="text-xs tracking-[0.3em] font-medium text-[#f26923]">Sumário</span>
                <h2 className="font-light text-3xl md:text-4xl mt-3 tracking-tight">Neste documento.</h2>
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/40">14 seções · 16 anos de marca</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
            {SUMMARY.map((s, i) => (
              <motion.a
                key={s.num} href={`#sec-${s.num}`}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group bg-[#0a0e17] px-6 py-5 flex items-baseline gap-4 hover:bg-[#0e1422] transition-colors"
              >
                <span className="text-xs tracking-[0.2em] text-[#f26923]">({s.num})</span>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors flex-1">{s.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#f26923] group-hover:rotate-45 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* (02) A MARCA */}
      <section id="sec-02" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="02" label="A marca" light />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal>
              <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase">
                Tecnologia em <span className="text-[#1d4380]">saúde</span>, não apenas filtros
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-[#02265f]/80 leading-relaxed font-light mb-8">
                A Acqualive não vende filtros. Vende saúde preventiva embarcada em design. Inspirados pelas zonas azuis de Sardenha e Okinawa, onde as pessoas vivem mais e melhor, Mauro Mumbach e Sidney Rodrigues fundaram a marca em 2010 com uma convicção: <strong className="font-medium">a água certa é a base esquecida da longevidade.</strong>
              </p>
              <p className="text-base text-[#02265f]/70 leading-relaxed font-light mb-10">
                Hoje, 16 anos depois, somos a maior referência em água alcalina mineralizada do Brasil. 30+ anos de pesquisa acumulada, três patentes próprias, 150 mil famílias atendidas e mais de 600 milhões de garrafas plásticas evitadas. A única marca do segmento com estudo clínico internacional publicado.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { v: "2010", l: "Fundação" },
                  { v: "150K+", l: "Famílias" },
                  { v: "3", l: "Patentes" },
                  { v: "20+", l: "Lojas BR" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-[#02265f]/15 pt-4">
                    <div className="text-3xl font-light tracking-tight text-[#1d4380]">{s.v}</div>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-[#02265f]/60 mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-20 rounded-2xl overflow-hidden">
              <img src={blueZonesImg} alt="Zonas azuis" className="w-full h-[420px] md:h-[560px] object-cover" loading="lazy" width={1920} height={1080} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* (03) FUNDADORES */}
      <section id="sec-03" className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="03" label="Fundadores" />
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <Reveal>
              <div className="lg:col-span-7 rounded-2xl overflow-hidden">
                <img src={foundersImg} alt="Fundadores Acqualive" className="w-full h-[480px] md:h-[640px] object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <h2 className="font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] uppercase mb-10">
                  Dois nomes, <span className="text-[#4a90e2]">uma convicção.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="space-y-8">
                   <div>
                    <h3 className="text-xl font-medium tracking-tight mb-2 text-[#02265f]">Mauro Mumbach</h3>
                    <div className="text-xs tracking-[0.2em] uppercase text-[#f26923] mb-3">Co-fundador</div>
                    <p className="text-[#02265f]/70 text-sm leading-relaxed font-light">
                      Pesquisador e empreendedor. Mais de 30 anos estudando mineralização da água, PRAL e longevidade. O elo entre ciência e produto na Acqualive.
                    </p>
                  </div>
                  <div className="h-px bg-[#02265f]/10" />
                  <div>
                    <h3 className="text-xl font-medium tracking-tight mb-2 text-[#02265f]">Sidney Rodrigues</h3>
                    <div className="text-xs tracking-[0.2em] uppercase text-[#f26923] mb-3">Co-fundador</div>
                    <p className="text-[#02265f]/70 text-sm leading-relaxed font-light">
                      Estrategista de marca e expansão. Responsável por transformar a tecnologia em uma rede de 20+ lojas e uma marca presente em todo o Brasil.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* (04) LINHA DO TEMPO */}
      <section id="sec-04" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="04" label="Linha do tempo" light />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              De um insight em Sardenha a <span className="text-[#1d4380]">três patentes próprias.</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[7px] md:left-[120px] top-0 bottom-0 w-px bg-[#02265f]/20" />
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 md:pl-[170px] pb-14 last:pb-0"
              >
                <span className="absolute left-0 md:left-[114px] top-2 w-4 h-4 rounded-full bg-[#f5f3ee] border-2 border-[#1d4380]" />
                <div className="absolute left-0 md:left-0 top-0 hidden md:block w-[100px] text-right">
                  <span className="text-3xl md:text-4xl font-light text-[#1d4380] tracking-tight">{t.year}</span>
                </div>
                <div className="md:hidden text-xs tracking-[0.2em] text-[#1d4380] font-medium mb-2">{t.year}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-3">{t.title}</h3>
                <p className="text-[#02265f]/70 leading-relaxed font-light max-w-2xl">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (05) PILARES */}
      <section id="sec-05" className="relative bg-[#eef1f7] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="05" label="Pilares da marca" />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              Quatro fundamentos que <span className="text-[#4a90e2]">sustentam tudo.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden">
                <img src={waterImg} alt="Água Acqualive" className="w-full h-[500px] md:h-[640px] object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div>
              {PILLARS.map((p, i) => {
                const open = openPillar === i;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="border-b border-[#02265f]/15"
                  >
                    <button onClick={() => setOpenPillar(open ? -1 : i)}
                      className="w-full flex items-center justify-between py-6 text-left group">
                      <div className="flex items-center gap-4">
                        <p.icon className={`w-5 h-5 transition-colors ${open ? "text-[#f26923]" : "text-[#02265f]/50"}`} strokeWidth={1.4} />
                        <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors ${open ? "text-[#f26923]" : "text-[#02265f] group-hover:text-[#f26923]"}`}>
                          {p.title}
                        </span>
                      </div>
                      <span className="w-9 h-9 rounded-full border border-[#02265f]/30 flex items-center justify-center flex-shrink-0 ml-4">
                        {open ? <Minus className="w-3.5 h-3.5 text-[#02265f]" /> : <Plus className="w-3.5 h-3.5 text-[#02265f]" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          <p className="text-[#02265f]/65 text-sm leading-relaxed font-light pb-6 pr-10 pl-9">{p.text}</p>
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

      {/* (06) CIÊNCIA COMPROVADA */}
      <section id="sec-06" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="06" label="Ciência comprovada" light />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-16">
              O primeiro estudo clínico brasileiro <span className="text-[#1d4380]">com água alcalina mineralizada.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(2,38,95,0.2)] h-full">

                <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#f26923] font-medium mb-6">
                  <FileText className="w-4 h-4" />
                  Estudo clínico · 2017
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Dra. Juliana Chaves</h3>
                <p className="text-[#02265f]/75 leading-relaxed font-light mb-8">
                  Pesquisadora responsável pelo primeiro estudo clínico do Brasil com água alcalina mineralizada Acqualive. <strong className="font-medium">50 voluntários, água a pH 8.8</strong>, acompanhados ao longo de meses. Resultados publicados em <strong className="font-medium">PubMed</strong> e apresentados em congresso científico em <strong className="font-medium">Praga (2020)</strong>.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#02265f]/10">
                  {STUDY_RESULTS.map((s) => (
                    <div key={s.l}>
                      <div className="text-3xl font-light tracking-tight text-[#1d4380]">{s.v}</div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#02265f]/60 mt-2">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-5">
              <div className="bg-[#02265f] text-white rounded-2xl p-8 md:p-12 h-full flex flex-col">

                <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#f26923] font-medium mb-6">
                  <Microscope className="w-4 h-4" />
                  Validação Unicamp
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Até 99% de agrotóxicos removidos</h3>
                <p className="text-white/75 leading-relaxed font-light mb-auto">
                  Estudo da Unicamp comprovou que a tecnologia TRIWAY remove até 99% dos agrotóxicos presentes na água da torneira, além de 98% do cloro livre.
                </p>
                <div className="mt-10 pt-8 border-t border-white/15">
                  <div className="text-5xl font-light tracking-tight text-[#f26923]">99%</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-2">Agrotóxicos removidos</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-light tracking-tight mb-6">Implicações em saúde preventiva</h3>
              <p className="text-[#02265f]/75 leading-relaxed font-light max-w-4xl">
                PRAL negativo (Potencial Renal de Carga Ácida) significa <strong className="font-medium">potencial alcalinizante</strong>. A literatura científica associa dieta alcalinizante a menor risco de <strong className="font-medium">diabetes tipo 2, hipertensão, osteoporose, cálculos renais e doenças neurodegenerativas como Alzheimer</strong>. A Acqualive é a base alcalinizante mais simples e contínua que existe: água.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* (07) TRIWAY */}
      <section id="sec-07" className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="07" label="Tecnologia TRIWAY" />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-6">
              Três patentes próprias. <span className="text-[#4a90e2]">Uma tecnologia.</span>
            </h2>
            <p className="text-[#02265f]/65 text-lg font-light max-w-2xl mb-20">
              TRIWAY é a arquitetura proprietária da Acqualive. Filtragem, mineralização e alcalinização em um único sistema integrado, validado por décadas de pesquisa.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {TRIWAY.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#02265f]/10 rounded-2xl p-8 hover:border-[#f26923]/40 shadow-[0_4px_20px_-10px_rgba(2,38,95,0.15)] transition-all"
              >
                <div className="text-5xl font-light text-[#f26923] mb-12">{t.tag}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 text-[#02265f]">{t.title}</h3>
                <p className="text-[#02265f]/60 text-sm leading-relaxed font-light">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (08) PORTAL CIENTÍFICO */}
      <section id="sec-08" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="08" label="Portal Científico" light />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase mb-8">
                Curadoria de ciência da água, <span className="text-[#1d4380]">acessível a todos.</span>
              </h2>
              <p className="text-[#02265f]/75 text-lg leading-relaxed font-light mb-6 max-w-xl">
                O Portal Científico Acqualive reúne estudos, artigos e a tradução do PRAL, da água alcalina mineralizada e da pesquisa em longevidade para o público brasileiro.
              </p>
              <p className="text-[#02265f]/65 text-base leading-relaxed font-light mb-10 max-w-xl">
                Conteúdo revisado pela curadoria científica da marca, em parceria com pesquisadores e médicos especialistas em saúde preventiva.
              </p>
              <a href="https://lp.acqualive.com.br/portal-cientifico" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#02265f] hover:bg-[#1d4380] transition-colors text-white rounded-full px-8 py-4 text-sm tracking-[0.15em] font-medium">
                Visitar portal científico
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden">
                <img src={scienceImg} alt="Portal Científico" className="w-full h-[420px] md:h-[560px] object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* (09) PRODUTOS */}
      <section id="sec-09" className="relative bg-[#f5f7fa] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="09" label="Linha de produtos" />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-6">
              Do dia a dia ao topo de gama, <span className="text-[#4a90e2]">um Acqualive para cada casa.</span>
            </h2>
            <p className="text-[#02265f]/65 text-lg font-light max-w-2xl mb-20">
              Toda a linha em 10x sem juros, com frete grátis (consulte regiões disponíveis).
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-[#02265f]/10 rounded-2xl overflow-hidden hover:border-[#f26923]/40 shadow-[0_4px_20px_-10px_rgba(2,38,95,0.15)] transition-all"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f5f7fa] to-transparent overflow-hidden">
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-[#02265f]/60 font-medium">{p.code}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-light tracking-tight mb-2 text-[#02265f]">{p.name}</h3>
                  <div className="text-sm text-[#f26923] tracking-wide mb-6">{p.price}</div>
                  <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[#02265f]/10">
                    {p.specs.map((s) => (
                      <div key={s.l}>
                        <div className="text-lg font-light tracking-tight text-[#4a90e2]">{s.v}</div>
                        <div className="text-[9px] tracking-[0.18em] uppercase text-[#02265f]/50 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (10) NÚMEROS */}
      <section id="sec-10" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="10" label="A Acqualive em números" light />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              O peso quantitativo de <span className="text-[#1d4380]">16 anos.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#02265f]/10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-[#f5f3ee] p-8 md:p-10 group hover:bg-white transition-colors"
              >
                <div className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tight text-[#02265f] group-hover:text-[#1d4380] transition-colors">
                  {s.v}
                </div>
                <div className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#02265f]/60">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (11) AUDIÊNCIA */}
      <section id="sec-11" className="relative bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="11" label="Audiência Acqualive" />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              Quem escolhe <span className="text-[#4a90e2]">Acqualive.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {AUDIENCE.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-[#f5f7fa] border border-[#02265f]/10 rounded-2xl p-8 md:p-10 hover:border-[#f26923]/40 transition-all group"
              >
                <a.icon className="w-7 h-7 text-[#f26923] mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.3} />
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-4 text-[#02265f]">{a.title}</h3>
                <p className="text-[#02265f]/65 text-sm leading-relaxed font-light">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (12) CANAIS OFICIAIS */}
      <section id="sec-12" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="12" label="Canais oficiais" light />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              Onde a marca <span className="text-[#1d4380]">acontece.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#02265f]/10">
            {CHANNELS.map((c, i) => (
              <motion.a
                key={c.name} href={c.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-[#f5f3ee] p-8 hover:bg-white transition-colors flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#02265f] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#f26923] transition-colors">
                  <c.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium tracking-tight">{c.name}</div>
                  <div className="text-xs tracking-[0.15em] uppercase text-[#02265f]/60 mt-1">{c.label}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#02265f]/40 group-hover:text-[#f26923] group-hover:rotate-45 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* (13) DEPOIMENTOS */}
      <section id="sec-13" className="relative bg-[#eef1f7] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="13" label="Depoimentos" />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-20">
              Confiada por milhares, <span className="text-[#4a90e2]">recomendada por especialistas.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-white border border-[#02265f]/10 rounded-2xl p-8 md:p-10 hover:border-[#f26923]/40 shadow-[0_4px_20px_-10px_rgba(2,38,95,0.15)] transition-all"
              >
                <Quote className="w-6 h-6 text-[#f26923] mb-6" strokeWidth={1.3} />
                <p className="text-[#02265f]/85 leading-relaxed font-light mb-8 text-base md:text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#02265f]/10">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-medium tracking-tight text-[#02265f]">{t.name}</div>
                    <div className="text-xs tracking-[0.15em] uppercase text-[#02265f]/60 mt-1">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (13.5) CONTEÚDO DE PARCEIROS */}
      <PartnerContentSection />

      {/* (14) PARCERIAS */}
      <section id="sec-14" className="relative bg-[#f5f3ee] text-[#02265f] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow num="14" label="Formatos de parceria" light />
          <Reveal>
            <h2 className="font-light text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mb-6">
              Três formatos para <span className="text-[#1d4380]">construir junto.</span>
            </h2>
            <p className="text-[#02265f]/70 text-lg font-light max-w-2xl mb-20">
              Toda parceria Acqualive é desenhada caso a caso, com base no perfil do parceiro, audiência e objetivo estratégico.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PARTNERSHIPS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(2,38,95,0.2)] hover:shadow-[0_30px_80px_-30px_rgba(2,38,95,0.3)] transition-all"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-5xl font-light text-[#f26923]">{p.tag}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#02265f]/30" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight mb-2">{p.title}</h3>
                <div className="text-xs tracking-[0.15em] uppercase text-[#02265f]/60 mb-5">{p.subtitle}</div>
                <p className="text-[#02265f]/75 text-sm leading-relaxed font-light">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* (15) CTA / CONTATO */}
      <section id="sec-15" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#02265f]/90" />
        </div>

        <Reveal>
          <div className="relative z-10 max-w-7xl mx-auto">
            <Eyebrow num="15" label="Vamos conversar" />

            <h2 className="font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-[-0.02em] uppercase max-w-5xl mb-10">
              Pronto para construir <span className="text-[#f26923]">algo memorável?</span>
            </h2>

            <p className="text-white/75 text-lg max-w-2xl font-light mb-14 leading-relaxed">
              Conte com nossa equipe para desenhar a melhor proposta de parceria entre você e Acqualive. Resposta em até 48h úteis.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-4xl">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#f26923] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1">WhatsApp</div>
                  <div className="text-base">+55 51 9292-8468</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#f26923] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1">E-mail</div>
                  <div className="text-base">parcerias@acqualive.com.br</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-5 h-5 text-[#f26923] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1">Sede</div>
                  <div className="text-base">Rio Grande do Sul · Brasil</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/555192928468?text=Olá,%20vim%20pelo%20mídia%20kit%20Acqualive." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f26923] hover:bg-white hover:text-[#02265f] transition-colors rounded-full px-10 py-5 text-sm tracking-[0.15em] font-medium">
                Falar com a Acqualive
              </a>
              <button onClick={() => window.print()}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[#02265f] transition-colors rounded-full px-10 py-5 text-sm tracking-[0.15em] font-medium">
                <Download className="w-4 h-4" /> Baixar PDF
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#02265f]/10 py-12 px-6 md:px-12 lg:px-20">
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
