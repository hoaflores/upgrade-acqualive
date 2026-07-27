import { normalize } from "@/utils/fuzzySearch";
import { REFERENCIAS, type Referencia } from "@/data/portal-cientifico";

/** Dominios em que a navegacao pode acontecer na mesma aba. */
const DOMINIOS_INTERNOS = ["acqualive.com.br", "lp.acqualive.com.br", "blog.acqualive.com.br", "paginas.acqualive.com.br"];

export const ehLinkInterno = (url: string) => {
  if (url.startsWith("/")) return true;
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return DOMINIOS_INTERNOS.some((d) => host === d || host.endsWith(`.${d}`));
  } catch {
    return false;
  }
};

/**
 * Abre fontes externas em janela isolada, sem barra de navegacao,
 * para que o leitor volte facilmente ao portal.
 */
export const abrirFonteExterna = (url: string) => {
  if (ehLinkInterno(url)) {
    window.location.href = url;
    return;
  }
  const w = Math.min(1180, Math.round(window.screen.availWidth * 0.9));
  const h = Math.min(880, Math.round(window.screen.availHeight * 0.9));
  const left = Math.round((window.screen.availWidth - w) / 2);
  const top = Math.round((window.screen.availHeight - h) / 2);
  window.open(
    url,
    "acqualive_fonte",
    `noopener,noreferrer,width=${w},height=${h},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`,
  );
};

const pesoImpacto = { alto: 0, medio: 1, base: 2 } as const;

export interface ResultadoBusca {
  ref: Referencia;
  score: number;
}

/** Busca semantica simples por palavras da pergunta, ponderada pelo impacto. */
export const buscarReferencias = (consulta: string, base: Referencia[] = REFERENCIAS): ResultadoBusca[] => {
  const q = normalize(consulta);
  if (!q) return [];
  const palavras = q.split(" ").filter((p) => p.length > 2);
  if (!palavras.length) return [];

  return base
    .map((ref) => {
      const titulo = normalize(`${ref.titulo} ${ref.tituloOriginal ?? ""}`);
      const corpo = normalize(`${ref.resumo} ${ref.aplicacao} ${ref.pontos.join(" ")} ${ref.eixos.join(" ")}`);
      const termos = ref.termos.map(normalize);

      let score = 0;
      for (const p of palavras) {
        if (termos.some((t) => t.includes(p) || p.includes(t))) score += 6;
        if (titulo.includes(p)) score += 4;
        if (corpo.includes(p)) score += 1.5;
      }
      if (score > 0) score += (2 - pesoImpacto[ref.impacto]) * 1.2;
      return { ref, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
};

export interface PostBlog {
  id: number;
  titulo: string;
  resumo: string;
  link: string;
  data: string;
  imagem?: string;
}

const limparHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();

const BLOG_API = "https://blog.acqualive.com.br/wp-json/wp/v2/posts";

const mapPost = (p: Record<string, unknown>): PostBlog => {
  const embedded = (p._embedded as Record<string, unknown>) ?? {};
  const media = (embedded["wp:featuredmedia"] as Array<Record<string, unknown>>) ?? [];
  return {
    id: p.id as number,
    titulo: limparHtml(((p.title as Record<string, string>)?.rendered) ?? ""),
    resumo: limparHtml(((p.excerpt as Record<string, string>)?.rendered) ?? "").slice(0, 180),
    link: p.link as string,
    data: p.date as string,
    imagem: (media[0]?.source_url as string) ?? undefined,
  };
};

export const buscarPostsRecentes = async (quantidade = 6): Promise<PostBlog[]> => {
  const res = await fetch(`${BLOG_API}?_embed=wp:featuredmedia&per_page=${quantidade}&orderby=date&order=desc`);
  if (!res.ok) throw new Error("Falha ao carregar o blog");
  const json = (await res.json()) as Array<Record<string, unknown>>;
  return json.map(mapPost);
};

export const buscarPostsPorTermo = async (termo: string, quantidade = 4): Promise<PostBlog[]> => {
  const res = await fetch(`${BLOG_API}?_embed=wp:featuredmedia&search=${encodeURIComponent(termo)}&per_page=${quantidade}`);
  if (!res.ok) return [];
  const json = (await res.json()) as Array<Record<string, unknown>>;
  return json.map(mapPost);
};
