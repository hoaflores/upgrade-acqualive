/**
 * BLACK FRIDAY ACQUALIVE 2026: dados comerciais da página.
 *
 * Tudo o que é preço, oferta, link, foto ou número de WhatsApp mora AQUI.
 * Para corrigir um valor, edite só este arquivo: a página inteira se atualiza.
 *
 * Fonte dos preços: www.acqualive.com.br (Shopify), levantados em 26/10/2026.
 * Ofertas: definidas pelo time Acqualive em 26/10/2026.
 * Itens marcados com VALIDAR precisam de confirmação antes de publicar.
 */

import imageOverrides from "./image-overrides";

export const CAMPAIGN = {
  /** Último dia da campanha (inclusive). Usado no aviso de prazo e no contador de dias. */
  endsAt: "2026-11-30T23:59:59-03:00",
  endsLabel: "30 de novembro",
  endsShort: "30/11",
  legal: "Ofertas válidas até 30/11/2026 ou enquanto durarem os estoques promocionais. Imagens ilustrativas.",
} as const;

/** WhatsApp comercial. VALIDAR: número que vai atender a campanha. */
export const WHATSAPP_NUMBER = "555192928468";
export const WHATSAPP_DISPLAY = "(51) 9292-8468";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pela página da Black Friday Acqualive e quero minha condição Black.";

export const CTA_LABEL = "Quero minha condição Black no WhatsApp";

export const STORE_URL = "https://www.acqualive.com.br";

/**
 * Como o link "Comprar no site" se comporta.
 * - "product": abre a página do produto no Shopify (padrão).
 * - "cart": coloca a variante direto no carrinho (/cart/ID:1).
 * Se a Black usar cupom, preencha DISCOUNT_CODE: o código é aplicado no link.
 * VALIDAR com Augusto (Shopify).
 */
export const BUY_MODE = "product" as "product" | "cart";
export const DISCOUNT_CODE = "";

const CDN = "https://cdn.shopify.com/s/files/1/0830/4990/6487/files/";
/** Fotos do CDN do Shopify da Acqualive (as mesmas da loja). */
export const img = (file: string, width = 1000) =>
  imageOverrides[file] ?? `${CDN}${file}${file.includes("?") ? "&" : "?"}width=${width}`;

export const PHOTOS = {
  terracotaCozinha: img("Prancheta10-Cinza.png?v=1753109487", 1200),
  terracotaGrayCozinha: img("TERRACOTACINZAAMB.1-Cinza.png?v=1753109024"),
  duoBancada: img("ChatGPTImage29_05_2026_16_24_12.png?v=1780273563"),
  duoParede: img("duo-consultorio-quadrado.png?v=1791303139"),
  duoPainel: img("duo-painel-quadrado.png?v=1791303139"),
  duoCopo: img("duo-copo-quadrado.png?v=1791303139", 900),
  kitNannoV: img("CAIXAREFILNANNOV-Cinza_178c088a-4fa7-4693-b68a-8832949b7480.png?v=1753109487", 800),
  kitDuo: img("refis-duo-e-duo-lite-juntos.png?v=1792157811"),
};

/**
 * Recortes dos produtos (fundo transparente), na pasta public/black-friday/ do projeto.
 * Foram recortados das fotos oficiais da loja para montar as cenas de estúdio da campanha.
 */
export const cut = (name: string) => imageOverrides[`cut:${name}`] ?? `/black-friday/${name}.webp`;

export const CUTOUTS = {
  terracota: cut("terracota"),
  gray: cut("gray"),
  duo: cut("duo"),
  duoLite: cut("duolite"),
  refilNanno: cut("refilNanno"),
  refisDuo: cut("refisDuo"),
  caixaNanno: cut("caixaNanno"),
  /* nas outras ofertas sempre a versão de 10 litros */
  premium: cut("prem10"),
  essencial: cut("vself10"),
  bebedouro: cut("v10"),
};

/* ---------- Ofertas principais ---------- */

export const REFIL = {
  nannoV: { name: "Kit Refil Fresh Nanno V", price: 577, subscription: 519.3 },
  freshV: { name: "Kit Refil Fresh V", price: 457 },
  duo: { name: "Kit Refil DUO", price: 887 },
};

export const TERRACOTA = {
  name: "Terracota",
  price: 3297,
  installments: 10,
  freeKits: 2,
  savings: REFIL.nannoV.price * 2,
  colors: ["terracota", "cinza"],
  /** VALIDAR: os kits grátis valem só na compra pelo site? */
  channelNote: "Kits grátis na compra pelo site.",
  variants: [
    { id: "terracota", label: "Terracota", handle: "purificador-de-agua-acqualive-terracota", variantId: 47043043852599 },
    { id: "gray", label: "Gray", handle: "purificador-de-agua-terracota-gray", variantId: 47043044606263 },
  ],
  whatsappMessage:
    "Olá! Vim pela Black Friday Acqualive e quero o Terracota com 2 Kits Refil Nanno V grátis.",
};

export const DUO = {
  name: "DUO",
  price: 4397,
  installments: 10,
  savings: REFIL.duo.price,
  handle: "purificador-de-agua-alcalina-acqualive-duo-natural-e-gelada",
  variants: [
    { id: "127v", label: "127v", variantId: 52312379457847 },
    { id: "220v", label: "220v", variantId: 52312379425079 },
  ] as const,
  whatsappMessage: "Olá! Vim pela Black Friday Acqualive e quero o DUO com o Kit Refil DUO grátis.",
};

/* ---------- Outras ofertas ---------- */

export type MenuItem = {
  name: string;
  price: number;
  was: number;
  description: string;
  note: string;
  handle: string;
  variantId: number;
  photo: string;
};

export const OTHER_OFFERS: { category: string; items: MenuItem[] }[] = [
  {
    category: "Linha V Self",
    items: [
      {
        name: "V Self 6L",
        price: 2097,
        was: 2297,
        description: "Na bancada, por gravidade, sem energia elétrica. Ganha o Kit Refil Fresh V extra com 50% OFF.",
        note: "R$ 200 OFF",
        handle: "acqualive-v-self-6l",
        variantId: 47455742460215,
        photo: img("VSELF6LBASEPLASTICO-Cinza.png?v=1753108964", 300),
      },
      {
        name: "V Self 10L",
        price: 2197,
        was: 2397,
        description: "A mesma tecnologia com 10 litros de reserva. Ganha o Kit Refil Fresh V extra com 50% OFF.",
        note: "R$ 200 OFF",
        handle: "acqualive-v-self-10l",
        variantId: 47455676825911,
        photo: img("VSELF10LBASEFRENTE-Cinza_8039f9b6-beb8-40f9-b5a1-eeb21d04d88f.png?v=1753108987", 300),
      },
      {
        name: "V Self Premium 6L",
        price: 2597,
        was: 2847,
        description: "Suporte de madeira e torneira de inox. Ganha o Kit Refil Fresh Nanno V extra com 50% OFF.",
        note: "R$ 250 OFF",
        handle: "acqualive-vself-premium-6l",
        variantId: 47043040936247,
        photo: img("VSELFV6FRENTE-Cinza.png?v=1753109047", 300),
      },
      {
        name: "V Self Premium 10L",
        price: 2697,
        was: 2947,
        description: "Acabamento premium com 10 litros. Ganha o Kit Refil Fresh Nanno V extra com 50% OFF.",
        note: "R$ 250 OFF",
        handle: "acqualive-vself-premium-10l",
        variantId: 47043040280887,
        photo: img("VSELF10LPREMIUMFRENTE-Cinza_0b49b3c5-aadd-4074-abe0-17b91f6654da.png?v=1752178367", 300),
      },
    ],
  },
  {
    category: "No lugar do galão e sob a pia",
    items: [
      {
        name: "V6 para bebedouro",
        price: 2097,
        was: 2297,
        description: "Encaixa na base refrigerada e substitui o galão. Bebedouro não incluso.",
        note: "R$ 200 OFF + kit extra com 50% OFF",
        handle: "acqualive-fresh-v6-para-bebedouros",
        variantId: 47043045589303,
        photo: img("V6parabebedourofrente-Cinza.png?v=1752178399", 300),
      },
      {
        name: "V10 para bebedouro",
        price: 2197,
        was: 2397,
        description: "Dez litros sobre a base refrigerada, no lugar do galão. Bebedouro não incluso.",
        note: "R$ 200 OFF + kit extra com 50% OFF",
        handle: "acqualive-fresh-v10-para-bebedouros",
        variantId: 47043044933943,
        photo: img("V10parabebedourofrente-Cinza_7b9d3da7-a5b5-465f-a14f-37d0bff66885.png?v=1753109012", 300),
      },
      {
        name: "DUO Lite",
        price: 997,
        was: 1097,
        description: "Dois elementos filtrantes sob a pia, com kit de instalação. A água sai na torneira que você já usa.",
        note: "R$ 100 OFF",
        handle: "elementos-filtrantes-agua-alcalina-acqualive-duo-lite",
        variantId: 53002411147575,
        photo: img("ChatGPT_Image_17_de_set._de_2026_13_56_01.png?v=1789998868", 300),
      },
    ],
  },
];

/* ---------- Cartões das outras ofertas (mesmo desenho das peças da campanha) ---------- */

export type OfferCard = {
  id: string;
  line: string;
  /** número grande do cartão (R$ 250 OFF) */
  off: number;
  extra: string;
  cutout: string;
  /** cada tamanho tem a própria foto: o botão de 6 L / 10 L troca a imagem, como as cores do Terracota */
  sizes: { label: string; price: number; was: number; handle: string; variantId: number; photo: string }[];
  note?: string;
  whatsappMessage: string;
};

export const OFFER_CARDS: OfferCard[] = [
  {
    id: "premium",
    line: "V Self Premium",
    off: 250,
    extra: "Kit Refil Fresh Nanno V extra com 50% OFF",
    cutout: CUTOUTS.premium,
    sizes: [
      { label: "6 litros", price: 2597, was: 2847, handle: "acqualive-vself-premium-6l", variantId: 47043040936247, photo: cut("prem6") },
      { label: "10 litros", price: 2697, was: 2947, handle: "acqualive-vself-premium-10l", variantId: 47043040280887, photo: cut("prem10") },
    ],
    whatsappMessage: "Olá! Vim pela Black Friday Acqualive e quero o V Self Premium com R$ 250 OFF.",
  },
  {
    id: "essencial",
    line: "V Self Essencial",
    off: 200,
    extra: "Kit Refil Fresh V extra com 50% OFF",
    cutout: CUTOUTS.essencial,
    sizes: [
      { label: "6 litros", price: 2097, was: 2297, handle: "acqualive-v-self-6l", variantId: 47455742460215, photo: cut("vself6") },
      { label: "10 litros", price: 2197, was: 2397, handle: "acqualive-v-self-10l", variantId: 47455676825911, photo: cut("vself10") },
    ],
    whatsappMessage: "Olá! Vim pela Black Friday Acqualive e quero o V Self Essencial com R$ 200 OFF.",
  },
  {
    id: "bebedouro",
    line: "V6 e V10 para bebedouro",
    off: 200,
    extra: "Kit Refil Fresh V extra com 50% OFF",
    cutout: CUTOUTS.bebedouro,
    note: "Substitui o galão na base refrigerada. Bebedouro não incluso.",
    sizes: [
      { label: "V6 · 6 litros", price: 2097, was: 2297, handle: "acqualive-fresh-v6-para-bebedouros", variantId: 47043045589303, photo: cut("v6") },
      { label: "V10 · 10 litros", price: 2197, was: 2397, handle: "acqualive-fresh-v10-para-bebedouros", variantId: 47043044933943, photo: cut("v10") },
    ],
    whatsappMessage: "Olá! Vim pela Black Friday Acqualive e quero o V6/V10 para bebedouro com R$ 200 OFF.",
  },
  {
    id: "duolite",
    line: "DUO Lite",
    off: 100,
    extra: "Dois elementos filtrantes sob a pia, com kit de instalação",
    cutout: CUTOUTS.duoLite,
    sizes: [
      { label: "DUO Lite", price: 997, was: 1097, handle: "elementos-filtrantes-agua-alcalina-acqualive-duo-lite", variantId: 53002411147575, photo: cut("duolite") },
    ],
    whatsappMessage: "Olá! Vim pela Black Friday Acqualive e quero o DUO Lite por R$ 997.",
  },
];

/* ---------- Prova ---------- */

/** Depoimentos publicados na home de www.acqualive.com.br. */
export const TESTIMONIALS = [
  {
    quote:
      "Quando vi o valor, achei alto. Depois que fiz as contas do quanto gastava com água mineral por mês, percebi que o filtro se paga sozinho. Hoje tenho água de qualidade todos os dias e ainda economizo.",
    name: "Angelina Sabino",
    place: "SP",
    /** Foto original da cliente: coloque o arquivo em public/black-friday/ e o caminho aqui, ex.: "/black-friday/angelina.jpg" */
    photo: "",
  },
  {
    quote:
      "Uma das minhas maiores preocupações era a troca do refil. Me surpreendi: é simples, rápida e só acontece a cada vários meses. Não virou um problema, virou rotina.",
    name: "Mártin Lavies",
    place: "RS",
    photo: "",
  },
  {
    quote:
      "Estou muito satisfeita com o meu purificador. O design é lindo, o manejo muito fácil e a água realmente fica muito melhor. Super recomendo.",
    name: "Virginia Dornelles",
    place: "BA",
    photo: "",
  },
];

/** Avaliações mostradas nas páginas de produto da loja (conferidas em 26/10/2026). */
export const RATINGS = {
  terracota: { stars: "4,9", count: 389 },
  duo: { stars: "", count: 17 },
};

/**
 * Pix: a loja dá 5% no Pix ou boleto sobre o preço do produto.
 * No Terracota e no DUO o preço não muda na Black (o brinde é o refil), então o valor no Pix é o mesmo da loja.
 * VALIDAR: confirmar que o desconto do Pix continua valendo junto com os brindes.
 */
export const PIX = { show: true, pct: 5 };
export const pixPrice = (price: number) => Math.round(price * (1 - PIX.pct / 100) * 100) / 100;

/* ---------- helpers ---------- */

export const brl = (value: number, cents = false) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });

export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Parâmetros de origem repassados para a loja, para a venda não aparecer como "direto" no GA4 e na Meta.
 * Repassa utm_*, gclid, fbclid, ttclid e wbraid/gbraid que chegaram na página.
 * Se a pessoa chegou sem UTM, marca a origem como esta landing page.
 */
const PASS_THROUGH = /^(utm_[a-z]+|gclid|fbclid|ttclid|wbraid|gbraid|msclkid)$/;
const DEFAULT_UTMS = { utm_source: "lp-black-friday", utm_medium: "landing-page", utm_campaign: "black-friday-2026" };

const trackingParams = () => {
  const out = new URLSearchParams();
  if (typeof window === "undefined") return out;
  new URLSearchParams(window.location.search).forEach((v, k) => {
    if (PASS_THROUGH.test(k)) out.set(k, v);
  });
  if (!out.has("utm_source")) Object.entries(DEFAULT_UTMS).forEach(([k, v]) => out.set(k, v));
  return out;
};

export const buyUrl = (handle: string, variantId?: number) => {
  const params = trackingParams();
  if (DISCOUNT_CODE) params.set("discount", DISCOUNT_CODE);
  if (BUY_MODE === "cart" && variantId) {
    const q = params.toString();
    return `${STORE_URL}/cart/${variantId}:1${q ? `?${q}` : ""}`;
  }
  if (variantId) params.set("variant", String(variantId));
  const q = params.toString();
  return `${STORE_URL}/products/${handle}${q ? `?${q}` : ""}`;
};

/** A campanha acabou? Para testar o aviso de fim, abra a página com ?simular=encerrada. */
export const isOver = (now = new Date()) => {
  if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("simular") === "encerrada") return true;
  return now.getTime() > new Date(CAMPAIGN.endsAt).getTime();
};

export const daysLeft = (now = new Date()) => {
  const end = new Date(CAMPAIGN.endsAt).getTime();
  return Math.max(0, Math.ceil((end - now.getTime()) / 86_400_000));
};

/** "abril de 2027": mês e ano daqui a N meses. */
export const monthFromNow = (months: number, now = new Date()) => {
  const d = new Date(now.getFullYear(), now.getMonth() + months, 1);
  const label = d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
};
