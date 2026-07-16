import { motion } from "framer-motion";
import { Smartphone, Handshake, Droplets, Quote, Heart, Users, Shield, Bone, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
const steps = [{
  icon: Smartphone,
  title: "Você Indica",
  description: "Compartilhe o nome e WhatsApp de amigos ou familiares que merecem beber a melhor água do mundo.",
  color: "primary"
}, {
  icon: Handshake,
  title: "Nós Cuidamos de Tudo",
  description: "Nossa equipe entra em contato com uma condição especial, exclusiva para indicados.",
  color: "accent"
}, {
  icon: Droplets,
  title: "Vocês Dois Ganham",
  description: "Seu amigo ganha saúde com água alcalina. Você ganha 1 Kit de Refis grátis assim que a compra for confirmada.",
  color: "orange"
}];
const healthBenefits = [{
  icon: Activity,
  text: "Controle glicêmico"
}, {
  icon: Shield,
  text: "Imunidade fortalecida"
}, {
  icon: Bone,
  text: "Saúde óssea"
}, {
  icon: Brain,
  text: "Clareza mental"
}];
const HowItWorksSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section className="py-28 bg-gradient-to-b from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Elegant mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_hsl(21_89%_55%_/_0.05),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(215_62%_31%_/_0.05),_transparent_60%)]" />
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-[80px]" animate={{
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 6,
      repeat: Infinity
    }} />
      <motion.div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-[100px]" animate={{
      scale: [1.1, 1, 1.1]
    }} transition={{
      duration: 8,
      repeat: Infinity
    }} />

      <div className="container relative">
        {/* STORYTELLING SECTION */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
            <Heart className="w-4 h-4" />
            Por que criamos este programa
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            A Acqualive cresceu graças a{" "}
            <span className="text-gradient-orange">você</span>.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              A maior parte dos nossos clientes chegou até nós por uma indicação. 
              Alguém que experimentou a diferença na própria saúde e{" "}
              <strong className="text-foreground">não conseguiu ficar calado</strong>.
            </p>
            
            <p>
              Isso nos mostrou algo importante: quando o produto é realmente bom, 
              as pessoas naturalmente querem compartilhar com quem amam.{" "}
              <strong className="text-foreground">
                A melhor validação vem de quem já vive a transformação.
              </strong>
            </p>
            
            <p>
              Por isso criamos uma forma de{" "}
              <span className="text-accent font-semibold">retribuir essa confiança</span>. 
              Quando você indica alguém, não está vendendo nada, está presenteando 
              com a possibilidade de uma vida mais saudável.
            </p>
          </div>

          {/* Health benefits showcase */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
            <p className="text-foreground font-semibold mb-6 text-lg">
              Quem você indica pode conquistar:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthBenefits.map((benefit, index) => <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-background/80 border border-border/30">
                  <benefit.icon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>)}
            </div>
            <p className="mt-6 text-muted-foreground">
              Diabetes, obesidade, desgaste ósseo, perda de massa magra... 
              <strong className="text-foreground"> A água certa faz diferença real.</strong>
            </p>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
          <Users className="w-6 h-6 text-accent" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* HOW IT WORKS TITLE */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Como <span className="text-gradient-blue">funciona</span>?
          </h2>
          <p className="text-xl md:text-2xl font-display font-semibold">
            <span className="text-gradient-orange">1 Amigo que compra</span>
            <span className="text-muted-foreground"> = </span>
            <span className="text-foreground">1 Kit Refil grátis (~R$ 457,00)</span>
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {steps.map((step, index) => <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 h-full border border-border/50 hover:border-accent/30 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-gold-light text-white flex items-center justify-center font-display font-bold text-xl shadow-orange rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${step.color === "primary" ? "bg-primary/10 text-primary" : step.color === "accent" ? "bg-accent/10 text-accent" : "bg-accent/10 text-accent"}`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4 relative">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-6 w-10 lg:w-12">
                  <div className="h-0.5 bg-gradient-to-r from-border via-accent/30 to-transparent" />
                </div>}
            </motion.div>)}
        </motion.div>

        {/* Testimonial Box */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="max-w-3xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-10 md:p-12 text-center shadow-elevated overflow-hidden border border-white/10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />
            
            <Quote className="w-12 h-12 text-accent/60 mx-auto mb-4 relative" />
            
            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-6 relative font-medium">
              Indiquei meus 3 irmãos e 2 vizinhos. Resultado: já garanti água pura para minha casa pelos próximos anos sem gastar um centavo!
            </p>
            <div className="flex items-center justify-center gap-3 relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <p className="text-primary-foreground/90 font-semibold">
                Maria S. — Cliente Acqualive
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="text-center">
          <Button variant="gold" size="xl" asChild className="group shadow-orange">
            <a href="https://wa.me/555192928468?text=Ol%C3%A1!%20Gostaria%20de%20indicar%20um%20amigo%20para%20comprar%20um%20Purificador%20Acqualive%20e%20ganhar%20meu%20kit%20refil%20gr%C3%A1tis!" target="_blank" rel="noopener noreferrer">
              
              Falar com meu Consultor Exclusivo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default HowItWorksSection;