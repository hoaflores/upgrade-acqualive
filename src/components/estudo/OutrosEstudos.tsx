import { ExternalLink, FileCheck2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import imgLaboratorio from "@/assets/portal/laboratorio.jpg.asset.json";
import { ESTUDO_ORIGINAL, ESTUDO_PUBMED } from "@/components/estudo/links";

const PUBLICAÇÕES = [
  {
    etiqueta: "Artigo indexado no PubMed",
    titulo: "Effects of alkaline water intake on gastritis and miRNA expression",
    texto:
      "Artigo de Chaves JR e colaboradores publicado no American Journal of Translational Research em 2020, com a análise da expressão dos microRNAs miR-7, miR-155, miR-135b e miR-29c em pacientes com gastrite. É a versão revisada por pares da pesquisa apresentada neste dossiê.",
    url: ESTUDO_PUBMED,
    ação: "Ver no PubMed",
  },
  {
    etiqueta: "Dissertação de mestrado, UFPA",
    titulo: "UFPA: água Acqualive como auxiliar em doenças gástricas",
    texto:
      "Dissertação desenvolvida na Universidade Federal do Pará e apresentada em congressos internacionais, com exames endoscópicos antes e depois do consumo diário da água alcalina ionizada.",
    url: ESTUDO_ORIGINAL,
    ação: "Abrir o documento original",
  },
  {
    etiqueta: "Laudo técnico de ensaio",
    titulo: "Unicamp: filtros Acqualive removem até 99% de agrotóxicos da água",
    texto:
      "Ensaios conduzidos na Unicamp para verificar a eficácia de purificação, especificamente a remoção de resíduos de agrotóxicos presentes na água de abastecimento.",
    url: "https://drive.google.com/file/d/1KNs7q6g0gFPKO1-Z_EKt4vtsVR4Jjss1/view",
    ação: "Abrir o laudo",
  },
  {
    etiqueta: "Relatório de pesquisa",
    titulo: "Instituto VP: água filtrada pela Acqualive ganha minerais e reduz o PRAL",
    texto:
      "Análise antes e depois da passagem pelo purificador, com aumento substancial de minerais essenciais, alcalinidade e redução significativa do índice PRAL.",
    url: "https://drive.google.com/file/d/1dyoJP5wUof12cjrJ2EsC7tJ8gmEE8Ri3/view",
    ação: "Abrir o relatório",
  },
];

/** Publicações científicas que sustentam o estudo, no mesmo formato do Portal Científico. */
const OutrosEstudos = () => (
  <section id="outros-estudos" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
    <div className="container">
      <ScrollReveal>
        <div className="grid items-center gap-10 md:grid-cols-2">
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
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Laudos, ensaios e artigos revisados por pares
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">
              O estudo da Dra. Juliana Chaves não caminha sozinho. Abaixo estão o artigo indexado no PubMed, a
              dissertação original e os laudos que sustentam a tecnologia, cada documento a um clique.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {PUBLICAÇÕES.map((p, i) => (
          <ScrollReveal key={p.titulo} delay={(i % 2) * 90}>
            <article className="pc-card flex h-full flex-col rounded-2xl p-6">
              <FileCheck2 className="h-6 w-6 text-[hsl(var(--pc-amber))]" aria-hidden />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--pc-amber))]">
                {p.etiqueta}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug">{p.titulo}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{p.texto}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:text-[hsl(var(--pc-cyan))]"
              >
                {p.ação}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OutrosEstudos;
