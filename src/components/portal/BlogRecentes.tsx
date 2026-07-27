import { useEffect, useState } from "react";
import { Loader2, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { buscarPostsRecentes, type PostBlog } from "./portalUtils";

const BlogRecentes = () => {
  const [posts, setPosts] = useState<PostBlog[]>([]);
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    buscarPostsRecentes(6)
      .then((p) => ativo && setPosts(p))
      .catch(() => ativo && setErro(true))
      .finally(() => ativo && setCarregando(false));
    return () => {
      ativo = false;
    };
  }, []);

  return (
    <section id="blog" className="scroll-mt-20 border-t border-[hsl(var(--pc-line))] bg-[hsl(var(--pc-paper-2))] py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--pc-cyan))]">
                Publicações recentes
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Direto do blog Acqualive</h2>
              <p className="mt-4 text-[hsl(var(--pc-ink-soft))]">
                Conteúdo novo publicado pela nossa equipe, atualizado automaticamente.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {carregando && (
          <div className="mt-12 flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-[hsl(var(--pc-blue))]" aria-hidden />
          </div>
        )}

        {erro && !carregando && (
          <p className="mt-10 text-center text-sm text-[hsl(var(--pc-ink-soft))]">
            Não foi possível carregar as publicações agora. Tente novamente em instantes.
          </p>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 3) * 90}>
              <a href={p.link} className="pc-card group block h-full overflow-hidden rounded-2xl hover:-translate-y-1.5">
                {p.imagem && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.imagem}
                      alt={p.titulo}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--pc-ink)/0.45)] via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
                  </div>
                )}
                <div className="p-5">
                  <time dateTime={p.data} className="text-[11px] uppercase tracking-wider text-[hsl(var(--pc-ink-soft))]">
                    {new Date(p.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </time>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.titulo}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-[hsl(var(--pc-ink-soft))]">{p.resumo}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--pc-blue))]">
                    Ler artigo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRecentes;
