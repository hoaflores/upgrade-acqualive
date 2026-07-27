CREATE TABLE public.leads_quiz (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  telefone text NOT NULL,
  email text,
  acertos integer,
  total integer,
  origem text DEFAULT 'portal-cientifico-quiz',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads_quiz TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.leads_quiz TO authenticated;
GRANT ALL ON public.leads_quiz TO service_role;

ALTER TABLE public.leads_quiz ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quiz lead" ON public.leads_quiz
FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(nome)) >= 2 AND length(btrim(nome)) <= 120
  AND length(btrim(telefone)) >= 8 AND length(btrim(telefone)) <= 30
  AND (email IS NULL OR (email ~* '^[^@\s]+@[^@\s]+\.[a-z]{2,}$' AND length(email) <= 200))
  AND (acertos IS NULL OR (acertos >= 0 AND acertos <= 100))
  AND (total IS NULL OR (total >= 0 AND total <= 100))
  AND (origem IS NULL OR length(origem) <= 80)
);

CREATE POLICY "Admins can read quiz leads" ON public.leads_quiz
FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update quiz leads" ON public.leads_quiz
FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete quiz leads" ON public.leads_quiz
FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));