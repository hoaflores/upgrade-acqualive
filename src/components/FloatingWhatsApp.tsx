import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20recebi%20um%20e-mail%20com%20um%20desconto%20exclusivo%20para%20trocar%20meu%20filtro%20Acqualive%20pelo%20novo%20modelo.%20Gostaria%20de%20saber%20mais.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
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
