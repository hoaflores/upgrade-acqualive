import HeroSection from "@/components/HeroSection";
import WhyUpgradeSection from "@/components/WhyUpgradeSection";
import DonationSection from "@/components/DonationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyUpgradeSection />
      <DonationSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
