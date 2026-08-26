import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";
import videoAsset from "@/assets/agua-limpa-ph.mp4.asset.json";
import posterAsset from "@/assets/agua-limpa-ph-poster.jpg.asset.json";

const AguaLimpaPh = () => (
  <PaginaAguaLimpa
    unlockAt={60}
    videoUrl={videoAsset.url}
    posterUrl={posterAsset.url}
    vertical
    origem="agua-limpa-ph"
    paginaLabel="Água Limpa (pH)"
    whatsappNumber="5551994896709"
    contatoNome="Alex"
  />
);

export default AguaLimpaPh;
