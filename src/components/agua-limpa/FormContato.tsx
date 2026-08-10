import { useState } from "react";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
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
  cidade: z.string().trim().max(100).optional(),
  mensagem: z.string().trim().max(1000).optional(),
});

/** Formulario simples de contato liberado apos um terco do video. */
const FormContato = () => {
  const { toast } = useToast();
  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", cidade: "", mensagem: "" });

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

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
    setEnviando(true);
    const { error } = await supabase.from("leads_agua_limpa").insert({
      nome: parsed.data.nome,
      telefone: parsed.data.telefone,
      email: parsed.data.email || null,
      cidade: parsed.data.cidade || null,
      mensagem: parsed.data.mensagem || null,
      origem: "agua-limpa",
    });
    setEnviando(false);
    if (error) {
      toast({
        title: "Não foi possível enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
      return;
    }
    void supabase.functions.invoke("agua-limpa-sheet", {
      body: {
        nome: parsed.data.nome,
        telefone: parsed.data.telefone,
        email: parsed.data.email || null,
        cidade: parsed.data.cidade || null,
        mensagem: parsed.data.mensagem || null,
        origem: "agua-limpa",
      },
    });
    setOk(true);
  };

  if (ok) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Recebemos seu contato</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Em breve um especialista da Acqualive fala com você para entender a água da sua casa.
        </p>
      </div>
    );
  }

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
        Seus dados ficam protegidos e são usados apenas para este contato.
      </p>
    </form>
  );
};

export default FormContato;
