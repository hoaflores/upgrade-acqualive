import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import logoAcqualive from "@/assets/logo-acqualive.png";
import filtroBarro from "@/assets/terracota-hero-bg.jpg";

const FiltroHeroSection = () => {
  return <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={filtroBarro} 
          alt="Filtro de barro tradicional" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-barro-cream/95 via-barro-cream/80 to-barro-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-barro-cream/60 via-transparent to-barro-cream/30" />
      </div>

      {/* Header */}
      <header className="relative z-10 container pt-6 lg:pt-8">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="flex items-center justify-between">
          <img src={logoAcqualive} alt="Acqualive" className="h-10 md:h-12 lg:h-14 w-auto" />
          <div className="hidden md:flex items-center gap-2 text-barro-earth/60 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-barro-terracota" />
            Uma jornada de 200 anos
          </div>
        </motion.div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container py-12 lg:py-0">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="flex items-center gap-2 mb-8">
              <div className="h-px w-12 bg-barro-terracota/40" />
              <span className="text-xs font-medium tracking-[0.25em] text-barro-terracota uppercase">
                Reconhecido pela ONU
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="mb-8">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-barro-earth leading-[1.05] tracking-tight xl:text-7xl">O filtro de barro é
o melhor do mundo.
Mas a Acqualive foi além.<span className="block text-barro-terracota">perfeito.</span>
              </h1>
            </motion.div>

            {/* Key message - The twist */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="max-w-2xl mb-12">
              <p className="text-lg text-barro-earth/70 leading-relaxed mb-6 md:text-2xl">Descubra como 200 anos de tradição encontraram a tecnologiapara criar algo ainda melhor!<span className="text-barro-terracota font-medium"> Quase.</span>
              </p>
              
              <div className="flex items-start gap-3 p-4 bg-barro-sand/50 rounded-2xl border border-barro-terracota/10">
                <Sparkles className="w-5 h-5 text-barro-terracota flex-shrink-0 mt-0.5" />
                <p className="text-sm text-barro-earth/80 leading-relaxed">
                  <span className="font-semibold text-barro-earth">CONHEÇA A EVOLUÇÃO DOS FILTROS DE BARRO!</span>
                  {" "}Descubra como 200 anos de tradição encontraram a tecnologia 
                  para criar algo ainda melhor.
                </p>
              </div>
            </motion.div>

            {/* Stats - More refined */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-barro-terracota">99,9%</span>
                <span className="text-xs text-barro-earth/50 uppercase tracking-wide">eficiência</span>
              </div>
              <div className="w-px h-8 bg-barro-earth/10 hidden sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-barro-water">0W</span>
                <span className="text-xs text-barro-earth/50 uppercase tracking-wide">energia</span>
              </div>
              <div className="w-px h-8 bg-barro-earth/10 hidden sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-barro-leaf">∞</span>
                <span className="text-xs text-barro-earth/50 uppercase tracking-wide">sustentável</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="relative z-10 pb-8 flex justify-center">
        <motion.a href="#historia" animate={{
        y: [0, 6, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-barro-earth/40 hover:text-barro-terracota transition-colors cursor-pointer">
          <span className="text-xs tracking-widest uppercase">A história</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>;
};
export default FiltroHeroSection;