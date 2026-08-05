import { useEffect, useState } from "react";
import { ArrowUp, List } from "lucide-react";

interface Item {
  id: string;
  numero: string;
  etiqueta: string;
}

/**
 * No mobile o índice lateral não existe. Esta barra dá ao leitor a mesma
 * noção de onde está e permite pular capítulos. O botão de topo aparece
 * apenas quando já existe rolagem suficiente para justificá-lo.
 */
const NavegacaoCapitulos = ({ itens, ativo }: { itens: Item[]; ativo: string }) => {
  const [aberto, setAberto] = useState(false);
  const [mostrarTopo, setMostrarTopo] = useState(false);

  useEffect(() => {
    const onScroll = () => setMostrarTopo(window.scrollY > 1400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const atual = itens.find((i) => i.id === ativo) ?? itens[0];

  return (
    <>
      <div className="sticky top-[57px] z-30 border-b border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper)/0.92)] backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => setAberto((a) => !a)}
          aria-expanded={aberto}
          className="container flex w-full items-center justify-between gap-3 py-3 text-left"
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--pc-amber))]">
              Cap. {atual.numero}
            </span>
            <span className="truncate text-sm font-semibold text-[hsl(var(--pc-ink))]">{atual.etiqueta}</span>
          </span>
          <List className="h-4 w-4 flex-shrink-0 text-[hsl(var(--pc-blue))]" aria-hidden />
        </button>
        {aberto && (
          <ul className="container pb-3">
            {itens.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  onClick={() => setAberto(false)}
                  className={`flex gap-3 border-l-2 py-2 pl-3 text-sm ${
                    i.id === ativo
                      ? "border-[hsl(var(--pc-blue))] font-semibold text-[hsl(var(--pc-blue))]"
                      : "border-[hsl(var(--pc-line))] text-[hsl(var(--pc-ink-soft))]"
                  }`}
                >
                  <span className="tabular-nums opacity-60">{i.numero}</span>
                  {i.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {mostrarTopo && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao início do dossiê"
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper))] text-[hsl(var(--pc-blue))] shadow-lg transition hover:bg-white"
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </button>
      )}
    </>
  );
};

export default NavegacaoCapitulos;
