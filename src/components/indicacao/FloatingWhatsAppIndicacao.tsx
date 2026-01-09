import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá!%20Quero%20participar%20do%20Programa%20Embaixador%20Acqualive.";

const FloatingWhatsAppIndicacao = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group md:bottom-8 md:right-8"
      aria-label="Falar com consultor via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* WhatsApp SVG Logo - Official */}
      <svg 
        viewBox="0 0 48 48" 
        className="w-8 h-8 text-white relative z-10"
        fill="currentColor"
      >
        <path d="M24.04 4.32c-10.84 0-19.68 8.84-19.68 19.68 0 3.47.91 6.84 2.64 9.82L4.32 43.68l10.13-2.64c2.88 1.57 6.12 2.4 9.59 2.4 10.84 0 19.68-8.84 19.68-19.68S34.88 4.32 24.04 4.32zm0 36.01c-3.31 0-6.55-.9-9.38-2.61l-.67-.4-6.96 1.82 1.85-6.77-.44-.7c-1.87-2.97-2.86-6.41-2.86-9.91 0-9.01 7.32-16.34 16.34-16.34s16.34 7.32 16.34 16.34c.12 9.02-7.2 16.46-16.22 16.57zm8.96-12.24c-.49-.25-2.91-1.44-3.36-1.6-.45-.16-.78-.25-1.1.25-.33.49-1.27 1.6-1.56 1.93-.29.33-.57.37-1.06.12-.49-.24-2.07-.76-3.95-2.43-1.46-1.3-2.44-2.91-2.73-3.4-.29-.49-.03-.75.22-1 .22-.22.49-.57.74-.86.24-.29.33-.49.49-.82.16-.33.08-.61-.04-.86-.12-.24-1.1-2.64-1.51-3.61-.4-.95-.8-.82-1.1-.84-.29-.02-.61-.02-.94-.02-.33 0-.86.12-1.31.61-.45.49-1.72 1.68-1.72 4.1s1.76 4.76 2.01 5.08c.24.33 3.47 5.29 8.41 7.42 1.18.51 2.1.81 2.81 1.04 1.18.38 2.26.32 3.11.2.95-.14 2.91-1.19 3.32-2.34.41-1.15.41-2.13.29-2.34-.13-.2-.45-.33-.94-.57z"/>
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsAppIndicacao;
