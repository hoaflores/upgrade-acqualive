import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import {
  Shield, Droplets, Sparkles, Star, ChevronRight, CheckCircle2,
  ArrowRight, Heart, Award, Phone, Mail, MapPin,
  ChevronDown, Quote, Beaker, Leaf, Zap, Users,
  Facebook, Instagram, Youtube, ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logoAzul from "@/assets/logo-acqualive-azul.png";
import heroFamily from "@/assets/indica-hero-family.jpg";
import produtosLineup from "@/assets/indica-produtos-lineup.jpg";
import aguaPura from "@/assets/indica-agua-pura.jpg";
import aboutImg1 from "@/assets/indica-about-1.jpg";
import aboutImg2 from "@/assets/indica-about-2.jpg";
import consultImg from "@/assets/indica-consult.jpg";
import lifestyleImg1 from "@/assets/indica-lifestyle-1.png";
import lifestyleImg2 from "@/assets/indica-lifestyle-2.png";
import ambienteImg from "@/assets/indica-ambiente.jpg";
import vself6lImg from "@/assets/indica-prod-vself-6l.png";
import vpremiumImg from "@/assets/indica-prod-vself-10l-premium.png";
import terracotaImg from "@/assets/indica-prod-terracota.png";
import heroRustic from "@/assets/indica-hero-terracota-rustic.jpg";
import coupleKitchen from "@/assets/indica-couple-kitchen.jpg";
import familyDinner from "@/assets/indica-family-dinner.jpg";
import faqPour from "@/assets/indica-faq-pour.png";
import aboutKitchen from "@/assets/indica-about-kitchen.png";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá!%20Fui%20indicado%20por%20um%20amigo%20e%20quero%20conhecer%20a%20condição%20especial%20Acqualive.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

/* ══════════════════════════════════════════════════════════
   DECORATIVE SHAPES (Insuba-style SVG elements)
   ══════════════════════════════════════════════════════════ */
const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none">
    {Array.from({ length: 25 }).map((_, i) => (
      <circle key={i} cx={12 + (i % 5) * 24} cy={12 + Math.floor(i / 5) * 24} r="4" fill="currentColor" opacity="0.3" />
    ))}
  </svg>
);

const WaveShape = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg className={className} viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={flip ? { transform: "scaleY(-1)" } : {}}>
    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120Z" fill="currentColor" />
  </svg>
);




/* ══════════════════════════════════════════════════════════
   TOP BAR (Insuba-style)
   ══════════════════════════════════════════════════════════ */
const TopBar = () => (
  <div className="bg-[hsl(215,62%,31%)] text-white py-2.5 text-sm hidden md:block">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="tel:+555192928468" className="flex items-center gap-2 hover:text-[hsl(21,89%,55%)] transition-colors">
          <Phone className="w-4 h-4" /> (51) 9292-8468
        </a>
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4" /> contato@acqualive.com.br
        </span>
      </div>
      <div className="flex items-center gap-3">
        {[
          { Icon: Facebook, href: "https://www.facebook.com/acqualivedobrasil", label: "Facebook" },
          { Icon: Instagram, href: "https://www.instagram.com/acqualivegroup/", label: "Instagram" },
          { Icon: Youtube, href: "https://www.youtube.com/channel/UCoxasL5YDgz0AhqN2UgHV2A", label: "YouTube" },
        ].map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={`Acqualive no ${label}`}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(21,89%,55%)] transition-colors">
            <Icon className="w-4 h-4 text-white" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════
   HEADER (Insuba-style sticky nav)
   ══════════════════════════════════════════════════════════ */
const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container flex items-center justify-between h-20">
      <a href="https://www.acqualive.com.br" target="_blank" rel="noopener noreferrer">
        <img src={logoAzul} alt="Acqualive" className="h-8 md:h-10 w-auto" />
      </a>
      <nav className="hidden lg:flex items-center gap-8">
        {[
          { label: "Início", href: "#inicio" },
          { label: "Sobre", href: "#sobre" },
          { label: "Benefícios", href: "#beneficios" },
          { label: "Depoimentos", href: "#depoimentos" },
          { label: "Investimento", href: "#investimento" },
          { label: "FAQ", href: "#faq" },
        ].map((link) => (
          <a key={link.href} href={link.href}
            className="text-[hsl(215,65%,19%)] font-semibold text-sm hover:text-[hsl(21,89%,55%)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(21,89%,55%)] after:transition-all hover:after:w-full">
            {link.label}
          </a>
        ))}
      </nav>
      <Button variant="cta" size="default" asChild className="rounded-full group">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Falar com Consultor</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  </header>
);

/* ══════════════════════════════════════════════════════════
   HERO (Insuba-style: light bg, text left, large photo right
   bleeding to edge, floating circle photo, geometric shapes)
   ══════════════════════════════════════════════════════════ */
const HeroSection = () => (
  <section id="inicio" className="relative bg-[hsl(215,25%,95%)] overflow-hidden min-h-[85vh] flex items-center">
    {/* Top accent bar - blue instead of orange */}
    <div className="absolute top-0 left-0 right-0 h-2 bg-[hsl(215,62%,31%)]" />

    {/* (Geometric triangle/arrow shapes removed) */}

    {/* Hero photo - right side: rustic terracota with brick (mirrored to highlight filter) */}
    <div className="absolute top-0 right-0 w-[55%] h-full hidden lg:block">
      <img src={heroRustic} alt="Purificador Acqualive Terracota em ambiente rústico sofisticado" className="w-full h-full object-cover object-center scale-x-[-1]" />
      <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[hsl(215,25%,95%)] via-[hsl(215,25%,95%)]/60 to-transparent" />
    </div>

    {/* Ghost large photo behind left text */}
    <div className="absolute left-0 top-0 w-[45%] h-full hidden lg:block opacity-[0.04]">
      <img src={aboutImg1} alt="" className="w-full h-full object-cover" />
    </div>

    {/* Floating circular photo - now the family photo */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute top-[12%] right-[6%] w-40 h-40 rounded-full border-[6px] border-white shadow-elevated overflow-hidden hidden lg:block z-20"
    >
      <img src={heroFamily} alt="Família saudável" className="w-full h-full object-cover" />
    </motion.div>

    <div className="container relative z-10 py-20 lg:py-0">
      <div className="max-w-xl">
        {/* Tag badge - blue themed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-soft mb-6"
        >
          <div className="w-6 h-6 rounded bg-[hsl(215,62%,31%)] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-[hsl(215,62%,31%)]">Indicação Exclusiva Acqualive</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[hsl(215,65%,19%)] leading-[1.1] mb-6"
        >
          Alguém que ama você
          indicou a{" "}
          <span className="text-[hsl(215,62%,31%)]">melhor água do Brasil.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-[hsl(215,30%,35%)] text-lg leading-relaxed mb-8"
        >
          Quando alguém próximo compartilha a Acqualive com você, é porque já sentiu na própria vida a diferença de uma água que purifica de verdade. Mais de 100 mil famílias brasileiras já fizeram essa escolha. Agora é a sua vez de descobrir por quê.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Button variant="cta" size="xl" asChild className="rounded-xl group">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Quero minha condição especial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          <div className="w-3 h-3 rounded-full bg-[hsl(215,62%,31%)]" />
          <div className="w-3 h-3 rounded-full border-2 border-[hsl(215,62%,31%)]" />
        </div>
      </div>
    </div>

    {/* Bottom floating badge - blue themed */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="absolute bottom-10 right-[6%] bg-[hsl(215,62%,31%)] text-white px-8 py-4 rounded-xl shadow-elevated hidden lg:block z-20"
      style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
    >
      <p className="text-3xl font-bold">100 mil+</p>
      <p className="text-sm opacity-90">Famílias Atendidas</p>
    </motion.div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   STATS BAR (dark blue bar below hero, like Insuba)
   ══════════════════════════════════════════════════════════ */
const StatsBar = () => (
  <section className="relative bg-[hsl(218,97%,19%)] py-6 z-20">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[aboutImg1, aboutImg2, consultImg].map((img, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <a href="#depoimentos" className="text-white font-semibold flex items-center gap-2 hover:text-[hsl(21,89%,55%)] transition-colors">
            Mais <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-white text-sm md:text-base">
          <span className="font-bold">100 mil+</span> famílias já transformaram a qualidade da sua água{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[hsl(21,89%,55%)] font-semibold hover:underline">
            ( Comece agora )
          </a>
        </p>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   COUNTER SECTION (Insuba-style stats row)
   ══════════════════════════════════════════════════════════ */
const CounterSection = () => (
  <section className="py-16 bg-white">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "100 mil+", label: "Famílias por todo o Brasil" },
          { value: "99,9%", label: "de remoção do cloro" },
          { value: "4.9★", label: "Nota média dos clientes" },
          { value: "25+", label: "Anos de pesquisa e ciência" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-[hsl(215,62%,31%)]">{s.value}</p>
            <p className="text-[hsl(215,30%,35%)] text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   ABOUT SECTION (Insuba-style: 2 overlapping images left,
   text with checklist right, founder badge)
   ══════════════════════════════════════════════════════════ */
const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images - overlapping Insuba style */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <img src={aboutKitchen} alt="Purificador Acqualive Terracota em ambiente sofisticado" loading="lazy" className="w-[70%] rounded-2xl shadow-elevated" />
            <img src={coupleKitchen} alt="Casal feliz desfrutando de água Acqualive na cozinha" loading="lazy" className="absolute -bottom-10 right-0 w-[55%] rounded-2xl shadow-elevated border-[6px] border-white object-cover aspect-square" />
          </div>
          {/* Dot grid decoration */}
          <DotGrid className="absolute -top-6 -left-6 text-[hsl(215,62%,31%)]" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(21,89%,55%)]/10 rounded-full mb-4">
            <div className="w-6 h-6 rounded bg-[hsl(21,89%,55%)] flex items-center justify-center">
              <Droplets className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[hsl(21,89%,55%)]">Sobre a Acqualive</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,65%,19%)] leading-tight mb-6">
            Não é um filtro comum. É o sistema de purificação mais{" "}
            <span className="text-[hsl(21,89%,55%)]">completo do Brasil.</span>
          </h2>

          <p className="text-[hsl(215,30%,35%)] leading-relaxed mb-6">
            Inspirada nas <strong>blue zones</strong> (Sardenha e Okinawa), onde a água é naturalmente alcalina e a longevidade é recorde, a Acqualive replica esse processo com a tecnologia exclusiva <strong>TriWay</strong>. Resultado: água pura, alcalina, ionizada e rica em magnésio.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "+ Energia, - Cansaço",
              "Defesa contra doenças",
              "Hidratação real",
              "Juventude prolongada",
            ].map((item, i) => (
              <a key={i} href="#beneficios" className="flex items-center gap-2 text-[hsl(215,65%,19%)] font-semibold hover:text-[hsl(21,89%,55%)] transition-colors group">
                <CheckCircle2 className="w-4 h-4 text-[hsl(21,89%,55%)] flex-shrink-0" />
                {item}
              </a>
            ))}
          </div>

          {/* Consultoria Personalizada removida conforme solicitado */}

          <a href="#beneficios" className="inline-flex items-center gap-2 mt-6 text-[hsl(215,62%,31%)] font-semibold hover:text-[hsl(21,89%,55%)] transition-colors">
            Conheça todos os benefícios <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   MISSION BANNER (Insuba-style full-width blue section
   with tabs: Mission / Vision / Support)
   ══════════════════════════════════════════════════════════ */
const MissionBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "PURIFICAÇÃO",
      icon: Shield,
      heading: "Proteção Total:",
      points: [
        "Remove 99,9% de cloro, bactérias e metais pesados da água.",
        "Tecnologia de filtração com carvão ativado e membranas especiais.",
        "Certificação e laudos que comprovam a eficácia do processo.",
      ],
    },
    {
      title: "ALCALINIZAÇÃO",
      icon: Beaker,
      heading: "Equilíbrio Natural:",
      points: [
        "pH entre 8.5 e 9.5, ideal para o funcionamento celular.",
        "Potencial antioxidante que combate radicais livres.",
        "Auxilia na neutralização da acidez gerada pela dieta moderna.",
      ],
    },
    {
      title: "BENEFÍCIOS",
      icon: Sparkles,
      heading: "O que você ganha bebendo Acqualive todos os dias:",
      points: [
        "Mais energia e menos cansaço no dia a dia.",
        "Hidratação que você realmente sente, copo a copo.",
        "Defesa contra doenças silenciosas como hipertensão e diabetes.",
        "Ossos e articulações mais fortes com magnésio biodisponível.",
        "Pele e cabelos mais bonitos: juventude prolongada.",
        "Proteção para toda a família, sem contaminantes.",
      ],
    },
  ];

  return (
    <section id="beneficios" className="relative">
      {/* Wave separator */}
      <WaveShape className="w-full h-16 text-white absolute -top-1 z-10" />

      <div className="bg-gradient-to-br from-[hsl(215,62%,31%)] to-[hsl(218,97%,19%)] pt-24 pb-20 relative overflow-hidden">
        {/* Decorative blue accent shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(21,89%,55%)]/10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-8 items-start">
            {/* Tabs column */}
            <div className="flex lg:flex-col gap-3">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-4 text-left font-bold text-sm tracking-wider transition-all duration-300 rounded-lg ${
                    activeTab === i
                      ? "bg-white text-[hsl(215,62%,31%)] shadow-elevated"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Icon center */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center"
            >
              <div className="w-48 h-48 rounded-2xl border-2 border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                {(() => {
                  const Icon = tabs[activeTab].icon;
                  return <Icon className="w-20 h-20 text-white" strokeWidth={1} />;
                })()}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-6">{tabs[activeTab].heading}</h3>
              <ul className="space-y-4">
                {tabs[activeTab].points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(21,89%,55%)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   CONSULTATIONS (Insuba-style: tag + heading left,
   two circular overlapping photos right)
   ══════════════════════════════════════════════════════════ */
const ConsultSection = () => (
  <section className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(21,89%,55%)] rounded-full mb-4">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-[hsl(21,89%,55%)]" />
            </div>
            <span className="text-sm font-semibold text-white">Atendimento Consultivo</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,65%,19%)] leading-tight mb-6">
            Você não está comprando um produto. Está investindo na{" "}
            <span className="text-[hsl(21,89%,55%)]">saúde de quem você ama.</span>
          </h2>

          <p className="text-[hsl(215,30%,35%)] leading-relaxed mb-6">
            Sabemos que escolher um purificador não é uma decisão trivial. Por isso, cada pessoa indicada recebe atendimento de um consultor Acqualive dedicado, que vai entender a realidade da sua família, responder todas as dúvidas e recomendar a solução ideal para a sua rotina.
          </p>

          <p className="text-[hsl(215,30%,35%)] leading-relaxed mb-8">
            Nada de pressão. Nada de scripts decorados. Apenas uma conversa honesta sobre água, saúde e bem-estar. Porque confiança se constrói com transparência.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Users, text: "Atendimento humanizado e sem pressão" },
              { icon: Award, text: "Condição especial exclusiva para indicados" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[hsl(210,20%,97%)] transition-colors">
                <item.icon className="w-5 h-5 text-[hsl(21,89%,55%)]" />
                <span className="text-[hsl(215,65%,19%)] font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Images - Insuba style with overlapping circles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            <div className="w-[75%] ml-auto rounded-3xl overflow-hidden shadow-elevated">
              <img src={familyDinner} alt="Família reunida desfrutando da água Acqualive" loading="lazy" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full overflow-hidden border-[6px] border-white shadow-elevated">
              <img src={aguaPura} alt="Água pura cristalina" loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Dot grid */}
            <DotGrid className="absolute -top-6 -right-6 text-[hsl(21,89%,55%)]" />

            {/* Tag badge like Insuba */}
            <div className="absolute top-4 right-4 bg-[hsl(21,89%,55%)] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              # Atendimento Exclusivo
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   FAQ (Insuba-style: accordion left, image with badges right)
   ══════════════════════════════════════════════════════════ */
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "Qual a diferença real entre Acqualive e um filtro de barro ou de torneira?",
      a: "Filtros comuns retêm apenas partículas maiores como areia e sedimentos. A Acqualive vai muito além: elimina cloro, bactérias, metais pesados e compostos químicos. Além disso, transforma a água em alcalina ionizada e adiciona magnésio, algo que nenhum filtro convencional faz."
    },
    {
      q: "Como funciona o desconto exclusivo de indicação?",
      a: "Ao ser indicado por alguém que já é cliente Acqualive, você recebe uma condição comercial especial que não está disponível no site ou em lojas. Basta entrar em contato pelo WhatsApp, informar o nome de quem te indicou, e nosso consultor aplicará o benefício automaticamente."
    },
    {
      q: "Precisa de energia elétrica para funcionar?",
      a: "Não. A Acqualive funciona por gravidade, sem necessidade de energia elétrica ou conexão hidráulica complexa. Basta abastecer o reservatório superior com água da torneira e a purificação acontece naturalmente."
    },
    {
      q: "De quanto em quanto tempo preciso trocar o refil?",
      a: "A troca é recomendada a cada 6 meses ou a cada 1.500 litros filtrados. O refil é de fácil substituição e pode ser adquirido diretamente conosco, com facilidade de pagamento."
    },
    {
      q: "O parcelamento é realmente sem juros?",
      a: "Sim. Todos os modelos Acqualive podem ser parcelados em até 10x sem juros no cartão de crédito. E para pagamentos via PIX ou boleto, há um desconto adicional de 5%."
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[hsl(210,20%,97%)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Accordion */}
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-soft mb-4">
              <div className="w-6 h-6 rounded bg-[hsl(21,89%,55%)] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[hsl(21,89%,55%)]">Perguntas Frequentes</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,65%,19%)] leading-tight mb-8">
              Tudo o que você precisa saber{" "}
              <span className="text-[hsl(21,89%,55%)]">antes de decidir.</span>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center gap-3 p-5 text-left"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? "bg-[hsl(21,89%,55%)]" : "bg-[hsl(215,62%,31%)]"}`}>
                      <ArrowRight className={`w-4 h-4 text-white transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                    </div>
                    <span className="font-semibold text-[hsl(215,65%,19%)] text-sm">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[hsl(215,30%,35%)] flex-shrink-0 ml-auto transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-5 pb-5 pl-16"
                    >
                      <p className="text-[hsl(215,30%,35%)] text-sm leading-relaxed border-l-2 border-[hsl(21,89%,55%)] pl-4">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image with badges (Insuba-style) - vertically centered */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex items-center justify-center lg:order-1"
          >
            <div className="relative w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/5]">
                <img src={faqPour} alt="Servindo água pura e cristalina do purificador Acqualive em uma taça" loading="lazy" className="w-full h-full object-cover" />
                {/* Badge overlay */}
                <div className="absolute bottom-4 right-4 bg-[hsl(21,89%,55%)] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                  # Tecnologia de Ponta
                </div>
              </div>
              {/* Decorative dots */}
              <DotGrid className="absolute -top-6 -right-6 text-[hsl(215,62%,31%)]" />
              <DotGrid className="absolute -bottom-6 -left-6 text-[hsl(21,89%,55%)] opacity-60" />
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[hsl(215,62%,31%)] font-semibold hover:text-[hsl(21,89%,55%)] transition-colors">
            <ChevronRight className="w-5 h-5" />
            <ChevronRight className="w-5 h-5 -ml-3" />
            Ainda tem dúvidas? Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   HOW IT WORKS (Insuba-style numbered steps: 01, 02, 03)
   ══════════════════════════════════════════════════════════ */
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: WhatsAppIcon,
      title: "Fale com seu consultor",
      description: "Clique no botão de WhatsApp e informe que você foi indicado. Um consultor exclusivo vai te atender de forma personalizada.",
    },
    {
      number: "02",
      icon: Heart,
      title: "Escolha o modelo ideal",
      description: "Com base na sua rotina e no tamanho da sua família, o consultor vai recomendar o Acqualive que melhor atende suas necessidades.",
    },
    {
      number: "03",
      icon: Award,
      title: "Receba com condição especial",
      description: "Garanta o desconto exclusivo de indicado, parcele em até 10x sem juros e receba na sua casa com frete grátis*.",
    },
  ];

  return (
    <section className="relative">
      <WaveShape className="w-full h-16 text-[hsl(210,20%,97%)] absolute -top-1 z-10" />

      <div className="bg-[hsl(218,97%,15%)] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-white/20" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-white/10" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(21,89%,55%)] rounded-full mb-4">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[hsl(21,89%,55%)]" />
              </div>
              <span className="text-sm font-semibold text-white">Como Funciona</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Três passos para transformar a{" "}
              <span className="text-[hsl(21,89%,55%)]">água da sua casa.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-[hsl(21,89%,55%)]/20 transition-colors">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-[hsl(21,89%,55%)] flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{step.description}</p>
                <div className="mt-6">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[hsl(21,89%,55%)] flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   TESTIMONIALS (Insuba-style cards with quote marks)
   ══════════════════════════════════════════════════════════ */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pablo Lopez",
      location: "Cliente Acqualive",
      text: "Assim q chegou em casa a gente instalou e mediu o pH da água direto da torneira: 5.5. Depois de passar pelo filtro, foi pra pH 9!! A água tbm tinha um gosto de terra e o filtro tirou tudo. Ficou incrível, agora todo mundo aqui em casa tá bebendo muito mais água.",
    },
    {
      name: "Roselene R.",
      location: "Cliente Acqualive",
      text: "Ameeei o purificador! Muito lindo, combinou demais com minha cozinha. Só de saber que vou ter uma água de qualidade em casa já é tudo de bom :)",
    },
    {
      name: "Fernando Oliveira",
      location: "Cliente Acqualive",
      text: "pH bem alcalino e água sem cloro foram os testes q consegui fazer aqui. Sei que tem várias outras vantagens, mas esses dois eu confirmei com meus próprios recursos e funciona msm.",
    },
    {
      name: "Jeane S.",
      location: "Cliente Acqualive",
      text: "O filtro é lindo demais! Tô encantada com a qualidade da água e com o design. Recomendo de olhos fechados, vale muito a pena.",
    },
    {
      name: "Dácio Nunes",
      location: "Cliente Acqualive",
      text: "Mesmo sem fazer teste de laboratório, da pra perceber o pH alcalino fácil, fácil. A água fica mais cristalina e tem um sabor levemente adocicado. Excelente produto!",
    },
    {
      name: "Geovane Leandro",
      location: "Cliente Acqualive",
      text: "Produto de ótima aparência, grande capacidade e cumpre o q promete. Recomendo pra quem busca qualidade de verdade na água do dia a dia.",
    },
    {
      name: "Tarcisio A. Rodrigues",
      location: "Cliente Acqualive",
      text: "Muito bom msm. A diferença na qualidade da água da pra sentir já no primeiro gole. Vale cada centavo investido.",
    },
    {
      name: "Larissa",
      location: "Cliente Acqualive",
      text: "Praticidade absurda, não preciso ficar enchendo o tempo todo. A água sempre fresquinha e disponível pra família toda. Adorei demais!",
    },
  ];

  const slidesPerView = 3;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Loop infinito: avança automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => setCurrentSlide((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Duplica para criar efeito de loop visual contínuo
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(21,89%,55%)]/10 rounded-full mb-4">
            <div className="w-6 h-6 rounded bg-[hsl(21,89%,55%)] flex items-center justify-center">
              <Quote className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-[hsl(21,89%,55%)]">Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,65%,19%)] leading-tight">
            Histórias de quem já fez a troca{" "}
            <span className="text-[hsl(21,89%,55%)]">e não voltou atrás.</span>
          </h2>
        </div>

        {/* Desktop carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentSlide} * (100% / ${slidesPerView}) - ${currentSlide} * (1.5rem / ${slidesPerView}))` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-[calc(33.333%-1rem)] flex-shrink-0">
                  <div className="relative bg-[hsl(210,20%,97%)] rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 flex flex-col h-full">
                    <Quote className="w-10 h-10 text-[hsl(21,89%,55%)] opacity-20 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array(5).fill(0).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[hsl(21,89%,55%)] text-[hsl(21,89%,55%)]" />
                      ))}
                    </div>
                    <p className="text-[hsl(215,30%,35%)] leading-relaxed mb-6 text-sm flex-grow">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                      <div className="w-12 h-12 rounded-full flex-shrink-0 bg-[hsl(215,62%,31%)] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[hsl(215,65%,19%)] text-sm">{t.name}</p>
                        <p className="text-xs text-[hsl(215,30%,35%)]">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={currentSlide === 0}
              aria-label="Depoimento anterior"
              className="w-12 h-12 rounded-full bg-[hsl(215,62%,31%)] text-white flex items-center justify-center hover:bg-[hsl(21,89%,55%)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array(maxSlide + 1).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-[hsl(21,89%,55%)]" : "w-2 bg-[hsl(215,62%,31%)]/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={currentSlide === maxSlide}
              aria-label="Próximo depoimento"
              className="w-12 h-12 rounded-full bg-[hsl(215,62%,31%)] text-white flex items-center justify-center hover:bg-[hsl(21,89%,55%)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile: scroll snap */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[85%]">
              <div className="bg-[hsl(210,20%,97%)] rounded-2xl p-6 flex flex-col h-full">
                <Quote className="w-8 h-8 text-[hsl(21,89%,55%)] opacity-20 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array(5).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[hsl(21,89%,55%)] text-[hsl(21,89%,55%)]" />
                  ))}
                </div>
                <p className="text-[hsl(215,30%,35%)] leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border/50 mt-auto">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[hsl(215,62%,31%)] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[hsl(215,65%,19%)] text-sm">{t.name}</p>
                    <p className="text-xs text-[hsl(215,30%,35%)]">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   PRICING / VITRINE (Portfolio-like dark section with cards)
   ══════════════════════════════════════════════════════════ */
const PricingSection = () => {
  const products = [
    {
      number: "01",
      name: "V Self 6L",
      tagline: "Compacto, prático e poderoso",
      description: "Ideal para casais e ambientes menores. Toda a tecnologia Acqualive em um formato que cabe em qualquer cozinha.",
      image: vself6lImg,
    },
    {
      number: "02",
      name: "V Self 10L Premium",
      tagline: "O mais desejado da linha",
      description: "Acabamento premium com base de madeira e torneira de inox. Para quem une tecnologia e elegância na cozinha.",
      highlight: true,
      image: vpremiumImg,
    },
    {
      number: "03",
      name: "Terracota",
      tagline: "Tradição encontra inovação",
      description: "A beleza atemporal da cerâmica artesanal com a tecnologia de purificação mais avançada do mercado.",
      image: terracotaImg,
    },
  ];

  return (
    <section id="investimento" className="relative">
      <WaveShape className="w-full h-16 text-white absolute -top-1 z-10" />

      <div className="bg-gradient-to-br from-[hsl(218,97%,15%)] to-[hsl(218,97%,10%)] pt-24 pb-20 relative overflow-hidden">
        {/* Decorative light streaks (Insuba-style) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-[50%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-[80%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[hsl(21,89%,55%)] rounded-full mb-4">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[hsl(21,89%,55%)]" />
              </div>
              <span className="text-sm font-semibold text-white">Investimento</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Escolha o Acqualive ideal para{" "}
              <span className="text-[hsl(21,89%,55%)]">a sua família.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Cada modelo entrega purificação completa, água alcalina ionizada e minerais essenciais. A diferença está no design, na capacidade e no estilo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 bg-white/[0.03] backdrop-blur-sm border border-white/10 flex flex-col ${
                  p.highlight ? "ring-2 ring-[hsl(21,89%,55%)]" : ""
                }`}
              >
                {/* Product image showcase area */}
                <div className="relative h-72 flex items-center justify-center overflow-hidden">
                  {/* Radial glow behind product */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-[hsl(21,89%,55%)]/[0.04] to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[hsl(21,89%,55%)]/10 blur-[60px] group-hover:bg-[hsl(21,89%,55%)]/20 transition-all duration-500" />
                  
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="relative z-10 h-56 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                  />

                  {/* Number watermark */}
                  <span className="absolute top-3 right-5 text-6xl font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors">
                    {p.number}
                  </span>

                  {p.highlight && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[hsl(21,89%,55%)] text-white text-xs font-bold shadow-lg">
                      MAIS VENDIDO
                    </div>
                  )}
                </div>

                {/* Divider line */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <div className="relative p-8 pt-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-[hsl(21,89%,55%)] text-sm font-medium mb-4">{p.tagline}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{p.description}</p>

                  {/* Hidden price block with overlay */}
                  <div className="relative border-t border-white/10 pt-6 mb-6">
                    <div className="select-none pointer-events-none blur-md opacity-40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-white/50">R$</span>
                        <span className="text-4xl font-bold text-white">••••</span>
                      </div>
                      <p className="text-white/50 text-sm mt-1">
                        ou <span className="text-white/80 font-semibold">10x sem juros</span>
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[hsl(21,89%,55%)]/15 border border-[hsl(21,89%,55%)]/40 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <p className="text-white text-xs font-bold tracking-wide text-center">
                          🔒 CONDIÇÃO ESPECIAL EXCLUSIVA
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={p.highlight ? "cta" : "hero"}
                    size="lg"
                    asChild
                    className="w-full rounded-xl group/btn"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="w-4 h-4" />
                      Descobrir minha condição
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-white/40 mt-8">
            *Frete grátis: consulte regiões disponíveis. Parcelamento no cartão de crédito. 5% de desconto no PIX.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════
   FINAL CTA (Insuba-style blue banner with contact info)
   ══════════════════════════════════════════════════════════ */
const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-[hsl(215,62%,31%)] relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[hsl(21,89%,55%)]/10 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <div className="w-6 h-6 rounded bg-[hsl(21,89%,55%)] flex items-center justify-center">
              <Award className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Condição Exclusiva para Indicados</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Essa oportunidade foi feita{" "}
            <span className="text-[hsl(21,89%,55%)]">especialmente para você.</span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Alguém de confiança compartilhou a Acqualive com você porque sabe o impacto que uma água de verdade tem na vida de quem consome. Aproveite a condição especial de indicado e dê o primeiro passo para transformar a saúde da sua família.
          </p>
          <p className="text-white/60 mb-10">
            Informe o nome de quem te indicou ao consultor para garantir seu benefício.
          </p>

          <Button variant="cta" size="xl" asChild className="rounded-full group shadow-2xl shadow-[hsl(21,89%,55%)]/40 ring-2 ring-[hsl(21,89%,55%)]/20">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              QUERO MEU DESCONTO VIA WHATSAPP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (51) 9292-8468
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contato@acqualive.com.br
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Porto Alegre, RS
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════ */
const Footer = () => (
  <footer className="bg-[hsl(218,97%,10%)] text-white/50 py-8">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="https://www.acqualive.com.br" target="_blank" rel="noopener noreferrer">
          <img src={logoAzul} alt="Acqualive" className="h-6 brightness-0 invert opacity-40 hover:opacity-70 transition-opacity" />
        </a>
        <p className="text-sm text-center">© {new Date().getFullYear()} Acqualive do Brasil. Todos os direitos reservados. CNPJ: 17.918.498/0001-53</p>
        <div className="flex gap-3">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/acqualivedobrasil", label: "Facebook" },
            { Icon: Instagram, href: "https://www.instagram.com/acqualivegroup/", label: "Instagram" },
            { Icon: Youtube, href: "https://www.youtube.com/channel/UCoxasL5YDgz0AhqN2UgHV2A", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Acqualive no ${label}`}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[hsl(21,89%,55%)] transition-colors"
            >
              <Icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ══════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════ */
const IndicaAcqualive2026 = () => (
  <>
    <Helmet>
      <title>Indicação Exclusiva Acqualive | Água Alcalina para sua Família</title>
      <meta name="description" content="Você foi indicado por alguém que se importa com a sua saúde. Conheça a Acqualive e garanta sua condição especial de indicado. Mais de 100 mil famílias já transformaram sua água." />
      <meta name="keywords" content="Acqualive, água alcalina, indicação, purificador de água, saúde, família" />
      <link rel="canonical" href="https://paginas.acqualive.com.br/indica-acqualive-2026" />
    </Helmet>

    <TopBar />
    <Header />
    <main>
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <MissionBanner />
      <ConsultSection />
      <FAQSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
    </main>
    <Footer />

    {/* Floating WhatsApp */}
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>

    {/* Back to Top (Insuba-style) */}
    <a
      href="#inicio"
      className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded bg-[hsl(215,62%,31%)] flex items-center justify-center shadow-lg hover:bg-[hsl(21,89%,55%)] transition-colors"
    >
      <ChevronRight className="w-5 h-5 text-white -rotate-90" />
    </a>
  </>
);

export default IndicaAcqualive2026;
