
DROP VIEW IF EXISTS public.franqueados_publicos;

-- Grant column-level SELECT to anon (excludes email and telefone)
GRANT SELECT
  (id, nome, cidade, estado, lat, lng, whatsapp, instagram, foto, observacoes, horario_atendimento, ativo)
  ON public.franqueados TO anon;

-- RLS policy allowing anon to read only active franqueados
CREATE POLICY "Anon vê franqueados ativos (colunas públicas)"
ON public.franqueados
FOR SELECT
TO anon
USING (ativo = true);
