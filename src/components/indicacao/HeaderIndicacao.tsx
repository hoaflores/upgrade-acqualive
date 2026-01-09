import { motion } from "framer-motion";
import logoAzul from "@/assets/logo-acqualive-azul.png";

const HeaderIndicacao = () => {
  return (
    <motion.header 
      className="absolute top-0 left-0 right-0 z-50 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src={logoAzul} 
              alt="Acqualive" 
              className="h-8 md:h-10 w-auto brightness-0 invert"
            />
          </a>
          
          {/* Optional CTA on header */}
          <a
            href="#formulario"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Indicar agora
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderIndicacao;
