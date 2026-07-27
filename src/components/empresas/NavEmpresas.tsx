import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logoAcqualive from "@/assets/acqualive-logo-white.png.asset.json";
import { WHATSAPP_EMPRESAS } from "./dados";

const LINKS = [
  { label: "Solução", href: "#solucao" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Simulador", href: "#simulador" },
  { label: "Dúvidas", href: "#faq" },
];


const NavEmpresas = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navegação Acqualive Empresas"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-secondary/85 backdrop-blur-xl border-b border-primary-foreground/10">
        <div className="container flex items-center justify-between h-16 gap-4">
          <a href="#topo" className="flex-shrink-0">
            <img
              src={logoAcqualive.url}
              alt="Acqualive"
              width={180}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hidden sm:inline-flex"
            >
              <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="cta" size="sm" asChild className="text-[11px] px-4">
              <a href="#avaliacao">AVALIAÇÃO GRATUITA</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavEmpresas;
