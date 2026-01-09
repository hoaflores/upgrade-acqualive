import { motion } from "framer-motion";
import { CheckCircle, Zap, Moon, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/family-acqualive.jpeg";
const benefits = [{
  icon: Zap,
  text: "Mais energia e disposição mental"
}, {
  icon: Moon,
  text: "Sono reparador e profundo"
}, {
  icon: Shield,
  text: "Imunidade blindada"
}, {
  icon: Heart,
  text: "Hidratação celular avançada"
}];
const HealthSection = () => {
  return <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/5" />
      
      {/* Decorative mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-[80px]" />
      </div>
      
      <div className="container relative">
        {/* Header centered */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            Você não está indicando um filtro.
            <br />
            <span className="text-gradient-orange">
              Você está entregando Longevidade.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Você sente na pele, literalmente, o que a água alcalina com PRAL negativo e rica em Magnésio faz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image - Larger */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-medium aspect-[4/3]">
              <img src={familyImage} alt="Família feliz reunida tomando água pura" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5,
            type: "spring"
          }} className="absolute -bottom-5 right-4 md:right-8 bg-card rounded-2xl p-4 shadow-medium border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">PRAL Negativo</p>
                  <p className="text-sm text-muted-foreground">Rica em Magnésio</p>
                </div>
              </div>
            </motion.div>
            
            {/* Second floating element */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.7,
            duration: 0.5
          }} className="absolute -top-4 left-4 md:left-8 bg-accent text-white rounded-2xl px-4 py-2.5 shadow-orange">
              <span className="font-display font-bold">+5.000</span>
              <span className="text-sm ml-1 opacity-90">famílias saudáveis</span>
            </motion.div>
          </motion.div>

          {/* Content - More compact */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{benefit.text}</p>
                </motion.div>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }} className="bg-gradient-to-br from-card to-secondary/20 rounded-2xl p-5 border-l-4 border-l-accent border border-border/50 shadow-soft">
              <p className="text-foreground leading-relaxed">
                Ao indicar a Acqualive, você tira quem você ama da{" "}
                <strong className="text-destructive">"guerra ácida"</strong> dos refrigerantes 
                e da água morta dos galões de plástico (que liberam BPA). 
                <span className="text-accent font-semibold block mt-2">
                  Seu amigo te agradecerá por essa indicação pelo resto da vida.
                </span>
              </p>
            </motion.div>
            
            {/* CTA */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }} className="mt-8">
              <Button variant="gold" size="lg" asChild className="group shadow-orange w-full sm:w-auto">
                <a href="https://wa.me/555192928468?text=Olá!%20Quero%20participar%20do%20Programa%20Embaixador%20Acqualive." target="_blank" rel="noopener noreferrer">
                  
                  Quero indicar um amigo agora
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HealthSection;