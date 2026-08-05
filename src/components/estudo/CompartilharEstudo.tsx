import { useState } from "react";
import { Check, Instagram, Link2, Linkedin, Facebook, Send } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { URL_ESTUDO } from "@/components/estudo/links";

const MENSAGEM =
  "Achei este dossiê científico sobre água alcalina (água funcional) e saúde digestiva, com a pesquisa da Dra. Juliana Chaves na UFPA. Vale a leitura:";

type Props = {
  /** Texto curto acima dos botões. Deixe vazio para um bloco discreto. */
  titulo?: string;
  descricao?: string;
  compacto?: boolean;
  url?: string;
};

const CompartilharEstudo = ({
  titulo = "Compartilhe este conhecimento",
  descricao = "Alguém que você conhece convive com azia, refluxo ou gastrite? Envie este dossiê. Informação boa sobre água funcional circula melhor quando passa de pessoa para pessoa.",
  compacto = false,
  url = URL_ESTUDO,
}: Props) => {
  const [copiado, setCopiado] = useState(false);
  const texto = encodeURIComponent(`${MENSAGEM} ${url}`);
  const alvo = encodeURIComponent(url);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(`${MENSAGEM} ${url}`);
    } catch {
      /* navegadores sem permissão de área de transferência */
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const redes = [
    { nome: "WhatsApp", href: `https://wa.me/?text=${texto}`, Icone: WhatsAppIcon },
    { nome: "Telegram", href: `https://t.me/share/url?url=${alvo}&text=${encodeURIComponent(MENSAGEM)}`, Icone: Send },
    { nome: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${alvo}`, Icone: Facebook },
    { nome: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${alvo}`, Icone: Linkedin },
  ];

  return (
    <div
      className={
        compacto
          ? "flex flex-wrap items-center gap-2"
          : "pc-card rounded-3xl p-7 text-center md:p-10"
      }
    >
      {!compacto && (
        <>
          <h3 className="font-display text-2xl font-bold md:text-3xl">{titulo}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[hsl(var(--pc-ink-soft))] md:text-base">
            {descricao}
          </p>
        </>
      )}

      <div className={compacto ? "flex flex-wrap items-center gap-2" : "mt-7 flex flex-wrap justify-center gap-2"}>
        {redes.map(({ nome, href, Icone }) => (
          <a
            key={nome}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-5 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--pc-cyan))]"
          >
            <Icone className="h-4 w-4" aria-hidden />
            {nome}
          </a>
        ))}

        <button
          type="button"
          onClick={copiar}
          className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--pc-line))] bg-white/70 px-5 py-3 text-sm font-semibold text-[hsl(var(--pc-blue))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--pc-cyan))]"
        >
          {copiado ? <Check className="h-4 w-4" aria-hidden /> : <Instagram className="h-4 w-4" aria-hidden />}
          {copiado ? "Link copiado" : "Instagram e stories"}
        </button>

        <button
          type="button"
          onClick={copiar}
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pc-blue))] px-5 py-3 text-sm font-semibold text-[hsl(var(--pc-paper))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--pc-cyan))]"
        >
          {copiado ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
          {copiado ? "Pronto para colar" : "Copiar link"}
        </button>
      </div>

      {!compacto && (
        <p className="mt-4 text-xs text-[hsl(var(--pc-ink-soft))]">
          No Instagram, copie o link e cole no seu story ou na bio. O conteúdo é gratuito e educativo.
        </p>
      )}
    </div>
  );
};

export default CompartilharEstudo;
