import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";

/** Formulario padronizado: abre em 60s. */
const AguaLimpa = () => (
  <PaginaAguaLimpa unlockAt={60} vertical origem="agua-limpa" paginaLabel="Água Limpa" />
);

export default AguaLimpa;
