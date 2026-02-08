import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Crown, Users } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Review ou Vídeo",
    description:
      "Escolha como quer entrar: Review no site ou Vídeo de 1 minuto.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Validação",
    description:
      "Nosso time confirma sua ação em tempo real.",
  },
  {
    icon: Crown,
    number: "03",
    title: "Acesso VIP",
    description:
      "Você entra no Canal de Transmissão e já recebe seu cupom (se optou pelo vídeo).",
  },
  {
    icon: Users,
    number: "04",
    title: "Indicação",
    description:
      "Use seu Voucher de Saúde para indicar amigos e zerar seu custo com refis no futuro.",
  },
];

const VipStepsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />

      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
            O Caminho
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            Como o Ciclo Funciona
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-px bg-gradient-to-r from-[hsl(var(--vip-gold)/0.3)] to-[hsl(var(--vip-gold)/0.05)]" />
              )}

              <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--vip-gold)/0.1)] border border-[hsl(var(--vip-gold)/0.2)] flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-[hsl(var(--vip-gold))]" />
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[hsl(var(--vip-gold)/0.6)] mb-2 block">
                PASSO {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[hsl(var(--vip-text-muted))] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipStepsSection;
