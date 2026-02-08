import logoBranca from "@/assets/logo-branca.png";

const VipFooterSection = () => {
  return (
    <footer className="border-t border-[hsl(var(--vip-gold)/0.1)] py-10">
      <div className="container text-center">
        <img
          src={logoBranca}
          alt="Acqualive"
          className="h-7 w-auto mx-auto mb-4 opacity-60"
        />
        <p className="text-sm text-[hsl(var(--vip-text-muted))]">
          Uma iniciativa Acqualive para premiar quem faz da saúde uma prioridade.
        </p>
        <p className="text-xs text-[hsl(var(--vip-text-muted)/0.5)] mt-3">
          © {new Date().getFullYear()} Acqualive. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default VipFooterSection;
