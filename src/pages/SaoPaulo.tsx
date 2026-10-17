import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import pageHtml from "@/assets/sao-paulo/page.html?raw";
import pageCss from "@/assets/sao-paulo/page.css?raw";
import refinementCss from "@/assets/sao-paulo/refinement.css?raw";
import currentLogo from "@/assets/logo-acqualive.png";
import currentLogoWhite from "@/assets/logo-branca.png";
import terracotaAsset from "@/assets/filtros/terracota.png.asset.json";
import duoAsset from "@/assets/duo/duo-frente-transp.png.asset.json";
import duoLiteAsset from "@/assets/sao-paulo/duo-lite-pia.png.asset.json";
import heroAsset from "@/assets/sao-paulo/4a34494261ea.jpg.asset.json";
import { saoPauloContact, saoPauloWhatsAppUrl } from "@/data/sao-paulo-contact";
import { allowsSaoPauloMarketing, SP_MARKETING_PREFERENCE } from "@/data/sao-paulo-privacy";

type Pixel = ((...args: unknown[]) => void) & { queue?: unknown[][]; push?: Pixel; loaded?: boolean; version?: string; callMethod?: (...args: unknown[]) => void };
const trackVisit = () => {
  const target = window as Window & { fbq?: Pixel; _fbq?: Pixel; spPixelInitialized?: boolean };
  if (!target.fbq) {
    const pixel: Pixel = (...args) => {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue?.push(args);
    };
    pixel.queue = []; pixel.push = pixel; pixel.loaded = true; pixel.version = "2.0";
    target.fbq = pixel; target._fbq = pixel;
    const script = document.createElement("script");
    script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  if (!target.spPixelInitialized) {
    target.fbq("init", "282648086654648");
    target.spPixelInitialized = true;
  }
  target.fbq("trackSingle", "282648086654648", "PageView");
};

const MarketingPreference = () => {
  const [choice, setChoice] = useState<string | null>(() => {
    try { return localStorage.getItem(SP_MARKETING_PREFERENCE); } catch { return null; }
  });
  const [editing, setEditing] = useState(!choice);
  const choose = (value: "accepted" | "rejected") => {
    try { localStorage.setItem(SP_MARKETING_PREFERENCE, value); } catch { /* Preference remains valid for this visit. */ }
    setChoice(value); setEditing(false);
    window.dispatchEvent(new CustomEvent("sp-marketing-preference", { detail: value }));
  };
  return <aside className="sp-privacy-preference" aria-label="Preferências de privacidade">
    {editing ? <>
      <p>Permitir a medição de visitas pelo Meta nesta página? Você pode recusar sem impedir o atendimento.</p>
      <div className="sp-privacy-actions">
        <Button type="button" variant="outline" onClick={() => choose("rejected")}>Recusar</Button>
        <Button type="button" onClick={() => choose("accepted")}>Permitir</Button>
      </div>
    </> : <Button type="button" variant="link" onClick={() => setEditing(true)}>Gerenciar preferências de privacidade</Button>}
  </aside>;
};

const Contato = () => {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setBusy(true); setStatus(""); setFailed(false);
    try {
      const { data, error } = await supabase.functions.invoke("sao-paulo-sheet", { body: Object.fromEntries(fields) });
      if (error || !data?.success) throw new Error("Falha no envio");
      form.reset();
      setStatus("Obrigado! Recebemos sua solicitação. Nossa equipe entrará em contato.");
    } catch {
      setFailed(true); setStatus("Não foi possível enviar. Tente novamente ou fale conosco pelo WhatsApp.");
    } finally { setBusy(false); }
  };
  const fieldClass = "elementor-field elementor-size-lg elementor-field-textual";
  return <form className="elementor-form" onSubmit={submit}>
    <div className="elementor-form-fields-wrapper elementor-labels-above">
      {[
        { name: "nome", label: "Nome", type: "text", limit: 100 },
        { name: "email", label: "E-mail", type: "email", limit: 255 },
        { name: "telefone", label: "Telefone", type: "tel", limit: 25 },
      ].map(field => <div key={field.name} className="elementor-field-group elementor-column elementor-col-100">
        <label htmlFor={`sp-${field.name}`} className="elementor-field-label">{field.label}*</label>
        <input id={`sp-${field.name}`} className={fieldClass} name={field.name} type={field.type} autoComplete={field.name === "nome" ? "name" : field.name === "telefone" ? "tel" : "email"} placeholder={field.label} required maxLength={field.limit} />
      </div>)}
      <div className="elementor-field-group elementor-column elementor-col-100"><label htmlFor="sp-mensagem" className="elementor-field-label">Mensagem</label><textarea id="sp-mensagem" className={fieldClass} name="mensagem" placeholder="Mensagem" rows={3} maxLength={2000} /></div>
      <div className="elementor-field-group elementor-column elementor-col-100">
        <label htmlFor="sp-horario" className="elementor-field-label">Preferência de contato:</label>
        <div className="elementor-field elementor-select-wrapper"><select id="sp-horario" className={fieldClass} name="horario">
          <option>Qualquer horário</option><option>Manhã</option><option>Tarde</option>
        </select></div>
      </div>
      <div className="sp-trap" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="elementor-field-group elementor-column elementor-col-100">
        <Button type="submit" className="elementor-button elementor-size-xl" disabled={busy}>{busy ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO"}</Button>
      </div>
    </div>
    <p className="sp-collection-notice">Sua solicitação e seus dados de contato são encaminhados à equipe de São Paulo e registrados em uma planilha de atendimento. <a href="https://www.acqualive.com.br/pages/politica-de-privacidade" target="_top">Consultar a política institucional de privacidade</a>.</p>
    <p className="sp-status" data-error={failed} role="status" aria-live="polite">{status}</p>
  </form>;
};

const SaoPaulo = () => {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const shadow = element.shadowRoot ?? element.attachShadow({ mode: "open" });
    // Browsers do not register @font-face definitions from shadow stylesheets.
    const fonts = document.createElement("style");
    fonts.textContent = (pageCss.match(/@font-face\s*\{[^}]+\}/g) ?? []).join("\n");
    document.head.appendChild(fonts);
    shadow.innerHTML = `<style>${pageCss}\n${refinementCss}</style>${pageHtml}`;
    const hero = shadow.querySelector('[data-id="53155e8f"]');
    if (hero) {
      const photo = document.createElement("img");
      photo.className = "sp-hero-photo"; photo.src = heroAsset.url;
      photo.alt = ""; photo.fetchPriority = "high";
      hero.prepend(photo);
    }
    // Recompose the existing closing content without rewriting the commercial copy.
    const support = shadow.querySelector('[data-id="35c6db03"] .elementor-widget-wrap');
    if (support) {
      const composition = document.createElement("div"); composition.className = "sp-support-layout";
      const heading = document.createElement("div"); heading.className = "sp-support-heading";
      const copy = document.createElement("div"); copy.className = "sp-support-copy";
      ["5d86099", "7daabe3e"].forEach(id => {
        const node = shadow.querySelector(`[data-id="${id}"]`); if (node) heading.appendChild(node);
      });
      ["4c8b0587", "31a28527"].forEach(id => {
        const node = shadow.querySelector(`[data-id="${id}"]`); if (node) copy.appendChild(node);
      });
      composition.append(heading, copy);
      shadow.querySelector('[data-id="345d5a58"] .elementor-widget-wrap')?.appendChild(composition);
    }
    const habit = shadow.querySelector('[data-id="3ca76024"] .elementor-text-editor');
    if (habit) {
      habit.classList.add("sp-habit-layout");
      const heading = document.createElement("h2");
      heading.textContent = "Um cuidado que começa com a água.";
      heading.className = "sp-habit-heading";
      habit.prepend(heading);
    }
    const invitation = shadow.querySelector('[data-id="4b93f825"] .elementor-widget-wrap');
    if (invitation) {
      const copy = document.createElement("div"); copy.className = "sp-invitation-copy";
      while (invitation.firstChild) copy.appendChild(invitation.firstChild);
      const image = document.createElement("img");
      image.src = duoAsset.url; image.alt = "Acqualive DUO"; image.loading = "lazy";
      image.className = "sp-invitation-product";
      invitation.classList.add("sp-invitation-layout"); invitation.append(copy, image);
    }
    const location = shadow.querySelector('[data-id="22057d9"] .elementor-widget-wrap');
    if (location) {
      const title = document.createElement("h3"); title.textContent = "Acqualive São Paulo";
      title.className = "sp-location-title"; location.prepend(title);
    }
    const productTarget = shadow.querySelector('[data-id="190f17c4"]');
    const productRoot = productTarget ? createRoot(productTarget) : null;
    productRoot?.render(<div className="sp-product-stories">
      {[
        { name: "Terracota", image: terracotaAsset.url, tag: "Design que faz parte da sua casa", headline: "Água alcalina, naturalmente na sua rotina.", paragraphs: ["O Terracota une reservatório cerâmico, capacidade de 6 L e um design que valoriza o ambiente. Água filtrada em temperatura ambiente, sempre por perto para acompanhar seus momentos.", "Uma escolha para quem aprecia a simplicidade do sistema por gravidade e quer transformar o hábito de beber água em parte do dia a dia."] },
        { name: "Acqualive DUO", image: duoAsset.url, tag: "Tecnologia e praticidade todos os dias", headline: "Natural ou gelada. Do seu jeito.", paragraphs: ["O Acqualive DUO combina refrigeração e tecnologia TriWay Acqualive para oferecer água alcalina natural e gelada em um único purificador.", "Na cozinha de casa ou na empresa, é uma solução prática para ter água à mão e acompanhar diferentes momentos da sua rotina. Conheça o modelo e consulte as condições com nossa equipe."] },
        { name: "Acqualive Duo Lite", image: duoLiteAsset.url, tag: "Água alcalina direto da torneira", headline: "Sem ocupar espaço na bancada.", paragraphs: ["O Acqualive Duo Lite tem dois estágios de filtragem: membrana UF para ultrafiltração e elemento filtrante alcalino com carvão ativado e minerais. Retenção de partículas Classe A pelo Inmetro e eficiência bacteriológica.", "Instalado sob a pia, com 27 cm de altura e 15 cm de largura, também pode ser ligado a cafeteiras, geladeiras, máquinas de suco e bebedouros. Consulte as condições com nossa equipe."] },
      ].map(product => <article key={product.name} className="sp-product-story">
        <div className="sp-product-visual"><img src={product.image} alt={`Purificador ${product.name}`} loading="lazy" width="400" height="500" /></div>
        <div className="sp-product-copy"><p className="sp-eyebrow">{product.tag}</p><h3>{product.name}</h3><p className="sp-product-headline">{product.headline}</p>{product.paragraphs.map(text => <p key={text}>{text}</p>)}<Button asChild className="elementor-button"><a href={saoPauloWhatsAppUrl(product.name)} target="_blank" rel="noopener noreferrer">Quero conhecer o {product.name}</a></Button></div>
      </article>)}
    </div>);
    const featureList = shadow.querySelector('[data-id="5f9ba46e"] .elementor-widget-wrap')
      ?? shadow.querySelector('[data-id="5f9ba46e"]');
    // Mark the existing technical column without changing its content.
    shadow.querySelector('[data-id="5f9ba46e"]')?.classList.add("sp-features-column");
    const technicalImage = shadow.querySelector('[data-id="25f22c85"]');
    technicalImage?.closest('.elementor-row')?.classList.add("sp-technical-layout");
    if (featureList) featureList.classList.add("sp-feature-list");
    ["79985013", "2e6215b0", "6481294f", "1992bb", "1e3fd4a1"].forEach(id => {
      shadow.querySelector(`[data-id="${id}"]`)?.classList.add("sp-legacy-divider");
    });
    shadow.querySelector(".elementor-2")?.setAttribute("lang", "pt-BR");
    shadow.querySelectorAll<HTMLElement>("[data-sp-contact]").forEach(node => {
      const key = node.dataset.spContact;
      if (key === "address") node.textContent = saoPauloContact.address;
      if (key === "cnpj") node.textContent = saoPauloContact.cnpj;
      if (key === "telephone" && node instanceof HTMLAnchorElement) {
        node.textContent = saoPauloContact.telephoneLabel;
        node.href = `tel:+${saoPauloContact.telephone}`;
      }
    });
    const map = shadow.querySelector<HTMLIFrameElement>('[data-id="b10ebed"] iframe');
    if (map) map.src = `https://maps.google.com/maps?q=${encodeURIComponent(saoPauloContact.address)}&t=m&z=16&output=embed`;
    shadow.querySelectorAll<HTMLAnchorElement>('.elementor-button[href="#faleconosco"]').forEach(anchor => {
      const product = anchor.closest('[data-id="4f7647bf"]') ? "V Self" : anchor.closest('[data-id="190f17c4"]') ? "Terracota, Acqualive DUO e Duo Lite" : undefined;
      anchor.href = saoPauloWhatsAppUrl(product);
      anchor.target = "_blank"; anchor.rel = "noopener noreferrer";
      anchor.removeAttribute("role");
      const label = anchor.querySelector(".elementor-button-text");
      if (label) label.textContent = "Quero Beber Água Alcalina Ionizada";
    });
    shadow.querySelectorAll<HTMLAnchorElement>('.elementor-button[href="#produtos"]').forEach(anchor => {
      anchor.removeAttribute("role");
      const label = anchor.querySelector(".elementor-button-text");
      if (label) label.textContent = "VER PRODUTOS";
    });
    const primaryTarget = shadow.querySelector('[data-id="4836dc2e"] .elementor-button-wrapper');
    const primaryRoot = primaryTarget ? createRoot(primaryTarget) : null;
    primaryRoot?.render(<div className="sp-hero-actions"><Button asChild className="elementor-button"><a href="#produtos">VER PRODUTOS</a></Button></div>);
    const locationLabel = shadow.querySelector('[data-id="345a19e"] p');
    if (locationLabel) locationLabel.textContent = "São Paulo";
    const imageDescriptions: Record<string, string> = {
      "25f22c85": "Purificador Acqualive da linha por gravidade",
      "58c7e7f": "V Self e versão com suporte de madeira apresentados na página original",
      "792d241": "Imagem ilustrativa da tecnologia Acqualive",
      "eb88383": "Encontro de franqueados Acqualive",
    };
    Object.entries(imageDescriptions).forEach(([id, description]) => {
      shadow.querySelector(`[data-id="${id}"] img`)?.setAttribute("alt", description);
    });
    shadow.querySelectorAll<HTMLImageElement>('img[alt$=".png"]').forEach(image => {
      image.alt = ""; image.removeAttribute("title");
    });
    const logo = shadow.querySelector<HTMLImageElement>('[data-id="57c97f1a"] img');
    if (logo) {
      logo.src = currentLogo;
      logo.alt = "Acqualive";
      logo.loading = "eager";
      logo.removeAttribute("width"); logo.removeAttribute("height");
      logo.parentElement?.classList.add("sp-brand");
    }
    const footer = shadow.querySelector('[data-id="5492a288"] .elementor-widget-wrap');
    if (footer) {
      const brand = document.createElement("div");
      brand.className = "sp-brand sp-footer-brand";
      const image = document.createElement("img");
      image.src = currentLogoWhite; image.alt = "Acqualive"; image.loading = "lazy";
      brand.appendChild(image); footer.prepend(brand);
    }
    ["53496fef", "4915070c", "23a46f38", "35c6db03", "5a70ff98"].forEach(id => {
      shadow.querySelector(`[data-id="${id}"]`)?.classList.add("sp-dark-section");
    });
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle("sp-in-view", entry.isIntersecting));
    }, { threshold: 0.15 });
    ["478f6b24", "42ba3efd", "36402a26", "25f22c85", "58c7e7f", "eab5130"].forEach(id => {
      const image = shadow.querySelector(`[data-id="${id}"]`);
      if (!image) return;
      image.classList.add("sp-image-motion");
      if (["25f22c85", "58c7e7f", "eab5130"].includes(id)) image.classList.add("sp-product-motion");
      imageObserver.observe(image);
    });
    let trackedVisit = false;
    const updateMarketing = (preference: string | null) => {
      const allowed = allowsSaoPauloMarketing(preference);
      (window as Window & { fbq?: Pixel }).fbq?.("consent", allowed ? "grant" : "revoke");
      if (allowed && !trackedVisit) { trackVisit(); trackedVisit = true; }
    };
    try { updateMarketing(localStorage.getItem(SP_MARKETING_PREFERENCE)); } catch { updateMarketing(null); }
    const preferenceChanged = (event: Event) => {
      if (event instanceof CustomEvent && typeof event.detail === "string") updateMarketing(event.detail);
    };
    window.addEventListener("sp-marketing-preference", preferenceChanged);
    const formTarget = shadow.querySelector("#sao-paulo-form-root");
    const formRoot = formTarget ? createRoot(formTarget) : null;
    formRoot?.render(<><Contato /><MarketingPreference /><Button asChild className="sp-whatsapp"><a href={saoPauloWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Falar com Acqualive São Paulo no WhatsApp"><i className="fa fa-whatsapp" aria-hidden="true" /></a></Button></>);
    shadow.querySelectorAll<HTMLElement>(".elementor-swiper-button").forEach(arrow => {
      arrow.setAttribute("role", "button"); arrow.tabIndex = 0;
      arrow.setAttribute("aria-label", arrow.classList.contains("elementor-swiper-button-prev") ? "Depoimento anterior" : "Próximo depoimento");
    });
    const click = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const title = target.closest<HTMLElement>(".elementor-tab-title");
      if (title) {
        event.preventDefault();
        const panel = title.nextElementSibling;
        if (!(panel instanceof HTMLElement)) return;
        const open = title.getAttribute("aria-expanded") === "true";
        title.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
        title.classList.toggle("elementor-active", !open);
      }
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor && anchor.hash) {
        const section = shadow.getElementById(anchor.hash.slice(1));
        if (section) { event.preventDefault(); section.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }
      }
      const arrow = target.closest(".elementor-swiper-button");
      if (arrow) {
        const track = arrow.closest(".elementor-swiper")?.querySelector(".swiper-wrapper");
        if (track) track.scrollBy({ left: track.clientWidth * (arrow.classList.contains("elementor-swiper-button-prev") ? -1 : 1), behavior: "smooth" });
      }
    };
    const keydown = (event: Event) => {
      if (event instanceof KeyboardEvent && (event.key === "Enter" || event.key === " ") && event.target instanceof HTMLElement && event.target.matches(".elementor-tab-title, .elementor-swiper-button")) {
        event.preventDefault(); event.target.click();
      }
    };
    shadow.addEventListener("click", click); shadow.addEventListener("keydown", keydown);
    const carousel = shadow.querySelector(".swiper-wrapper");
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    carousel?.addEventListener("mouseenter", pause); carousel?.addEventListener("mouseleave", resume);
    carousel?.addEventListener("focusin", pause); carousel?.addEventListener("focusout", resume);
    const timer = window.setInterval(() => {
      if (!carousel || paused || document.hidden || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const next = carousel.scrollLeft + carousel.clientWidth;
      carousel.scrollTo({ left: next >= carousel.scrollWidth - 5 ? 0 : next, behavior: "smooth" });
    }, 5000);
    const resize = new ResizeObserver(() => {
      if (window.parent !== window) window.parent.postMessage({ type: "resize", height: element.scrollHeight }, "*");
    });
    resize.observe(element);
    return () => {
      window.clearInterval(timer); resize.disconnect(); imageObserver.disconnect();
      window.removeEventListener("sp-marketing-preference", preferenceChanged);
      fonts.remove();
      shadow.removeEventListener("click", click); shadow.removeEventListener("keydown", keydown);
      formRoot?.unmount();
      primaryRoot?.unmount();
      productRoot?.unmount();
    };
  }, []);
  return <div ref={host} />;
};
export default SaoPaulo;