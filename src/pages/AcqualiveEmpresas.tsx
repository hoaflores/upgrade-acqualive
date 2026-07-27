import { Helmet } from "react-helmet-async";
import HeroEmpresas from "@/components/empresas/HeroEmpresas";
import {
  DorGaloes,
  SolucaoDuo,
  AntesDepois,
  Segmentos,
  ProvaAutoridade,
} from "@/components/empresas/SecoesEmpresas";
import SimuladorEconomia from "@/components/empresas/SimuladorEconomia";
import FormAvaliacao from "@/components/empresas/FormAvaliacao";
import { FaqEmpresas, NiionClick, StickyCTAEmpresas } from "@/components/empresas/FaqNiion";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { WHATSAPP_EMPRESAS } from "@/components/empresas/dados";

const AcqualiveEmpresas = () => {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Helmet>
        <title>Acqualive Empresas | Água natural e fresquinha sem galão</title>
        <meta
          name="description"
          content="Acabe com o galão na sua empresa. O Acqualive DUO entrega água purificada natural e fresquinha no ponto de uso. Solicite uma avaliação gratuita."
        />
        <meta property="og:title" content="Acqualive Empresas | Água natural e fresquinha sem galão" />
        <meta
          property="og:description"
          content="O Acqualive DUO entrega água purificada natural e fresquinha no ponto de uso, sem estoque de galões. Avaliação gratuita para a sua empresa."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <HeroEmpresas />
      <ScrollReveal><DorGaloes /></ScrollReveal>
      <ScrollReveal><SolucaoDuo /></ScrollReveal>
      <ScrollReveal><AntesDepois /></ScrollReveal>
      <ScrollReveal><Segmentos /></ScrollReveal>
      <ScrollReveal><SimuladorEconomia /></ScrollReveal>
      <ScrollReveal><ProvaAutoridade /></ScrollReveal>
      <ScrollReveal><FaqEmpresas /></ScrollReveal>
      <ScrollReveal><FormAvaliacao /></ScrollReveal>
      <ScrollReveal><NiionClick /></ScrollReveal>

      <FooterSection
        whatsappLink={WHATSAPP_EMPRESAS}
        ctaLabel="FALAR COM A ACQUALIVE EMPRESAS"
        heading="Pronto para tirar o galão da sua empresa?"
        showUrgencyBanner={false}
      />

      <StickyCTAEmpresas />
    </main>
  );
};

export default AcqualiveEmpresas;
