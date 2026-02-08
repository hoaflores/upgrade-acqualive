import { motion } from "framer-motion";
import { Zap, Brain, Video, BellOff } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Economia Prioritária",
    description:
      "Promoções relâmpago e descontos que nunca chegam ao público geral.",
  },
  {
    icon: Brain,
    title: "Conhecimento de Ponta",
    description:
      "Lives quinzenais com especialistas em saúde, pH e performance humana.",
  },
  {
    icon: Video,
    title: "Desafio de 1 Minuto",
    description:
      "A mecânica exclusiva onde seu depoimento em vídeo vale 50% de desconto imediato no refil.",
  },
  {
    icon: BellOff,
    title: "Zero Spam",
    description:
      "Canal silenciado. Apenas o que importa para o seu bolso e sua saúde.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const VipBenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />
      </div>

      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
            The Insider Benefits
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            O que acontece dentro do Ecossistema VIP?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-[hsl(var(--vip-gold)/0.12)] bg-[hsl(var(--vip-surface))] p-8 hover:border-[hsl(var(--vip-gold)/0.3)] transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--vip-gold)/0.1)] flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-[hsl(var(--vip-gold))]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[hsl(var(--vip-text-muted))]">
                    {b.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipBenefitsSection;
