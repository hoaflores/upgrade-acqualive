import { MessageCircle, Instagram, Mail, Phone, MapPin, User } from "lucide-react";
import type { CidadeAtendimento, Especialista } from "@/types/mapa";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface PainelEspecialistaProps {
  cidade: CidadeAtendimento | null;
}

const initials = (nome: string) =>
  nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

const waLink = (numero: string, cidade: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(
    `Olá! Sou de ${cidade} e gostaria de falar com um especialista Acqualive.`,
  )}`;

const EspecialistaCard = ({
  esp,
  cidade,
}: {
  esp: Especialista;
  cidade: string;
}) => (
  <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
    <header className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center overflow-hidden flex-shrink-0">
        {esp.foto ? (
          <img
            src={esp.foto}
            alt={`Foto de ${esp.nome}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="font-semibold text-lg">
            {initials(esp.nome) || <User className="w-6 h-6" aria-hidden />}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
          {esp.nome}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Especialista Acqualive
        </p>
      </div>
    </header>

    {esp.observacoes && (
      <p className="mt-3 text-sm text-muted-foreground">{esp.observacoes}</p>
    )}

    <div className="mt-4 space-y-1.5 text-sm">
      {esp.telefone && (
        <a
          href={`tel:${esp.telefone}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden />
          {esp.telefone}
        </a>
      )}
      {esp.instagram && (
        <a
          href={`https://instagram.com/${esp.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" aria-hidden />@{esp.instagram}
        </a>
      )}
      {esp.email && (
        <a
          href={`mailto:${esp.email}`}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-3.5 h-3.5" aria-hidden />
          {esp.email}
        </a>
      )}
    </div>

    <a
      href={waLink(esp.whatsapp, cidade)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white font-semibold shadow-soft hover:-translate-y-0.5 hover:shadow-elevated transition-all"
    >
      <WhatsAppIcon className="w-4 h-4" />
      Conversar pelo WhatsApp
    </a>
  </article>
);

const PainelEspecialista = ({ cidade }: PainelEspecialistaProps) => {
  if (!cidade) {
    return (
      <aside className="rounded-2xl border border-dashed border-border bg-white/50 p-8 text-center h-full flex flex-col items-center justify-center min-h-[320px]">
        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          <MessageCircle className="w-6 h-6" aria-hidden />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground">
          Selecione uma cidade
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs">
          Digite o nome da sua cidade, escolha na lista ou clique no mapa para
          ver quem atende sua região.
        </p>
      </aside>
    );
  }

  return (
    <aside aria-live="polite" className="flex flex-col gap-4">
      <header className="flex items-center gap-2 text-primary">
        <MapPin className="w-4 h-4" aria-hidden />
        <h2 className="font-display font-semibold text-xl text-foreground">
          {cidade.cidade}
          <span className="text-muted-foreground font-normal"> · {cidade.estado}</span>
        </h2>
      </header>
      <p className="text-sm text-muted-foreground -mt-2">
        {cidade.especialistas.length}{" "}
        {cidade.especialistas.length === 1
          ? "especialista disponível"
          : "especialistas disponíveis"}{" "}
        na sua região.
      </p>
      <div className="grid gap-4">
        {cidade.especialistas.map((esp) => (
          <EspecialistaCard key={esp.id} esp={esp} cidade={cidade.cidade} />
        ))}
      </div>
    </aside>
  );
};

export default PainelEspecialista;
