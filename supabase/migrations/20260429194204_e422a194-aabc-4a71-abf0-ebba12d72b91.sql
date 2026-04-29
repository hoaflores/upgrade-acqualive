-- 1) Tokens aleatórios de protocolo (não sequenciais e não adivinháveis)
CREATE OR REPLACE FUNCTION public.gerar_protocolo_demanda()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  ano TEXT;
  token TEXT;
  alphabet TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- sem 0/O/1/I para legibilidade
  i INT;
  exists_count INT;
BEGIN
  ano := to_char(now(), 'YYYY');
  LOOP
    token := '';
    FOR i IN 1..8 LOOP
      token := token || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    END LOOP;
    SELECT count(*) INTO exists_count FROM public.demandas WHERE protocolo = 'DEM-' || ano || '-' || token;
    EXIT WHEN exists_count = 0;
  END LOOP;
  RETURN 'DEM-' || ano || '-' || token;
END;
$function$;

-- 2) Tabela de histórico geral de atividades (todas as mudanças)
CREATE TABLE IF NOT EXISTS public.demanda_atividades (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  demanda_id UUID NOT NULL,
  tipo TEXT NOT NULL,
  campo TEXT,
  valor_anterior TEXT,
  valor_novo TEXT,
  autor TEXT,
  detalhes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demanda_atividades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Atividades - leitura publica" ON public.demanda_atividades FOR SELECT USING (true);
CREATE POLICY "Atividades - insert publico" ON public.demanda_atividades FOR INSERT WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_demanda_atividades_demanda ON public.demanda_atividades(demanda_id, created_at DESC);

-- 3) Habilitar Realtime nas tabelas relevantes
ALTER TABLE public.demandas REPLICA IDENTITY FULL;
ALTER TABLE public.demanda_comentarios REPLICA IDENTITY FULL;
ALTER TABLE public.demanda_status_log REPLICA IDENTITY FULL;
ALTER TABLE public.demanda_atividades REPLICA IDENTITY FULL;

DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.demandas;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.demanda_comentarios;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.demanda_status_log;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.demanda_atividades;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;

-- 4) Política para permitir solicitante adicionar anexos depois (já está pública)
-- Garantir update público em comentários para flag visivel se quisermos no futuro
