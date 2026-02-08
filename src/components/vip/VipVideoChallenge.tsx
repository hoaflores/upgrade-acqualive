import { motion } from "framer-motion";
import { Video } from "lucide-react";

const VipVideoChallenge = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--vip-gold)/0.15)] to-transparent" />

      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[hsl(var(--vip-surface))] to-[hsl(var(--vip-bg))] border border-[hsl(var(--vip-gold)/0.2)] flex flex-col items-center justify-center p-8">
              <div className="w-20 h-20 rounded-full bg-[hsl(var(--vip-gold)/0.15)] flex items-center justify-center mb-6">
                <Video className="w-10 h-10 text-[hsl(var(--vip-gold))]" />
              </div>
              <div className="text-center">
                <span className="text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--vip-gold))] to-[hsl(var(--vip-gold-light))]">
                  60s
                </span>
                <p className="text-sm text-[hsl(var(--vip-text-muted))] mt-2">
                  Apenas 1 minuto do seu tempo
                </p>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full border border-[hsl(var(--vip-gold)/0.1)] pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border border-[hsl(var(--vip-gold)/0.08)] pointer-events-none" />
            </div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(var(--vip-gold))] mb-3 block">
              O Desafio de 1 Minuto
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-snug">
              O vídeo mais lucrativo da sua galeria.
            </h2>
            <p className="text-[hsl(var(--vip-text-muted))] leading-relaxed mb-6">
              Não buscamos produções de Hollywood. Queremos sua verdade. Conte
              como a Acqualive mudou sua rotina em até 60 segundos.
            </p>
            <p className="text-[hsl(var(--vip-text-muted))] leading-relaxed">
              O prêmio?{" "}
              <span className="text-[hsl(var(--vip-gold))] font-semibold">
                Metade do valor do seu próximo kit de manutenção garantido.
              </span>{" "}
              É a nossa forma de agradecer por você espalhar saúde.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VipVideoChallenge;
