import PaginaAguaLimpa from "@/components/agua-limpa/PaginaAguaLimpa";

/** Duracao do video: 90s. Um terco (30s) + 10s = 40s. */
const AguaLimpa = () => <PaginaAguaLimpa unlockAt={40} origem="agua-limpa" paginaLabel="Água Limpa" />;

export default AguaLimpa;
