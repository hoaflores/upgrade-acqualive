CREATE OR REPLACE FUNCTION public.is_membro(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.membros WHERE id = _user_id);
$$;
REVOKE EXECUTE ON FUNCTION public.is_membro(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_membro(uuid) TO authenticated;

DROP POLICY IF EXISTS "forum_topicos_read" ON public.forum_topicos;
CREATE POLICY "forum_topicos_read" ON public.forum_topicos FOR SELECT TO authenticated
USING (public.is_membro(auth.uid()));

DROP POLICY IF EXISTS "forum_respostas_read" ON public.forum_respostas;
CREATE POLICY "forum_respostas_read" ON public.forum_respostas FOR SELECT TO authenticated
USING (public.is_membro(auth.uid()));