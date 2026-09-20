import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Lock } from "lucide-react";

type Status = "loading" | "anonymous" | "pending" | "authorized";

/**
 * Guarda de rotas internas: exige sessão ativa e perfil aprovado.
 * Usuários sem login são direcionados para o login do painel (/admin/franqueados).
 */
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let active = true;

    const check = async (userId: string | null) => {
      if (!userId) {
        if (active) setStatus("anonymous");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("aprovado")
        .eq("id", userId)
        .maybeSingle();
      if (!active) return;
      setStatus(data?.aprovado ? "authorized" : "pending");
    };

    supabase.auth.getSession().then(({ data }) => check(data.session?.user.id ?? null));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      check(session?.user.id ?? null);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (status === "authorized") return <>{children}</>;

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Card className="max-w-md w-full p-8 text-center space-y-4">
        <Lock className="h-10 w-10 mx-auto text-primary" />
        <h1 className="text-xl font-bold text-foreground">Área restrita</h1>
        <p className="text-sm text-muted-foreground">
          {status === "anonymous"
            ? "Esta página é interna. Entre com sua conta aprovada para continuar."
            : "Sua conta ainda não foi aprovada por um administrador."}
        </p>
        {status === "anonymous" ? (
          <Button className="w-full" onClick={() => navigate("/admin/franqueados")}>
            Ir para o login
          </Button>
        ) : (
          <Button variant="outline" className="w-full" onClick={() => supabase.auth.signOut()}>
            Sair da conta
          </Button>
        )}
      </Card>
    </div>
  );
};

export default RequireAuth;
