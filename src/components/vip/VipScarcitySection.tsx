import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const VipScarcitySection = () => {
  return (
    <section className="py-20 lg:py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[500px] bg-[hsl(var(--vip-gold)/0.03)] blur-[100px]" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center rounded-2xl border border-[hsl(var(--vip-gold)/0.2)] bg-gradient-to-b from-[hsl(var(--vip-surface))] to-[hsl(var(--vip-bg))] p-10 md:p-14"
        >
          <Lock className="w-8 h-8 text-[hsl(var(--vip-gold))] mx-auto mb-6" />
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground leading-snug">
            As vagas para as Lives exclusivas são limitadas pela capacidade de
            transmissão.{" "}
            <span className="text-[hsl(var(--vip-gold))]">
              Quem está dentro recebe o link primeiro.
            </span>{" "}
            Quem está fora, perde o conteúdo e os cupons.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VipScarcitySection;
