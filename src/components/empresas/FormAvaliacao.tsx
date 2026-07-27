import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_EMPRESAS } from "./dados";

const SEGMENTOS = [
  "Restaurante ou cafeteria",
  "Studio ou academia",
  "Clínica ou consultório",
  "Indústria ou operação",
  "Escritório ou coworking",
  "Outro",
];

const COLABORADORES = ["Até 10", "11 a 30", "31 a 100", "101 a 300", "Mais de 300"];

const UNIDADES = ["1 unidade", "2 a 3 unidades", "4 a 10 unidades", "Mais de 10 unidades"];

const OBJETIVOS = [
  "Substituir galões",
  "Reduzir custos",
  "Melhorar a experiência do cliente",
  "Cuidar melhor da equipe",
  "Reduzir plástico",
  "Renovar o ambiente",
  "Atender mais pessoas",
];

const FormAvaliacao = () => {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    cidade: "",
    colaboradores: "",
    segmento: "",
    unidades: "",
    objetivo: "",
    mensagem: "",
  });

  const set = (campo: string, valor: string) => setForm((f) => ({ ...f, [campo]: valor }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.empresa || !form.email || !form.telefone) {
      toast.error("Preencha nome, empresa, e-mail e telefone.");
      return;
    }

    setEnviando(true);
    const { error } = await supabase.from("leads_empresas").insert({
      nome: form.nome,
      empresa: form.empresa,
      email: form.email,
      telefone: form.telefone,
      cidade: form.cidade || null,
      colaboradores: form.colaboradores || null,
      segmento: form.segmento || null,
      unidades: form.unidades || null,
      objetivo: form.objetivo || null,
      mensagem: form.mensagem || null,
      origem: "acqualive-empresas",
    });
    setEnviando(false);

    if (error) {
      toast.error("Não foi possível enviar agora. Tente novamente ou fale conosco no WhatsApp.");
      return;
    }

    setEnviado(true);
    toast.success("Recebemos sua solicitação. Nossa equipe entra em contato em breve.");
  };

  return (
    <section id="avaliacao" className="py-20 lg:py-28 bg-water-light">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-8 bg-current opacity-50" />
            Avaliação gratuita
            <span className="h-px w-8 bg-current opacity-50" />
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
            Solicite a avaliação gratuita para a sua empresa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Analisamos o consumo, o ponto de instalação e indicamos a configuração ideal do Acqualive DUO.
            Sem compromisso.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-11 rounded-[2rem] shadow-elevated border-border/60">

          {enviado ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Solicitação enviada com sucesso
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe vai analisar as informações e entrar em contato. Se preferir agilizar,
                fale com a gente agora mesmo no WhatsApp.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Falar no WhatsApp</span>
                </a>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="nome">Nome completo *</Label>
                  <Input id="nome" value={form.nome} onChange={(e) => set("nome", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input id="empresa" value={form.empresa} onChange={(e) => set("empresa", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail corporativo *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="telefone">WhatsApp *</Label>
                  <Input id="telefone" value={form.telefone} onChange={(e) => set("telefone", e.target.value)} placeholder="(00) 00000-0000" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade e estado</Label>
                  <Input id="cidade" value={form.cidade} onChange={(e) => set("cidade", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label>Número de colaboradores</Label>
                  <Select value={form.colaboradores} onValueChange={(v) => set("colaboradores", v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {COLABORADORES.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Unidades ou ambientes</Label>
                  <Select value={form.unidades} onValueChange={(v) => set("unidades", v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {UNIDADES.map((u) => (
                        <SelectItem key={u} value={u}>{u}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Principal objetivo</Label>
                  <Select value={form.objetivo} onValueChange={(v) => set("objetivo", v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {OBJETIVOS.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Segmento</Label>
                  <Select value={form.segmento} onValueChange={(v) => set("segmento", v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      {SEGMENTOS.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="mensagem">Conte um pouco sobre a sua rotina de consumo</Label>
                <Textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => set("mensagem", e.target.value)}
                  placeholder="Quantos galões por mês, quantos pontos de água, horários de maior movimento..."
                  className="mt-1.5"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button type="submit" variant="cta" size="lg" disabled={enviando} className="flex-1">
                  {enviando ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  <span>{enviando ? "ENVIANDO..." : "SOLICITAR AVALIAÇÃO GRATUITA"}</span>
                </Button>
                <Button type="button" variant="outline" size="lg" asChild>
                  <a href={WHATSAPP_EMPRESAS} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default FormAvaliacao;
