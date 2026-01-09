import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20vi%20que%20por%20R$860%20a%20mais%20que%20os%20refis%20posso%20levar%20um%20Acqualive%20novo.%20Quero%20saber%20mais!";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden">
      <Button
        variant="cta"
        size="lg"
        asChild
        className="w-full group shadow-elevated"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span>QUERO MEU ACQUALIVE NOVO</span>
        </a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
