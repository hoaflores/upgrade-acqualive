import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import familyImage from "@/assets/terracota-familia.jpg";
import logoAzul from "@/assets/logo-acqualive-azul.png";
import iconAcqualive from "@/assets/icon-acqualive.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.3),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_hsl(218_97%_30%_/_0.5),_transparent_50%)]" />
      </div>
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Header with logo */}
      <motion.header 
        className="absolute top-0 left-0 right-0 z-50 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={iconAcqualive} 
                alt="Acqualive" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            
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

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-accent/20 text-gold-light text-sm font-semibold border border-accent/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Programa Indique e Ganhe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground leading-[1.1] mb-8"
            >
              Indique seus amigos,{" "}
              <span className="text-gradient-orange inline-block">ganhe refis grátis</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-normal opacity-90">
                e leve saúde para quem você ama.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-3 leading-relaxed"
            >
              Para cada amigo que comprar um Acqualive através da sua indicação, 
              você ganha <strong className="text-gold-light font-bold">1 Kit de Refis completo</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-primary-foreground/80 mb-10 font-medium"
            >
              <span className="text-gold-light font-bold">Indicou, comprou, ganhou.</span>{" "}
              Simples assim. Sem sorteios, sem limites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="xl" className="group" asChild>
                <a href="#formulario">
                  QUERO INDICAR E GANHAR
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-sm text-primary-foreground/60 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Mais de 500 clientes já garantiram refis grátis com suas indicações.
            </motion.p>
          </div>

          {/* Right: Family Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-3xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <img
                  src={familyImage}
                  alt="Família feliz ao redor do filtro Acqualive Terracota"
                  className="w-full h-auto object-cover object-top"
                  style={{ marginBottom: '-60px', clipPath: 'inset(0 0 60px 0)' }}
                />
                
                {/* Subtle overlay for harmony */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-accent/20 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.img 
          src={iconAcqualive}
          alt=""
          className="w-8 h-8 opacity-50"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
