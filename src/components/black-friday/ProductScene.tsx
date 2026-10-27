import { forwardRef, type CSSProperties, type ReactNode } from "react";
import { AcqualiveLogo } from "./Logo";
import {
  CAMPAIGN,
  CUTOUTS,
  DUO,
  PIX,
  RATINGS,
  REFIL,
  TERRACOTA,
  brl,
  buyUrl,
  daysLeft,
  pixPrice,
} from "./offers";
import { Label, OfferBox, Product, Seal, Studio, Tape } from "./Scene";
import { BuyButton, WhatsAppLink } from "./shared";

/* ---------- Tipos e estado ---------- */

export type Lead = "terracota" | "duo";
export type Color = "terracota" | "gray";
export type Volt = (typeof DUO.variants)[number]["id"];

export type Choice = {
  color: Color;
  onColor: (c: Color) => void;
  volt: Volt;
  onVolt: (v: Volt) => void;
};

/* ---------- O que muda de um produto para o outro ---------- */

const TERRACOTA_COLORS = {
  terracota: { label: "Terracota", src: CUTOUTS.terracota, alt: "Purificador Acqualive Terracota, cor terracota, com suporte de madeira" },
  gray: { label: "Gray", src: CUTOUTS.gray, alt: "Purificador Acqualive Terracota Gray, cor cinza, com suporte de madeira" },
} as const;

type SceneData = {
  kicker: string;
  box: [string, string, string];
  tape: string;
  label: { top: string; accent: string[] };
  seal: { ring: string; top: string; value: string; bottom: string };
  desc: string;
  price: number;
  installments: number;
  worth: number;
  rating: string;
  main: (c: Choice) => { src: string; alt: string; width: number; height: number };
  extra: { src: string; alt: string; width: number; height: number };
  buy: (c: Choice) => { href: string; label: string; product: string };
  buySub: string;
  whatsapp: (c: Choice) => string;
  selector: (c: Choice) => ReactNode;
};

const ColorSwatches = ({ color, onColor }: Choice) => (
  <div className="bf-swatches" role="group" aria-label="Cor do Terracota">
    {(Object.keys(TERRACOTA_COLORS) as Color[]).map((c) => (
      <button
        key={c}
        type="button"
        className="bf-swatch"
        aria-pressed={color === c}
        onClick={() => onColor(c)}
        style={{ "--sw": c === "terracota" ? "#a24e22" : "#6b6e72" } as CSSProperties}
      >
        {TERRACOTA_COLORS[c].label}
      </button>
    ))}
  </div>
);

const VoltSwitch = ({ volt, onVolt }: Choice) => (
  <div className="bf-volt" role="group" aria-label="Voltagem do DUO">
    {DUO.variants.map((v) => (
      <button key={v.id} type="button" aria-pressed={volt === v.id} onClick={() => onVolt(v.id)}>
        {v.label}
      </button>
    ))}
  </div>
);

export const SCENES: Record<Lead, SceneData> = {
  terracota: {
    kicker: "Terracota com",
    box: ["2 kits refil", "Extra", "Fresh Nanno V"],
    tape: "Mais de R$ 1.000 de desconto no seu filtro Acqualive",
    label: { top: "O melhor", accent: ["desconto", "do ano!"] },
    seal: { ring: "Mais de R$1.000 de desconto", top: "Mais de", value: "R$1.000", bottom: "de desconto" },
    desc: "O clássico filtro de barro com a tecnologia Acqualive: 6 litros de água alcalina, sem cloro e rica em magnésio. Não usa energia elétrica.",
    price: TERRACOTA.price,
    installments: TERRACOTA.installments,
    worth: TERRACOTA.price + TERRACOTA.savings,
    rating: `${RATINGS.terracota.stars} de 5 em ${RATINGS.terracota.count} avaliações`,
    main: ({ color }) => ({ ...TERRACOTA_COLORS[color], width: 448, height: 773 }),
    extra: { src: CUTOUTS.refilNanno, alt: "Os refis Fresh Nanno V que vêm de brinde", width: 640, height: 508 },
    buy: ({ color }) => {
      const v = TERRACOTA.variants[color === "terracota" ? 0 : 1];
      return {
        href: buyUrl(v.handle, v.variantId),
        label: color === "gray" ? "Comprar o Terracota Gray" : "Comprar o Terracota",
        product: `terracota-${color}`,
      };
    },
    buySub: "com 2 kits de refil grátis",
    whatsapp: () => TERRACOTA.whatsappMessage,
    selector: (c) => <ColorSwatches {...c} />,
  },
  duo: {
    kicker: "DUO com",
    box: ["Kit refil", "Grátis", "Nanno UF + ARW DUO"],
    tape: "Kit Refil DUO grátis no seu DUO Acqualive",
    label: { top: "Água", accent: ["natural", "e gelada"] },
    seal: { ring: `${brl(REFIL.duo.price)} em refil grátis`, top: "Ganhe", value: brl(REFIL.duo.price).replace(/\s/g, ""), bottom: "em refil" },
    desc: "Água alcalina natural ou gelada no mesmo aparelho, com refrigeração por compressor, ultrafiltração e Tecnologia TriWay. Na bancada ou na parede.",
    price: DUO.price,
    installments: DUO.installments,
    worth: DUO.price + REFIL.duo.price,
    rating: `${RATINGS.duo.count} avaliações na loja`,
    main: () => ({ src: CUTOUTS.duo, alt: "Purificador Acqualive DUO, preto, com painel de dois botões", width: 662, height: 947 }),
    extra: { src: CUTOUTS.refisDuo, alt: "Os dois refis do Kit Refil DUO: Nanno membrana UF e ARW DUO", width: 785, height: 1138 },
    buy: ({ volt }) => {
      const v = DUO.variants.find((x) => x.id === volt) ?? DUO.variants[0];
      return { href: buyUrl(DUO.handle, v.variantId), label: `Comprar o DUO ${v.label}`, product: `duo-${v.id}` };
    },
    buySub: "com o Kit Refil DUO grátis",
    whatsapp: ({ volt }) => `${DUO.whatsappMessage} Voltagem: ${volt}.`,
    selector: (c) => <VoltSwitch {...c} />,
  },
};

/* ---------- Partes ---------- */

const Deal = ({ d, headingId, asHeading }: { d: SceneData; headingId?: string; asHeading?: boolean }) => (
  <div className="bf-deal">
    <p className="bf-kicker">
      <span className="bf-kicker__brand">Acqualive</span>
      <span
        id={headingId}
        className="bf-kicker__product"
        {...(asHeading ? { role: "heading", "aria-level": 2 } : {})}
      >
        {d.kicker}
      </span>
    </p>
    <OfferBox>
      <span className="bf-offerbox__line">{d.box[0]}</span>
      <span className="bf-offerbox__big">{d.box[1]}</span>
      <span className="bf-offerbox__line">{d.box[2]}</span>
    </OfferBox>
  </div>
);

const Stage = ({ product, d, c, priority }: { product: Lead; d: SceneData; c: Choice; priority?: boolean }) => {
  const main = d.main(c);
  return (
    <div className={`bf-stage bf-stage--${product}`}>
      <Tape className="bf-stage__tape" text={d.tape} reverse={product === "duo"} />
      <Label className="bf-stage__label" top={d.label.top} accent={d.label.accent} />
      <Product
        key={main.src}
        className="bf-stage__product bf-swap"
        src={main.src}
        alt={main.alt}
        width={main.width}
        height={main.height}
        priority={priority}
      />
      <Product
        className="bf-stage__extra"
        src={d.extra.src}
        alt={d.extra.alt}
        width={d.extra.width}
        height={d.extra.height}
        priority={priority}
      />
      <Seal className="bf-stage__seal" {...d.seal} />
    </div>
  );
};

const Stars = () => (
  <svg viewBox="0 0 80 14" aria-hidden="true" className="bf-stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        transform={`translate(${i * 16} 0)`}
        d="M7 0l2.06 4.46 4.9.56-3.63 3.32.98 4.82L7 10.74 2.69 13.16l.98-4.82L.04 5.02l4.9-.56z"
        fill="currentColor"
      />
    ))}
  </svg>
);

/** Selos de confiança, todos tirados da página de produto e das políticas da loja. */
const Trust = ({ d, product }: { d: SceneData; product: Lead }) => (
  <ul className="bf-trust">
    <li>
      {product === "terracota" && <Stars />}
      <span>{d.rating}</span>
    </li>
    <li>Garantia de fábrica</li>
    <li>7 dias para trocar</li>
    <li>Compra 100% segura</li>
  </ul>
);

const Buy = ({
  product,
  d,
  c,
  placement,
  showWorth,
  showDesc,
  ctaRef,
}: {
  product: Lead;
  d: SceneData;
  c: Choice;
  placement: string;
  showWorth?: boolean;
  showDesc?: boolean;
  ctaRef?: React.Ref<HTMLDivElement>;
}) => {
  const buy = d.buy(c);
  return (
    <div className="bf-buy">
      {showDesc && <p className="bf-buy__desc">{d.desc}</p>}
      <div className="bf-price num">
        {showWorth && (
          <p className="bf-price__worth">
            <s>{brl(d.worth)}</s> em produtos, por
          </p>
        )}
        <p className="bf-price__value">{brl(d.price)}</p>
        <p className="bf-price__terms">
          em até {d.installments}x de {brl(d.price / d.installments, true)} sem juros
          {PIX.show && (
            <>
              {" "}
              ou <b>{brl(pixPrice(d.price), true)} no Pix</b>
            </>
          )}
        </p>
      </div>
      {product === "duo" && d.selector(c)}
      {/* as cores ficam junto do preço, fora do palco, para o produto respirar */}
      {product === "terracota" && <div className="bf-buy__selector">{d.selector(c)}</div>}
      <div ref={ctaRef} className="bf-ctas">
        <BuyButton href={buy.href} product={buy.product} placement={placement} label={buy.label} sub={d.buySub} />
        <WhatsAppLink placement={placement} product={product} message={d.whatsapp(c)} />
      </div>
      <Trust d={d} product={product} />
    </div>
  );
};

/* ---------- 1. Topo: a peça do produto principal ---------- */

export const Hero = forwardRef<HTMLDivElement, { product: Lead } & Choice>(({ product, ...c }, ctaRef) => {
  const d = SCENES[product];
  const days = daysLeft();
  return (
    <Studio as="header" id="topo" className={`bf-hero bf-hero--${product}`} light="center" data-product={product}>
      {/* no computador a fita corre pelo piso do estúdio, atrás do produto */}
      <Tape className="bf-ribbon bf-ribbon--hero" text={d.tape} />

      <div className="bf-wrap bf-hero__bar">
        <p className="bf-hero__valid">
          Válido até {CAMPAIGN.endsShort} ou enquanto durarem os estoques.
          {days > 1 ? ` Faltam ${days} dias.` : days === 1 ? " Último dia." : ""}
        </p>
        <nav className="bf-hero__nav" aria-label="Ofertas">
          <a href="#terracota">Terracota</a>
          <a href="#duo">DUO</a>
          <a href="#ofertas">Outras ofertas</a>
        </nav>
      </div>

      <div className="bf-wrap bf-hero__grid">
        <div className="bf-hero__brand">
          <AcqualiveLogo className="bf-hero__logo" />
          <h1 className="bf-bf" aria-label={`Black Friday Acqualive: ${d.kicker} ${d.box.join(" ").toLowerCase()}`}>
            <span className="bf-bf__black" aria-hidden="true">
              BLACK
            </span>
            <span className="bf-bf__friday" aria-hidden="true">
              FRIDAY
            </span>
          </h1>
        </div>
        <Deal d={d} />
        <Stage product={product} d={d} c={c} priority />
        <Buy product={product} d={d} c={c} placement="topo" ctaRef={ctaRef} />
      </div>
    </Studio>
  );
});

Hero.displayName = "Hero";

/* ---------- 3. A peça do outro produto, espelhada ---------- */

export const SceneSection = ({ product, ...c }: { product: Lead } & Choice) => {
  const d = SCENES[product];
  return (
    <Studio
      id={product}
      className={`bf-scene bf-scene--${product}`}
      light="left"
      aria-labelledby={`${product}-title`}
      data-product={product}
    >
      <Tape className="bf-ribbon bf-ribbon--scene" text={d.tape} reverse />
      <div className="bf-wrap bf-scene__grid">
        <Deal d={d} headingId={`${product}-title`} asHeading />
        <Stage product={product} d={d} c={c} />
        <Buy product={product} d={d} c={c} placement={product} showWorth showDesc />
      </div>
    </Studio>
  );
};
