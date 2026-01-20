import { Helmet } from "react-helmet-async";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FiltroHeroSection from "@/components/filtro-barro/FiltroHeroSection";
import FiltroHistorySection from "@/components/filtro-barro/FiltroHistorySection";
import FiltroWhyBestSection from "@/components/filtro-barro/FiltroWhyBestSection";
import FiltroBenefitsSection from "@/components/filtro-barro/FiltroBenefitsSection";
import FiltroAcqualiveSection from "@/components/filtro-barro/FiltroAcqualiveSection";
import FiltroComparisonSection from "@/components/filtro-barro/FiltroComparisonSection";
import FiltroFAQSection from "@/components/filtro-barro/FiltroFAQSection";
import FiltroCTASection from "@/components/filtro-barro/FiltroCTASection";

const WHATSAPP_LINK = "https://wa.me/555192928468?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Filtro%20de%20Barro%20Acqualive!";

const FiltroDeBarro = () => {
  return (
    <>
      <Helmet>
        <title>Filtro de Barro | Por Que é o Melhor do Mundo? | Acqualive</title>
        <meta 
          name="description" 
          content="Descubra por que o filtro de barro brasileiro é considerado o melhor do mundo e como o Acqualive Terracota eleva essa tradição com tecnologia de ponta." 
        />
      </Helmet>
      <main className="min-h-screen">
        <FiltroHeroSection />
        <FiltroHistorySection />
        <FiltroWhyBestSection />
        <FiltroBenefitsSection whatsappLink={WHATSAPP_LINK} />
        <FiltroAcqualiveSection whatsappLink={WHATSAPP_LINK} />
        <FiltroComparisonSection />
        <FiltroFAQSection />
        <FiltroCTASection whatsappLink={WHATSAPP_LINK} />
        <FooterSection />
        <StickyMobileCTA />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default FiltroDeBarro;
