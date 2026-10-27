import { useEffect, useRef, useState } from "react";
import "@fontsource-variable/dm-sans/opsz.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/barlow-condensed/100.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-semi-condensed/700.css";
import "@fontsource/barlow-semi-condensed/800.css";
import "@/components/black-friday/black-friday.css";
import { CloseScene, Ended, Footer, MobileBar, type BarProduct } from "@/components/black-friday/Close";
import { Conta } from "@/components/black-friday/Conta";
import { Faq } from "@/components/black-friday/Faq";
import { Offers } from "@/components/black-friday/Offers";
import { Hero, SceneSection, type Color, type Lead, type Volt } from "@/components/black-friday/ProductScene";
import { Proof } from "@/components/black-friday/Proof";
import { VideoMaster } from "@/components/black-friday/VideoMaster";
import { isOver } from "@/components/black-friday/offers";
import { useReveal } from "@/components/black-friday/shared";

/**
 * LP Black Friday Acqualive 2026: tráfego quente (remarketing e parceiros).
 * Foco no Terracota e no DUO. Por padrão não é indexada; para indexar, troque NOINDEX para false.
 */
const NOINDEX = true;

const META = {
  title: "Black Friday Acqualive | Terracota e DUO com refil grátis",
  description:
    "Black Friday Acqualive até 30/11: Terracota com 2 kits de refil grátis e DUO com o Kit Refil DUO grátis. Em até 10x sem juros.",
  /** Imagem de quando o link é compartilhado (WhatsApp, Facebook). Fica em public/black-friday/og.jpg. */
  image: "/black-friday/og.jpg",
};

/**
 * Título, descrição e imagem de compartilhamento.
 * Atenção: o WhatsApp e o Facebook não rodam JavaScript. Para a prévia do link aparecer com foto,
 * as tags og:* também precisam estar no index.html do projeto (veja o README).
 */
const useMeta = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = META.title;
    const set = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      const created = !tag;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      const previous = tag.content;
      tag.content = content;
      return () => {
        if (created) tag?.remove();
        else if (tag) tag.content = previous;
      };
    };
    const image = new URL(META.image, window.location.origin).href;
    const restore = [
      set("name", "description", META.description),
      set("property", "og:title", META.title),
      set("property", "og:description", META.description),
      set("property", "og:image", image),
      set("property", "og:type", "website"),
      set("name", "twitter:card", "summary_large_image"),
      NOINDEX ? set("name", "robots", "noindex, nofollow") : () => {},
    ];
    return () => {
      document.title = previousTitle;
      restore.forEach((fn) => fn());
    };
  }, []);
};

/**
 * Qual produto abre a página. Padrão: DUO (seção 1), com o Terracota logo abaixo.
 * Para anúncios do Terracota, use o link com ?produto=terracota: o topo, a conta e a barra do celular
 * passam a ser do Terracota. ?produto=duo continua funcionando (é o padrão).
 */
const DEFAULT_LEAD: Lead = "duo";
const readLead = (): Lead => {
  if (typeof window === "undefined") return DEFAULT_LEAD;
  const p = new URLSearchParams(window.location.search).get("produto")?.toLowerCase();
  return p === "terracota" ? "terracota" : p === "duo" ? "duo" : DEFAULT_LEAD;
};

/** forceLead e forceEnded servem só para a prévia de revisão mostrar as versões lado a lado. */
const BlackFriday = ({ forceLead, forceEnded }: { forceLead?: Lead; forceEnded?: boolean } = {}) => {
  useMeta();
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  const [lead] = useState<Lead>(() => forceLead ?? readLead());
  const other: Lead = lead === "terracota" ? "duo" : "terracota";
  const [ended] = useState(() => forceEnded ?? isOver());

  const heroCtaRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLElement>(null);
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [closeVisible, setCloseVisible] = useState(false);
  const [color, setColor] = useState<Color>("terracota");
  const [volt, setVolt] = useState<Volt>("127v");
  const [focus, setFocus] = useState<Lead | "none">(lead);

  // a barra do celular mostra o produto da seção que está na tela
  useEffect(() => {
    const root = rootRef.current;
    if (!root || ended) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setFocus((e.target as HTMLElement).dataset.product as Lead | "none");
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    root.querySelectorAll("[data-product]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ended]);
  const barProduct: BarProduct = focus === "duo" ? (volt === "220v" ? "duo220" : "duo") : color;

  useEffect(() => {
    if (ended) return;
    const watch = (el: Element | null, set: (v: boolean) => void) => {
      if (!el) return () => {};
      const io = new IntersectionObserver(([entry]) => set(entry.isIntersecting), { threshold: 0 });
      io.observe(el);
      return () => io.disconnect();
    };
    const a = watch(heroCtaRef.current, setHeroCtaVisible);
    const b = watch(closeRef.current, setCloseVisible);
    return () => {
      a();
      b();
    };
  }, [ended]);

  const choice = { color, onColor: setColor, volt, onVolt: setVolt };

  if (ended) {
    return (
      <div ref={rootRef} className="bf">
        <Ended />
        <Footer />
      </div>
    );
  }

  return (
    <div ref={rootRef} className="bf">
      <Hero ref={heroCtaRef} product={lead} {...choice} />
      <main>
        <Conta product={lead} {...choice} />
        <SceneSection product={other} {...choice} />
        <VideoMaster />
        <Offers />
        {/* depois das outras ofertas a barra do celular volta com o produto principal */}
        <div data-product={lead}>
          <Proof />
          <Faq />
        </div>
        <CloseScene ref={closeRef} lead={lead} />
      </main>
      <Footer />
      <MobileBar visible={!heroCtaVisible && !closeVisible && focus !== "none"} product={barProduct} />
    </div>
  );
};

export default BlackFriday;
