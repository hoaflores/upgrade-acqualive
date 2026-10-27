import { useEffect, type CSSProperties, type ReactNode } from "react";
import { CTA_LABEL, whatsappUrl } from "./offers";

/* ---------- Rastreamento ---------- */

type TrackWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
};

/**
 * Dispara eventos para o GTM (dataLayer) e o Pixel da Meta, se estiverem na página.
 * Eventos: bf_whatsapp_click e bf_buy_click, com o produto e a posição do botão.
 */
export const track = (event: "bf_whatsapp_click" | "bf_buy_click", data: { product: string; placement: string }) => {
  if (typeof window === "undefined") return;
  const w = window as TrackWindow;
  w.dataLayer?.push({ event, ...data });
  if (event === "bf_whatsapp_click") w.fbq?.("track", "Contact", { content_name: data.product });
  if (event === "bf_buy_click") w.fbq?.("track", "InitiateCheckout", { content_name: data.product });
};

/* ---------- Ícones ---------- */

export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23a7.46 7.46 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z" />
  </svg>
);

/** A gota do símbolo Acqualive, usada como separador na fita. */
export const Drop = () => (
  <svg viewBox="3 4.5 26 23" aria-hidden="true">
    <path
      d="M14.13,21.25c.75,3.26,3.66,5.69,7.15,5.69,4.05,0,7.34-3.29,7.34-7.34,0-4.05-3.29-7.34-7.34-7.34h-9.6s2.45,8.99,2.45,8.99Z"
      fill="currentColor"
    />
  </svg>
);

/* ---------- Botão de WhatsApp ---------- */

type CtaProps = {
  message?: string;
  product?: string;
  placement: string;
  tone?: "orange" | "ink" | "ghost";
  label?: string;
  className?: string;
  style?: CSSProperties;
};

export const WhatsAppButton = ({
  message,
  product = "geral",
  placement,
  tone = "orange",
  label = CTA_LABEL,
  className = "",
  style,
}: CtaProps) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => track("bf_whatsapp_click", { product, placement })}
    className={`bf-btn bf-btn--${tone} ${className}`}
    style={style}
  >
    <WhatsAppIcon />
    <span>{label}</span>
  </a>
);

/* ---------- Botão principal: vai para a página do produto na loja ---------- */

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * Leva para a página do produto no site (mesma aba, para o voltar do celular funcionar).
 * É a ação principal da página; o WhatsApp fica como alternativa.
 */
export const BuyButton = ({
  href,
  product,
  placement,
  label,
  sub,
  tone = "orange",
  className = "",
}: {
  href: string;
  product: string;
  placement: string;
  label: string;
  /** linha menor dentro do botão, por exemplo o preço */
  sub?: string;
  tone?: "orange" | "white" | "ghost";
  className?: string;
}) => (
  <a
    href={href}
    onClick={() => track("bf_buy_click", { product, placement })}
    className={`bf-btn bf-btn--buy bf-btn--${tone} ${className}`}
  >
    <span className="bf-btn__text">
      <span>{label}</span>
      {sub && <span className="bf-btn__sub num">{sub}</span>}
    </span>
    <Arrow />
  </a>
);

/** Alternativa discreta: falar com um especialista no WhatsApp. */
export const WhatsAppLink = ({
  message,
  product = "geral",
  placement,
  label = "Falar com um especialista no WhatsApp",
  className = "",
}: {
  message?: string;
  product?: string;
  placement: string;
  label?: string;
  className?: string;
}) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => track("bf_whatsapp_click", { product, placement })}
    className={`bf-walink ${className}`}
  >
    <WhatsAppIcon />
    <span>{label}</span>
  </a>
);

export const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bf-wrap ${className}`}>{children}</div>
);

/* ---------- Entradas na rolagem ---------- */

/** Liga as entradas [data-reveal] e .bf-shutter quando entram na tela. Uma vez só. */
export const useReveal = (root: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    el.classList.add("is-js");
    // .bf-shutter começa recortado (área zero), então observamos o elemento pai
    const map = new Map<Element, HTMLElement>();
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((t) => map.set(t, t));
    el.querySelectorAll<HTMLElement>(".bf-shutter").forEach((t) => map.set(t.parentElement ?? t, t));
    if (!("IntersectionObserver" in window)) {
      map.forEach((t) => t.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            map.get(e.target)?.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    map.forEach((_, observed) => io.observe(observed));
    return () => io.disconnect();
  }, [root]);
};
