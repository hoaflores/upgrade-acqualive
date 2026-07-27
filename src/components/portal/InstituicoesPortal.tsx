import ScrollReveal from "@/components/ScrollReveal";
import unicamp from "@/assets/portal/unicamp.svg.asset.json";
import ufpa from "@/assets/portal/ufpa.jpg.asset.json";
import oms from "@/assets/portal/oms.svg.asset.json";
import pubmed from "@/assets/portal/pubmed.svg.asset.json";
import inmetro from "@/assets/portal/inmetro.svg.asset.json";

const FONTES = [
  { nome: "Unicamp", src: unicamp.url, alt: "Universidade Estadual de Campinas", h: "h-14" },
  { nome: "UFPA", src: ufpa.url, alt: "Universidade Federal do Pará", h: "h-14" },
  { nome: "OMS", src: oms.url, alt: "Organização Mundial da Saúde", h: "h-12" },
  { nome: "PubMed", src: pubmed.url, alt: "PubMed, base do National Library of Medicine", h: "h-10" },
  { nome: "Inmetro", src: inmetro.url, alt: "Inmetro", h: "h-12" },
];

const InstituicoesPortal = () => (
  <section
    aria-label="Fontes e instituições"
    className="border-y border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper))] py-10"
  >
    <div className="container">
      <ScrollReveal>
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-ink-soft))]">
          Estudos, laudos e documentos de fontes como
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {FONTES.map((f) => (
            <li key={f.nome} className="group">
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className={`${f.h} w-auto opacity-60 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0`}
              />
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  </section>
);

export default InstituicoesPortal;
