import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CidadeAtendimento } from "@/types/mapa";

interface ListaCidadesProps {
  cidades: CidadeAtendimento[];
  selecionadaId: string | null;
  onSelect: (id: string) => void;
}

const ListaCidades = ({ cidades, selecionadaId, onSelect }: ListaCidadesProps) => {
  if (cidades.length === 0) {
    return (
      <div className="px-4 py-10 text-center">
        <div className="mx-auto w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center mb-3">
          <MapPin className="w-4 h-4 text-muted-foreground" aria-hidden />
        </div>
        <p className="text-sm text-muted-foreground">
          Nenhuma cidade corresponde à sua busca.
        </p>
      </div>
    );
  }

  return (
    <nav aria-label="Cidades atendidas" className="py-1.5">
      <ul className="flex flex-col">
        {cidades.map((c, i) => {
          const active = c.id === selecionadaId;
          return (
            <li key={c.id}>
              <motion.button
                type="button"
                onClick={() => onSelect(c.id)}
                aria-current={active ? "true" : undefined}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: Math.min(i * 0.02, 0.2),
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 2 }}
                className={cn(
                  "group relative w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  active ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                {/* Sliding accent bar */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full transition-all duration-300",
                    active
                      ? "bg-gradient-to-b from-primary to-secondary opacity-100 scale-y-100"
                      : "bg-primary/40 opacity-0 scale-y-50 group-hover:opacity-100 group-hover:scale-y-100",
                  )}
                />
                {/* Fondo suave */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-2 inset-y-1 rounded-xl transition-all duration-300",
                    active
                      ? "bg-primary/8"
                      : "bg-transparent group-hover:bg-muted/40",
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors",
                    active
                      ? "bg-primary text-primary-foreground shadow-[0_6px_16px_-6px_hsl(var(--primary)/_0.6)]"
                      : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                  )}
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden />
                </span>
                <span className="relative z-10 flex-1 min-w-0">
                  <span className="block font-medium text-sm truncate">
                    {c.cidade}
                  </span>
                  <span className="block text-[11px] text-muted-foreground">
                    {c.estado} · {c.especialistas.length}{" "}
                    {c.especialistas.length === 1
                      ? "Franqueado"
                      : "Franqueados"}
                  </span>
                </span>
                <ChevronRight
                  aria-hidden
                  className={cn(
                    "relative z-10 w-4 h-4 flex-shrink-0 transition-all",
                    active
                      ? "text-primary opacity-100 translate-x-0"
                      : "text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
                  )}
                />
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ListaCidades;
