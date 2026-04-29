-- Histórico de mudanças de status das demandas
CREATE TABLE public.demanda_status_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  demanda_id UUID NOT NULL,
  status_anterior TEXT,
  status_novo TEXT NOT NULL,
  alterado_por TEXT,
  observacao TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_demanda_status_log_demanda ON public.demanda_status_log(demanda_id);

ALTER TABLE public.demanda_status_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Status log - leitura publica"
ON public.demanda_status_log FOR SELECT TO public USING (true);

CREATE POLICY "Status log - insert publico"
ON public.demanda_status_log FOR INSERT TO public WITH CHECK (true);