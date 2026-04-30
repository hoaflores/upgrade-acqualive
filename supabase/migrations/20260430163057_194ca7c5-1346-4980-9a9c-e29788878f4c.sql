ALTER TABLE public.demandas
  ADD COLUMN IF NOT EXISTS ordem_prioridade INTEGER,
  ADD COLUMN IF NOT EXISTS velocidade TEXT NOT NULL DEFAULT 'normal',
  ADD COLUMN IF NOT EXISTS data_inicio_prevista DATE,
  ADD COLUMN IF NOT EXISTS data_entrega_interna DATE;

CREATE INDEX IF NOT EXISTS idx_demandas_ordem_prioridade ON public.demandas (ordem_prioridade) WHERE ordem_prioridade IS NOT NULL;