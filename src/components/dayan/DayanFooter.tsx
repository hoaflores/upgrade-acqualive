const DayanFooter = () => {
  return (
    <footer className="relative ds-dark dayan-grain py-16 lg:py-20">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="text-2xl lg:text-3xl text-white font-semibold tracking-tight">
              Dr. Dayan Siebra <span className="text-white/60">×</span> Acqualive
            </div>
            <p className="mt-4 text-white/60 max-w-md text-sm lg:text-base">
              Cirurgia cardiovascular e saúde hídrica. Famílias que decidiram
              parar de adoecer aos poucos.
            </p>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-8 text-sm text-white/70">
            <div>
              <span className="ds-eyebrow text-white/40">Atendimento</span>
              <ul className="mt-3 space-y-2">
                <li>WhatsApp: (51) 99292-8468</li>
                <li>Seg a Sáb, 9h às 19h</li>
                <li>Em até 10x sem juros</li>
                <li>Frete grátis (consulte regiões)</li>
              </ul>
            </div>
            <div>
              <span className="ds-eyebrow text-white/40">A marca</span>
              <ul className="mt-3 space-y-2">
                <li>acqualive.com.br</li>
                <li>Garantia de fábrica</li>
                <li>Suporte vitalício</li>
                <li>Refis com cadência inteligente</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} Acqualive. Todos os direitos reservados.</span>
          <span>
            Conteúdo informativo. Não substitui orientação médica individual.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default DayanFooter;
