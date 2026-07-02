
-- 1) Storage: remover políticas SELECT amplas que permitem listagem
DROP POLICY IF EXISTS "Public read blog-images" ON storage.objects;
DROP POLICY IF EXISTS "Anexos demandas - leitura publica" ON storage.objects;

-- 2) SECURITY DEFINER functions: revogar EXECUTE de PUBLIC/anon/authenticated
REVOKE ALL ON FUNCTION public.gerar_protocolo_demanda() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.gerar_protocolo_demanda() TO service_role;

REVOKE ALL ON FUNCTION public.tem_acesso_painel(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.tem_acesso_painel(uuid) TO service_role;

-- 3) Substituir criar_meu_perfil (RPC pública) por trigger em auth.users
DROP FUNCTION IF EXISTS public.criar_meu_perfil(text, text);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, nome, funcao, email, aprovado)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'nome', ''),
    NEW.raw_user_meta_data->>'funcao',
    NEW.email,
    false
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Trigger não é chamável via API (roda apenas dentro do banco)
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
