-- Sequence for protocol numbers
CREATE SEQUENCE IF NOT EXISTS public.demanda_protocolo_seq START 1;

-- Function to generate protocol like DEM-2026-001
CREATE OR REPLACE FUNCTION public.gerar_protocolo_demanda()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  ano TEXT;
  num INT;
BEGIN
  ano := to_char(now(), 'YYYY');
  num := nextval('public.demanda_protocolo_seq');
  RETURN 'DEM-' || ano || '-' || lpad(num::text, 3, '0');
END;
$$;

-- Update timestamps function (idempotent)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Main demandas table
CREATE TABLE public.demandas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  protocolo TEXT NOT NULL UNIQUE DEFAULT public.gerar_protocolo_demanda(),
  solicitante TEXT NOT NULL,
  solicitante_email TEXT NOT NULL,
  emails_extras TEXT[] DEFAULT '{}',
  tipo TEXT NOT NULL CHECK (tipo IN ('texto', 'arte', 'video', 'pagina', 'outro')),
  titulo TEXT NOT NULL,
  briefing TEXT NOT NULL,
  links_referencia TEXT,
  prazo_esperado DATE NOT NULL,
  prazo_estimado_dias INT,
  prioridade TEXT NOT NULL DEFAULT 'media' CHECK (prioridade IN ('baixa', 'media', 'alta', 'urgente')),
  status TEXT NOT NULL DEFAULT 'nova' CHECK (status IN ('nova', 'em_andamento', 'em_revisao', 'concluida', 'cancelada')),
  responsavel TEXT,
  concluida_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_demandas_status ON public.demandas(status);
CREATE INDEX idx_demandas_created_at ON public.demandas(created_at DESC);
CREATE INDEX idx_demandas_prazo ON public.demandas(prazo_esperado);

CREATE TRIGGER trg_demandas_updated_at
BEFORE UPDATE ON public.demandas
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Anexos
CREATE TABLE public.demanda_anexos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  demanda_id UUID NOT NULL REFERENCES public.demandas(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  nome_arquivo TEXT NOT NULL,
  tipo_mime TEXT,
  tamanho_bytes BIGINT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_anexos_demanda ON public.demanda_anexos(demanda_id);

-- Comentários
CREATE TABLE public.demanda_comentarios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  demanda_id UUID NOT NULL REFERENCES public.demandas(id) ON DELETE CASCADE,
  autor TEXT NOT NULL,
  texto TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_comentarios_demanda ON public.demanda_comentarios(demanda_id);

-- RLS: shared-password app — protection is at the app/edge-function layer.
ALTER TABLE public.demandas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demanda_anexos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demanda_comentarios ENABLE ROW LEVEL SECURITY;

-- Open policies (no Supabase auth in this flow). Writes go through edge functions with password gate.
CREATE POLICY "Demandas - leitura publica" ON public.demandas FOR SELECT USING (true);
CREATE POLICY "Demandas - insert publico" ON public.demandas FOR INSERT WITH CHECK (true);
CREATE POLICY "Demandas - update publico" ON public.demandas FOR UPDATE USING (true);

CREATE POLICY "Anexos - leitura publica" ON public.demanda_anexos FOR SELECT USING (true);
CREATE POLICY "Anexos - insert publico" ON public.demanda_anexos FOR INSERT WITH CHECK (true);

CREATE POLICY "Comentarios - leitura publica" ON public.demanda_comentarios FOR SELECT USING (true);
CREATE POLICY "Comentarios - insert publico" ON public.demanda_comentarios FOR INSERT WITH CHECK (true);

-- Storage bucket para anexos
INSERT INTO storage.buckets (id, name, public)
VALUES ('demandas-anexos', 'demandas-anexos', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anexos demandas - leitura publica"
ON storage.objects FOR SELECT
USING (bucket_id = 'demandas-anexos');

CREATE POLICY "Anexos demandas - upload publico"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'demandas-anexos');