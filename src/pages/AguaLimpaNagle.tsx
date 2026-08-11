import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";
import videoAsset from "@/assets/agua-limpa-nagle.mp4.asset.json";
import posterAsset from "@/assets/agua-limpa-nagle-poster.jpg.asset.json";

const AguaLimpaNagle = () => (
  <PaginaAguaLimpa
    unlockAt={69}
    videoUrl={videoAsset.url}
    posterUrl={posterAsset.url}
    vertical
    origem="agua-limpa-nagle"
    paginaLabel="Água Limpa (Nagle)"
  />
);

export default AguaLimpaNagle;
