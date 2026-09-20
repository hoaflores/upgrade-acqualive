/**
 * Fonte unica de verdade dos metadados de cada rota publica.
 *
 * Usada em tres lugares:
 * 1. `src/components/RouteSeo.tsx` (head dinamico no navegador)
 * 2. `scripts/generate-sitemap.ts` (sitemap.xml)
 * 3. O plugin de prerender no `vite.config.ts`, que gera um HTML estatico
 *    por rota no build. E esse HTML estatico que o WhatsApp, Telegram,
 *    Facebook, LinkedIn e afins leem para montar a miniatura do link,
 *    porque esses robos nao executam JavaScript.
 *
 * IMPORTANTE: toda nova rota publica do projeto deve ser adicionada aqui,
 * senao o link compartilhado cai no metadado da home.
 */

export const SITE_URL = "https://paginas.acqualive.com.br";
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-acqualive.jpg`;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** URL absoluta https da imagem de compartilhamento (1200x630 de preferencia) */
  image?: string;
  /** Fora do sitemap (paginas internas, ferramentas, templates) */
  noindex?: boolean;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const img = (file: string) => `${SITE_URL}/images/${file}`;

export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: "Acqualive | Purificadores e Ionizadores de Água Alcalina",
    description:
      "Água alcalina, mineralizada e livre de cloro na sua casa. Conheça a linha de purificadores e ionizadores Acqualive.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/upgrade",
    title: "Upgrade Linha V | Seu filtro antigo vale desconto | Acqualive",
    description:
      "Troque seu purificador antigo pelo novo Acqualive Linha V e ganhe até R$500 de desconto. Oferta para clientes fidelidade.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/programa-de-indicacao",
    title: "Programa de Indicação Acqualive | Indique e ganhe",
    description:
      "Indique um amigo, ele compra um purificador Acqualive e você ganha um Kit Refil no valor de R$ 457.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/massaru-emoto",
    title: "Dr. Masaru Emoto e a memória da água | Acqualive",
    description:
      "A pesquisa dos cristais de água do Dr. Masaru Emoto e a relação com a água estruturada Acqualive.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/massaru-emoto-historia",
    title: "A história do Dr. Masaru Emoto com a Acqualive",
    description:
      "Os encontros, os eventos e o legado do Dr. Masaru Emoto na trajetória da Acqualive, em seis capítulos.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/filtro-de-barro",
    title: "Filtro de Barro | Tradição e água pura | Acqualive",
    description:
      "Por que o filtro de barro atravessou gerações e como a Acqualive levou essa tradição para a tecnologia atual.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/terracota",
    title: "Acqualive Terracota | Filtro de barro com tecnologia",
    description:
      "O Acqualive Terracota une a cerâmica tradicional à filtragem moderna para uma água fresquinha e limpa.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/comunidade-acqualive",
    title: "Ecossistema VIP Acqualive | Privilégios exclusivos",
    description:
      "Ofertas antecipadas, lives com especialistas e descontos exclusivos para quem já escolheu a melhor água.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/acqualive-club",
    title: "Acqualive Club | Vantagens para clientes",
    description: "Participe do Acqualive Club e aproveite benefícios exclusivos de quem é cliente Acqualive.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/indica-club",
    title: "Indica Club Acqualive | Indique e seja premiado",
    description: "Compartilhe água de verdade com quem você ama e ganhe recompensas a cada indicação.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/indica-acqualive-2026",
    title: "Indica Acqualive 2026 | Programa de indicação",
    description: "A campanha de indicação Acqualive 2026: indique, acompanhe e receba seus benefícios.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/dayan-siebra",
    title: "Dayan Siebra e a água que cuida da sua saúde | Acqualive",
    description:
      "A recomendação de Dayan Siebra para a água que você bebe todos os dias, com condição especial Acqualive.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/fernando-beteti",
    title: "Fernando Beteti indica Acqualive",
    description: "Conheça a escolha de Fernando Beteti para a água da família e a condição exclusiva Acqualive.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/acqualive-shower",
    title: "Acqualive Shower Care | Banho sem cloro",
    description: "Filtro para chuveiro que reduz o cloro do banho e protege pele e cabelos todos os dias.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/clean-care",
    title: "Acqualive Clean Care | Limpeza da sua água",
    description: "Cuidado e manutenção para manter seu purificador Acqualive sempre em plena performance.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/calculadora-acqualive",
    title: "Calculadora de hidratação Acqualive",
    description: "Descubra quanta água o seu corpo precisa por dia e receba um plano de hidratação personalizado.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/ebook-quantidade-agua",
    title: "Ebook: quanta água você precisa beber por dia | Acqualive",
    description: "Guia gratuito sobre hidratação, qualidade da água e saúde e bem-estar da sua família.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/midia-kit",
    title: "Mídia Kit Acqualive",
    description: "Materiais, imagens e informações oficiais da marca Acqualive para parceiros e imprensa.",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/parcerias-cafe",
    title: "Parcerias Acqualive para cafeterias",
    description: "Água purificada com o padrão que o café especial exige. Conheça a parceria Acqualive.",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/1000-dias",
    title: "Acqualive 1000 Dias | Água nos primeiros mil dias",
    description:
      "Os primeiros mil dias de vida definem muita coisa. Entenda o papel da água nessa fase e como cuidar dela.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/franquias-solo",
    title: "Franquias Acqualive Solo | Encontre seu franqueado",
    description:
      "Mapa dos franqueados Acqualive Solo pelo Brasil. Encontre um franqueado perto de você ou torne-se um.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/acqualive-empresas",
    title: "Acqualive Empresas | Água gelada e natural sem galão",
    description:
      "O Acqualive DUO entrega água purificada gelada e natural no ponto de uso da sua empresa. Avaliação gratuita.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/acqualive-duo-empresas",
    title: "Acqualive Empresas | A solução ideal para a sua empresa",
    description:
      "Mude a água da sua empresa e ganhe mais economia, produtividade e saúde. Compare litragem e custo dos filtros Acqualive.",
    noindex: true,
  },
  {
    path: "/portal-cientifico",
    title: "Portal Científico Acqualive | A ciência da água",
    description:
      "Estudos, referências e conteúdos interativos sobre água alcalina, hidratação e saúde e bem-estar.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/agua-alcalina-inflamacao",
    title: "Água alcalina e inflamação | Dossiê Dra. Juliana Chaves",
    description:
      "Dossiê científico da pesquisa da Dra. Juliana Chaves na UFPA sobre água alcalina ionizada e saúde digestiva.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/agua-limpa",
    title: "A água da sua família está realmente limpa? | Acqualive",
    description:
      "Assista ao vídeo e descubra por que a água que você bebe pode estar prejudicando sua saúde e como a Acqualive resolve isso.",
    noindex: true,
  },
  {
    path: "/agua-limpa-falar-serio",
    title: "Vamos falar sério sobre a água que você bebe | Acqualive",
    description:
      "A verdade sobre a água alcalina e sobre o que sai da sua torneira. Assista e entenda como proteger sua família.",
    noindex: true,
  },
  {
    path: "/agua-limpa-ph",
    title: "Água é mesmo tudo igual? O teste de pH | Acqualive",
    description:
      "Veja o teste de pH e descubra a diferença entre a água comum e a água alcalina Acqualive.",
    noindex: true,
  },
  {
    path: "/link",
    title: "Links Acqualive | Todos os conteúdos em um lugar",
    description: "Acesso rápido a todas as páginas, materiais e ferramentas públicas da Acqualive.",
    noindex: true,
  },
  {
    path: "/apresentacao-comunidade-projeto",
    title: "Projeto Comunidade Acqualive | Apresentação",
    description: "Apresentação do projeto de comunidade Acqualive e do plano de relacionamento.",
    noindex: true,
  },
  {
    path: "/funil-calculadora",
    title: "Funil da Calculadora Acqualive",
    description: "Visão do funil e dos resultados da calculadora de hidratação Acqualive.",
    noindex: true,
  },
  {
    path: "/demandas",
    title: "Demandas | Acqualive",
    description: "Central interna de demandas da Acqualive.",
    noindex: true,
  },
  {
    path: "/demandas-solicitadas",
    title: "Demandas solicitadas | Acqualive",
    description: "Acompanhamento das demandas solicitadas à equipe Acqualive.",
    noindex: true,
  },
  {
    path: "/email-templates",
    title: "Templates de email | Acqualive",
    description: "Biblioteca interna de templates de email da Acqualive.",
    noindex: true,
  },
  {
    path: "/email-refil",
    title: "Emails de refil | Acqualive",
    description: "Sequência de emails de lembrete de troca de refil da Acqualive.",
    noindex: true,
  },
  {
    path: "/emails-franquias",
    title: "Emails de franquias | Acqualive",
    description: "Sequência de emails da campanha de franquias Acqualive.",
    noindex: true,
  },
  {
    path: "/email-mae-nutrida",
    title: "Email Mãe Nutrida | Acqualive",
    description: "Template de email da campanha Mãe Nutrida da Acqualive.",
    noindex: true,
  },
  {
    path: "/blog-templates",
    title: "Templates de blog | Acqualive",
    description: "Blocos de conteúdo prontos para os artigos do blog Acqualive.",
    noindex: true,
  },
  {
    path: "/indica-pdf",
    title: "Material de indicação em PDF | Acqualive",
    description: "Material impresso do programa de indicação Acqualive.",
    noindex: true,
  },
  {
    path: "/calculadora-acqualive-resultados",
    title: "Resultados da calculadora de hidratação | Acqualive",
    description: "Resultados personalizados do seu plano de hidratação Acqualive.",
    noindex: true,
  },
];

export const findRouteMeta = (pathname: string): RouteMeta | undefined => {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return routeMeta.find((r) => r.path === clean);
};
