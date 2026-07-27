CREATE TABLE public.leads_empresas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  empresa text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL,
  cidade text,
  colaboradores text,
  segmento text,
  mensagem text,
  galoes_mes numeric,
  economia_estimada numeric,
  origem text DEFAULT 'acqualive-empresas',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads_empresas TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.leads_empresas TO authenticated;
GRANT ALL ON public.leads_empresas TO service_role;

ALTER TABLE public.leads_empresas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a company lead"
  ON public.leads_empresas FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read company leads"
  ON public.leads_empresas FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update company leads"
  ON public.leads_empresas FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete company leads"
  ON public.leads_empresas FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));