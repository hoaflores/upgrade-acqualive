import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, ExternalLink, Search } from "lucide-react";
import logo from "@/assets/acqualive-logo-color.png";

const SITE_URL = "https://paginas.acqualive.com.br";

type LinkItem = {
  path: string;
  title: string;
  description: string;
  category: string;
};

/**
 * IMPORTANTE: toda nova rota publica do projeto deve ser adicionada aqui.
 */
const LINKS: LinkItem[] = [
  { path: "/", title: "Home Acqualive", description: "Pagina inicial das paginas Acqualive.", category: "Institucional" },
  { path: "/agua-limpa", title: "Agua Limpa (VSL)", description: "Pagina mobile com video e formulario de contato.", category: "Ofertas" },
  { path: "/agua-limpa-falar-serio", title: "Agua Limpa (Falar Serio)", description: "Variacao da VSL Agua Limpa.", category: "Ofertas" },
  { path: "/agua-limpa-ph", title: "Agua Limpa (VSL pH)", description: "Variacao da VSL com video sobre pH da agua.", category: "Ofertas" },
  { path: "/upgrade", title: "Upgrade Acqualive", description: "Oferta de troca do purificador comum pelo Acqualive.", category: "Ofertas" },
  { path: "/acqualive-empresas", title: "Acqualive Empresas", description: "Solucao B2B com simulador de economia e captacao de leads.", category: "Ofertas" },
  { path: "/old-empresas", title: "Acqualive Empresas (versao antiga)", description: "Replica da pagina empresas.acqualive.com.br migrada para o Lovable.", category: "Ofertas" },
  { path: "/franquias-solo", title: "Franquias Solo", description: "Mapa de franqueados e convite para ser representante.", category: "Negocios" },
  { path: "/programa-de-indicacao", title: "Programa de Indicacao", description: "Indique e ganhe um Kit de Refis completo.", category: "Indicacao" },
  { path: "/acqualive-club", title: "Acqualive Club", description: "Area de vantagens e beneficios para clientes.", category: "Indicacao" },
  { path: "/indica-club", title: "Indica Club", description: "Pagina de indicacao com os pilares de saude.", category: "Indicacao" },
  { path: "/indica-acqualive-2026", title: "Indica Acqualive 2026", description: "Campanha de indicacao para novos clientes.", category: "Indicacao" },
  { path: "/comunidade-acqualive", title: "Ecossistema VIP", description: "Comunidade VIP com privilegios exclusivos.", category: "Comunidade" },
  { path: "/portal-cientifico", title: "Portal Cientifico", description: "Biblioteca de estudos, quiz e simuladores sobre agua.", category: "Conteudo" },
  { path: "/agua-alcalina-inflamacao", title: "Dossie Agua Alcalina e Inflamacao", description: "Estudo da Dra. Juliana Chaves em formato interativo.", category: "Conteudo" },
  { path: "/massaru-emoto", title: "A Ciencia da Agua Viva", description: "Os estudos do Dr. Masaru Emoto sobre a memoria da agua.", category: "Conteudo" },
  { path: "/massaru-emoto-historia", title: "Historia Masaru Emoto e Acqualive", description: "A parceria e os encontros que marcaram a marca.", category: "Conteudo" },
  { path: "/filtro-de-barro", title: "Filtro de Barro", description: "A evolucao do tradicional filtro de barro.", category: "Produtos" },
  { path: "/terracota", title: "Purificador Terracota", description: "Design vintage com agua alcalina e ionizada.", category: "Produtos" },
  { path: "/acqualive-shower", title: "Acqualive Shower", description: "Filtragem para o banho, pele e cabelo.", category: "Produtos" },
  { path: "/clean-care", title: "Clean Care", description: "Linha de higienizacao e cuidado.", category: "Produtos" },
  { path: "/calculadora-acqualive", title: "Calculadora Acqualive", description: "Descubra a quantidade ideal de agua por dia.", category: "Ferramentas" },
  { path: "/ebook-quantidade-agua", title: "Ebook Quantidade de Agua", description: "Material gratuito sobre hidratacao diaria.", category: "Ferramentas" },
  { path: "/1000-dias", title: "Acqualive 1000 Dias", description: "Hidratacao nos primeiros 1000 dias de vida.", category: "Conteudo" },
  { path: "/dayan-siebra", title: "Dayan Siebra", description: "Pagina de parceria com o especialista.", category: "Parcerias" },
  { path: "/fernando-beteti", title: "Fernando Beteti", description: "Pagina de parceria com o especialista.", category: "Parcerias" },
  { path: "/parcerias-cafe", title: "Parcerias Cafe", description: "Agua Acqualive para cafeterias e baristas.", category: "Parcerias" },
  { path: "/midia-kit", title: "Midia Kit", description: "Materiais de marca para imprensa e parceiros.", category: "Institucional" },
];

const Links = () => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(LINKS.map((l) => l.category))),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LINKS;
    return LINKS.filter((l) =>
      `${l.title} ${l.description} ${l.path} ${l.category}`.toLowerCase().includes(q),
    );
  }, [query]);

  const copy = async (path: string) => {
    await navigator.clipboard.writeText(`${SITE_URL}${path}`);
    setCopied(path);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <>
      <Helmet>
        <title>Links Acqualive | Todas as paginas em um so lugar</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta
          name="description"
          content="Central interna de links das paginas Acqualive para compartilhamento rapido."
        />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-[hsl(var(--water-light))]">
        <header className="container max-w-5xl pt-14 pb-8 text-center">
          <img src={logo} alt="Acqualive" className="mx-auto h-11 w-auto" />
          <h1 className="mt-6 font-bold text-3xl md:text-5xl text-secondary">
            Central de Links Acqualive
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Todas as paginas publicas do projeto reunidas para copiar e compartilhar
            em segundos.
          </p>

          <div className="relative mt-8 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar pagina..."
              aria-label="Buscar pagina"
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </header>

        <section className="container max-w-5xl pb-20">
          {categories
            .filter((c) => filtered.some((l) => l.category === c))
            .map((category) => (
              <div key={category} className="mb-10">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {filtered
                    .filter((l) => l.category === category)
                    .map((l) => (
                      <article
                        key={l.path}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                        <h3 className="font-semibold text-lg text-secondary">{l.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{l.description}</p>
                        <p className="mt-3 truncate font-mono text-xs text-primary">
                          {SITE_URL}
                          {l.path}
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Link
                            to={l.path}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--gold))] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.02]"
                          >
                            <ExternalLink className="h-4 w-4" /> Abrir
                          </Link>
                          <button
                            type="button"
                            onClick={() => copy(l.path)}
                            aria-label={`Copiar link de ${l.title}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/20"
                          >
                            {copied === l.path ? (
                              <>
                                <Check className="h-4 w-4" /> Copiado
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" /> Copiar
                              </>
                            )}
                          </button>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            ))}

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              Nenhuma pagina encontrada para essa busca.
            </p>
          )}
        </section>
      </main>
    </>
  );
};

export default Links;
