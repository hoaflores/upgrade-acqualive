import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import terracotaLifestyle from "@/assets/terracota-lifestyle.png";

interface FiltroBenefitsSectionProps {
  whatsappLink: string;
}

const benefits = [
  "Elimina 99,9% de bactérias e vírus",
  "Remove cloro, agrotóxicos e metais pesados",
  "Mantém a água naturalmente gelada",
  "Preserva minerais essenciais",
  "Não usa energia elétrica",
  "Vida útil de décadas",
  "100% sustentável e ecológico",
  "Melhora significativamente o sabor",
];

const FiltroBenefitsSection = ({ whatsappLink }: FiltroBenefitsSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/10 to-primary/10 rounded-3xl blur-2xl opacity-50 scale-95" />
              <img
                src={terracotaLifestyle}
                alt="Filtro de Barro em ambiente familiar"
                className="relative w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-bold text-accent uppercase tracking-wider mb-4">
              Benefícios Comprovados
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Água Pura Como a <span className="text-gradient-water">Natureza Criou</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              O filtro de barro não apenas purifica - ele transforma a água da torneira 
              em algo muito mais saudável e saboroso.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              variant="cta"
              size="lg"
              asChild
              className="group"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>QUERO ÁGUA PURA EM CASA</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroBenefitsSection;
