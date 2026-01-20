import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logoAcqualive from "@/assets/logo-acqualive.png";

const FiltroHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-barro-cream overflow-hidden flex flex-col">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large terracota circle */}
        <div className="absolute -top-[30%] -right-[20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-barro-terracota/10 via-barro-sand to-transparent" />
        {/* Small accent circles */}
        <div className="absolute top-[60%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-barro-water/10 to-transparent" />
        {/* Texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 container pt-6 lg:pt-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <img 
            src={logoAcqualive} 
            alt="Acqualive" 
            className="h-10 md:h-12 lg:h-14 w-auto"
          />
          <div className="hidden md:flex items-center gap-2 text-barro-terracota font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-barro-terracota animate-pulse" />
            200+ anos de tradição
          </div>
        </motion.div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container py-12 lg:py-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="text-xs font-bold tracking-[0.3em] text-barro-terracota uppercase">
                Reconhecido pela ONU
              </span>
            </motion.div>

            {/* Main headline - asymmetric layout */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-barro-earth leading-[0.9] mb-4">
                Filtro de
              </span>
              <span className="block font-serif text-6xl md:text-8xl lg:text-[10rem] font-normal text-barro-terracota italic leading-[0.85] -ml-4 md:-ml-8">
                Barro
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-barro-earth/70 max-w-xl mx-auto mt-8 lg:mt-12 leading-relaxed"
            >
              A invenção brasileira que a ONU reconheceu como uma das 
              <span className="text-barro-terracota font-semibold"> melhores soluções de purificação de água </span>
              do planeta.
            </motion.p>

            {/* Stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12"
            >
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold text-barro-terracota">99,9%</span>
                <span className="text-xs text-barro-earth/60 uppercase tracking-wider">eficiência</span>
              </div>
              <div className="w-px h-12 bg-barro-terracota/20 hidden md:block" />
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold text-barro-water">0</span>
                <span className="text-xs text-barro-earth/60 uppercase tracking-wider">eletricidade</span>
              </div>
              <div className="w-px h-12 bg-barro-terracota/20 hidden md:block" />
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold text-barro-leaf">∞</span>
                <span className="text-xs text-barro-earth/60 uppercase tracking-wider">sustentável</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-barro-terracota/50"
        >
          <span className="text-xs tracking-widest uppercase">Descobrir</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FiltroHeroSection;
