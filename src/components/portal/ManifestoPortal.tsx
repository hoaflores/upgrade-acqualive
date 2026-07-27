import {
  Droplet,
  Sparkles,
  Gem,
  ShieldCheck,
  Waves,
  Scale,
  FlaskConical,
  FileCheck2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import imgLaboratorio from "@/assets/portal/laboratorio.jpg.asset.json";
import logoUnicamp from "@/assets/portal/unicamp.svg.asset.json";
import logoUfpa from "@/assets/portal/ufpa.jpg.asset.json";
import { REFERÊNCIAS, type Referência } from "@/data/portal-cientifico";

const LOGOS_FONTE: { chave: string; src: string; alt: string }[] = [
  { chave: "unicamp", src: logoUnicamp.url, alt: "Unicamp" },
  { chave: "ufpa", src: logoUfpa.url, alt: "UFPA" },
  { chave: "pará", src: logoUfpa.url, alt: "UFPA" },
];

const logoDaFonte = (r: Referência) => {
  const texto = `${r.fonte} ${r.id}`.toLowerCase();
  return LOGOS_FONTE.find((l) => texto.includes(l.chave));
};


interface Props {
  onAbrirArtigo: (r: Referência) => void;
}

const CARACTERÍSTICAS = [
  { icone: Scale, titulo: "Alcalinidade", texto: "pH acima de 8, na faixa em que a água deixa de somar acidez à rotina." },
  { icone: Sparkles, titulo: "Antioxidação", texto: "Potencial redutor negativo, capaz de doar elétrons em vez de tomar." },
  { icone: Gem, titulo: "Mineralização", texto: "Cálcio, magnésio e potássio biodisponíveis, absorvidos ao longo do dia." },
  { icone: ShieldCheck, titulo: "Pureza", texto: "Sem cloro, sem agrotóxicos, sem subprodutos da desinfecção." },
  { icone: Waves, titulo: "Hidratação superior", texto: "Estrutura que facilita a entrada de água na célula, não só no copo." },
  { icone: Droplet, titulo: "Poder alcalinizante", texto: "PRAL negativo: alcaliniza depois de metabolizada, não apenas no copo." },
];

const IDS_PUBLICAÇÕES = [
  "unicamp-agrotoxicos",
  "instituto-vp-minerais-pral",
  "instituto-vp-magnesiana",
  "ufpa-gastrico",
];

const ManifestoPortal = ({ onAbrirArtigo }: Props) => {
  const publicações = IDS_PUBLICAÇÕES.map((id) => REFERÊNCIAS.find((r) => r.id === id)).filter(
    (r): r is Referência => !!r,
  );
  const pral = REFERÊNCIAS.find((r) => r.id === "remer-manz-1995-pral");

  return (
    <section
      id="fundamentos"
      className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] py-20 md:py-28"
    >
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
              Fundamentos
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              A melhor água do mundo é a <span className="pc-underline-amber">alcalina ionizada com PRAL negativo</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              Existe muita evidência científica sobre qualidade da água, mas pouca gente no Brasil se dedica ao tema.
              Por isso a Acqualive compilou centenas de artigos científicos em textos de leitura mais simples, sempre
              com as referências bibliográficas indexadas à vista. Quem quiser se tornar especialista em água pode
              seguir cada fonte e se aprofundar quanto quiser.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              Nos tópicos deste portal você entende por que deve beber água, e não outros líquidos, e por que a melhor
              água precisa ser purificada, rica em minerais, magnesiana, com PRAL negativo e antioxidante.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARACTERÍSTICAS.map((c, i) => (
            <ScrollReveal key={c.titulo} delay={(i % 3) * 90}>
              <article className="pc-card h-full rounded-2xl p-6">
                <c.icone className="h-6 w-6 text-[hsl(var(--pc-cyan))]" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold">{c.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{c.texto}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-[hsl(var(--pc-ink-soft))]">
            É comum encontrar águas com uma, duas ou até três dessas qualidades. Todas as seis reunidas, apenas a água
            alcalina ionizada, encontrada naturalmente em pouquíssimos lugares do mundo.
          </p>
        </ScrollReveal>

        {/* PRAL em destaque */}
        <ScrollReveal>
          <div className="pc-card mt-16 overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
                  <FlaskConical className="h-4 w-4" aria-hidden /> Conceito-chave
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">O que é PRAL, afinal?</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                  PRAL é a sigla em inglês para Potencial Renal de Carga Ácida. Trata-se de um cálculo que indica se um
                  alimento, ou uma água, tem poder alcalinizante ou acidificante depois de metabolizado pelo corpo. O
                  conceito foi descrito em 1995 por Remer e Manz e mudou a forma como a nutrição enxerga o equilíbrio
                  ácido-base da dieta.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                  Não confunda com pH. Alcalinidade é uma característica, poder alcalinizante é outra. O limão é
                  extremamente ácido no copo, mas alcaliniza o organismo depois de absorvido. O inverso também
                  acontece. É por isso que medir apenas o pH da água conta metade da história.
                </p>
              </div>

              <div className="rounded-2xl border border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper))] p-6">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-[hsl(var(--pc-blue))]">PRAL negativo</dt>
                    <dd className="text-[hsl(var(--pc-ink-soft))]">Alcaliniza o organismo. É o que se busca na água.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[hsl(var(--pc-blue))]">PRAL positivo</dt>
                    <dd className="text-[hsl(var(--pc-ink-soft))]">
                      Soma carga ácida. É o perfil da dieta típica brasileira.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[hsl(var(--pc-blue))]">Como se mede</dt>
                    <dd className="text-[hsl(var(--pc-ink-soft))]">
                      Pela composição de proteínas e minerais, validada pelo pH urinário.
                    </dd>
                  </div>
                </dl>
                {pral && (
                  <button
                    type="button"
                    onClick={() => onAbrirArtigo(pral)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[hsl(var(--pc-blue))] px-5 py-3 text-xs font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
                  >
                    Ler o artigo original de Remer e Manz
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Publicações Acqualive */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[hsl(var(--pc-line))] shadow-[0_40px_80px_-60px_hsl(var(--pc-blue))]">
                <img
                  src={imgLaboratorio.url}
                  alt="Pesquisador segurando um béquer com água ao lado de um medidor de pH em laboratório"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-[hsl(var(--pc-paper)/0.9)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--pc-blue))] backdrop-blur">
                  Ensaios laboratoriais
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
                  Publicações científicas da Acqualive
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                  Laudos, ensaios e artigos revisados por pares
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                  Para garantir que a Acqualive entrega mesmo a água alcalina ionizada que promete, buscamos comprovação
                  científica em universidades e periódicos. Abaixo estão os estudos, laudos e testes que sustentam a
                  tecnologia, com leitura resumida aqui dentro e o documento original a um clique.
                </p>
              </div>
            </div>
          </ScrollReveal>


          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {publicações.map((r, i) => {
              const logo = logoDaFonte(r);
              return (
              <ScrollReveal key={r.id} delay={(i % 2) * 90}>
                <button
                  type="button"
                  onClick={() => onAbrirArtigo(r)}
                  className="pc-card group flex h-full w-full flex-col rounded-2xl p-6 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {logo ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-12 w-auto opacity-80 transition group-hover:opacity-100"
                    />
                  ) : (
                    <FileCheck2 className="h-6 w-6 text-[hsl(var(--pc-amber))]" aria-hidden />
                  )}
                  <span className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--pc-amber))]">
                    {r.fonte}
                  </span>

                  <span className="mt-3 font-display text-lg font-semibold text-[hsl(var(--pc-ink))]">{r.titulo}</span>
                  <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                    {r.resumo}
                  </span>
                  <span className="mt-4 text-xs font-semibold text-[hsl(var(--pc-blue))] group-hover:underline">
                    Ler resumo completo
                  </span>
                </button>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoPortal;
