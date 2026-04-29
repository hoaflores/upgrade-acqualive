ALTER TABLE public.demandas
ADD COLUMN frequencia TEXT NOT NULL DEFAULT 'individual'
CHECK (frequencia IN ('individual', 'recorrente'));