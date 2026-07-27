
DROP POLICY IF EXISTS "Anon vê franqueados ativos (colunas públicas)" ON public.franqueados;
DROP POLICY IF EXISTS "Autenticados veem franqueados ativos" ON public.franqueados;

CREATE POLICY "Admins veem franqueados"
ON public.franqueados FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

REVOKE SELECT ON public.franqueados FROM anon;

CREATE OR REPLACE VIEW public.franqueados_publicos
WITH (security_invoker = false) AS
SELECT id, nome, cidade, estado, lat, lng, whatsapp, instagram, foto, horario_atendimento
FROM public.franqueados
WHERE ativo = true;

GRANT SELECT ON public.franqueados_publicos TO anon, authenticated;
