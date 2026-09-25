DROP POLICY IF EXISTS "forum_topicos_read" ON public.forum_topicos;
CREATE POLICY "forum_topicos_read" ON public.forum_topicos FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.membros m WHERE m.id = auth.uid()));
DROP POLICY IF EXISTS "forum_respostas_read" ON public.forum_respostas;
CREATE POLICY "forum_respostas_read" ON public.forum_respostas FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.membros m WHERE m.id = auth.uid()));
DROP FUNCTION IF EXISTS public.is_membro(uuid);