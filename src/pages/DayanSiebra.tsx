import { Helmet } from "react-helmet-async";
import { useDayanReveal } from "@/hooks/useDayanReveal";
import DayanNav from "@/components/dayan/DayanNav";
import DayanHero from "@/components/dayan/DayanHero";
import DayanVideos from "@/components/dayan/DayanVideos";
import DayanProblem from "@/components/dayan/DayanProblem";
import DayanFilterFails from "@/components/dayan/DayanFilterFails";
import DayanSolution from "@/components/dayan/DayanSolution";
import DayanBenefits from "@/components/dayan/DayanBenefits";
import DayanProof from "@/components/dayan/DayanProof";
import DayanTestimonials from "@/components/dayan/DayanTestimonials";
import DayanOffer from "@/components/dayan/DayanOffer";
import DayanFAQ from "@/components/dayan/DayanFAQ";
import DayanFooter from "@/components/dayan/DayanFooter";

const DayanSiebra = () => {
  useDayanReveal();

  return (
    <>
      <Helmet>
        <title>Dr. Dayan Siebra, a água que cura e a água que adoece. Acqualive</title>
        <meta
          name="description"
          content="Carta aberta do Dr. Dayan Siebra sobre a água que você bebe. Os 4 venenos invisíveis, os 6 pilares da água ideal e por que ele recomenda o Acqualive."
        />
        <meta property="og:title" content="Dr. Dayan Siebra × Acqualive" />
        <meta
          property="og:description"
          content="A água que você bebe está te enferrujando. Carta aberta de um médico."
        />
        <link rel="canonical" href="https://paginas.acqualive.com.br/dayan-siebra" />
      </Helmet>

      <main className="dayan-page min-h-screen">
        <DayanNav />
        <DayanHero />
        <DayanVideos />
        <DayanProblem />
        <DayanFilterFails />
        <DayanSolution />
        <DayanProof />
        <DayanTestimonials />
        <DayanOffer />
        <DayanFAQ />
        <DayanFooter />
      </main>
    </>
  );
};

export default DayanSiebra;
