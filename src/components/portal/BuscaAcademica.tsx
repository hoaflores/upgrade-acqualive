import { useEffect, useMemo, useState } from "react";
import { Search, Sparkles, Loader2, ArrowUpRight, BookOpen } from "lucide-react";
import { REFERÊNCIAS } from "@/data/portal-cientifico";
import { buscarPostsPorTermo, type PostBlog } from "./portalUtils";
import { pontuarReferências, responder, rótuloConfiança } from "./respostaEngine";
import type { Referência } from "@/data/portal-cientifico";

interface Props {
  onAbrirArtigo: (r: Referência) => void;
}

const EXEMPLOS = [
  "água alcalina ajuda no refluxo?",
  "tenho pedra nos rins, o que a água muda?",
  "melhora o cansaço e a disposição?",
  "o que é PRAL negativo?",
  "quanto de água devo beber por dia?",
  "galão de plástico solta microplástico?",
];

const BuscaAcademica = ({ onAbrirArtigo }: Props) => {
  const [consulta, setConsulta] = useState("");
  const [termo, setTermo] = useState("");
  const [posts, setPosts] = useState<PostBlog[]>([]);
  const [carregandoPosts, setCarregandoPosts] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTermo(consulta.trim()), 350);
    return () => clearTimeout(t);
  }, [consulta]);

  useEffect(() => {
    if (termo.length < 3) {
      setPosts([]);
      return;
    }
    let ativo = true;
    setCarregandoPosts(true);
    buscarPostsPorTermo(termo, 3)
      .then((p) => ativo && setPosts(p))
      .catch(() => ativo && setPosts([]))
      .finally(() => ativo && setCarregandoPosts(false));
    return () => {
      ativo = false;
    };
  }, [termo]);

  const resposta = useMemo(() => (termo.length >= 3 ? responder(termo) : null), [termo]);
  const resultados = useMemo(
    () => (termo.length >= 3 ? pontuarReferências(termo).slice(0, 8) : []),
    [termo],
  );

  const buscando = termo.length >= 3;

  return (
    <section id="busca" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
            Motor de busca científica
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Pergunte com suas palavras. A <span className="pc-underline-amber">ciência responde.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(var(--pc-ink-soft))]">
            Escreva a dúvida do seu jeito, sem termos técnicos. O portal interpreta a pergunta, cruza a base de
            estudos, documentos institucionais e artigos do blog Acqualive e monta a resposta com as referências.
          </p>
        </div>

        <div className="mt-10">
          <label htmlFor="busca-portal" className="sr-only">
            Buscar estudos sobre água alcalina e hidratação
          </label>
          <div className="pc-card flex items-center gap-3 rounded-full px-5 py-3 shadow-lg">
            <Search className="h-5 w-5 shrink-0 text-[hsl(var(--pc-blue))]" aria-hidden />
            <input
              id="busca-portal"
              type="search"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              placeholder="Ex.: tenho azia toda noite, água alcalina resolve?"
              className="w-full bg-transparent py-2 text-base outline-none placeholder:text-[hsl(var(--pc-ink-soft)/0.7)]"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {EXEMPLOS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setConsulta(p)}
                className="rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-3.5 py-1.5 text-xs text-[hsl(var(--pc-ink-soft))] transition hover:border-[hsl(var(--pc-cyan))] hover:text-[hsl(var(--pc-blue))]"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {buscando && (
          <div className="mt-10 space-y-6">
            {resposta && (
              <div className="rounded-2xl border border-[hsl(var(--pc-cyan)/0.35)] bg-[hsl(var(--pc-cyan)/0.08)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--pc-blue))]">
                    <Sparkles className="h-4 w-4" aria-hidden /> {resposta.titulo}
                  </p>
                  <span className="rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-3 py-1 text-[11px] font-semibold text-[hsl(var(--pc-ink-soft))]">
                    {rótuloConfiança[resposta.confiança]}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--pc-ink))]">{resposta.resumo}</p>

                <ul className="mt-4 space-y-2 border-l-2 border-[hsl(var(--pc-cyan)/0.4)] pl-4">
                  {resposta.detalhes.map((d) => (
                    <li key={d} className="text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))]">
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {resposta.fontes.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => onAbrirArtigo(f)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[hsl(var(--pc-blue))] transition hover:bg-white"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden />
                      Ler {f.autores.split(",")[0]} ({f.ano})
                    </button>
                  ))}
                </div>

                {resposta.relacionadas.length > 0 && (
                  <div className="mt-5 border-t border-[hsl(var(--pc-line))] pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">
                      Continue a investigação
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {resposta.relacionadas.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setConsulta(r)}
                          className="rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-3 py-1.5 text-xs text-[hsl(var(--pc-ink-soft))] transition hover:border-[hsl(var(--pc-cyan))] hover:text-[hsl(var(--pc-blue))]"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {resultados.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-[hsl(var(--pc-line))] p-8 text-center text-sm text-[hsl(var(--pc-ink-soft))]">
                Nenhuma referência encontrada para esse termo. Tente descrever o sintoma ou o tema, como refluxo,
                cansaço, ossos, rins, microplástico, minerais, PRAL ou hidrogênio.
              </p>
            ) : (
              <ol className="space-y-3">
                {resultados.map(({ ref }, i) => (
                  <li key={ref.id}>
                    <button
                      type="button"
                      onClick={() => onAbrirArtigo(ref)}
                      className="pc-card group flex w-full items-start gap-4 rounded-2xl p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="mt-0.5 font-mono text-xs text-[hsl(var(--pc-ink-soft))]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-display font-semibold text-[hsl(var(--pc-ink))]">{ref.titulo}</span>
                        <span className="mt-1 block text-xs text-[hsl(var(--pc-ink-soft))]">
                          {ref.autores} · {ref.fonte} · {ref.ano}
                        </span>
                        <span className="mt-2 line-clamp-2 block text-sm text-[hsl(var(--pc-ink-soft))]">
                          {ref.resumo}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-[hsl(var(--pc-blue))] transition group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </button>
                  </li>
                ))}
              </ol>
            )}

            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">
                Do blog Acqualive
                {carregandoPosts && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />}
              </p>
              {posts.length > 0 ? (
                <ul className="space-y-2">
                  {posts.map((p) => (
                    <li key={p.id}>
                      <a href={p.link} className="pc-card block rounded-xl p-4 text-sm transition hover:shadow-md">
                        <span className="font-semibold text-[hsl(var(--pc-blue))]">{p.titulo}</span>
                        <span className="mt-1 block text-[hsl(var(--pc-ink-soft))]">{p.resumo}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                !carregandoPosts && (
                  <p className="text-sm text-[hsl(var(--pc-ink-soft))]">Nenhum artigo do blog para esse termo.</p>
                )
              )}
            </div>
          </div>
        )}

        {!buscando && (
          <p className="mt-8 text-center text-xs text-[hsl(var(--pc-ink-soft))]">
            {REFERÊNCIAS.length} referências indexadas · atualizadas continuamente pela equipe Acqualive
          </p>
        )}
      </div>
    </section>
  );
};

export default BuscaAcademica;
