import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";
import videoAsset from "@/assets/agua-limpa-falar-serio.mp4.asset.json";
import posterAsset from "@/assets/agua-limpa-falar-serio-poster.jpg.asset.json";

const AguaLimpaFalarSerio = () => (
  <PaginaAguaLimpa
    unlockAt={60}
    videoUrl={videoAsset.url}
    posterUrl={posterAsset.url}
    origem="agua-limpa-falar-serio"
    paginaLabel="Água Limpa (Falar Sério)"
  />
);

export default AguaLimpaFalarSerio;
