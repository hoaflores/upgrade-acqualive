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
        <input className={fieldClass} name={field.name} type={field.type} aria-label={field.label} placeholder={`${field.label}*`} required maxLength={field.limit} />
      </div>)}
      <div className="elementor-field-group elementor-column elementor-col-100"><textarea className={fieldClass} name="mensagem" aria-label="Mensagem" placeholder="Mensagem" rows={3} maxLength={2000} /></div>
      <div className="elementor-field-group elementor-column elementor-col-100">
        <label htmlFor="sp-horario" className="elementor-field-label">Preferência de contato:</label>
        <div className="elementor-field elementor-select-wrapper"><select id="sp-horario" className={fieldClass} name="horario">
          <option>Qualquer horário</option><option>Manhã</option><option>Tarde</option>
        </select></div>
      </div>
      <div className="sp-trap" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="elementor-field-group elementor-column elementor-col-100">
        <Button type="submit" className="elementor-button elementor-size-xl" disabled={busy}>{busy ? "ENVIANDO..." : "AGENDAR"}</Button>
      </div>
    </div>
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
    const locationLabel = shadow.querySelector('[data-id="345a19e"] p');
    if (locationLabel) locationLabel.textContent = "São Paulo";
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
    trackVisit();
    const formTarget = shadow.querySelector("#sao-paulo-form-root");
    const formRoot = formTarget ? createRoot(formTarget) : null;
    formRoot?.render(<><Contato /><Button asChild className="sp-whatsapp"><a href="https://wa.me/5511989712793" target="_blank" rel="noopener noreferrer" aria-label="Falar com Acqualive São Paulo no WhatsApp"><i className="fa fa-whatsapp" aria-hidden="true" /></a></Button></>);
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
      fonts.remove();
      shadow.removeEventListener("click", click); shadow.removeEventListener("keydown", keydown);
      formRoot?.unmount();
    };
  }, []);
  return <div ref={host} />;
};
export default SaoPaulo;