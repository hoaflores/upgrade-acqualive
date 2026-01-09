import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20vi%20que%20por%20R$860%20a%20mais%20que%20os%20refis%20posso%20levar%20um%20Acqualive%20novo.%20Quero%20saber%20mais!";

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
          <span>QUERO MEU ACQUALIVE NOVO</span>
        </a>
      </Button>
    </div>
  );
};

export default SectionCTA;
