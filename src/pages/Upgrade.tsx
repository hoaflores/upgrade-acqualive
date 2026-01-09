import HeroSection from "@/components/HeroSection";
import WhyUpgradeSection from "@/components/WhyUpgradeSection";
import ProductShowcase from "@/components/ProductShowcase";
import DonationSection from "@/components/DonationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const Upgrade = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScrollReveal>
        <WhyUpgradeSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>
      <ScrollReveal>
        <DonationSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <FooterSection />
      <StickyMobileCTA />
      <FloatingWhatsApp />
    </main>
  );
};

export default Upgrade;
