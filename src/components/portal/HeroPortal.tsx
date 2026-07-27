import { ArrowDown, FlaskConical, Search } from "lucide-react";
import { REFERENCIAS } from "@/data/portal-cientifico";

const HeroPortal = () => {
  const estudos = REFERENCIAS.filter((r) => r.tipo === "estudo" || r.tipo === "revisao").length;

  return (
    <header className="pc-radial relative overflow-hidden">
      <div className="pc-grid-paper absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pc-molecule pc-float absolute -right-24 top-10 h-80 w-80 rounded-full opacity-40 blur-[1px]"
        aria-hidden
      />
      <div className="container relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
            <FlaskConical className="h-3.5 w-3.5" aria-hidden />
            Portal Cientifico Acqualive
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.1] md:text-6xl">
            Tudo o que a ciencia ja provou sobre{" "}
            <span className="pc-underline-amber">agua alcalina e hidratacao</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            Uma enciclopedia viva com estudos revisados por pares, documentos da OMS e conteudo tecnico traduzido para o
            portugues. Faca uma pergunta e receba a resposta com a referencia na mao.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#busca"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--pc-paper))] shadow-lg transition hover:bg-[hsl(var(--pc-cyan))]"
            >
              <Search className="h-4 w-4" aria-hidden />
              Pesquisar na base cientifica
            </a>
            <a
              href="#biblioteca"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
            >
              Explorar a biblioteca
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-center">
            {[
              { n: `${REFERENCIAS.length}`, l: "Referencias indexadas" },
              { n: `${estudos}`, l: "Estudos e revisoes" },
              { n: "8", l: "Eixos tematicos" },
            ].map((s) => (
              <div key={s.l} className="pc-card rounded-2xl px-3 py-5">
                <dt className="font-display text-3xl font-bold text-[hsl(var(--pc-blue))]">{s.n}</dt>
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
