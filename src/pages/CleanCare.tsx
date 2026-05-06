import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Droplets,
  Sparkles,
  ShieldCheck,
  Leaf,
  Sun,
  Wind,
  Baby,
  HeartPulse,
  ArrowRight,
  Mountain,
  FlaskConical,
  Plus,
  Minus,
} from "lucide-react";

import modelBlue1 from "@/assets/cleancare/model-blue-1.png";
import modelSpray2 from "@/assets/cleancare/model-spray-2.png";
import modelSpray3 from "@/assets/cleancare/model-spray-3.png";
import modelEyes4 from "@/assets/cleancare/model-eyes-4.png";
import bottleNight from "@/assets/cleancare/bottle-night.png";
import bottleMarble from "@/assets/cleancare/bottle-marble.png";
import bottleNature from "@/assets/cleancare/bottle-nature.png";
import bottleFlat from "@/assets/cleancare/bottle-flat.png";
import bottlePool from "@/assets/cleancare/bottle-pool.png";
import babiesKids from "@/assets/cleancare/babies-kids.png";

const SHOP_URL = "https://www.acqualive.com.br/agua-termal-acqualive-clean-care/p";

/* ---------------- HERO ---------------- */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setCursor({ x: e.clientX - r.left, y: e.clientY - r.top, active: true });
      }}
      onMouseLeave={() => setCursor((c) => ({ ...c, active: false }))}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0a1628] md:cursor-none"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={modelBlue1}
          alt="Mulher aplicando Clean & Care Acqualive na pele"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
      </motion.div>

      {/* mist particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-white/40 blur-[1px]"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto flex h-full flex-col justify-center px-6 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fb8ff]" />
            Água Termal Premium · Acqualive
          </span>

          <h1 className="font-display text-5xl font-light leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]">
            A pele <em className="font-serif italic text-[#9cc8ff]">viva</em>
            <br />
            começa na fonte.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Clean &amp; Care é a única água termal do Brasil com pH+10 e PRAL negativo,
            extraída a 250 metros de profundidade do Aquífero Guarani. Limpeza profunda,
            hidratação real e o brilho de uma pele em equilíbrio.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a1628] shadow-2xl transition-all hover:scale-[1.02] hover:bg-[#9cc8ff]"
            >
              Levar Clean &amp; Care
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ritual"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Descobrir o ritual
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { v: "pH +10", l: "Alcalinidade rara" },
              { v: "250m", l: "De profundidade" },
              { v: "0%", l: "Aditivos" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-light text-white">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        role para descobrir ↓
      </motion.div>

      {/* Custom water-drop cursor (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-20 hidden h-10 w-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm md:block"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursor.active ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 1 : 0.6})`,
          transition: "opacity 200ms ease-out",
        }}
      >
        <span className="absolute inset-2 rounded-full bg-white/40 blur-[2px]" />
        <Droplets className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white" />
      </div>
    </section>
  );
};

/* ---------------- INTRO / MANIFESTO ---------------- */
const Manifesto = () => (
  <section className="relative bg-[#f7f4ef] py-28 md:py-40">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center font-display text-3xl font-light leading-tight text-[#0a1628] md:text-5xl lg:text-6xl"
      >
        Não é cosmético. É{" "}
        <em className="font-serif italic text-[#1d4380]">água viva</em>{" "}
        que a sua pele bebe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-[#0a1628]/70 md:text-lg"
      >
        <p>
          Poluição, ar-condicionado, raios UV, estresse, máscaras de tratamento.
          Todos os dias a sua pele perde minerais, perde pH, perde vida.
          Clean &amp; Care devolve, em segundos, o que o ambiente moderno tira de você.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ---------------- PARALLAX STORY (rolling images) ---------------- */
const StoryBlock = ({
  image,
  eyebrow,
  title,
  body,
  reverse,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  reverse?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
    >
      <div className="relative h-[420px] overflow-hidden rounded-[2rem] md:h-[560px]">
        <motion.img
          style={{ y }}
          src={image}
          alt={title}
          className="absolute inset-0 h-[120%] w-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
          {eyebrow}
        </span>
        <h3 className="font-display text-3xl font-light leading-tight text-[#0a1628] md:text-5xl">
          {title}
        </h3>
        <p className="mt-6 text-base leading-relaxed text-[#0a1628]/70 md:text-lg">{body}</p>
      </motion.div>
    </div>
  );
};

const Story = () => (
  <section className="bg-[#f7f4ef] pb-28 md:pb-40">
    <div className="container mx-auto space-y-28 px-6 md:space-y-40 lg:px-12">
      <StoryBlock
        image={modelSpray2}
        eyebrow="Hidratação em camadas"
        title="A pele bebe antes de você sentir."
        body="Em uma única borrifada, microgotas penetram nas camadas mais externas da pele e ativam a barreira hidrolipídica. O resultado é imediato: maciez, frescor e um brilho natural que dura horas."
      />
      <StoryBlock
        reverse
        image={modelSpray3}
        eyebrow="Limpeza inteligente"
        title="O que a água da torneira não enxerga."
        body="Resíduos de poluição, cloro, suor e maquiagem ficam presos nos poros. Com pH +10 e PRAL negativo, Clean & Care neutraliza a acidez urbana e remove impurezas sem agredir."
      />
      <StoryBlock
        image={modelEyes4}
        eyebrow="Calma sensorial"
        title="O alívio que vem de 250 metros abaixo da terra."
        body="A água repousa por décadas no Aquífero Guarani, absorvendo silício, vanádio e bicarbonato. O efeito calmante é imediato: alivia vermelhidão, reduz coceira e devolve conforto à pele sensível."
      />
    </div>
  </section>
);

/* ---------------- BEFORE / AFTER SLIDER ---------------- */
const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <section className="bg-[#f7f4ef] py-24 md:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
            Resultado visível
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-[#0a1628] md:text-5xl">
            Arraste e veja a <em className="font-serif italic">diferença.</em>
          </h2>
          <p className="mt-6 text-[#0a1628]/70">
            Pele real, antes e depois de duas semanas de Clean &amp; Care.
          </p>
        </div>

        <div
          ref={wrapRef}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => move(e.touches[0].clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          className="relative mx-auto aspect-[16/10] w-full max-w-5xl select-none overflow-hidden rounded-[2rem] shadow-2xl"
          style={{ cursor: "ew-resize" }}
        >
          {/* AFTER (base) */}
          <img src={modelEyes4} alt="Pele depois de Clean & Care" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a1628]">Depois</div>

          {/* BEFORE (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={modelSpray3} alt="Pele antes de Clean & Care" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "grayscale(35%) brightness(0.92) contrast(1.05)" }} />
            <div className="absolute left-4 top-4 rounded-full bg-[#0a1628]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Antes</div>
          </div>

          {/* Handle */}
          <div className="absolute top-0 h-full w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" style={{ left: `${pos}%` }}>
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
              <ArrowRight className="h-4 w-4 -rotate-180 text-[#0a1628]" />
              <ArrowRight className="h-4 w-4 text-[#0a1628]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- HOVER BENEFITS GRID ---------------- */
const benefits = [
  {
    img: bottleMarble,
    title: "Pós-banho",
    desc: "Sela a hidratação enquanto a pele ainda está úmida.",
    icon: Droplets,
  },
  {
    img: bottleFlat,
    title: "Antes do skincare",
    desc: "Prepara a pele para receber séruns e ativos com mais absorção.",
    icon: Sparkles,
  },
  {
    img: bottleNature,
    title: "Pele sensível",
    desc: "Acalma rosácea, vermelhidão e reações alérgicas.",
    icon: Leaf,
  },
  {
    img: bottlePool,
    title: "Pós-sol",
    desc: "Refresca, repõe minerais e reduz a sensação de queimadura.",
    icon: Sun,
  },
  {
    img: bottleNight,
    title: "Antes de dormir",
    desc: "Acalma e devolve o pH natural da pele depois do dia urbano.",
    icon: HeartPulse,
  },
  {
    img: babiesKids,
    title: "Bebês e crianças",
    desc: "Higiene segura, sem álcool, conservantes ou perfume.",
    icon: Baby,
  },
];

const HoverBenefits = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="ritual" className="bg-[#0a1628] py-28 text-white md:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9cc8ff]">
            O ritual Acqualive
          </span>
          <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
            Um spray. <em className="font-serif italic text-[#9cc8ff]">Seis momentos.</em>
          </h2>
          <p className="mt-6 text-white/75">
            <span className="hidden md:inline">Passe o cursor</span>
            <span className="md:hidden">Toque</span> para descobrir como o Clean &amp; Care entra na sua rotina.
          </p>
        </div>
      </div>

      {/* full-bleed mosaic, no gaps */}
      <div className="grid w-full grid-cols-2 md:grid-cols-3">
        {benefits.map((b, idx) => {
          const open = active === idx;
          return (
            <button
              type="button"
              key={b.title}
              onClick={() => setActive(open ? null : idx)}
              aria-expanded={open}
              className="group relative h-[280px] overflow-hidden text-left md:h-[420px]"
            >
              <img
                src={b.img}
                alt={b.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${open ? "scale-105" : ""}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/30 to-transparent transition-opacity duration-500 group-hover:via-[#0a1628]/60 ${open ? "via-[#0a1628]/60" : ""}`} />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <b.icon className={`mb-3 h-6 w-6 text-[#9cc8ff] transition-all duration-500 ${open ? "opacity-100" : "opacity-80"} group-hover:opacity-100`} />
                <h3 className="font-display text-xl font-light md:text-2xl">{b.title}</h3>
                <p className={`mt-2 overflow-hidden text-sm text-white/85 transition-all duration-500 group-hover:max-h-32 group-hover:pt-2 ${open ? "max-h-32 pt-2" : "max-h-0"}`}>
                  {b.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

/* ---------------- INGREDIENTS ---------------- */
const ingredients = [
  {
    icon: Sparkles,
    name: "Silício",
    tag: "O Mineral da Beleza",
    desc: "Estimula a produção de colágeno, regenera tecidos e devolve firmeza à pele.",
  },
  {
    icon: ShieldCheck,
    name: "Vanádio",
    tag: "Antioxidante raro",
    desc: "Combate radicais livres e desacelera os sinais de envelhecimento.",
  },
  {
    icon: FlaskConical,
    name: "Bicarbonato",
    tag: "Esfoliação suave",
    desc: "Remove impurezas, oleosidade e células mortas sem agredir a barreira da pele.",
  },
  {
    icon: Wind,
    name: "Alcalinidade pH+10",
    tag: "Equilíbrio único",
    desc: "Neutraliza a acidez urbana, restaurando o pH natural em segundos.",
  },
];

const Ingredients = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ef] via-[#efeae0] to-white py-28 md:py-40">
      {/* organic decorative blobs */}
      <motion.div
        style={{ rotate }}
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#1d4380]/15 to-transparent blur-3xl"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="pointer-events-none absolute -left-40 bottom-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#9cc8ff]/30 to-transparent blur-3xl"
      />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
            Composição mineral
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-[#0a1628] md:text-6xl">
            A fórmula é a <em className="font-serif italic">terra.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#0a1628]/70">
            Não inventamos a Clean &amp; Care em laboratório. A natureza levou
            milhões de anos filtrando essa água através das rochas do Aquífero Guarani.
          </p>
        </div>

        {/* editorial mineral list - asymmetric, large numbers */}
        <div className="mx-auto max-w-5xl">
          {ingredients.map((i, idx) => (
            <motion.div
              key={i.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className={`group grid grid-cols-12 items-center gap-4 border-b border-[#0a1628]/10 py-10 transition-all hover:bg-white/60 md:gap-8 md:py-14`}
            >
              <div className="col-span-2 font-display text-3xl font-light text-[#1d4380]/40 md:text-5xl">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]/70">
                  {i.tag}
                </div>
                <h3 className="mt-2 font-display text-3xl font-light text-[#0a1628] md:text-5xl">
                  {i.name}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-base leading-relaxed text-[#0a1628]/70 md:text-lg">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- ORIGIN STORY ---------------- */
const Origin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // strong vertical movement so image clearly slides with the page
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a1628]">
      {/* Sticky parallax background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
          <img
            src={bottleNature}
            alt="Origem natural — Aquífero Guarani"
            className="h-full w-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-[#0a1628]/40" />
      </div>

      {/* Content overlays the sticky bg */}
      <div className="relative -mt-[100vh] min-h-[160vh]">
        <div className="container mx-auto flex min-h-[160vh] items-center px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl text-white"
          >
            <Mountain className="mb-6 h-8 w-8 text-[#9cc8ff]" />
            <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9cc8ff]">
              Origem
            </span>
            <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
              Assim como nos vinhos, o terroir <em className="font-serif italic">muda tudo.</em>
            </h2>
            <p className="mt-6 text-white/80">
              A Clean &amp; Care é extraída a mais de 250 metros de profundidade do Aquífero
              Guarani, a segunda maior reserva de água subterrânea do mundo. Cada gota é
              filtrada por rochas há milhões de anos, ganhando minerais que nenhum
              cosmético consegue replicar em laboratório.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { v: "250m", l: "Profundidade" },
                { v: "1.2M km²", l: "Aquífero Guarani" },
                { v: "Milhões", l: "De anos filtrando" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-xl font-light">{s.v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/75">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- COMPARISON ---------------- */
const Comparison = () => (
  <section className="bg-white py-28 md:py-40">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
          Por que Clean &amp; Care
        </span>
        <h2 className="font-display text-4xl font-light leading-tight text-[#0a1628] md:text-5xl">
          Nem toda água termal é igual.
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[#0a1628]/10 bg-[#f7f4ef] p-10">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0a1628]/50">
            Águas termais comuns
          </div>
          <ul className="mt-6 space-y-4 text-[#0a1628]/65">
            {[
              "pH neutro ou levemente ácido",
              "Composição mineral limitada",
              "Conservantes adicionados",
              "Sensação efêmera de frescor",
              "Pouca penetração na pele",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Minus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0a1628]/40" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#1d4380] to-[#0a1628] p-10 text-white shadow-2xl">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9cc8ff]">
            Clean &amp; Care Acqualive
          </div>
          <ul className="mt-6 space-y-4">
            {[
              "Único pH +10 com PRAL negativo do Brasil",
              "Rica em silício, vanádio e bicarbonato",
              "100% natural, zero conservantes",
              "Hidratação prolongada e profunda",
              "Microgotas que penetram nas camadas internas",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Plus className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9cc8ff]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- AGES / WHO ---------------- */
const ForEveryone = () => (
  <section className="relative overflow-hidden bg-[#f7f4ef] py-28 md:py-40">
    <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#9cc8ff]/30 to-transparent blur-2xl" />
        <img
          src={bottleFlat}
          alt="Clean & Care para todos"
          className="relative rounded-[2rem] shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
          Para todas as idades
        </span>
        <h2 className="font-display text-4xl font-light leading-tight text-[#0a1628] md:text-5xl">
          Da pele do bebê <em className="font-serif italic">à sua.</em>
        </h2>
        <p className="mt-6 text-[#0a1628]/70">
          Sem álcool, sem perfume, sem conservantes. Clean &amp; Care é tão puro
          que pode ser usado por bebês recém-nascidos, peles em tratamento dermatológico
          e durante a gravidez.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            "Higiene na troca de fraldas",
            "Limpeza pós-treino",
            "Refrescância em dias quentes",
            "Alívio de assaduras",
            "Pele sensível e atópica",
            "Pós-procedimento estético",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl border border-[#0a1628]/10 bg-white p-3 text-sm text-[#0a1628]/75"
            >
              <Droplets className="h-4 w-4 flex-shrink-0 text-[#1d4380]" />
              {t}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "O que é uma água termal?",
    a: "Água termal é uma água mineral natural que brota de fontes profundas, rica em minerais como silício, cálcio, magnésio e bicarbonatos. Diferente da água comum, ela age sobre a pele acalmando, hidratando e equilibrando o pH.",
  },
  {
    q: "O que torna a Clean & Care diferente?",
    a: "É a única água termal do Brasil com pH +10 e PRAL negativo, extraída do Aquífero Guarani a 250 metros de profundidade. Sua composição com silício e vanádio é praticamente única no mundo.",
  },
  {
    q: "Posso usar todos os dias?",
    a: "Sim. Clean & Care foi feita para uso diário, quantas vezes você quiser. Ela é especialmente indicada após o banho, antes do skincare, depois do sol e em momentos de cansaço da pele.",
  },
  {
    q: "É segura para crianças e bebês?",
    a: "Totalmente. Não contém álcool, perfume ou conservantes. Pode ser usada desde os primeiros dias de vida, na higiene íntima e em assaduras.",
  },
  {
    q: "Substitui o hidratante?",
    a: "Clean & Care potencializa o seu hidratante. Aplicada antes, prepara a pele para absorver melhor os ativos. Aplicada depois, sela a hidratação e prolonga o efeito.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-28 md:py-40">
      <div className="container mx-auto max-w-3xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4380]">
            Perguntas frequentes
          </span>
          <h2 className="font-display text-4xl font-light leading-tight text-[#0a1628] md:text-5xl">
            Tudo o que você precisa saber.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-[#0a1628]/10 bg-[#f7f4ef]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-display text-lg text-[#0a1628] md:text-xl">{f.q}</span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1d4380] text-white transition-transform">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[#0a1628]/70">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- FINAL CTA ---------------- */
const FinalCTA = () => (
  <section className="relative overflow-hidden bg-[#0a1628] py-28 text-white md:py-40">
    <img
      src={modelBlue1}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0a1628]/80 to-[#1d4380]/80" />

    <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-3xl"
      >
        <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9cc8ff]">
          Sua pele pede água viva
        </span>
        <h2 className="font-display text-4xl font-light leading-[1.05] md:text-7xl">
          Comece o ritual <em className="font-serif italic text-[#9cc8ff]">hoje.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/75">
          Em poucos dias você sente. Em poucas semanas, todo mundo nota.
          Clean &amp; Care chega na sua casa em qualquer região do Brasil.
        </p>

        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] shadow-2xl transition-all hover:scale-[1.02] hover:bg-[#9cc8ff]"
        >
          Comprar Clean &amp; Care agora
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-8 text-xs text-white/70">
          10x sem juros · Frete grátis (consulte regiões disponíveis)
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------------- PAGE ---------------- */
const CleanCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = prev; };
  }, []);

  return (
    <>
      <Helmet>
        <title>Clean &amp; Care Acqualive · Água Termal pH+10 do Aquífero Guarani</title>
        <meta
          name="description"
          content="A única água termal do Brasil com pH+10 e PRAL negativo. Limpeza profunda, hidratação real e brilho natural para a pele de toda a família."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/clean-care" />
      </Helmet>

      <main className="bg-white text-[#0a1628]">
        <Hero />
        <Manifesto />
        <Story />
        <BeforeAfter />
        <HoverBenefits />
        <Ingredients />
        <Origin />
        <Comparison />
        <ForEveryone />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
};

export default CleanCare;
