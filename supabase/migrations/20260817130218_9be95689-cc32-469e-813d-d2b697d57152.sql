ALTER VIEW public.franqueados_publicos SET (security_invoker = false);
GRANT SELECT ON public.franqueados_publicos TO anon, authenticated;