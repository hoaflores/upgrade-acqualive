CREATE TABLE public.leads_agua_limpa (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  telefone text NOT NULL,
  email text,
  cidade text,
  mensagem text,
  origem text DEFAULT 'agua-limpa',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads_agua_limpa TO anon;
GRANT INSERT, SELECT ON public.leads_agua_limpa TO authenticated;
GRANT ALL ON public.leads_agua_limpa TO service_role;

ALTER TABLE public.leads_agua_limpa ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer visitante pode enviar contato"
ON public.leads_agua_limpa FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Equipe aprovada pode ver contatos"
ON public.leads_agua_limpa FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.aprovado = true));