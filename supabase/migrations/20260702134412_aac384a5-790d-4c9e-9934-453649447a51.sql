
-- 1. Role system
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- 2. has_role as SECURITY INVOKER (avoids the SECURITY DEFINER linter finding)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 3. Lock down gerar_protocolo_demanda (default of demandas.protocolo). Only service_role calls it (via edge function).
REVOKE ALL ON FUNCTION public.gerar_protocolo_demanda() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.gerar_protocolo_demanda() TO service_role;

-- 4. demandas policies
DROP POLICY IF EXISTS "Demandas - insert publico" ON public.demandas;
DROP POLICY IF EXISTS "Demandas - leitura publica" ON public.demandas;
DROP POLICY IF EXISTS "Demandas - update publico" ON public.demandas;

REVOKE ALL ON public.demandas FROM anon;
GRANT SELECT, UPDATE ON public.demandas TO authenticated;
GRANT ALL ON public.demandas TO service_role;

CREATE POLICY "Admin can view all demandas"
  ON public.demandas FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Solicitante can view own demanda"
  ON public.demandas FOR SELECT TO authenticated
  USING (lower(solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', '')));

CREATE POLICY "Admin can update demandas"
  ON public.demandas FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. demanda_status_log
DROP POLICY IF EXISTS "Status log - insert publico" ON public.demanda_status_log;
DROP POLICY IF EXISTS "Status log - leitura publica" ON public.demanda_status_log;

REVOKE ALL ON public.demanda_status_log FROM anon;
GRANT SELECT ON public.demanda_status_log TO authenticated;
GRANT ALL ON public.demanda_status_log TO service_role;

CREATE POLICY "Admin or owner can view status log"
  ON public.demanda_status_log FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

-- 6. demanda_comentarios
DROP POLICY IF EXISTS "Comentarios - insert publico" ON public.demanda_comentarios;
DROP POLICY IF EXISTS "Comentarios - leitura publica" ON public.demanda_comentarios;

REVOKE ALL ON public.demanda_comentarios FROM anon;
GRANT SELECT, INSERT ON public.demanda_comentarios TO authenticated;
GRANT ALL ON public.demanda_comentarios TO service_role;

CREATE POLICY "Admin or owner can view comentarios"
  ON public.demanda_comentarios FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

CREATE POLICY "Admin or owner can insert comentarios"
  ON public.demanda_comentarios FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

-- 7. demanda_atividades
DROP POLICY IF EXISTS "Atividades - insert publico" ON public.demanda_atividades;
DROP POLICY IF EXISTS "Atividades - leitura publica" ON public.demanda_atividades;

REVOKE ALL ON public.demanda_atividades FROM anon;
GRANT SELECT, INSERT ON public.demanda_atividades TO authenticated;
GRANT ALL ON public.demanda_atividades TO service_role;

CREATE POLICY "Admin or owner can view atividades"
  ON public.demanda_atividades FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

CREATE POLICY "Admin or owner can insert atividades"
  ON public.demanda_atividades FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

-- 8. demanda_anexos
DROP POLICY IF EXISTS "Anexos - insert publico" ON public.demanda_anexos;
DROP POLICY IF EXISTS "Anexos - leitura publica" ON public.demanda_anexos;

REVOKE ALL ON public.demanda_anexos FROM anon;
GRANT SELECT, INSERT ON public.demanda_anexos TO authenticated;
GRANT ALL ON public.demanda_anexos TO service_role;

CREATE POLICY "Admin or owner can view anexos"
  ON public.demanda_anexos FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

CREATE POLICY "Admin or owner can insert anexos"
  ON public.demanda_anexos FOR INSERT TO authenticated
  WITH CHECK (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.demandas d
      WHERE d.id = demanda_id
        AND lower(d.solicitante_email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
  );

-- 9. blog-images bucket: require admin role for writes (reads remain public via existing SELECT policy)
DROP POLICY IF EXISTS "Public upload blog-images" ON storage.objects;

CREATE POLICY "Admin can upload blog-images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin can update blog-images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin can delete blog-images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'blog-images' AND public.has_role(auth.uid(), 'admin'));
