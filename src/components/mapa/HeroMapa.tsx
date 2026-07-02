import { MapPin, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import WaterParticles from "./WaterParticles";

interface HeroMapaProps {
  onCTAClick: () => void;
}

const HeroMapa = ({ onCTAClick }: HeroMapaProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers - depth through layers, no heavy shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--water-light))] via-white to-background" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 20% 10%, hsl(215 62% 55% / 0.18), transparent 70%), radial-gradient(50% 40% at 85% 20%, hsl(21 89% 55% / 0.10), transparent 70%)",
        }}
      />
      <WaterParticles density={26} />
      {/* Soft grid — quase imperceptível */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-primary shadow-[0_1px_0_hsl(0_0%_100%/_0.7)_inset,0_8px_24px_-12px_hsl(var(--primary)/_0.25)]">
            <Sparkles className="w-3 h-3" aria-hidden />
            Rede oficial Acqualive
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold text-foreground leading-[1.05] tracking-[-0.02em]">
            Encontre um especialista Acqualive{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                perto de você
              </span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-accent via-accent/60 to-transparent"
              />
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma pessoa preparada para cuidar da sua água e assim ajudar a
            melhorar a sua saúde e da sua família através da hidratação
            funcional. Digite a sua cidade e comece uma conversa em segundos.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={onCTAClick}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground h-12 px-7 text-sm font-semibold tracking-wide shadow-[0_10px_30px_-12px_hsl(var(--primary)/_0.55),0_1px_0_hsl(0_0%_100%/_0.15)_inset] transition-shadow hover:shadow-[0_18px_44px_-14px_hsl(var(--primary)/_0.65),0_1px_0_hsl(0_0%_100%/_0.2)_inset] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Search className="w-4 h-4" aria-hidden />
              Encontrar Especialista
            </motion.button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              Atendimento humano por WhatsApp
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fade to bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
};

export default HeroMapa;
