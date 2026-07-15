
-- 1) Franqueados: restringir SELECT direto e expor view pública sem PII
DROP POLICY IF EXISTS "Público vê franqueados ativos" ON public.franqueados;

CREATE POLICY "Autenticados veem franqueados ativos"
ON public.franqueados
FOR SELECT
TO authenticated
USING (ativo = true OR public.has_role(auth.uid(), 'admin'::public.app_role));

REVOKE SELECT ON public.franqueados FROM anon;

CREATE OR REPLACE VIEW public.franqueados_publicos
WITH (security_invoker = false) AS
SELECT
  id, nome, cidade, estado, lat, lng,
  whatsapp, instagram, foto, observacoes, horario_atendimento, ativo
FROM public.franqueados
WHERE ativo = true;

GRANT SELECT ON public.franqueados_publicos TO anon, authenticated;

-- 2) Anexos das demandas: restringir INSERT anônimo a caminhos associados a uma demanda existente
DROP POLICY IF EXISTS "Anexos demandas - upload publico" ON storage.objects;

CREATE POLICY "Anexos demandas - upload vinculado a demanda existente"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'demandas-anexos'
  AND owner IS NULL
  AND octet_length(name) BETWEEN 1 AND 255
);
