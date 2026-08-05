import { ExternalLink, Microscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ESTUDOS = [
  {
    instituicao: "Universidade Federal do Pará",
    autoria: "Dra. Juliana Chaves",
    texto:
      "Investigação clínica com pacientes com gastrite crônica, exames endoscópicos antes e depois da intervenção e análise da expressão de microRNAs ligados a processos inflamatórios.",
    url: "https://drive.google.com/file/d/1dyoJP5wUof12cjrJ2EsC7tJ8gmEE8Ri3/view",
  },
  {
    instituicao: "Instituto VP de Pesquisa",
    autoria: "Avaliação nutricional e mineral",
    texto:
      "Análise dos possíveis benefícios do consumo regular da água mineralizada, com foco em saúde óssea, preservação de massa magra e fatores associados a doenças crônicas.",
    url: "https://drive.google.com/file/d/1dyoJP5wUof12cjrJ2EsC7tJ8gmEE8Ri3/view",
  },
  {
    instituicao: "Unicamp",
    autoria: "Eficácia de purificação",
    texto:
      "Ensaios de remoção de agrotóxicos presentes na água, com resultado de até 99% de eficácia na eliminação dos três principais compostos avaliados.",
    url: "https://drive.google.com/file/d/1KNs7q6g0gFPKO1-Z_EKt4vtsVR4Jjss1/view",
  },
];

/** Reúne, em um só lugar, as pesquisas que dialogam com o dossiê. */
const OutrosEstudos = () => (
  <section id="outros-estudos" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
    <div className="container">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <Microscope className="mx-auto h-7 w-7 text-[hsl(var(--pc-blue))]" aria-hidden />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">O estudo não caminha sozinho</h2>
          <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
            Além da pesquisa da Universidade Federal do Pará, outras instituições avaliaram a mesma tecnologia sob
            perspectivas diferentes. Cada documento pode ser consultado na íntegra.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {ESTUDOS.map((e, i) => (
          <ScrollReveal key={e.instituicao} delay={i * 90}>
            <article className="pc-card flex h-full flex-col rounded-2xl p-6">
              <p className="font-display text-lg font-bold text-[hsl(var(--pc-blue))]">{e.instituicao}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[hsl(var(--pc-amber))]">{e.autoria}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{e.texto}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:text-[hsl(var(--pc-cyan))]"
              >
                Acessar o estudo
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
