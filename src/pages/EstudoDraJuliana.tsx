import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Download,
  FlaskConical,
  Microscope,
  ArrowRight,
  ChevronDown,
  Quote,
  BookOpen,
  GraduationCap,
  Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProgressoLeitura from "@/components/portal/ProgressoLeitura";
import FaixaVisual from "@/components/portal/FaixaVisual";
import BolhasAgua from "@/components/portal/BolhasAgua";
import TextoGlossario, { ProvedorGlossário } from "@/components/estudo/TextoGlossario";
import SimuladorPepsina from "@/components/estudo/SimuladorPepsina";
import GraficoResultados from "@/components/estudo/GraficoResultados";
import NumeroAnimado from "@/components/estudo/NumeroAnimado";
import NavegacaoCapitulos from "@/components/estudo/NavegacaoCapitulos";
import logoAcqualive from "@/assets/acqualive-logo-azul.png.asset.json";
import pdfDossie from "@/assets/portal/dossie-juliana-chaves.pdf.asset.json";
import imgLaboratorio from "@/assets/portal/laboratorio.jpg.asset.json";
import imgCopoLuz from "@/assets/portal/copo-luz.jpg.asset.json";
import heroEstudo from "@/assets/portal/estudo-hero.jpg";
import {
  CAPÍTULOS,
  NÚMEROS,
  LINHA_DO_TEMPO,
  ANALOGIAS,
  PERGUNTAS,
  REFERÊNCIAS_ESTUDO,
} from "@/data/estudo-juliana";

/** Minutos de leitura por capítulo: ajuda o leitor a decidir se lê agora ou depois. */
const minutosDe = (id: string) => {
  const c = CAPÍTULOS.find((x) => x.id === id);
  if (!c) return 1;
  const palavras = c.blocos.reduce(
    (t, b) => t + ("texto" in b ? b.texto.split(/\s+/).length : b.itens.join(" ").split(/\s+/).length),
    0
  );
  return Math.max(1, Math.round(palavras / 200));
};

/** Capítulo em leitura, compartilhado pelo índice lateral e pela navegação mobile. */
const useCapituloAtivo = () => {
  const [ativo, setAtivo] = useState(CAPÍTULOS[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        const visível = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visível) setAtivo(visível.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    CAPÍTULOS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return ativo;
};


const SITE = "https://paginas.acqualive.com.br";
const URL_PÁGINA = `${SITE}/estudo-dra-juliana`;

const BotaoPDF = ({ variante = "primario" }: { variante?: "primario" | "secundario" }) => (
  <a
    href={pdfDossie.url}
    download="Dossie-Cientifico-Dra-Juliana-Chaves.pdf"
    className={
      variante === "primario"
        ? "pc-shine inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-7 py-4 text-sm font-semibold text-[hsl(var(--pc-paper))] shadow-[0_20px_45px_-20px_hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--pc-cyan))]"
        : "inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-7 py-4 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
    }
  >
    <Download className="h-4 w-4" aria-hidden />
    <span className="relative z-10">Baixar o dossiê em PDF</span>
  </a>
);

/** Índice lateral que acompanha o capítulo em leitura. */
const ÍndiceCapítulos = ({ ativo }: { ativo: string }) => {
  const posição = CAPÍTULOS.findIndex((c) => c.id === ativo);
  const percentual = Math.round(((posição + 1) / CAPÍTULOS.length) * 100);

  return (
    <nav aria-label="Índice do dossiê" className="sticky top-28 hidden lg:block">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-ink-soft))]">
        Capítulos
      </p>
      <div className="mb-4 flex items-center gap-2">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-[hsl(var(--pc-line))]">
          <div
            className="h-full rounded-full bg-[hsl(var(--pc-cyan))] transition-all duration-500"
            style={{ width: `${percentual}%` }}
          />
        </div>
        <span className="text-[11px] tabular-nums text-[hsl(var(--pc-ink-soft))]">{percentual}%</span>
      </div>
      <ul className="space-y-1 border-l border-[hsl(var(--pc-line))]">
        {CAPÍTULOS.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`-ml-px flex gap-3 border-l-2 py-2 pl-4 text-sm transition ${
                ativo === c.id
                  ? "border-[hsl(var(--pc-blue))] font-semibold text-[hsl(var(--pc-blue))]"
                  : "border-transparent text-[hsl(var(--pc-ink-soft))] hover:text-[hsl(var(--pc-blue))]"
              }`}
            >
              <span className="tabular-nums opacity-60">{c.numero}</span>
              <span>{c.etiqueta}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l border-transparent pl-4">
        <a
          href={pdfDossie.url}
          download="Dossie-Cientifico-Dra-Juliana-Chaves.pdf"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--pc-amber))] transition hover:opacity-80"
        >
          <Download className="h-4 w-4" aria-hidden />
          Versão em PDF
        </a>
      </div>
    </nav>
  );
};

const CartaAnalogia = ({ tema, frente, verso }: { tema: string; frente: string; verso: string }) => {
  const [aberta, setAberta] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setAberta((a) => !a)}
      aria-expanded={aberta}
      className="pc-card group flex h-full min-h-[190px] flex-col justify-between rounded-2xl p-6 text-left"
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">{tema}</p>
        <p className="mt-3 font-display text-xl font-bold leading-snug">{frente}</p>
      </div>
      <div
        className={`grid transition-all duration-500 ease-out ${
          aberta ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{verso}</p>
      </div>
      {!aberta && (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--pc-blue))]">
          Ver a explicação <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" aria-hidden />
        </span>
      )}
    </button>
  );
};

const Pergunta = ({ pergunta, resposta }: { pergunta: string; resposta: string }) => {
  const [aberta, setAberta] = useState(false);
  return (
    <div className="border-b border-[hsl(var(--pc-line))]">
      <button
        type="button"
        onClick={() => setAberta((a) => !a)}
        aria-expanded={aberta}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-semibold md:text-lg">{pergunta}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[hsl(var(--pc-blue))] transition-transform duration-300 ${
            aberta ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          aberta ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))] md:text-base">
          {resposta}
        </p>
      </div>
    </div>
  );
};

const EstudoDraJuliana = () => {
  const ativo = useCapituloAtivo();
  const itensNav = useMemo(
    () => CAPÍTULOS.map((c) => ({ id: c.id, numero: c.numero, etiqueta: c.etiqueta })),
    []
  );
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Quando a ciência decidiu estudar a água: o estudo da Dra. Juliana Chaves",
      description:
        "Dossiê científico sobre a pesquisa da Dra. Juliana Chaves na Universidade Federal do Pará com água alcalina ionizada em pacientes com gastrite.",
      inLanguage: "pt-BR",
      url: URL_PÁGINA,
      author: { "@type": "Organization", name: "Acqualive" },
      about: ["Água alcalina ionizada", "Gastrite", "MicroRNAs", "Saúde digestiva"],
      citation: REFERÊNCIAS_ESTUDO.map((r) => `${r.autor}. ${r.titulo}. ${r.fonte}.`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: PERGUNTAS.map((p) => ({
        "@type": "Question",
        name: p.pergunta,
        acceptedAnswer: { "@type": "Answer", text: p.resposta },
      })),
    },
  ];

  return (
    <div className="portal-theme min-h-screen font-body">
      <ProgressoLeitura />

      <Helmet>
        <title>Estudo Dra. Juliana Chaves: água alcalina e gastrite</title>
        <meta
          name="description"
          content="Dossiê científico da pesquisa da Dra. Juliana Chaves na UFPA: água alcalina ionizada Acqualive, gastrite, endoscopia e expressão de microRNAs, com PDF para download."
        />
        <meta property="og:title" content="Estudo Dra. Juliana Chaves: água alcalina e gastrite" />
        <meta
          property="og:description"
          content="A pesquisa brasileira que colocou a qualidade da água no centro da conversa sobre saúde digestiva. Leitura interativa e dossiê em PDF."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav
        aria-label="Navegação do dossiê"
        className="sticky top-0 z-40 border-b border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper)/0.85)] backdrop-blur"
      >
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href="https://www.acqualive.com.br" target="_top" className="flex items-center gap-2">
            <img src={logoAcqualive.url} alt="Acqualive" className="h-10 w-auto md:h-12" width={200} height={40} />
            <span className="hidden text-sm text-[hsl(var(--pc-ink-soft))] sm:inline">| Dossiê Científico</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/portal-cientifico"
              className="hidden text-sm text-[hsl(var(--pc-ink-soft))] transition hover:text-[hsl(var(--pc-blue))] md:inline"
            >
              Portal Científico
            </a>
            <a
              href={pdfDossie.url}
              download="Dossie-Cientifico-Dra-Juliana-Chaves.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-4 py-2 text-xs font-semibold text-[hsl(var(--pc-paper))] transition hover:bg-[hsl(var(--pc-cyan))]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              PDF
            </a>
          </div>
        </div>
      </nav>

      <NavegacaoCapitulos itens={itensNav} ativo={ativo} />


      <main>
        {/* Hero */}
        <section className="pc-aurora relative overflow-hidden border-b border-[hsl(var(--pc-line))]">
          <BolhasAgua />
          <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-blue))]">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden />
                Dossiê científico Acqualive
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] md:text-6xl">
                Quando a ciência decidiu <span className="pc-underline-amber">estudar a água</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(var(--pc-ink-soft))] md:text-lg">
                A pesquisa da Dra. Juliana Chaves na Universidade Federal do Pará, a tecnologia de água alcalina
                ionizada da Acqualive e o estudo brasileiro que ampliou a forma como a ciência olha para a saúde
                digestiva.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BotaoPDF />
                <a
                  href="#pergunta"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-7 py-4 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                >
                  Começar a leitura
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs text-[hsl(var(--pc-ink-soft))]">
                <GraduationCap className="h-4 w-4" aria-hidden />
                Universidade Federal do Pará, 2021. Aprovado por Comitê de Ética em Pesquisa.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroEstudo}
                alt="Copo de água cristalina sobre bancada de laboratório iluminada pela luz da manhã"
                width={1600}
                height={900}
                className="w-full rounded-3xl border border-[hsl(var(--pc-line))] object-cover shadow-[0_40px_80px_-50px_hsl(var(--pc-blue))]"
              />
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="border-b border-[hsl(var(--pc-line))] py-14">
          <div className="container">
            <ScrollReveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {NÚMEROS.map((n) => (
                  <div key={n.rótulo} className="pc-card rounded-2xl p-5">
                    <NumeroAnimado valor={n.valor} />
                    <p className="mt-2 text-xs leading-relaxed text-[hsl(var(--pc-ink-soft))]">{n.rótulo}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Corpo do dossiê */}
        <section className="py-16 md:py-24">
          <div className="container grid gap-12 lg:grid-cols-[220px_1fr]">
            <ÍndiceCapítulos ativo={ativo} />

            <ProvedorGlossário>
            <div className="max-w-3xl">
              {CAPÍTULOS.map((c, índice) => (
                <article key={c.id} id={c.id} className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-12 first:border-t-0 first:pt-0">
                  <ScrollReveal>
                    <p className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
                      <span className="tabular-nums">Capítulo {c.numero}</span>
                      <span className="h-px w-10 bg-[hsl(var(--pc-line))]" />
                      {c.etiqueta}
                      <span className="inline-flex items-center gap-1 text-[hsl(var(--pc-ink-soft))]">
                        <Clock className="h-3 w-3" aria-hidden />
                        {minutosDe(c.id)} min
                      </span>
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{c.titulo}</h2>
                    <p className="mt-4 border-l-2 border-[hsl(var(--pc-cyan))] pl-4 text-base italic leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                      {c.resumo}
                    </p>
                  </ScrollReveal>

                  <div className="pc-prose mt-8 text-[15px] leading-relaxed text-[hsl(var(--pc-ink))] md:text-base">
                    {c.blocos.map((b, i) => {
                      if (b.tipo === "p") return <TextoGlossario key={i} texto={b.texto} />;
                      if (b.tipo === "destaque")
                        return (
                          <ScrollReveal key={i}>
                            <blockquote className="pc-card my-7 rounded-2xl p-6">
                              <Quote className="h-5 w-5 text-[hsl(var(--pc-amber))]" aria-hidden />
                              <p className="mt-3 font-display text-lg font-semibold leading-snug md:text-xl">
                                {b.texto}
                              </p>
                            </blockquote>
                          </ScrollReveal>
                        );
                      return (
                        <ul key={i} className="my-6 space-y-3">
                          {b.itens.map((it) => (
                            <li key={it} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[hsl(var(--pc-cyan))]" />
                              <span className="text-[hsl(var(--pc-ink-soft))]">{it}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>

                  {c.id === "traducao" && (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {ANALOGIAS.map((a) => (
                        <CartaAnalogia key={a.tema} {...a} />
                      ))}
                    </div>
                  )}

                  {índice === 3 && (
                    <ScrollReveal>
                      <div className="pc-card mt-8 rounded-2xl p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-blue))]">
                          Linha do tempo
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold">A ciência da água alcalina, ano a ano</h3>
                        <ol className="mt-6 space-y-6 border-l border-[hsl(var(--pc-line))] pl-6">
                          {LINHA_DO_TEMPO.map((m) => (
                            <li key={m.periodo} className="relative">
                              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[hsl(var(--pc-cyan))] ring-4 ring-[hsl(var(--pc-paper))]" />
                              <p className="font-display text-sm font-bold text-[hsl(var(--pc-blue))]">{m.periodo}</p>
                              <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">{m.texto}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </ScrollReveal>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaixaVisual
          src={imgLaboratorio.url}
          alt="Bancada de laboratório com equipamentos de análise científica"
          etiqueta="Padronização"
          titulo="Na ciência, dizer apenas água alcalina não basta"
          legenda="pH, alcalinidade total, potencial de oxirredução, condutividade elétrica e minerais foram registrados para que outros pesquisadores possam reproduzir o protocolo."
        />

        {/* Água do estudo */}
        <section id="agua" className="scroll-mt-24 py-20 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
                O que torna essa água diferente
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Imagine um estudo sobre café que apenas escrevesse café
              </h2>
              <p className="mt-5 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                Era filtrado? Expresso? Qual variedade, qual concentração? Sem essas informações, nenhuma conclusão
                poderia ser reproduzida. Com a água acontece exatamente a mesma coisa.
              </p>
              <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                A tecnologia utilizada pela Acqualive realiza filtração e ionização, produzindo uma água alcalina
                ionizada com características diferentes daquelas obtidas apenas pela adição de substâncias
                alcalinizantes. Duas águas podem apresentar o mesmo pH e composições completamente distintas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="pc-card rounded-2xl p-7">
                <Microscope className="h-6 w-6 text-[hsl(var(--pc-blue))]" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold">Parâmetros documentados no protocolo</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  {[
                    ["pH da água consumida", "Entre 8,5 e 10"],
                    ["Duração da intervenção", "Aproximadamente 4 meses"],
                    ["Outros parâmetros", "Alcalinidade total, potencial de oxirredução e condutividade elétrica"],
                    ["Minerais registrados", "Magnésio, cálcio, sódio e potássio"],
                    ["Origem da água", "Filtros instalados nas residências dos participantes"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-1 border-b border-[hsl(var(--pc-line))] pb-3 last:border-0 sm:flex-row sm:justify-between sm:gap-6">
                      <dt className="text-[hsl(var(--pc-ink-soft))]">{k}</dt>
                      <dd className="font-semibold sm:text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Perguntas */}
        <section id="perguntas" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
          <div className="container max-w-3xl">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
                Perguntas frequentes
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                As perguntas que naturalmente surgem
              </h2>
              <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                Reunimos aqui as dúvidas que mais aparecem em palestras, entrevistas e conversas com profissionais de
                saúde sobre o estudo e a tecnologia utilizada durante a pesquisa.
              </p>
            </ScrollReveal>
            <div className="mt-8">
              {PERGUNTAS.map((p) => (
                <Pergunta key={p.pergunta} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Sobre a pesquisadora */}
        <section className="border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
          <div className="container max-w-3xl">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-amber))]">
                A pesquisadora
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Sobre a Dra. Juliana Chaves</h2>
              <div className="pc-prose mt-6 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                <p>
                  Toda pesquisa carrega o nome de um pesquisador, mas por trás desse nome existe uma trajetória
                  construída com estudo, dedicação e a disposição de investigar perguntas que ainda não possuem
                  respostas prontas.
                </p>
                <p>
                  Desenvolvida na Universidade Federal do Pará, sua pesquisa reuniu acompanhamento clínico, exames
                  endoscópicos antes e depois da intervenção, análise anatomopatológica da mucosa gástrica e
                  investigação da expressão de microRNAs relacionados aos processos inflamatórios.
                </p>
                <p>
                  A Acqualive participou dessa história disponibilizando a tecnologia utilizada durante a pesquisa. O
                  conhecimento produzido, porém, é resultado do rigor científico aplicado pela pesquisadora e pela
                  Universidade Federal do Pará em todas as etapas do projeto.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Referências */}
        <section id="referencias" className="scroll-mt-24 border-t border-[hsl(var(--pc-line))] py-20 md:py-24">
          <div className="container">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <BookOpen className="mx-auto h-7 w-7 text-[hsl(var(--pc-blue))]" aria-hidden />
                <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Referências científicas</h2>
                <p className="mt-4 leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                  Nenhum pesquisador trabalha isoladamente. Estes são os trabalhos que sustentam o desenvolvimento
                  deste dossiê.
                </p>
              </div>
            </ScrollReveal>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {REFERÊNCIAS_ESTUDO.map((r) => (
                <div key={r.titulo} className="pc-card rounded-2xl p-6">
                  <p className="font-display text-sm font-bold">{r.autor}</p>
                  <p className="mt-2 text-sm italic text-[hsl(var(--pc-ink))]">{r.titulo}</p>
                  <p className="mt-1 text-xs text-[hsl(var(--pc-blue))]">{r.fonte}</p>
                  <p className="mt-3 text-xs leading-relaxed text-[hsl(var(--pc-ink-soft))]">{r.nota}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaixaVisual
          src={imgCopoLuz.url}
          alt="Copo de água cristalina sobre bancada clara iluminada pela luz da manhã"
          etiqueta="Conclusão"
          titulo="Toda grande transformação começa com uma boa pergunta"
          legenda="Se ao terminar esta leitura você passou a enxergar a água com mais curiosidade e senso crítico, este material cumpriu seu propósito."
          altura="h-[280px] md:h-[380px]"
        />

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <ScrollReveal>
              <div className="pc-aurora relative overflow-hidden rounded-3xl border border-[hsl(var(--pc-line))] p-10 text-center shadow-[0_40px_80px_-60px_hsl(var(--pc-blue))] md:p-16">
                <BolhasAgua />
                <h2 className="relative font-display text-3xl font-bold md:text-4xl">
                  Leve o dossiê completo com você
                </h2>
                <p className="relative mx-auto mt-4 max-w-2xl text-[hsl(var(--pc-ink-soft))]">
                  Baixe a versão em PDF para consultar, compartilhar com colegas e utilizar em aulas, palestras e
                  atendimentos. Ou conheça a tecnologia de água alcalina ionizada utilizada na pesquisa.
                </p>
                <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                  <BotaoPDF />
                  <a
                    href="https://www.acqualive.com.br"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-blue))] px-7 py-4 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                  >
                    Conheça os filtros Acqualive
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[hsl(var(--pc-line))] py-10">
        <div className="container flex flex-col items-center gap-4 text-center text-xs text-[hsl(var(--pc-ink-soft))]">
          <a href="https://www.acqualive.com.br" target="_top">
            <img src={logoAcqualive.url} alt="Acqualive" className="h-10 w-auto" width={260} height={52} loading="lazy" />
          </a>
          <p className="max-w-2xl">
            Conteúdo de caráter informativo e educativo. Não substitui avaliação, diagnóstico ou tratamento realizado
            por profissional de saúde.
          </p>
          <p>Dossiê Científico Acqualive</p>
        </div>
      </footer>
    </div>
  );
};

export default EstudoDraJuliana;
