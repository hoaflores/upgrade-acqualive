import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{10,20}$/, "Informe um WhatsApp válido"),
  email: z.string().trim().email("Informe um e-mail válido").max(255).or(z.literal("")),
});

const DEFAULT_WHATSAPP = "5511940689011";

interface FormContatoProps {
  /** Identificador da origem do lead (rota/campanha) */
  origem?: string;
  /** Nome amigavel da pagina para a mensagem do WhatsApp */
  paginaLabel?: string;
  /** Numero do WhatsApp para o CTA (somente digitos, com DDD e DDI) */
  whatsappNumber?: string;
  /** Nome do contato que aparece na saudacao da mensagem do WhatsApp */
  contatoNome?: string;
}

/** Formulario simples de contato liberado apos um terco do video. */
const FormContato = ({ origem = "agua-limpa", paginaLabel = "Água Limpa", whatsappNumber = DEFAULT_WHATSAPP, contatoNome = "Laura" }: FormContatoProps) => {
  const { toast } = useToast();
  const [enviando, setEnviando] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "" });
  const sessionId = useMemo(
    () => `${origem}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    [origem],
  );
  const timer = useRef<number>();
  const ultimoEnvio = useRef("");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  /** Sincronizacao em tempo real (debounce) com a planilha, mesmo sem enviar. */
  useEffect(() => {
    const preenchido = form.nome.trim() || form.telefone.trim() || form.email.trim();
    if (!preenchido) return;
    const snapshot = JSON.stringify(form);
    if (snapshot === ultimoEnvio.current) return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      ultimoEnvio.current = snapshot;
      void supabase.functions.invoke("agua-limpa-sheet", {
        body: {
          sessionId,
          nome: form.nome || null,
          telefone: form.telefone || null,
          email: form.email || null,
          origem,
          status: "parcial",
        },
      });
    }, 800);
    return () => window.clearTimeout(timer.current);
  }, [form, origem, sessionId]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Confira os dados",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    const texto = "Oi, Laura! Gostaria de entender melhor como cuidar da água da minha família.";
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
    // A aba precisa ser aberta no mesmo gesto do usuario, senao o mobile bloqueia.
    const janela = window.open("", "_blank");

    setEnviando(true);
    window.clearTimeout(timer.current);

    // Envios em segundo plano: o WhatsApp nao espera a rede.
    void supabase
      .from("leads_agua_limpa")
      .insert({
        nome: parsed.data.nome,
        telefone: parsed.data.telefone,
        email: parsed.data.email || null,
        origem,
      })
      .then(({ error }) => {
        if (error) {
          toast({
            title: "Não foi possível registrar",
            description: "Fale com a gente pelo WhatsApp que resolvemos por lá.",
            variant: "destructive",
          });
        }
      });

    void supabase.functions.invoke("agua-limpa-sheet", {
      body: {
        sessionId,
        nome: parsed.data.nome,
        telefone: parsed.data.telefone,
        email: parsed.data.email || null,
        origem,
        status: "enviado",
      },
    });

    if (janela) janela.location.href = waUrl;
    else window.location.href = waUrl;

    window.setTimeout(() => setEnviando(false), 1200);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-foreground">Fale com a Acqualive</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Preencha e receba a orientação certa para a água da sua família.
      </p>

      <div className="mt-5 space-y-3">
        <Input
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => set("nome", e.target.value)}
          maxLength={100}
          required
          className="h-12 rounded-xl"
        />
        <Input
          type="tel"
          inputMode="tel"
          placeholder="Seu WhatsApp"
          value={form.telefone}
          onChange={(e) => set("telefone", e.target.value)}
          maxLength={20}
          required
          className="h-12 rounded-xl"
        />
        <Input
          type="email"
          inputMode="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          maxLength={255}
          className="h-12 rounded-xl"
        />
      </div>

      <Button type="submit" size="lg" disabled={enviando} className="mt-5 h-13 w-full rounded-xl text-base">
        {enviando ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {enviando ? "Enviando..." : "QUERO FALAR COM A ACQUALIVE"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Seus dados ficam protegidos.
      </p>
    </form>
  );
};

export default FormContato;
