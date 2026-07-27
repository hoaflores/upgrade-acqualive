import { useMemo, useState } from "react";
import { Droplets } from "lucide-react";

type Ponto = {
  ph: number;
  phMax?: number;
  nome: string;
  descricao: string;
};

const PONTOS: Ponto[] = [
  { ph: 2.5, nome: "Refrigerante de cola", descricao: "Altamente ácido. Impõe carga ácida elevada ao organismo e agride o esmalte dentário." },
  { ph: 3.5, nome: "Suco industrializado", descricao: "Acidez alta e açúcar livre. Hidrata pouco e aumenta a carga ácida da dieta." },
  { ph: 5.5, nome: "Água de garrafa PET comum", descricao: "Frequentemente levemente ácida, desmineralizada e com presença documentada de microplásticos." },
  { ph: 6.5, nome: "Água de torneira com cloro", descricao: "Costuma ficar próxima da neutralidade, mas carrega cloro residual e subprodutos da desinfecção." },
  { ph: 7, nome: "Água neutra", descricao: "Ponto de equilíbrio da escala. Nem ácida, nem alcalina." },
  {
    ph: 8,
    phMax: 9.5,
    nome: "Faixa Acqualive e dos estudos clínicos",
    descricao: "Mesma faixa: a água alcalina e mineralizada da Acqualive fica entre pH 8 e 9,5, exatamente o intervalo usado nos estudos clínicos sobre pepsina, refluxo, viscosidade sanguínea e redução da carga ácida da dieta.",
  },
  { ph: 11, nome: "Solução de limpeza leve", descricao: "Alcalinidade fora da faixa de consumo recomendado para uso diário." },
];

const formatoPh = (p: Ponto) =>
  p.phMax ? `${p.ph.toFixed(1)} a ${p.phMax.toFixed(1)}` : p.ph.toFixed(1);


const corPara = (ph: number) => {
  if (ph < 6.5) return "hsl(var(--pc-amber))";
  if (ph < 7.5) return "hsl(var(--pc-ink-soft))";
  return "hsl(var(--pc-cyan))";
};

const EscalaPH = () => {
  const [idx, setIdx] = useState(5);
  const ponto = PONTOS[idx];
  const pct = useMemo(() => (((ponto.ph + (ponto.phMax ?? ponto.ph)) / 2) / 14) * 100, [ponto]);

  return (
    <section id="escala-ph" className="border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-cyan)/0.45)] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-blue))]">
            <Droplets className="h-3.5 w-3.5" aria-hidden />
            Experimento interativo
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">Onde está a sua água na escala de pH?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
            Arraste o controle e compare o que você bebe todos os dias com a faixa alcalina estudada pela ciência.
          </p>
        </div>

        <div className="pc-card mx-auto mt-12 max-w-3xl rounded-3xl p-6 md:p-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">pH medido</p>
              <p className="pc-tabnum font-display text-5xl font-bold" style={{ color: corPara(ponto.ph) }}>
                {ponto.ph.toFixed(1)}
              </p>
            </div>
            <p className="text-right font-display text-lg font-semibold text-[hsl(var(--pc-blue))]">{ponto.nome}</p>
          </div>

          <div className="relative mt-8">
            <div
              className="h-3 w-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--pc-amber)) 0%, hsl(var(--pc-amber)/0.5) 35%, hsl(var(--pc-line)) 50%, hsl(var(--pc-cyan)/0.6) 70%, hsl(var(--pc-blue)) 100%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-2 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-white shadow-lg transition-all duration-300"
              style={{ left: `${pct}%`, background: corPara(ponto.ph) }}
              aria-hidden
            />
            <input
              type="range"
              min={0}
              max={PONTOS.length - 1}
              step={1}
              value={idx}
              onChange={(e) => setIdx(Number(e.target.value))}
              aria-label="Selecionar bebida na escala de pH"
              className="absolute inset-0 h-3 w-full cursor-pointer opacity-0"
            />
            <div className="mt-3 flex justify-between text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">
              <span>Ácido</span>
              <span>Neutro</span>
              <span>Alcalino</span>
            </div>
          </div>

          <p key={ponto.nome} className="pc-fade-in mt-8 text-[hsl(var(--pc-ink-soft))]">{ponto.descricao}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {PONTOS.map((p, i) => (
              <button
                key={p.nome}
                type="button"
                onClick={() => setIdx(i)}
                aria-pressed={i === idx}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  i === idx
                    ? "border-transparent bg-[hsl(var(--pc-blue))] text-[hsl(var(--pc-paper))]"
                    : "border-[hsl(var(--pc-line))] text-[hsl(var(--pc-ink-soft))] hover:border-[hsl(var(--pc-cyan))] hover:text-[hsl(var(--pc-blue))]"
                }`}
              >
                {p.nome}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscalaPH;
