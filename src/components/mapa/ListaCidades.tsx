import { MapPin } from "lucide-react";
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
      <div className="px-4 py-8 text-center text-sm text-muted-foreground">
        Nenhuma cidade corresponde à sua busca.
      </div>
    );
  }

  return (
    <nav aria-label="Cidades atendidas" className="py-2">
      <ul className="flex flex-col">
        {cidades.map((c) => {
          const active = c.id === selecionadaId;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onSelect(c.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors border-l-2",
                  active
                    ? "bg-primary/10 border-primary text-primary"
                    : "border-transparent hover:bg-muted/40 text-foreground",
                )}
              >
                <MapPin
                  className={cn(
                    "w-4 h-4 flex-shrink-0",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                  aria-hidden
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{c.cidade}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.estado} · {c.especialistas.length}{" "}
                    {c.especialistas.length === 1 ? "especialista" : "especialistas"}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ListaCidades;
