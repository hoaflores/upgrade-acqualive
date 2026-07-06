UPDATE public.franqueados
SET lat = -29.467152, lng = -51.962405, updated_at = now()
WHERE cidade ILIKE 'lajeado' AND estado = 'RS';