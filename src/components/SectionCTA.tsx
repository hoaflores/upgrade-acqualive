import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20recebi%20um%20e-mail%20com%20um%20desconto%20exclusivo%20para%20trocar%20meu%20filtro%20Acqualive%20pelo%20novo%20modelo.%20Gostaria%20de%20saber%20mais.";

const SectionCTA = () => {
  return (
    <div className="flex justify-center mt-12">
      <Button
        variant="cta"
        size="lg"
        asChild
        className="group shadow-elevated"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span>QUERO MEU DESCONTO</span>
        </a>
      </Button>
    </div>
  );
};

export default SectionCTA;
