DROP POLICY IF EXISTS "Anon vê franqueados ativos" ON public.franqueados;
DROP POLICY IF EXISTS "Autenticados veem franqueados ativos" ON public.franqueados;
REVOKE SELECT ON public.franqueados FROM anon;