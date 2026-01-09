import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/indicacao/HeroSection";
import HowItWorksSection from "@/components/indicacao/HowItWorksSection";
import HealthSection from "@/components/indicacao/HealthSection";
import SummerCampaignSection from "@/components/indicacao/SummerCampaignSection";
import FAQSection from "@/components/indicacao/FAQSection";
import FormSection from "@/components/indicacao/FormSection";
import FooterSection from "@/components/indicacao/FooterSection";
import FloatingWhatsAppIndicacao from "@/components/indicacao/FloatingWhatsAppIndicacao";

const ProgramaIndicacao = () => {
  return (
    <>
      <Helmet>
        <title>Programa Embaixador Acqualive | Ganhe Refis Grátis</title>
        <meta
          name="description"
          content="Transforme amigos em parceiros de saúde. Indique e ganhe 1 Kit de Refis completo a cada indicação que adquirir um Acqualive. Sem sorteios, sem limites."
        />
        <meta
          name="keywords"
          content="Acqualive, água alcalina, programa embaixador, refis grátis, água pura, saúde"
        />
        <link rel="canonical" href="https://acqualive.com.br/programa-de-indicacao" />
      </Helmet>

      <main>
        <HeroSection />
        <HowItWorksSection />
        <HealthSection />
        <SummerCampaignSection />
        <FAQSection />
        <FormSection />
        <FooterSection />
      </main>
      
      <FloatingWhatsAppIndicacao />
    </>
  );
};

export default ProgramaIndicacao;
