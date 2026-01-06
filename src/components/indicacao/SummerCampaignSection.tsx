import { motion } from "framer-motion";
import { Trophy, Diamond, Flame, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SummerCampaignSection = () => {
  return (
    <section className="py-28 bg-gradient-summer relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-[100px]" />
      </div>
      
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star className="w-4 h-4 text-white/20 fill-white/20" />
          </motion.div>
        ))}
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/20"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Exclusivo — Campanha de Verão
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            O jogo ficou maior:
            <br />
            <span className="text-gold-light">Ganhe Status de Lenda.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Além de garantir seus refis a cada venda, suas indicações feitas entre{" "}
            <strong>Dezembro e Junho</strong> desbloqueiam prêmios extras:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {/* Prize Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Sorteio Premium
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Concorra a <strong className="text-foreground">1 ANO DE ÁGUA GRÁTIS</strong> — 2 kits de refis para seu filtro, além dos que você já ganha pela indicação.
              </p>
            </div>
          </motion.div>

          {/* Prize Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Diamond className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💎</span>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Status Embaixador Vitalício
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Acumule 5 indicações convertidas e desbloqueie{" "}
                <strong className="text-foreground">10% de DESCONTO VITALÍCIO*</strong> na compra de produtos Acqualive por 3 anos.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bonus indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Gift className="w-5 h-5 text-gold-light" />
            <span className="text-white font-medium">
              Bônus: Cada indicação = <strong className="text-gold-light">+1 número</strong> para o sorteio
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#formulario" className="group">
              ATIVAR MINHA CAMPANHA DE VERÃO
              <Flame className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerCampaignSection;
