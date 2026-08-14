import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";
import videoAsset from "@/assets/agua-limpa-nagle.mp4.asset.json";
import posterAsset from "@/assets/agua-limpa-nagle-poster.jpg.asset.json";

const AguaLimpaFalarSerio = () => (
  <PaginaAguaLimpa
    unlockAt={60}
    videoUrl={videoAsset.url}
    posterUrl={posterAsset.url}
    vertical
    origem="agua-limpa-falar-serio"
    paginaLabel="Água Limpa (Falar Sério)"
  />
);

export default AguaLimpaFalarSerio;
