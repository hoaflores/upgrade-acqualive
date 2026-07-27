import { useEffect, useRef, useState } from "react";
import { ArrowDown, FlaskConical, Search } from "lucide-react";
import { REFERÊNCIAS } from "@/data/portal-cientifico";
import { useTweenNumber } from "@/hooks/useTween";
import BolhasAgua from "./BolhasAgua";

const Contador = ({ alvo, ativo }: { alvo: number; ativo: boolean }) => {
  const v = useTweenNumber(ativo ? alvo : 0, { duration: 1400 });
  return <span className="pc-tabnum">{Math.round(v)}</span>;
};

const HeroPortal = () => {
  const estudos = REFERÊNCIAS.filter((r) => r.tipo === "estudo" || r.tipo === "revisão").length;
  const [ativo, setAtivo] = useState(false);
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setAtivo(true), io.disconnect()),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <header className="pc-aurora pc-ripple relative overflow-hidden">
      <div className="pc-grid-paper absolute inset-0 opacity-40" aria-hidden />
      <BolhasAgua />
      <div
        className="pc-molecule pc-float absolute -right-24 top-10 h-80 w-80 rounded-full opacity-40 blur-[1px]"
        aria-hidden
      />
      <div
        className="pc-molecule pc-float absolute -left-28 bottom-0 h-72 w-72 rounded-full opacity-25 blur-[1px]"
        style={{ animationDelay: "2.5s" }}
        aria-hidden
      />
      <div className="container relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-cyan)/0.45)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))] shadow-sm backdrop-blur">
            <FlaskConical className="h-3.5 w-3.5 animate-[pc-float-slow_6s_ease-in-out_infinite]" aria-hidden />
            Portal Científico Acqualive
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.1] md:text-6xl">
            Tudo o que a ciência já provou sobre{" "}
            <span className="pc-underline-amber">água alcalina e hidratação</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            Uma enciclopédia viva com estudos revisados por pares, documentos da OMS e conteúdo técnico traduzido para o
            português. Faça uma pergunta e receba a resposta com a referência na mão.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#busca"
              className="pc-shine inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--pc-paper))] shadow-[0_18px_40px_-18px_hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--pc-cyan))]"
            >
              <Search className="relative z-10 h-4 w-4" aria-hidden />
              <span className="relative z-10">Pesquisar na base científica</span>
            </a>
            <a
              href="#biblioteca"
              className="group inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] bg-white/50 px-7 py-3.5 text-sm font-semibold text-[hsl(var(--pc-blue))] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explorar a biblioteca
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>

          <dl ref={ref} className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-center">
            {[
              { n: REFERÊNCIAS.length, l: "Referências indexadas" },
              { n: estudos, l: "Estudos e revisões" },
              { n: 8, l: "Eixos temáticos" },
            ].map((s) => (
              <div key={s.l} className="pc-card rounded-2xl px-3 py-5 hover:-translate-y-1">
                <dt className="font-display text-3xl font-bold text-[hsl(var(--pc-blue))] md:text-4xl">
                  <Contador alvo={s.n} ativo={ativo} />
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
};

export default HeroPortal;
