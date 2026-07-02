
CREATE TABLE public.franqueados (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  cidade TEXT NOT NULL,
  estado TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  whatsapp TEXT NOT NULL,
  instagram TEXT,
  email TEXT,
  foto TEXT,
  telefone TEXT,
  observacoes TEXT,
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.franqueados TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.franqueados TO authenticated;
GRANT ALL ON public.franqueados TO service_role;

ALTER TABLE public.franqueados ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Público vê franqueados ativos"
ON public.franqueados FOR SELECT
USING (ativo = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins gerenciam franqueados"
ON public.franqueados FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_franqueados_updated_at
BEFORE UPDATE ON public.franqueados
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_franqueados_cidade ON public.franqueados(cidade);
CREATE INDEX idx_franqueados_ativo ON public.franqueados(ativo);
