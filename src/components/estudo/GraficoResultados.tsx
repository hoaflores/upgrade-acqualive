import { useState } from "react";
import { BarChart3 } from "lucide-react";

/**
 * Comparativo antes e depois do protocolo. Transforma o resultado central do
 * estudo em algo que o leitor entende em segundos, sem reler o parágrafo.
 */
const GRUPOS = [
  {
    id: "melhora",
    n: 12,
    rótulo: "Migraram de gastrite moderada para leve",
    detalhe:
      "Doze participantes apresentaram redução no grau de inflamação observado na classificação endoscópica após aproximadamente quatro meses de consumo diário.",
    cor: "--pc-cyan",
  },
  {
    id: "estavel",
    n: 0,
    rótulo: "Pioraram na classificação endoscópica",
    detalhe:
      "Nenhum participante apresentou agravamento do quadro durante o período acompanhado. Em pesquisa clínica, ausência de piora também é um dado relevante.",
    cor: "--pc-blue",
  },
];

const MÁXIMO = 12;

const GraficoResultados = () => {
  const [ativo, setAtivo] = useState(GRUPOS[0].id);
  const g = GRUPOS.find((x) => x.id === ativo) ?? GRUPOS[0];

  return (
    <div className="pc-card my-8 rounded-2xl p-6 md:p-8">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-blue))]">
        <BarChart3 className="h-3.5 w-3.5" aria-hidden />
        Resultados em um olhar
      </p>
      <h3 className="mt-2 font-display text-xl font-bold">O que mudou ao longo dos quatro meses</h3>

      <div className="mt-7 space-y-5">
        {GRUPOS.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setAtivo(x.id)}
            aria-pressed={ativo === x.id}
            className="block w-full text-left"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span
                className={`text-sm ${
                  ativo === x.id ? "font-semibold text-[hsl(var(--pc-ink))]" : "text-[hsl(var(--pc-ink-soft))]"
                }`}
              >
                {x.rótulo}
              </span>
              <span className="font-display text-2xl font-bold tabular-nums" style={{ color: `hsl(var(${x.cor}))` }}>
                {x.n}
              </span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[hsl(var(--pc-line))]">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${Math.max(2, (x.n / MÁXIMO) * 100)}%`,
                  background: `hsl(var(${x.cor}))`,
                  opacity: ativo === x.id ? 1 : 0.45,
                }}
              />
            </div>
          </button>
        ))}
      </div>

      <p key={g.id} className="pc-fade-in mt-6 rounded-xl border border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] p-5 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">
        {g.detalhe}
      </p>
      <p className="mt-4 text-xs leading-relaxed text-[hsl(var(--pc-ink-soft))]">
        Resultados observados no grupo acompanhado pela pesquisa. Não representam promessa de resultado individual.
      </p>
    </div>
  );
};

export default GraficoResultados;
