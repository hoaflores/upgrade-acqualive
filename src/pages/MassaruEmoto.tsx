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
        <meta property="og:title" content="A Ciência da Água Viva | Acqualive" />
        <meta
          property="og:description"
          content="Os estudos do Dr. Masaru Emoto sobre a memória da água e os cristais de gelo, e o que eles revelam sobre a água que você bebe."
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "A Ciência da Água Viva",
            description:
              "Os estudos do Dr. Masaru Emoto sobre a memória da água e os cristais de gelo.",
            inLanguage: "pt-BR",
            mainEntityOfPage: "https://paginas.acqualive.com.br/massaru-emoto",
            publisher: { "@type": "Organization", name: "Acqualive" },
          })}
        </script>
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
