import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Droplets,
  Heart,
  Baby,
  Sparkles,
  Leaf,
  ShieldCheck,
  Activity,
  Sun,
  Wallet,
  HandHeart,
  ArrowRight,
  Menu,
  X,
  Home as HomeIcon,
} from "lucide-react";
import productAsset from "@/assets/acqualive-real.jpg.asset.json";
import quemSomosAsset from "@/assets/quem-somos.jpg.asset.json";
import appImg from "@/assets/app-mockup.jpg";
import logoWhite from "@/assets/acqualive-logo-white.png.asset.json";
import motherPregnantImg from "@/assets/mother-pregnant.jpg";
import motherBabyKitchenAsset from "@/assets/mother-baby-kitchen-v2.jpg.asset.json";
const motherBabyKitchenImg = motherBabyKitchenAsset.url;
import familyHomeImg from "@/assets/family-home.jpg";

const productImg = productAsset.url;
const waterBabyDetailImg = quemSomosAsset.url;

/* ---------- Decorative bits ---------- */

function Droplet({ x, y, delay, size = 6 }: { x: string; y: string; delay: number; size?: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute rounded-full bg-[color:var(--color-aqua-glow)]/60 blur-[1px]"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -22, 0], opacity: [0.3, 0.9, 0.3] }}
      transition={{ duration: 6 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function AquaBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.10_75/0.20),transparent_65%)] blur-3xl" />
      <div className="absolute -top-20 right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.60_0.15_200/0.28),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-0 left-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.05_155/0.18),transparent_65%)] blur-3xl" />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#cuidado", label: "Cuidado" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#parceria", label: "Acqualive + 1000 Dias" },
    { href: "#produto", label: "Produtos" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[oklch(0.10_0.04_245/0.7)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#top" className="group flex items-center" aria-label="Acqualive">
          <img src={logoWhite.url} alt="Acqualive" className="h-7 w-auto md:h-8" width={1620} height={213} />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-white/75 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[color:var(--color-aqua-glow)] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#produto"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[color:var(--color-aqua-night)] transition-transform hover:scale-[1.03] btn-glow"
        >
          Ver produtos no app <ArrowRight className="h-4 w-4" />
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[oklch(0.10_0.04_245/0.95)] px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-white/85 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#produto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[color:var(--color-aqua-night)]"
            >
              Ver produtos no app <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <AquaBackdrop />
      {Array.from({ length: 6 }).map((_, i) => (
        <Droplet
          key={i}
          x={`${(i * 79) % 100}%`}
          y={`${20 + ((i * 41) % 60)}%`}
          delay={(i % 4) * 0.7}
          size={4 + (i % 3) * 2}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-8">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--color-aqua-glow)] backdrop-blur"
          >
            <Heart className="h-3.5 w-3.5" /> Acqualive + 1000 Dias · Cuidado desde a gestação
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-medium leading-[1.03] tracking-[-0.02em] md:text-7xl"
          >
            Água pura para
            <br />
            <span className="text-aqua-gradient">cuidar de quem</span>
            <br />
            está começando a vida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg text-white/75 md:text-xl"
          >
            Nos primeiros 1000 dias, cada escolha importa. A gestação e os dois primeiros anos do bebê
            formam uma das fases mais importantes da vida.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-4 max-w-xl text-base text-white/60"
          >
            A Acqualive ajuda mães e famílias a transformarem esse cuidado em um hábito simples, diário
            e essencial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#produto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-aqua-bright)] to-[color:var(--color-aqua-glow)] px-7 py-4 text-sm font-semibold text-[color:var(--color-aqua-night)] transition-transform hover:scale-[1.03] btn-glow"
            >
              Conhecer os purificadores Acqualive
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#parceria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Entender a parceria
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle,oklch(0.85_0.10_75/0.30),transparent_70%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] ring-1 ring-white/15 shadow-[0_40px_120px_-40px_oklch(0.20_0.05_75/0.6)]">
            <img
              src={motherPregnantImg}
              alt="Mãe gestante segurando um copo de água em casa"
              width={1080}
              height={1600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.04_240/0.6)] via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute -bottom-8 -left-4 hidden md:flex items-center gap-3 rounded-2xl glass-card p-3 pr-5"
          >
            <img src={productImg} alt="Purificador Acqualive" className="h-16 w-16 rounded-xl object-cover" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-aqua-glow)]">Purificador Acqualive</p>
              <p className="font-display text-sm text-white/90">Água alcalina · ionizada</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute -right-3 top-10 hidden md:flex items-center gap-2 rounded-full warm-card px-4 py-2 text-xs text-white/85"
          >
            <Heart className="h-3 w-3 text-[color:var(--color-warm-glow)]" />
            Cuidado desde a gestação
          </motion.div>
        </motion.div>
      </div>

      <div className="section-divider mx-auto max-w-5xl" />
    </section>
  );
}

/* ---------- Reveal helper ---------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Storytelling ---------- */

function StorySection() {
  const lines = [
    "Mais cuidado para a mãe.",
    "Mais proteção para o bebê.",
    "Mais tranquilidade para a família.",
  ];
  return (
    <section id="cuidado" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">
            A base da saúde
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Cuidar da água é cuidar
            <br />
            <span className="text-aqua-gradient">da base da saúde</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            A água alcalina ionizada Acqualive é mais leve para beber e pensada para ajudar o corpo
            a se hidratar melhor no dia a dia.
          </p>
        </Reveal>

        <div className="mt-24 space-y-10 md:space-y-14">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.15}>
              <p className="font-display text-3xl font-medium tracking-tight md:text-5xl">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl text-base italic text-white/55">
            Um hábito simples para uma fase que muda tudo.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[2.5rem] ring-1 ring-white/10">
            <img
              src={motherBabyKitchenImg}
              alt="Mãe segurando o bebê na cozinha de casa"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Benefits grid ---------- */

const benefits = [
  { icon: Sun, title: "Mais disposição", text: "Mais disposição para a rotina intensa da gestação e pós-parto." },
  { icon: Activity, title: "Menos cansaço", text: "Menos cansaço causado pela baixa ingestão de água." },
  { icon: HandHeart, title: "Menos dores de cabeça", text: "Menos dores de cabeça associadas à desidratação." },
  { icon: ShieldCheck, title: "Melhor funcionamento do corpo", text: "Melhor funcionamento do corpo, já que a hidratação participa da digestão, circulação e equilíbrio geral." },
  { icon: Droplets, title: "Mais facilidade para beber água", text: "Mais facilidade para beber água, porque uma água mais agradável estimula o hábito." },
  { icon: Baby, title: "Mais cuidado para o bebê", text: "Mais cuidado para o bebê, já que a mãe bem hidratada vive uma rotina mais saudável." },
];

function BenefitsGrid() {
  return (
    <section id="beneficios" className="relative py-32">
      <AquaBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">
            Para mães e famílias
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Para mães e famílias, isso <span className="text-aqua-gradient">pode significar</span>:
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl glass-card p-7"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[color:var(--color-aqua-bright)]/30 to-transparent blur-md" />
                </div>
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--color-aqua-bright)]/30 to-[color:var(--color-aqua-mid)]/20 ring-1 ring-white/10">
                  <b.icon className="h-5 w-5 text-[color:var(--color-aqua-glow)]" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{b.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-20 max-w-3xl text-center font-display text-2xl leading-snug text-white/85 md:text-3xl">
            Acqualive transforma a água da casa em um cuidado simples, diário e essencial para{" "}
            <span className="text-aqua-gradient">mãe, bebê e família.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function AboutAcqualive() {
  return (
    <section className="relative py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.10_75/0.35),transparent_65%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] warm-card p-2">
              <img
                src={waterBabyDetailImg}
                alt="Mãos servindo água pura ao lado de itens do bebê"
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </Reveal>
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">
              Quem somos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Quem é a <span className="text-aqua-gradient">Acqualive</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-white/75">
              A Acqualive nasceu com um propósito claro: melhorar a qualidade da água que as
              famílias brasileiras consomem todos os dias.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base text-white/65">
              Somos uma empresa brasileira especializada em purificadores e filtros que transformam
              a água comum em uma água mais pura, alcalina, ionizada e livre de impurezas
              indesejadas, como cloro, metais pesados e contaminantes.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 text-base text-white/65">
              Nossa tecnologia foi criada para tornar a hidratação mais saudável, prática e
              acessível dentro de casa.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-8 border-l-2 border-[color:var(--color-aqua-bright)] pl-5 font-display text-xl leading-snug text-white/90 md:text-2xl">
              Porque acreditamos que grandes mudanças começam em pequenos hábitos.
              <br />
              E beber uma água melhor é um deles.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */

const steps = [
  { icon: Heart, title: "Durante a gravidez", text: "Durante a gravidez, a mãe precisa se hidratar melhor." },
  { icon: Baby, title: "Depois do nascimento", text: "Depois do nascimento, a rotina fica mais intensa." },
  { icon: HandHeart, title: "Com o crescimento do bebê", text: "Com o crescimento do bebê, os hábitos da casa começam a moldar o futuro." },
];

function Timeline1000Dias() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">
            Primeiros 1000 dias
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Por que a Acqualive combina com os{" "}
            <span className="text-aqua-gradient">primeiros 1000 dias</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Porque essa é a fase em que a família mais precisa de cuidado, segurança e praticidade.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-3 max-w-2xl text-sm italic text-white/55">
            Cuidado que começa ainda na gestação.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-20 pl-12 md:pl-20">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-7" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-[color:var(--color-aqua-glow)] via-[color:var(--color-aqua-bright)] to-transparent md:left-7"
          />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-12 top-1 grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-aqua-night)] ring-2 ring-[color:var(--color-aqua-bright)] md:-left-[3.55rem]">
                    <s.icon className="h-4 w-4 text-[color:var(--color-aqua-glow)]" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-xl text-base text-white/70 md:text-lg">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-20 max-w-3xl text-center font-display text-2xl leading-snug text-white/90 md:text-3xl">
            A Acqualive entra exatamente aí: para tornar a água da sua casa{" "}
            <span className="text-aqua-gradient">uma aliada da saúde</span> da mãe, do bebê e de toda
            a família.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Routine alt blocks ---------- */

const routine = [
  { title: "Mais confiança na água que sua família consome", text: "Você deixa de depender apenas da água que chega pela torneira e passa a contar com uma filtragem pensada para reduzir impurezas indesejadas.", icon: ShieldCheck },
  { title: "Mais praticidade todos os dias", text: "Água de qualidade disponível em casa, sem precisar carregar galões, comprar garrafas ou se preocupar com falta de água filtrada.", icon: Sparkles },
  { title: "Mais saúde começando pelo básico", text: "Beber mais água fica mais fácil quando ela tem melhor sabor, mais pureza e está sempre acessível.", icon: Heart },
  { title: "Mais economia ao longo do tempo", text: "Menos gasto com água engarrafada e mais autonomia para a rotina da família.", icon: Wallet },
  { title: "Menos plástico no planeta", text: "Uma escolha melhor para sua casa e também para o futuro que seu filho vai viver.", icon: Leaf },
];

function RoutineBenefits() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">Sua rotina</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            O que melhora na <span className="text-aqua-gradient">sua rotina</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-xl text-base text-white/65">
            Mais leveza para a rotina da mãe. Mais tranquilidade para quem cuida.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6">
          {routine.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.1}>
              <div
                className={`group flex flex-col gap-6 rounded-3xl glass-card p-8 md:flex-row md:items-center md:gap-10 md:p-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--color-aqua-bright)]/30 to-[color:var(--color-aqua-mid)]/20 ring-1 ring-white/10">
                  <r.icon className="h-7 w-7 text-[color:var(--color-aqua-glow)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{r.title}</h3>
                  <p className="mt-3 text-base text-white/70 md:text-lg">{r.text}</p>
                </div>
                <div className="hidden text-5xl font-display text-white/10 md:block">0{i + 1}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Product feature ---------- */

const productPoints = [
  { label: "Água alcalina e ionizada", pos: "top-[10%] left-[-6%]" },
  { label: "Reduz cloro e impurezas", pos: "top-[14%] right-[-2%]" },
  { label: "Mais praticidade no dia a dia", pos: "top-[44%] right-[-6%]" },
  { label: "Menos garrafas plásticas", pos: "top-[68%] right-[-2%]" },
  { label: "Hidratação mais agradável", pos: "bottom-[10%] left-[-6%]" },
  { label: "Cuidado para mãe, bebê e família", pos: "bottom-[4%] right-[6%]" },
];

function ProductFeature() {
  return (
    <section id="produto" className="relative overflow-hidden py-32 md:py-40">
      <AquaBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">Produto Acqualive</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Água melhor, todos os dias, <span className="text-aqua-gradient">dentro de casa</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Escolha uma água mais pura, prática e saudável para a sua família.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-20 w-full max-w-md md:max-w-lg">
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_200/0.4),transparent_65%)] blur-3xl" />
          <motion.img
            src={productImg}
            alt="Purificador Acqualive em destaque"
            width={1440}
            height={1920}
            loading="lazy"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -10, 0] }}
            className="mx-auto block w-full rounded-3xl object-cover aspect-[3/4]"
          />

          {productPoints.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className={`absolute ${p.pos} hidden md:flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs text-white/85`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-aqua-glow)] shimmer" />
              {p.label}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:hidden">
          {productPoints.map((p) => (
            <div key={p.label} className="flex items-center gap-3 rounded-2xl glass-card px-4 py-3 text-left text-sm text-white/85">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-aqua-glow)]" />
              {p.label}
            </div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <a
            href="#cta"
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-aqua-bright)] to-[color:var(--color-aqua-glow)] px-8 py-4 text-sm font-semibold text-[color:var(--color-aqua-night)] transition-transform hover:scale-[1.03] btn-glow"
          >
            Ver filtros Acqualive no app <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Mothers choice ---------- */

function MothersChoiceSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">Para mães</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Para mães que querem fazer boas escolhas <span className="text-aqua-gradient">desde o começo</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-white/75">Você não precisa mudar tudo de uma vez.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-4 text-lg text-white/70">
            Às vezes, o primeiro passo para uma vida mais saudável começa por aquilo que sua família
            consome todos os dias.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-12 font-display text-6xl font-medium tracking-tight text-aqua-gradient md:text-8xl">
            Comece pela água.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <a
            href="#produto"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Ver filtros Acqualive no app <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Partnership ---------- */

function PartnershipSection() {
  return (
    <section id="parceria" className="relative py-32">
      <AquaBackdrop />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-aqua-glow)]">Parceria</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              Acqualive <span className="text-aqua-gradient">+ 1000 Dias</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-white/75">
              A parceria entre Acqualive e 1000 Dias nasce de um mesmo propósito: ajudar famílias a
              cuidarem melhor da saúde desde o início da vida.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base text-white/65">
              Enquanto o app acompanha a jornada da mãe, do bebê e dos cuidadores, a Acqualive
              oferece uma solução prática para melhorar um dos hábitos mais importantes dessa fase:
              a hidratação.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Mais cuidado para a mãe.", "Mais proteção para o bebê.", "Mais tranquilidade para a família."].map(
              (t, i) => (
                <Reveal key={t} delay={0.4 + i * 0.1}>
                  <div className="rounded-2xl glass-card p-5 text-sm font-medium text-white/90">{t}</div>
                </Reveal>
              ),
            )}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_195/0.4),transparent_65%)] blur-3xl" />
            <motion.img
              src={appImg}
              alt="App 1000 Dias acompanhando a jornada da família"
              width={1024}
              height={1024}
              loading="lazy"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-[2rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <img src={familyHomeImg} alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.04_240/0.85)] via-[oklch(0.13_0.04_240/0.75)] to-[oklch(0.10_0.03_245/0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.85_0.10_75/0.20),transparent_60%)]" />
      </div>
      <svg className="absolute inset-x-0 bottom-0 -z-10 w-full opacity-30" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="url(#wave)"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="wave" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.15 200)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.3 0.08 230)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full warm-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80">
            <HomeIcon className="h-3.5 w-3.5 text-[color:var(--color-warm-glow)]" /> Para a sua casa
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl font-medium leading-tight tracking-tight md:text-7xl">
            Leve <span className="text-warm-gradient">água melhor</span>
            <br />
            para dentro da sua casa
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-white/80">Os primeiros 1000 dias passam rápido.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-3 text-lg text-white/75">
            Mas os hábitos criados nesse período podem acompanhar seu filho por toda a vida.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-3 text-lg text-white/75">
            Escolha uma água mais pura, prática e saudável para a sua família.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-12 font-display text-5xl font-medium text-aqua-gradient md:text-7xl">
            Comece pela água.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#produto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--color-aqua-bright)] to-[color:var(--color-aqua-glow)] px-8 py-4 text-sm font-semibold text-[color:var(--color-aqua-night)] transition-transform hover:scale-[1.03] btn-glow"
            >
              Conhecer produtos Acqualive <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#parceria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver no marketplace 1000 Dias
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.7}>
          <p className="mt-10 text-sm italic text-white/55">Uma escolha diária dentro de casa.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[oklch(0.08_0.03_250/0.6)] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
        <div>
          <img src={logoWhite.url} alt="Acqualive" className="h-8 w-auto" width={1620} height={213} />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Água pura, prática e saudável para famílias que querem cuidar desde o começo.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">Navegar</p>
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href="#top" className="hover:text-white">Acqualive</a></li>
            <li><a href="#parceria" className="hover:text-white">1000 Dias</a></li>
            <li><a href="#produto" className="hover:text-white">Produtos</a></li>
            <li><a href="#cta" className="hover:text-white">Marketplace</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">Parceria</p>
          <p className="text-sm text-white/60">
            Acqualive + 1000 Dias — cuidando da hidratação da família nos primeiros 1000 dias de vida.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-6 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function Acqualive1000Dias() {
  return (
    <>
      <Helmet>
        <title>Acqualive + 1000 Dias | Água pura para cuidar desde o começo</title>
        <meta
          name="description"
          content="Conheça a parceria Acqualive + 1000 Dias e descubra como uma água mais pura, prática e saudável pode apoiar mães, bebês e famílias nos primeiros 1000 dias."
        />
        <meta property="og:title" content="Acqualive + 1000 Dias | Água pura para cuidar desde o começo" />
        <meta
          property="og:description"
          content="Conheça a parceria Acqualive + 1000 Dias e descubra como uma água mais pura, prática e saudável pode apoiar mães, bebês e famílias nos primeiros 1000 dias."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/acqualive1000dias" />
      </Helmet>
      <main className="acqualive1000-page relative min-h-screen overflow-x-hidden text-white">
        <Header />
        <Hero />
        <StorySection />
        <BenefitsGrid />
        <AboutAcqualive />
        <Timeline1000Dias />
        <RoutineBenefits />
        <ProductFeature />
        <MothersChoiceSection />
        <PartnershipSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
