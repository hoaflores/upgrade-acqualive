const ROWS = [
  {
    item: "Filtro de pia comum",
    chlorine: "Parcial",
    metals: "Não",
    microbio: "Não",
    ph: "Não",
    note: "Mascara o sabor. Não retira o que importa.",
  },
  {
    item: "Garrafa PET / mineral",
    chlorine: "Sim",
    metals: "Risco",
    microbio: "Risco",
    ph: "Variável",
    note: "Bisfenol, microplásticos, transporte sob calor.",
  },
  {
    item: "Osmose reversa",
    chlorine: "Sim",
    metals: "Sim",
    microbio: "Sim",
    ph: "Não",
    note: "Tira tudo. Inclusive minerais que você precisa.",
  },
  {
    item: "Acqualive (TriWay)",
    chlorine: "-99,9%",
    metals: "Sim",
    microbio: "Sim",
    ph: "Alcaliniza",
    note: "Filtra, ioniza e devolve estrutura à água.",
    highlight: true,
  },
];

const Cell = ({
  v,
  highlight,
}: {
  v: string;
  highlight?: boolean;
}) => {
  const positive = ["Sim", "98%", "Alcaliniza"].includes(v);
  return (
    <td
      className={`py-5 px-4 text-sm ${
        highlight
          ? "text-white"
          : positive
          ? "text-[hsl(var(--ds-blue-deep))] font-semibold"
          : "text-[hsl(var(--ds-muted))]"
      }`}
    >
      {v}
    </td>
  );
};

const DayanFilterFails = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7 dayan-reveal">
            <span className="ds-eyebrow text-[hsl(var(--ds-accent))]">
              <span className="dayan-num text-2xl not-italic mr-2">04</span>
              Por que o seu filtro não resolve
            </span>
            <h2 className="ds-display mt-5 text-4xl lg:text-6xl text-[hsl(var(--ds-ink))] leading-tight">
              A maioria dos filtros
              <br />
              só te dá uma{" "}
              <span className="ds-italic font-medium text-[hsl(var(--ds-accent))]">
                falsa sensação
              </span>
              <br />
              de segurança.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-10 dayan-reveal dayan-reveal-delay-1">
            <p className="text-lg text-[hsl(var(--ds-ink-soft))] leading-relaxed">
              Filtrar é o mínimo. Mineralizar, alcalinizar e estruturar é o que
              transforma água em medicina preventiva. Veja a diferença.
            </p>
          </div>
        </div>

        <div className="dayan-reveal overflow-x-auto rounded-sm border border-[hsl(var(--ds-line))]">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-[hsl(var(--ds-surface))] text-left">
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Solução
                </th>
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Cloro
                </th>
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Metais
                </th>
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Bactérias
                </th>
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  pH ideal
                </th>
                <th className="py-4 px-4 ds-eyebrow text-[hsl(var(--ds-muted))]">
                  Observação
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.item}
                  className={`border-t border-[hsl(var(--ds-line))] ${
                    r.highlight ? "bg-[hsl(var(--ds-blue-deep))]" : "bg-white"
                  }`}
                >
                  <td
                    className={`py-5 px-4 font-semibold ${
                      r.highlight ? "text-white" : "text-[hsl(var(--ds-ink))]"
                    }`}
                  >
                    {r.item}
                    {r.highlight && (
                      <span className="ml-2 ds-eyebrow text-[hsl(var(--ds-accent))]">
                        ★ recomendado
                      </span>
                    )}
                  </td>
                  <Cell v={r.chlorine} highlight={r.highlight} />
                  <Cell v={r.metals} highlight={r.highlight} />
                  <Cell v={r.microbio} highlight={r.highlight} />
                  <Cell v={r.ph} highlight={r.highlight} />
                  <td
                    className={`py-5 px-4 text-sm ${
                      r.highlight ? "text-white/80" : "text-[hsl(var(--ds-muted))]"
                    }`}
                  >
                    {r.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DayanFilterFails;
