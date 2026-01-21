import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import logoAcqualive from "@/assets/logo-acqualive.png";

const FiltroHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-barro-cream overflow-hidden flex flex-col">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orb */}
        <div className="absolute top-0 right-0 w-[120vw] h-[120vw] -translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-to-bl from-barro-terracota/8 via-barro-sand/40 to-transparent" />
        
        {/* Subtle water accent */}
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] translate-y-1/2 -translate-x-1/4 rounded-full bg-gradient-to-tr from-barro-water/6 to-transparent" />
        
        {/* Fine grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="h-px w-12 bg-barro-terracota/40" />
              <span className="text-xs font-medium tracking-[0.25em] text-barro-terracota uppercase">
                Reconhecido pela ONU
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-barro-earth leading-[1.05] tracking-tight">
                O filtro de barro é 
                <span className="block text-barro-terracota">perfeito.</span>
              </h1>
            </motion.div>

            {/* Key message - The twist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl mb-12"
            >
              <p className="text-lg md:text-xl text-barro-earth/70 leading-relaxed mb-6">
                A invenção brasileira que a ONU reconheceu como uma das melhores 
                soluções de purificação de água do planeta. 
                <span className="text-barro-terracota font-medium"> Quase.</span>
              </p>
              
              <div className="flex items-start gap-3 p-4 bg-barro-sand/50 rounded-2xl border border-barro-terracota/10">
                <Sparkles className="w-5 h-5 text-barro-terracota flex-shrink-0 mt-0.5" />
                <p className="text-sm text-barro-earth/80 leading-relaxed">
                  <span className="font-semibold text-barro-earth">E se pudéssemos ir além?</span>
                  {" "}Descubra como 200 anos de tradição encontraram a tecnologia 
                  para criar algo ainda melhor.
                </p>
              </div>
            </motion.div>

            {/* Stats - More refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 md:gap-10"
            >
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.a
          href="#historia"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-barro-earth/40 hover:text-barro-terracota transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">A história</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FiltroHeroSection;
