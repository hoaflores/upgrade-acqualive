
ALTER VIEW public.franqueados_publicos SET (security_invoker = true);

CREATE POLICY "Anon vê franqueados ativos"
ON public.franqueados FOR SELECT TO anon
USING (ativo = true);

CREATE POLICY "Autenticados veem franqueados ativos"
ON public.franqueados FOR SELECT TO authenticated
USING (ativo = true);

REVOKE SELECT ON public.franqueados FROM anon, authenticated;
GRANT SELECT (id, nome, cidade, estado, lat, lng, whatsapp, instagram, foto, horario_atendimento, ativo)
ON public.franqueados TO anon, authenticated;
GRANT SELECT ON public.franqueados TO service_role;
