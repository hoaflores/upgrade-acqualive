import { Helmet } from "react-helmet-async";
import TerracotaHeroSection from "@/components/terracota/TerracotaHeroSection";
import TerracotaBenefitsSection from "@/components/terracota/TerracotaBenefitsSection";
import TerracotaTechSection from "@/components/terracota/TerracotaTechSection";
import TerracotaComparisonSection from "@/components/terracota/TerracotaComparisonSection";
import TerracotaFAQSection from "@/components/terracota/TerracotaFAQSection";
import TerracotaCTASection from "@/components/terracota/TerracotaCTASection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Purificador%20Acqualive%20Terracota!";

const Terracota = () => {
  return (
    <>
      <Helmet>
        <title>Purificador Acqualive Terracota | A Evolução do Filtro de Barro</title>
        <meta 
          name="description" 
          content="Descubra o Purificador Acqualive Terracota: design vintage, água alcalina e ionizada, rica em magnésio. A evolução do tradicional filtro de barro." 
        />
      </Helmet>
      <main className="min-h-screen bg-background">
        <TerracotaHeroSection whatsappLink={WHATSAPP_LINK} />
        <ScrollReveal>
          <TerracotaBenefitsSection />
        </ScrollReveal>
        <ScrollReveal>
          <TerracotaTechSection />
        </ScrollReveal>
        <ScrollReveal>
          <TerracotaComparisonSection />
        </ScrollReveal>
        <ScrollReveal>
          <TerracotaFAQSection />
        </ScrollReveal>
        <ScrollReveal>
        <TerracotaCTASection whatsappLink={WHATSAPP_LINK} />
        </ScrollReveal>
        <FooterSection />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Terracota;
