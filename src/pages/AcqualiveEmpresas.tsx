import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeroEmpresas from "@/components/empresas/HeroEmpresas";
import { DorGaloes, SolucaoDuo } from "@/components/empresas/SecoesEmpresas";
import ScrollReveal from "@/components/ScrollReveal";
import NavEmpresas from "@/components/empresas/NavEmpresas";
import { WHATSAPP_EMPRESAS } from "@/components/empresas/dados";

const AntesDepois = lazy(() =>
  import("@/components/empresas/SecoesEmpresas").then((m) => ({ default: m.AntesDepois }))
);
const Segmentos = lazy(() =>
  import("@/components/empresas/SecoesEmpresas").then((m) => ({ default: m.Segmentos }))
);
const ComoFunciona = lazy(() =>
  import("@/components/empresas/SecoesEmpresas").then((m) => ({ default: m.ComoFunciona }))
);
const ProvaAutoridade = lazy(() =>
  import("@/components/empresas/SecoesEmpresas").then((m) => ({ default: m.ProvaAutoridade }))
);
const CarrosselMarcas = lazy(() =>
  import("@/components/empresas/MarcasEmpresas").then((m) => ({ default: m.CarrosselMarcas }))
);
const DepoimentosEmpresas = lazy(() =>
  import("@/components/empresas/MarcasEmpresas").then((m) => ({ default: m.DepoimentosEmpresas }))
);
const SimuladorEconomia = lazy(() => import("@/components/empresas/SimuladorEconomia"));
const FormAvaliacao = lazy(() => import("@/components/empresas/FormAvaliacao"));
const FaqEmpresas = lazy(() =>
  import("@/components/empresas/FaqNiion").then((m) => ({ default: m.FaqEmpresas }))
);
const NiionClick = lazy(() =>
  import("@/components/empresas/FaqNiion").then((m) => ({ default: m.NiionClick }))
);
const StickyCTAEmpresas = lazy(() =>
  import("@/components/empresas/FaqNiion").then((m) => ({ default: m.StickyCTAEmpresas }))
);
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Placeholder = () => <div className="min-h-[40vh]" aria-hidden />;

const AcqualiveEmpresas = () => {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Helmet>
        <title>Acqualive Empresas | Água gelada e natural sem galão</title>
        <meta
          name="description"
          content="Acabe com o custo do galão. O Acqualive DUO entrega água purificada gelada e natural no ponto de uso da sua empresa. Avaliação gratuita."
        />
        <meta property="og:title" content="Acqualive Empresas | Água gelada e natural sem galão" />
        <meta
          property="og:description"
          content="O Acqualive DUO entrega água purificada gelada e natural no ponto de uso, sem estoque de galões e sem custo por litro. Avaliação gratuita."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <NavEmpresas />
      <HeroEmpresas />
      <ScrollReveal variant="up"><DorGaloes /></ScrollReveal>
      <ScrollReveal variant="left"><SolucaoDuo /></ScrollReveal>

      <Suspense fallback={<Placeholder />}>
        <ScrollReveal variant="zoom"><AntesDepois /></ScrollReveal>
        <ScrollReveal variant="right"><Segmentos /></ScrollReveal>
        <ScrollReveal variant="up"><BeneficiosPessoas /></ScrollReveal>
        <CarrosselMarcas />
        <ScrollReveal variant="zoom"><SimuladorEconomia /></ScrollReveal>
        <ScrollReveal variant="up"><ComoFunciona /></ScrollReveal>
        <ScrollReveal variant="up"><ProvaAutoridade /></ScrollReveal>
        <ScrollReveal variant="up"><DepoimentosEmpresas /></ScrollReveal>
        <ScrollReveal variant="left"><FaqEmpresas /></ScrollReveal>
        <ScrollReveal variant="up"><FormAvaliacao /></ScrollReveal>
        <ScrollReveal variant="right"><NiionClick /></ScrollReveal>

        <FooterSection
          whatsappLink={WHATSAPP_EMPRESAS}
          ctaLabel="FALAR COM A ACQUALIVE EMPRESAS"
          heading="Pronto para tirar o galão da sua empresa?"
          showUrgencyBanner={false}
        />

        <StickyCTAEmpresas />
      </Suspense>
    </main>
  );
};

export default AcqualiveEmpresas;
