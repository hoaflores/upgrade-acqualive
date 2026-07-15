import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  MapPin,
  User,
  Sparkles,
  Clock,
} from "lucide-react";
import type { CidadeAtendimento, Especialista } from "@/types/mapa";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useState } from "react";

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
    `Olá! Sou de ${cidade} e gostaria de falar com um Franqueado Acqualive.`,
  )}`;

/** Foto com skeleton, fallback e proteção contra deformação. */
const Foto = ({ nome, foto }: { nome: string; foto?: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!foto || error) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/12 to-primary/5 text-primary flex items-center justify-center font-display font-semibold text-lg border border-white/60 shadow-[inset_0_1px_0_hsl(0_0%_100%),0_6px_16px_-8px_hsl(var(--primary)/_0.35)]">
        {initials(nome) || <User className="w-6 h-6" aria-hidden />}
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/60 shadow-[0_6px_16px_-8px_hsl(var(--primary)/_0.35)]">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/60 to-muted/30" />
      )}
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const EspecialistaCard = ({
  esp,
  cidade,
  index,
}: {
  esp: Especialista;
  cidade: string;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1 + index * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group relative rounded-2xl border border-border/60 bg-white/80 backdrop-blur-md p-5 shadow-[0_10px_30px_-20px_hsl(var(--primary)/_0.35),0_1px_0_hsl(0_0%_100%)_inset] transition-shadow hover:shadow-[0_20px_50px_-24px_hsl(var(--primary)/_0.45),0_1px_0_hsl(0_0%_100%)_inset]"
  >
    {/* Gradient border top accent */}
    <span
      aria-hidden
      className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
    />

    <header className="flex items-start gap-4">
      <Foto nome={esp.nome} foto={esp.foto} />
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-semibold text-lg text-foreground leading-tight tracking-tight">
          {esp.nome}
        </h3>
        <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
          <Sparkles className="w-3 h-3" aria-hidden />
          Especialista Acqualive
        </p>
      </div>
    </header>

    {esp.observacoes && (
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {esp.observacoes}
      </p>
    )}

    {(esp.telefone || esp.instagram || esp.email) && (
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
    )}

    {esp.horario_atendimento && (
      <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
        <Clock className="w-3.5 h-3.5 mt-0.5 text-primary/80 shrink-0" aria-hidden />
        <span className="leading-relaxed">{esp.horario_atendimento}</span>
      </div>
    )}

    <motion.a
      href={waLink(esp.whatsapp, cidade)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="mt-5 w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-b from-[#25D366] to-[#1FB255] text-white font-semibold text-sm shadow-[0_12px_30px_-14px_rgba(37,211,102,0.65),0_1px_0_hsl(0_0%_100%/_0.2)_inset] hover:shadow-[0_18px_40px_-14px_rgba(37,211,102,0.75)]"
    >
      <WhatsAppIcon className="w-4 h-4" />
      Conversar pelo WhatsApp
    </motion.a>
  </motion.article>
);

const EmptyState = () => (
  <motion.aside
    key="empty"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden rounded-[28px] border border-dashed border-primary/20 bg-gradient-to-br from-white/70 to-[hsl(var(--water-light))]/70 backdrop-blur-md p-8 text-center h-full flex flex-col items-center justify-center min-h-[340px]"
  >
    <div
      aria-hidden
      className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/8 blur-3xl"
    />
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center mb-4 border border-white/60 shadow-[inset_0_1px_0_hsl(0_0%_100%)]">
      <MessageCircle className="w-6 h-6" aria-hidden />
    </div>
    <h3 className="font-display font-semibold text-lg text-foreground tracking-tight">
      Selecione uma cidade
    </h3>
    <p className="text-sm text-muted-foreground mt-1.5 max-w-xs leading-relaxed">
      Digite o nome da sua cidade, escolha na lista ou clique no mapa para ver
      quem atende sua região.
    </p>
  </motion.aside>
);

const PainelEspecialista = ({ cidade }: PainelEspecialistaProps) => {
  return (
    <AnimatePresence mode="wait">
      {!cidade ? (
        <EmptyState />
      ) : (
        <motion.aside
          key={cidade.id}
          aria-live="polite"
          initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <header className="rounded-2xl border border-border/60 bg-white/80 backdrop-blur-md p-4 shadow-[0_10px_30px_-20px_hsl(var(--primary)/_0.35),0_1px_0_hsl(0_0%_100%)_inset]">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/80">
              <MapPin className="w-3 h-3" aria-hidden />
              Cidade selecionada
            </div>
            <h2 className="mt-1.5 font-display font-semibold text-xl text-foreground tracking-tight">
              {cidade.cidade}
              <span className="text-muted-foreground font-normal ml-1.5">
                · {cidade.estado}
              </span>
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {cidade.especialistas.length}{" "}
              {cidade.especialistas.length === 1
                ? "especialista disponível na sua região"
                : "especialistas disponíveis na sua região"}
              .
            </p>
          </header>
          <div className="grid gap-3.5">
            {cidade.especialistas.map((esp, i) => (
              <EspecialistaCard
                key={esp.id}
                esp={esp}
                cidade={cidade.cidade}
                index={i}
              />
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default PainelEspecialista;
