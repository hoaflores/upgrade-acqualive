import { useState } from "react";
import { FlaskConical } from "lucide-react";

/**
 * Simulador de acidez: ajuda o leitor a entender por que o pH da água
 * muda o comportamento da pepsina, tema central do estudo.
 */
const FAIXAS = [
  {
    max: 2.5,
    rótulo: "Estômago em digestão",
    estado: "Pepsina em atividade máxima",
    texto:
      "Nesta acidez a pepsina cumpre exatamente a função para a qual foi produzida: digerir proteínas dentro do estômago.",
    cor: "--pc-amber",
  },
  {
    max: 4.5,
    rótulo: "Refrigerantes e sucos ácidos",
    estado: "Pepsina ainda ativa",
    texto:
      "Bebidas muito ácidas mantêm um ambiente em que a enzima continua funcional, inclusive fora do lugar onde deveria agir.",
    cor: "--pc-amber",
  },
  {
    max: 7.4,
    rótulo: "Água comum e água de torneira",
    estado: "Atividade reduzida, sem inativação",
    texto:
      "Perto da neutralidade a atividade diminui, mas a enzima permanece disponível para voltar a agir quando reencontra acidez.",
    cor: "--pc-ink-soft",
  },
  {
    max: 9.5,
    rótulo: "Faixa alcalina do estudo",
    estado: "Condição estudada para inativação da pepsina",
    texto:
      "Acima de pH 8,0 pesquisas experimentais observam inativação da pepsina. É nesta faixa alcalina que a água funcional do protocolo da Dra. Juliana Chaves foi mantida.",
    cor: "--pc-cyan",
  },
];

const faixaDe = (ph: number) => FAIXAS.find((f) => ph <= f.max) ?? FAIXAS[FAIXAS.length - 1];

const PH_MIN = 1;
const PH_MAX = 9.5;

const SimuladorPepsina = () => {
  const [ph, setPh] = useState(9);
  const f = faixaDe(ph);
  const atividade = Math.max(0, Math.min(100, Math.round(100 - ((ph - 1.5) / 7) * 100)));


  return (
    <div className="pc-card my-8 rounded-2xl p-6 md:p-8">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-blue))]">
        <FlaskConical className="h-3.5 w-3.5" aria-hidden />
        Experimento interativo
      </p>
      <h3 className="mt-2 font-display text-xl font-bold">Mova o pH e veja o que acontece com a pepsina</h3>
      <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">
        O pH não é um detalhe do protocolo. Ele define se a enzima continua agindo ou não.
      </p>

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">pH selecionado</p>
          <p className="font-display text-4xl font-bold tabular-nums" style={{ color: `hsl(var(${f.cor}))` }}>
            {ph.toFixed(1)}
          </p>
        </div>
        <p className="text-right font-display text-base font-semibold text-[hsl(var(--pc-blue))]">{f.rótulo}</p>
      </div>

      <div className="relative mt-5">
        <div
          className="h-3 w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--pc-amber)) 0%, hsl(var(--pc-amber)/0.5) 32%, hsl(var(--pc-line)) 60%, hsl(var(--pc-cyan)/0.6) 76%, hsl(var(--pc-blue)) 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-2 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-white shadow-lg transition-all duration-200"
          style={{ left: `${((ph - PH_MIN) / (PH_MAX - PH_MIN)) * 100}%`, background: `hsl(var(${f.cor}))` }}
          aria-hidden
        />
        <input
          type="range"
          min={PH_MIN}
          max={PH_MAX}
          step={0.5}
          value={ph}
          onChange={(e) => setPh(Number(e.target.value))}
          aria-label="Ajustar o pH da solução"
          className="absolute inset-0 h-3 w-full cursor-pointer opacity-0"
        />

        <div className="mt-3 flex justify-between text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">
          <span>Ácido</span>
          <span>Neutro</span>
          <span>Alcalino</span>
        </div>
      </div>

      <div className="mt-7 rounded-xl border border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] p-5">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span>Atividade estimada da pepsina</span>
          <span className="tabular-nums text-[hsl(var(--pc-ink-soft))]">{atividade}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--pc-line))]">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${atividade}%`, background: `hsl(var(${f.cor}))` }}
          />
        </div>
        <p className="mt-3 text-sm font-semibold" style={{ color: `hsl(var(${f.cor}))` }}>{f.estado}</p>
        <p key={f.rótulo} className="pc-fade-in mt-2 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">
          {f.texto}
        </p>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-[hsl(var(--pc-ink-soft))]">
        Representação didática baseada em estudos experimentais sobre atividade da pepsina em diferentes faixas de pH.
        Não representa medição individual.
      </p>
    </div>
  );
};

export default SimuladorPepsina;
