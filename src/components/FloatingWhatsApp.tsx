import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const DEFAULT_WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20vi%20que%20por%20R$860%20a%20mais%20que%20os%20refis%20posso%20levar%20um%20Acqualive%20novo.%20Quero%20saber%20mais!";

interface FloatingWhatsAppProps {
  whatsappLink?: string;
}

const FloatingWhatsApp = ({ whatsappLink }: FloatingWhatsAppProps) => {
  const link = whatsappLink || DEFAULT_WHATSAPP_LINK;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group md:bottom-8 md:right-8"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default FloatingWhatsApp;
