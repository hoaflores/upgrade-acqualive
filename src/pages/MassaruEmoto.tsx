import { Helmet } from "react-helmet-async";
import EmotoHeroSection from "@/components/emoto/EmotoHeroSection";
import EmotoMicroscopeSection from "@/components/emoto/EmotoMicroscopeSection";
import EmotoProductSection from "@/components/emoto/EmotoProductSection";
import EmotoWordsSection from "@/components/emoto/EmotoWordsSection";
import EmotoTestimonialsSection from "@/components/emoto/EmotoTestimonialsSection";
import EmotoCTASection from "@/components/emoto/EmotoCTASection";
import EmotoFloatingParticles from "@/components/emoto/EmotoFloatingParticles";

const MassaruEmoto = () => {
  return (
    <>
      <Helmet>
        <title>A Ciência da Água Viva | Acqualive</title>
        <meta
          name="description"
          content="Descubra como a água responde às suas emoções. Baseado nos estudos do Dr. Masaru Emoto sobre a memória da água e cristais de gelo."
        />
      </Helmet>

      <div className="emoto-page bg-emoto-bg min-h-screen overflow-x-hidden">
        <EmotoFloatingParticles />
        <EmotoHeroSection />
        <EmotoMicroscopeSection />
        <EmotoProductSection />
        <EmotoWordsSection />
        <EmotoTestimonialsSection />
        <EmotoCTASection />
      </div>
    </>
  );
};

export default MassaruEmoto;
