import { useEffect, useMemo, useState } from "react";
import { Search, Sparkles, Loader2, ArrowUpRight } from "lucide-react";
import { PERGUNTAS_GUIA, REFERENCIAS, type Referencia } from "@/data/portal-cientifico";
import { buscarPostsPorTermo, buscarReferencias, type PostBlog } from "./portalUtils";

interface Props {
  onAbrirArtigo: (r: Referencia) => void;
}

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

  const resultados = useMemo(() => buscarReferencias(termo).slice(0, 8), [termo]);

  const guia = useMemo(() => {
    if (termo.length < 3) return null;
    const alvo = buscarReferencias(termo)[0];
    if (!alvo) return null;
    return PERGUNTAS_GUIA.find((g) => g.refs.includes(alvo.ref.id)) ?? null;
  }, [termo]);

  const buscando = termo.length >= 3;

  return (
    <section id="busca" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
            Motor de busca cientifica
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Pergunte. A <span className="pc-underline-amber">ciencia responde.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(var(--pc-ink-soft))]">
            Digite uma duvida em linguagem natural. O portal cruza estudos, fontes institucionais e artigos do blog
            Acqualive para entregar a resposta com referencia.
          </p>
        </div>

        <div className="mt-10">
          <label htmlFor="busca-portal" className="sr-only">
            Buscar estudos sobre agua alcalina e hidratacao
          </label>
          <div className="pc-card flex items-center gap-3 rounded-full px-5 py-3 shadow-lg">
            <Search className="h-5 w-5 shrink-0 text-[hsl(var(--pc-blue))]" aria-hidden />
            <input
              id="busca-portal"
              type="search"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              placeholder="Ex.: agua alcalina ajuda no refluxo?"
              className="w-full bg-transparent py-2 text-base outline-none placeholder:text-[hsl(var(--pc-ink-soft)/0.7)]"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {PERGUNTAS_GUIA.slice(0, 6).map((p) => (
              <button
                key={p.pergunta}
                type="button"
                onClick={() => setConsulta(p.pergunta)}
                className="rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-3.5 py-1.5 text-xs text-[hsl(var(--pc-ink-soft))] transition hover:border-[hsl(var(--pc-cyan))] hover:text-[hsl(var(--pc-blue))]"
              >
                {p.pergunta}
              </button>
            ))}
          </div>
        </div>

        {buscando && (
          <div className="mt-10 space-y-6">
            {guia && (
              <div className="rounded-2xl border border-[hsl(var(--pc-cyan)/0.35)] bg-[hsl(var(--pc-cyan)/0.08)] p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--pc-blue))]">
                  <Sparkles className="h-4 w-4" aria-hidden /> Resposta direta
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold">{guia.pergunta}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--pc-ink-soft))]">{guia.resposta}</p>
              </div>
            )}

            {resultados.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-[hsl(var(--pc-line))] p-8 text-center text-sm text-[hsl(var(--pc-ink-soft))]">
                Nenhuma referencia encontrada para esse termo. Tente palavras como refluxo, hidratacao, atleta,
                microplastico, minerais ou hidrogenio.
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
                      <a
                        href={p.link}
                        className="pc-card block rounded-xl p-4 text-sm transition hover:shadow-md"
                      >
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
            {REFERENCIAS.length} referencias indexadas · atualizadas continuamente pela equipe Acqualive
          </p>
        )}
      </div>
    </section>
  );
};

export default BuscaAcademica;
