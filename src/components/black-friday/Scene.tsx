import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { Drop } from "./shared";

/**
 * Peças da identidade da campanha Black Friday Acqualive, tiradas das artes oficiais:
 * estúdio grafite com luz de cima, piso que reflete, fitas laranja cruzando a cena,
 * etiqueta branca "O melhor desconto do ano", selo dourado e a caixa laranja da oferta.
 */

/* ---------- Estúdio ---------- */

type StudioProps = {
  children: ReactNode;
  className?: string;
  /** de onde vem a luz principal */
  light?: "center" | "left" | "right";
  as?: "section" | "header" | "div";
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className"> & { "data-reveal"?: boolean; "data-product"?: string };

export const Studio = forwardRef<HTMLElement, StudioProps>(
  ({ children, className = "", light = "center", as = "section", ...rest }, ref) => {
    const Tag = as as "section";
    return (
      <Tag ref={ref} className={`bf-studio bf-studio--${light} ${className}`} {...rest}>
        <span className="bf-studio__glow" aria-hidden="true" />
        <span className="bf-studio__floor" aria-hidden="true" />
        {children}
      </Tag>
    );
  },
);

Studio.displayName = "Studio";

/* ---------- Fita ---------- */

export const Tape = ({
  text,
  className = "",
  style,
  blur = false,
  reverse = false,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  blur?: boolean;
  reverse?: boolean;
}) => {
  const items = Array.from({ length: 12 }, () => text);
  return (
    <div
      className={`bf-tape ${blur ? "bf-tape--blur" : ""} ${reverse ? "bf-tape--reverse" : ""} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="bf-tape__track">
        {[...items, ...items].map((t, i) => (
          <span className="bf-tape__item" key={i}>
            {t}
            <Drop />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Etiqueta branca ---------- */

export const Label = ({ top, accent, className = "" }: { top: string; accent: string[]; className?: string }) => (
  <p className={`bf-label ${className}`}>
    <span className="bf-label__top">{top}</span>
    {accent.map((a) => (
      <span key={a} className="bf-label__accent">
        {a}
      </span>
    ))}
  </p>
);

/* ---------- Selo dourado ---------- */

let sealId = 0;

export const Seal = ({
  ring,
  top,
  value,
  bottom,
  className = "",
}: {
  ring: string;
  top: string;
  value: string;
  bottom: string;
  className?: string;
}) => {
  const id = `bf-seal-${++sealId}`;
  return (
    <div className={`bf-seal ${className}`} role="img" aria-label={`${top} ${value} ${bottom}`}>
      <svg className="bf-seal__ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href={`#${id}`} startOffset="0">
            {`${ring} • ${ring} • `}
          </textPath>
        </text>
      </svg>
      <span className="bf-seal__face" aria-hidden="true">
        <span className="bf-seal__top">{top}</span>
        <span className="bf-seal__value">{value}</span>
        <span className="bf-seal__bottom">{bottom}</span>
      </span>
    </div>
  );
};

/* ---------- Caixa laranja da oferta ---------- */

export const OfferBox = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bf-offerbox ${className}`}>
    <span className="bf-offerbox__plus" aria-hidden="true">
      +
    </span>
    {children}
  </div>
);

/* ---------- Produto no piso, com reflexo ---------- */

export const Product = ({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width: number;
  height: number;
  priority?: boolean;
}) => (
  <span className={`bf-product ${className}`} style={style}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchpriority: "high" } : {})}
    />
    <img className="bf-product__mirror" src={src} alt="" aria-hidden="true" width={width} height={height} loading="lazy" />
  </span>
);
