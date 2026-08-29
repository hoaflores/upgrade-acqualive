-- MEMBROS
CREATE TABLE public.membros (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  avatar_url TEXT,
  bio TEXT,
  cidade TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.membros TO authenticated;
GRANT ALL ON public.membros TO service_role;
ALTER TABLE public.membros ENABLE ROW LEVEL SECURITY;
CREATE POLICY "membros_self_read" ON public.membros FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "membros_self_insert" ON public.membros FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "membros_self_update" ON public.membros FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY "membros_admin_read" ON public.membros FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_membros_updated_at BEFORE UPDATE ON public.membros FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- CURSOS
CREATE TABLE public.cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  titulo TEXT NOT NULL,
  subtitulo TEXT,
  descricao TEXT,
  capa_url TEXT,
  banner_url TEXT,
  categoria TEXT NOT NULL DEFAULT 'Geral',
  nivel TEXT NOT NULL DEFAULT 'iniciante',
  destaque BOOLEAN NOT NULL DEFAULT false,
  gratuito BOOLEAN NOT NULL DEFAULT true,
  preco_centavos INTEGER NOT NULL DEFAULT 0,
  checkout_url TEXT,
  publicado BOOLEAN NOT NULL DEFAULT false,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.cursos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cursos TO authenticated;
GRANT ALL ON public.cursos TO service_role;
ALTER TABLE public.cursos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "cursos_public_read" ON public.cursos FOR SELECT TO anon, authenticated USING (publicado = true);
CREATE POLICY "cursos_admin_all" ON public.cursos FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_cursos_updated_at BEFORE UPDATE ON public.cursos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- MODULOS
CREATE TABLE public.modulos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id UUID NOT NULL REFERENCES public.cursos(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descricao TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.modulos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.modulos TO authenticated;
GRANT ALL ON public.modulos TO service_role;
ALTER TABLE public.modulos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "modulos_public_read" ON public.modulos FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.cursos c WHERE c.id = modulos.curso_id AND c.publicado = true));
CREATE POLICY "modulos_admin_all" ON public.modulos FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_modulos_updated_at BEFORE UPDATE ON public.modulos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- AULAS
CREATE TABLE public.aulas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  modulo_id UUID NOT NULL REFERENCES public.modulos(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descricao TEXT,
  video_provider TEXT NOT NULL DEFAULT 'vimeo',
  video_id TEXT,
  thumb_url TEXT,
  duracao_seg INTEGER NOT NULL DEFAULT 0,
  material_url TEXT,
  amostra_gratis BOOLEAN NOT NULL DEFAULT false,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.aulas TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.aulas TO authenticated;
GRANT ALL ON public.aulas TO service_role;
ALTER TABLE public.aulas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "aulas_public_read" ON public.aulas FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.modulos m JOIN public.cursos c ON c.id = m.curso_id WHERE m.id = aulas.modulo_id AND c.publicado = true));
CREATE POLICY "aulas_admin_all" ON public.aulas FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_aulas_updated_at BEFORE UPDATE ON public.aulas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- MATRICULAS
CREATE TABLE public.matriculas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  curso_id UUID NOT NULL REFERENCES public.cursos(id) ON DELETE CASCADE,
  origem TEXT NOT NULL DEFAULT 'gratuito',
  ativa BOOLEAN NOT NULL DEFAULT true,
  expira_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, curso_id)
);
GRANT SELECT, INSERT ON public.matriculas TO authenticated;
GRANT ALL ON public.matriculas TO service_role;
ALTER TABLE public.matriculas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "matriculas_self_read" ON public.matriculas FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "matriculas_self_insert_gratuito" ON public.matriculas FOR INSERT TO authenticated WITH CHECK (
  user_id = auth.uid() AND origem = 'gratuito'
  AND EXISTS (SELECT 1 FROM public.cursos c WHERE c.id = matriculas.curso_id AND c.publicado = true AND c.gratuito = true)
);
CREATE POLICY "matriculas_admin_all" ON public.matriculas FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_matriculas_updated_at BEFORE UPDATE ON public.matriculas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PROGRESSO
CREATE TABLE public.progresso_aulas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  aula_id UUID NOT NULL REFERENCES public.aulas(id) ON DELETE CASCADE,
  concluida BOOLEAN NOT NULL DEFAULT false,
  segundos_assistidos INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, aula_id)
);
GRANT SELECT, INSERT, UPDATE ON public.progresso_aulas TO authenticated;
GRANT ALL ON public.progresso_aulas TO service_role;
ALTER TABLE public.progresso_aulas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "progresso_self_all" ON public.progresso_aulas FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE TRIGGER trg_progresso_updated_at BEFORE UPDATE ON public.progresso_aulas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- PRODUTOS
CREATE TABLE public.produtos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  descricao TEXT,
  imagem_url TEXT,
  categoria TEXT NOT NULL DEFAULT 'Geral',
  preco_centavos INTEGER NOT NULL DEFAULT 0,
  preco_de_centavos INTEGER,
  checkout_url TEXT,
  destaque BOOLEAN NOT NULL DEFAULT false,
  ativo BOOLEAN NOT NULL DEFAULT true,
  ordem INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.produtos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.produtos TO authenticated;
GRANT ALL ON public.produtos TO service_role;
ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "produtos_public_read" ON public.produtos FOR SELECT TO anon, authenticated USING (ativo = true);
CREATE POLICY "produtos_admin_all" ON public.produtos FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_produtos_updated_at BEFORE UPDATE ON public.produtos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- FEED
CREATE TABLE public.feed_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  resumo TEXT,
  conteudo TEXT NOT NULL DEFAULT '',
  imagem_url TEXT,
  link_url TEXT,
  categoria TEXT NOT NULL DEFAULT 'Novidades',
  autor_nome TEXT NOT NULL DEFAULT 'Equipe Acqualive',
  publicado BOOLEAN NOT NULL DEFAULT true,
  fixado BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.feed_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.feed_posts TO authenticated;
GRANT ALL ON public.feed_posts TO service_role;
ALTER TABLE public.feed_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "feed_public_read" ON public.feed_posts FOR SELECT TO anon, authenticated USING (publicado = true);
CREATE POLICY "feed_admin_all" ON public.feed_posts FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_feed_updated_at BEFORE UPDATE ON public.feed_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- FORUM
CREATE TABLE public.forum_topicos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  autor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  autor_nome TEXT NOT NULL DEFAULT '',
  titulo TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  categoria TEXT NOT NULL DEFAULT 'Geral',
  fixado BOOLEAN NOT NULL DEFAULT false,
  fechado BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.forum_topicos TO authenticated;
GRANT ALL ON public.forum_topicos TO service_role;
ALTER TABLE public.forum_topicos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "forum_topicos_read" ON public.forum_topicos FOR SELECT TO authenticated USING (true);
CREATE POLICY "forum_topicos_insert" ON public.forum_topicos FOR INSERT TO authenticated WITH CHECK (autor_id = auth.uid() AND length(btrim(titulo)) BETWEEN 3 AND 160 AND length(btrim(conteudo)) BETWEEN 1 AND 5000);
CREATE POLICY "forum_topicos_own_update" ON public.forum_topicos FOR UPDATE TO authenticated USING (autor_id = auth.uid()) WITH CHECK (autor_id = auth.uid());
CREATE POLICY "forum_topicos_own_delete" ON public.forum_topicos FOR DELETE TO authenticated USING (autor_id = auth.uid());
CREATE POLICY "forum_topicos_admin_all" ON public.forum_topicos FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_forum_topicos_updated_at BEFORE UPDATE ON public.forum_topicos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.forum_respostas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topico_id UUID NOT NULL REFERENCES public.forum_topicos(id) ON DELETE CASCADE,
  autor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  autor_nome TEXT NOT NULL DEFAULT '',
  conteudo TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.forum_respostas TO authenticated;
GRANT ALL ON public.forum_respostas TO service_role;
ALTER TABLE public.forum_respostas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "forum_respostas_read" ON public.forum_respostas FOR SELECT TO authenticated USING (true);
CREATE POLICY "forum_respostas_insert" ON public.forum_respostas FOR INSERT TO authenticated WITH CHECK (autor_id = auth.uid() AND length(btrim(conteudo)) BETWEEN 1 AND 5000 AND EXISTS (SELECT 1 FROM public.forum_topicos t WHERE t.id = forum_respostas.topico_id AND t.fechado = false));
CREATE POLICY "forum_respostas_own_update" ON public.forum_respostas FOR UPDATE TO authenticated USING (autor_id = auth.uid()) WITH CHECK (autor_id = auth.uid());
CREATE POLICY "forum_respostas_own_delete" ON public.forum_respostas FOR DELETE TO authenticated USING (autor_id = auth.uid());
CREATE POLICY "forum_respostas_admin_all" ON public.forum_respostas FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER trg_forum_respostas_updated_at BEFORE UPDATE ON public.forum_respostas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_modulos_curso ON public.modulos(curso_id, ordem);
CREATE INDEX idx_aulas_modulo ON public.aulas(modulo_id, ordem);
CREATE INDEX idx_matriculas_user ON public.matriculas(user_id);
CREATE INDEX idx_progresso_user ON public.progresso_aulas(user_id);
CREATE INDEX idx_forum_respostas_topico ON public.forum_respostas(topico_id, created_at);