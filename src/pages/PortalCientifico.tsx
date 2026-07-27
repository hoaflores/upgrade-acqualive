import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, ArrowRight } from "lucide-react";
import HeroPortal from "@/components/portal/HeroPortal";
import ManifestoPortal from "@/components/portal/ManifestoPortal";
import BuscaAcademica from "@/components/portal/BuscaAcademica";
import BibliotecaArtigos from "@/components/portal/BibliotecaArtigos";
import PerguntasGuia from "@/components/portal/PerguntasGuia";
import BlogRecentes from "@/components/portal/BlogRecentes";
import VideosPortal from "@/components/portal/VideosPortal";
import LeitorArtigo from "@/components/portal/LeitorArtigo";
import ProgressoLeitura from "@/components/portal/ProgressoLeitura";
import BolhasAgua from "@/components/portal/BolhasAgua";
import EscalaPH from "@/components/portal/EscalaPH";
import CorpoHidratacao from "@/components/portal/CorpoHidratacao";
import MitosFatos from "@/components/portal/MitosFatos";
import QuizHidratacao from "@/components/portal/QuizHidratacao";
import logoAcqualive from "@/assets/acqualive-logo-azul.png.asset.json";


import ScrollReveal from "@/components/ScrollReveal";
import { PERGUNTAS_GUIA, REFERÊNCIAS, type Referência } from "@/data/portal-cientifico";

const SITE = "https://paginas.acqualive.com.br";
const URL_PÁGINA = `${SITE}/portal-cientifico`;

const NAV = [
  { href: "#fundamentos", label: "Fundamentos" },
  { href: "#busca", label: "Buscar" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#perguntas", label: "Perguntas" },
  { href: "#blog", label: "Blog" },
  { href: "#vídeos", label: "Vídeos" },
];

const PortalCientifico = () => {
  const [artigo, setArtigo] = useState<Referência | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Portal Científico Acqualive",
      url: URL_PÁGINA,
      description:
        "Enciclopédia científica sobre água alcalina, hidratação funcional e qualidade da água, com estudos revisados por pares e resumos em português.",
      inLanguage: "pt-BR",
      isPartOf: { "@type": "WebSite", name: "Acqualive", url: SITE },
      about: ["Água alcalina", "Hidratação", "Qualidade da água", "Hidrogênio molecular", "Saúde preventiva"],
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
      name: "Referências científicas sobre água alcalina",
      numberOfItems: REFERÊNCIAS.length,
      itemListElement: REFERÊNCIAS.slice(0, 20).map((r, i) => ({
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
      <ProgressoLeitura />

      <Helmet>
        <title>Portal Científico Acqualive: estudos sobre água alcalina</title>
        <meta
          name="description"
          content="Base científica sobre água alcalina, hidratação funcional e qualidade da água: estudos revisados por pares, documentos da OMS e resumos em português."
        />
        <meta property="og:title" content="Portal Científico Acqualive: estudos sobre água alcalina" />
        <meta
          property="og:description"
          content="Pesquise estudos sobre água alcalina, refluxo, performance, minerais e microplásticos. Resumos em português, leitura dentro da página."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav
        aria-label="Navegação do portal"
        className="sticky top-0 z-40 border-b border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper)/0.85)] backdrop-blur"
      >
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoAcqualive.url}
              alt="Acqualive"
              className="h-11 w-auto md:h-14"
              width={200}
              height={40}
            />
            <span className="hidden text-sm text-[hsl(var(--pc-ink-soft))] sm:inline">| Portal Científico</span>
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
            href="https://www.acqualive.com.br"
            className="rounded-full bg-[hsl(var(--pc-blue))] px-4 py-2 text-xs font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
          >
            Conheça os filtros Acqualive
          </a>
        </div>
      </nav>

      <main>
        <HeroPortal />
        <ManifestoPortal onAbrirArtigo={setArtigo} />
        <BuscaAcademica onAbrirArtigo={setArtigo} />
        <EscalaPH />
        <BibliotecaArtigos onAbrirArtigo={setArtigo} />
        <PerguntasGuia onAbrirArtigo={setArtigo} />
        <BlogRecentes />
        <VideosPortal />


        <section className="border-t border-[hsl(var(--pc-line))] py-20 md:py-28">
          <div className="container">
            <ScrollReveal>
              <div className="pc-aurora relative overflow-hidden rounded-3xl border border-[hsl(var(--pc-line))] p-10 text-center shadow-[0_40px_80px_-60px_hsl(var(--pc-blue))] md:p-16">
                <BolhasAgua />
                <ShieldCheck className="pc-float relative mx-auto h-10 w-10 text-[hsl(var(--pc-amber))]" aria-hidden />
                <h2 className="relative mt-6 font-display text-3xl font-bold md:text-4xl">
                  Da evidência para o seu copo, todos os dias
                </h2>
                <p className="relative mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
                  Tudo o que você leu aqui aponta para a mesma direção: água alcalina, mineralizada e livre de cloro e
                  microplásticos. É exatamente isso que a tecnologia Acqualive entrega direto na sua torneira.
                </p>
                <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://www.acqualive.com.br"
                    className="pc-shine inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-8 py-4 text-sm font-semibold text-[hsl(var(--pc-paper))] shadow-[0_20px_45px_-20px_hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--pc-cyan))]"
                  >
                    <span className="relative z-10">Conheça os filtros Acqualive</span>
                    <ArrowRight className="relative z-10 h-4 w-4" aria-hidden />
                  </a>


                  <a
                    href="/acqualive-empresas"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-8 py-4 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                  >
                    Soluções para empresas
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[hsl(var(--pc-line))] py-10">
        <div className="container flex flex-col items-center gap-4 text-center text-xs text-[hsl(var(--pc-ink-soft))]">
          <img src={logoAcqualive.url} alt="Acqualive" className="h-10 w-auto" width={260} height={52} loading="lazy" />
          <p className="max-w-2xl">
            Conteúdo de caráter informativo e educativo. Não substitui avaliação, diagnóstico ou tratamento realizado
            por profissional de saúde.
          </p>
          <p>Portal Científico Acqualive</p>
        </div>

      </footer>

      <LeitorArtigo referência={artigo} onOpenChange={(o) => !o && setArtigo(null)} />
    </div>
  );
};

export default PortalCientifico;
