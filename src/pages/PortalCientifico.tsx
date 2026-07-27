import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Droplets, ShieldCheck, ArrowRight } from "lucide-react";
import HeroPortal from "@/components/portal/HeroPortal";
import BuscaAcademica from "@/components/portal/BuscaAcademica";
import BibliotecaArtigos from "@/components/portal/BibliotecaArtigos";
import PerguntasGuia from "@/components/portal/PerguntasGuia";
import BlogRecentes from "@/components/portal/BlogRecentes";
import VideosPortal from "@/components/portal/VideosPortal";
import LeitorArtigo from "@/components/portal/LeitorArtigo";
import ScrollReveal from "@/components/ScrollReveal";
import { PERGUNTAS_GUIA, REFERENCIAS, type Referencia } from "@/data/portal-cientifico";

const SITE = "https://paginas.acqualive.com.br";
const URL_PAGINA = `${SITE}/portal-cientifico`;

const NAV = [
  { href: "#busca", label: "Buscar" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#perguntas", label: "Perguntas" },
  { href: "#blog", label: "Blog" },
  { href: "#videos", label: "Videos" },
];

const PortalCientifico = () => {
  const [artigo, setArtigo] = useState<Referencia | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Portal Cientifico Acqualive",
      url: URL_PAGINA,
      description:
        "Enciclopedia cientifica sobre agua alcalina, hidratacao funcional e qualidade da agua, com estudos revisados por pares e resumos em portugues.",
      inLanguage: "pt-BR",
      isPartOf: { "@type": "WebSite", name: "Acqualive", url: SITE },
      about: ["Agua alcalina", "Hidratacao", "Qualidade da agua", "Hidrogenio molecular", "Saude preventiva"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PERGUNTAS_GUIA.map((p) => ({
        "@type": "Question",
        name: p.pergunta,
        acceptedAnswer: { "@type": "Answer", text: p.resposta },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Referencias cientificas sobre agua alcalina",
      numberOfItems: REFERENCIAS.length,
      itemListElement: REFERENCIAS.slice(0, 20).map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ScholarlyArticle",
          name: r.tituloOriginal ?? r.titulo,
          author: r.autores,
          datePublished: String(r.ano),
          isPartOf: r.fonte,
          inLanguage: r.idioma,
          url: r.url,
          abstract: r.resumo,
        },
      })),
    },
  ];

  return (
    <div className="portal-theme min-h-screen font-body">
      <Helmet>
        <title>Portal Cientifico Acqualive: estudos sobre agua alcalina</title>
        <meta
          name="description"
          content="Base cientifica sobre agua alcalina, hidratacao funcional e qualidade da agua: estudos revisados por pares, documentos da OMS e resumos em portugues."
        />
        <meta property="og:title" content="Portal Cientifico Acqualive: estudos sobre agua alcalina" />
        <meta
          property="og:description"
          content="Pesquise estudos sobre agua alcalina, refluxo, performance, minerais e microplasticos. Resumos em portugues, leitura dentro da pagina."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav
        aria-label="Navegacao do portal"
        className="sticky top-0 z-40 border-b border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper)/0.85)] backdrop-blur"
      >
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href="/" className="flex items-center gap-2 font-display text-sm font-bold text-[hsl(var(--pc-blue))]">
            <Droplets className="h-5 w-5" aria-hidden />
            Acqualive
            <span className="hidden font-normal text-[hsl(var(--pc-ink-soft))] sm:inline">| Portal Cientifico</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-[hsl(var(--pc-ink-soft))] md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-[hsl(var(--pc-blue))]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.acqualive.com.br/collections/all/products/purificador-de-agua-alcalina-acqualive-duo-natural-e-gelada"
            className="rounded-full bg-[hsl(var(--pc-blue))] px-4 py-2 text-xs font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
          >
            Conhecer o DUO
          </a>
        </div>
      </nav>

      <main>
        <HeroPortal />
        <BuscaAcademica onAbrirArtigo={setArtigo} />
        <BibliotecaArtigos onAbrirArtigo={setArtigo} />
        <PerguntasGuia onAbrirArtigo={setArtigo} />
        <BlogRecentes />
        <VideosPortal />

        <section className="border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
          <div className="container">
            <ScrollReveal>
              <div className="pc-radial overflow-hidden rounded-3xl border border-[hsl(var(--pc-line))] p-10 text-center md:p-16">
                <ShieldCheck className="mx-auto h-10 w-10 text-[hsl(var(--pc-amber))]" aria-hidden />
                <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">
                  Da evidencia para o seu copo, todos os dias
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
                  Tudo o que voce leu aqui aponta para a mesma direcao: agua alcalina, mineralizada e livre de cloro e
                  microplasticos. E exatamente isso que a tecnologia Acqualive entrega direto na sua torneira.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://www.acqualive.com.br/collections/all/products/purificador-de-agua-alcalina-acqualive-duo-natural-e-gelada"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-8 py-4 text-sm font-semibold text-[hsl(var(--pc-paper))] shadow-lg transition hover:bg-[hsl(var(--pc-cyan))]"
                  >
                    Conhecer o Acqualive DUO
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href="/acqualive-empresas"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-8 py-4 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                  >
                    Solucoes para empresas
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[hsl(var(--pc-line))] py-10">
        <div className="container flex flex-col items-center gap-4 text-center text-xs text-[hsl(var(--pc-ink-soft))]">
          <p className="max-w-2xl">
            Conteudo de carater informativo e educativo. Nao substitui avaliacao, diagnostico ou tratamento realizado
            por profissional de saude.
          </p>
          <p>Portal Cientifico Acqualive</p>
        </div>
      </footer>

      <LeitorArtigo referencia={artigo} onOpenChange={(o) => !o && setArtigo(null)} />
    </div>
  );
};

export default PortalCientifico;
