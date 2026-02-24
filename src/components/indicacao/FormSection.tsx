import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, User, Phone, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const FormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    friendName: "",
    friendPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("add-to-activecampaign", {
        body: formData,
      });

      if (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Erro ao enviar indicação",
          description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "Indicação enviada com sucesso! 🎉",
        description:
          "Nossa equipe entrará em contato com você e seu amigo em breve.",
      });

      setFormData({ name: "", phone: "", friendName: "", friendPhone: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erro ao enviar indicação",
        description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "555192928468";
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero participar do Programa Embaixador Acqualive."
  );

  return (
    <section id="formulario" className="py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-5 py-2 mb-6"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Último passo
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Pronto para <span className="text-gradient-orange">zerar</span> seu custo com água?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Preencha abaixo e deixe nossa equipe fazer o trabalho pesado por você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-neomorphic border border-border/30 relative overflow-hidden"
          >
            {/* Form gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
            
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <User className="w-4 h-4 text-muted-foreground" />
                  Seu Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                  minLength={2}
                  maxLength={100}
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Seu WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  pattern="[\d\s\(\)\-\+]{10,20}"
                  title="Insira um número de telefone válido"
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div className="pt-5 border-t border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Dados do amigo que você quer indicar:
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="friendName"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <User className="w-4 h-4 text-muted-foreground" />
                  Nome do Amigo Indicado
                </label>
                <Input
                  id="friendName"
                  name="friendName"
                  type="text"
                  value={formData.friendName}
                  onChange={handleChange}
                  placeholder="Nome do seu amigo"
                  required
                  minLength={2}
                  maxLength={100}
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="friendPhone"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  WhatsApp do Amigo
                </label>
                <Input
                  id="friendPhone"
                  name="friendPhone"
                  type="tel"
                  value={formData.friendPhone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  pattern="[\d\s\(\)\-\+]{10,20}"
                  title="Insira um número de telefone válido"
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.span>
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    ENVIAR INDICAÇÃO E GARANTIR MEU PRÊMIO
                  </>
                )}
              </Button>
            </div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <p className="text-primary-foreground/60 mb-5 text-sm">
              Prefere falar diretamente com um consultor?
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com meu Consultor Exclusivo
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
