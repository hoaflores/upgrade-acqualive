import { Helmet } from "react-helmet-async";
import VipHeroSection from "@/components/vip/VipHeroSection";
import VipBenefitsSection from "@/components/vip/VipBenefitsSection";
import VipVideoChallenge from "@/components/vip/VipVideoChallenge";
import VipStepsSection from "@/components/vip/VipStepsSection";
import VipFAQSection from "@/components/vip/VipFAQSection";
import VipFooterSection from "@/components/vip/VipFooterSection";
import iconAcqualive from "@/assets/icon-acqualive.png";

const WHATSAPP_LINK =
  "https://wa.me/555192928468?text=Olá,%20quero%20saber%20mais%20sobre%20o%20Ecossistema%20VIP%20Acqualive!";

const ComunidadeAcqualive = () => {
  return (
    <>
      <Helmet>
        <title>Ecossistema VIP Acqualive — Privilégios Exclusivos</title>
        <meta
          name="description"
          content="Acesse ofertas antecipadas, lives com especialistas e descontos exclusivos. O Ecossistema VIP é para quem já escolheu a melhor água."
        />
      </Helmet>
      <main className="bg-[hsl(var(--vip-bg))] text-[hsl(var(--vip-text))] min-h-screen overflow-hidden">
        {/* Minimal header */}
        <header className="absolute top-0 left-0 right-0 z-50 py-5">
          <div className="container flex justify-center">
            <img src={iconAcqualive} alt="Acqualive" className="h-10 w-auto opacity-80" />
          </div>
        </header>

        <VipHeroSection whatsappLink={WHATSAPP_LINK} />
        <VipBenefitsSection />
        <VipVideoChallenge />
        <VipStepsSection />
        <VipFAQSection />
        <VipFooterSection whatsappLink={WHATSAPP_LINK} />
      </main>
    </>
  );
};

export default ComunidadeAcqualive;
