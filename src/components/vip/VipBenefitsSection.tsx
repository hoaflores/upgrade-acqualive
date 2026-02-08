import { motion } from "framer-motion";
import { Gem, Mic, Coins, BellOff } from "lucide-react";

const benefits = [
  {
    icon: Gem,
    emoji: "💎",
    title: "Ofertas Antecipadas",
    description:
      "Promoções liberadas para você 48h antes do site oficial.",
  },
  {
    icon: Mic,
    emoji: "🎙️",
    title: "Lives Quinzenais",
    description:
      "Encontros exclusivos com especialistas em saúde e biohacking.",
  },
  {
    icon: Coins,
    emoji: "💰",
    title: "Recorrência Inteligente",
    description:
      "O único lugar onde você aprende a ganhar seu kit de refis totalmente grátis através de indicações.",
  },
  {
    icon: BellOff,
    emoji: "🚫",
    title: "Zero Ruído",
    description:
      "Um canal de transmissão silenciado. Sem \"bom dia\", apenas o que importa.",
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
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
            Por que ser um Membro VIP?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            O que acontece dentro do Ecossistema VIP?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[hsl(var(--vip-text-muted))] max-w-2xl mx-auto mb-14 text-base"
        >
          Não é apenas um grupo. É onde a ciência da hidratação encontra a economia real.
        </motion.p>

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
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--vip-gold)/0.1)] flex items-center justify-center text-xl">
                  {b.emoji}
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
