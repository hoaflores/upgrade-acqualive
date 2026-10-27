import { forwardRef, useEffect, useState } from "react";
import { AcqualiveLogo } from "./Logo";
import { CAMPAIGN, DUO, STORE_URL, TERRACOTA, WHATSAPP_DISPLAY, brl, buyUrl, whatsappUrl } from "./offers";
import { Studio, Tape } from "./Scene";
import { BuyButton, WhatsAppIcon, WhatsAppLink, track } from "./shared";

const pad = (n: number) => String(n).padStart(2, "0");

const useCountdown = () => {
  const end = new Date(CAMPAIGN.endsAt).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, []);
  const left = Math.max(0, end - now);
  return {
    d: Math.floor(left / 86_400_000),
    h: Math.floor(left / 3_600_000) % 24,
    m: Math.floor(left / 60_000) % 60,
    s: Math.floor(left / 1000) % 60,
    over: left === 0,
  };
};

/** 7. Fechamento: a cena da campanha de novo, com o tempo que falta. */
export const CloseScene = forwardRef<HTMLElement, { lead: "terracota" | "duo" }>(({ lead }, ref) => {
  const c = useCountdown();
  const units = [
    { v: c.d, l: "dias" },
    { v: c.h, l: "horas" },
    { v: c.m, l: "min" },
    { v: c.s, l: "seg" },
  ];
  return (
    <Studio className="bf-close" light="center" aria-labelledby="close-title" ref={ref}>
      <Tape className="bf-close__tape" text="O melhor desconto do ano" />
      <Tape className="bf-close__tape-2" text="Black Friday Acqualive" blur reverse />
      <div className="bf-wrap bf-close__inner">
        <h2 id="close-title" className="bf-bf bf-bf--close">
          <span className="bf-bf__black">A Black</span>
          <span className="bf-bf__friday">vai até {CAMPAIGN.endsShort}</span>
        </h2>
        {!c.over && (
          <p className="bf-count num" aria-label={`Faltam ${c.d} dias e ${c.h} horas`}>
            {units.map((u) => (
              <span key={u.l} className="bf-count__unit">
                <span className="bf-count__v">{pad(u.v)}</span>
                <span className="bf-count__l">{u.l}</span>
              </span>
            ))}
          </p>
        )}
        <p className="bf-close__text">Os preços e os brindes da Black já estão aplicados na loja.</p>
        <div className={`bf-close__ctas ${lead === "duo" ? "is-duo-first" : ""}`}>
          <BuyButton
            href={buyUrl(TERRACOTA.variants[0].handle, TERRACOTA.variants[0].variantId)}
            product="terracota-terracota"
            placement="fechamento"
            label="Comprar o Terracota"
            sub={`${brl(TERRACOTA.price)} + 2 kits de refil grátis`}
            tone={lead === "terracota" ? "orange" : "white"}
          />
          <BuyButton
            href={buyUrl(DUO.handle, DUO.variants[0].variantId)}
            product="duo-127v"
            placement="fechamento"
            label="Comprar o DUO"
            sub={`${brl(DUO.price)} + Kit Refil DUO grátis`}
            tone={lead === "duo" ? "orange" : "white"}
          />
        </div>
        <WhatsAppLink placement="fechamento" />
      </div>
    </Studio>
  );
});

CloseScene.displayName = "CloseScene";

/** Depois de 30/11: a página avisa que a Black acabou e leva para a loja, em vez de mostrar oferta vencida. */
export const Ended = () => (
  <Studio as="header" className="bf-ended" light="center">
    <div className="bf-wrap bf-ended__inner">
      <AcqualiveLogo className="bf-hero__logo" />
      <h1 className="bf-bf bf-bf--close">
        <span className="bf-bf__black">A Black</span>
        <span className="bf-bf__friday">acabou</span>
      </h1>
      <p className="bf-close__text">
        A Black Friday Acqualive terminou em {CAMPAIGN.endsShort}. Obrigado a todo mundo que aproveitou. Os
        purificadores continuam na loja, com parcelamento em até 10x sem juros.
      </p>
      <div className="bf-close__ctas">
        <BuyButton href={`${STORE_URL}/collections/all`} product="loja" placement="encerrada" label="Ver os purificadores na loja" />
      </div>
      <WhatsAppLink placement="encerrada" />
    </div>
  </Studio>
);

export const Footer = () => (
  <footer className="bf-footer">
    <div className="bf-wrap bf-footer__inner">
      <AcqualiveLogo className="bf-footer__logo" />
      <a
        className="bf-footer__phone num"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("bf_whatsapp_click", { product: "geral", placement: "rodape" })}
      >
        WhatsApp {WHATSAPP_DISPLAY}
      </a>
      <p className="bf-footer__meta">
        Pós-venda: sac@acqualive.com.br ·{" "}
        <a href={`${STORE_URL}/policies/privacy-policy`} target="_blank" rel="noopener noreferrer">
          Privacidade
        </a>{" "}
        ·{" "}
        <a href={`${STORE_URL}/policies/refund-policy`} target="_blank" rel="noopener noreferrer">
          Trocas e devoluções
        </a>
      </p>
      <p className="bf-footer__legal">{CAMPAIGN.legal}</p>
    </div>
  </footer>
);

export type BarProduct = "terracota" | "gray" | "duo" | "duo220";

const BAR = {
  terracota: {
    href: buyUrl(TERRACOTA.variants[0].handle, TERRACOTA.variants[0].variantId),
    label: "Comprar o Terracota",
    sub: `${brl(TERRACOTA.price)} + 2 kits grátis`,
    product: "terracota-terracota",
  },
  gray: {
    href: buyUrl(TERRACOTA.variants[1].handle, TERRACOTA.variants[1].variantId),
    label: "Comprar o Terracota Gray",
    sub: `${brl(TERRACOTA.price)} + 2 kits grátis`,
    product: "terracota-gray",
  },
  duo: {
    href: buyUrl(DUO.handle, DUO.variants[0].variantId),
    label: "Comprar o DUO",
    sub: `${brl(DUO.price)} + Kit Refil DUO grátis`,
    product: "duo-127v",
  },
  duo220: {
    href: buyUrl(DUO.handle, DUO.variants[1].variantId),
    label: "Comprar o DUO 220v",
    sub: `${brl(DUO.price)} + Kit Refil DUO grátis`,
    product: "duo-220v",
  },
} as const;

/** Barra fixa no celular: o botão de compra do produto que está na tela, e o WhatsApp ao lado. */
export const MobileBar = ({ visible, product }: { visible: boolean; product: BarProduct }) => {
  const b = BAR[product];
  return (
    <div className="bf-bar" data-visible={visible}>
      <BuyButton href={b.href} product={b.product} placement="barra-fixa-mobile" label={b.label} sub={b.sub} />
      <a
        className="bf-bar__wa"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => track("bf_whatsapp_click", { product: "geral", placement: "barra-fixa-mobile" })}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};
