ALTER VIEW public.franqueados_publicos SET (security_invoker = true);

-- anon so enxerga as colunas publicas da tabela base (sem email, telefone, observacoes)
REVOKE SELECT ON public.franqueados FROM anon;
GRANT SELECT (id, nome, cidade, estado, lat, lng, whatsapp, instagram, foto, horario_atendimento, ativo)
  ON public.franqueados TO anon;

CREATE POLICY "Anon vê franqueados ativos" ON public.franqueados
  FOR SELECT TO anon USING (ativo = true);
CREATE POLICY "Autenticados veem franqueados ativos" ON public.franqueados
  FOR SELECT TO authenticated USING (ativo = true);