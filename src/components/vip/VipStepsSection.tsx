import { motion } from "framer-motion";
import { Star, ShieldCheck, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  whatsappLink: string;
}

const steps = [
  {
    icon: Star,
    number: "01",
    title: "Deixe um Review 5 estrelas no site",
    description: "Compartilhe sua experiência real com a água Acqualive.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Nossa equipe valida sua satisfação",
    description: "Confirmamos seu review e ativamos seu perfil VIP.",
  },
  {
    icon: LinkIcon,
    number: "03",
    title: "Você recebe o link VIP",
    description: "Acesso imediato ao canal exclusivo de privilégios.",
  },
];

const VipStepsSection = ({ whatsappLink }: Props) => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />

      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
            O Requisito
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            Como garantir sua entrada?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
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

        <div className="text-center">
          <Button variant="gold" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              DEIXAR MEU REVIEW E LIBERAR MEU ACESSO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VipStepsSection;
