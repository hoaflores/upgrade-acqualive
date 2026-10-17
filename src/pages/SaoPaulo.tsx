import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import pageHtml from "@/assets/sao-paulo/page.html?raw";
import pageCss from "@/assets/sao-paulo/page.css?raw";

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
    shadow.innerHTML = `<style>${pageCss}</style>${pageHtml}`;
    const formTarget = shadow.querySelector("#sao-paulo-form-root");
    const formRoot = formTarget ? createRoot(formTarget) : null;
    formRoot?.render(<Contato />);
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
      if (event instanceof KeyboardEvent && (event.key === "Enter" || event.key === " ") && event.target instanceof HTMLElement && event.target.matches(".elementor-tab-title")) {
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
      window.clearInterval(timer); resize.disconnect();
      shadow.removeEventListener("click", click); shadow.removeEventListener("keydown", keydown);
      formRoot?.unmount();
    };
  }, []);
  return <div ref={host} />;
};
export default SaoPaulo;