-- ============ storage: demandas-anexos ============
DROP POLICY IF EXISTS "Anexos demandas - upload vinculado a demanda existente" ON storage.objects;

CREATE POLICY "Anexos demandas - upload publico restrito"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'demandas-anexos'
  AND owner IS NULL
  AND octet_length(name) BETWEEN 1 AND 255
  AND (name LIKE 'novas/%' OR name LIKE 'comentarios/%')
  AND lower(name) ~ '\.(png|jpe?g|gif|webp|svg|pdf|docx?|xlsx?|csv|txt|pptx?|zip)$'
);

CREATE POLICY "Anexos demandas - leitura admin ou solicitante"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'demandas-anexos'
  AND (
    public.has_role(auth.uid(), 'admin'::public.app_role)
    OR EXISTS (
      SELECT 1 FROM public.demanda_anexos da
      JOIN public.demandas d ON d.id = da.demanda_id
      WHERE da.storage_path = storage.objects.name
        AND lower(d.solicitante_email) = lower(COALESCE(auth.jwt() ->> 'email', ''))
    )
  )
);

CREATE POLICY "Anexos demandas - update admin"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'demandas-anexos' AND public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (bucket_id = 'demandas-anexos' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Anexos demandas - delete admin"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'demandas-anexos' AND public.has_role(auth.uid(), 'admin'::public.app_role));

-- ============ storage: blog-images (leitura publica explicita) ============
DROP POLICY IF EXISTS "Blog images sao publicas" ON storage.objects;
CREATE POLICY "Blog images sao publicas"
ON storage.objects FOR SELECT TO anon, authenticated
USING (bucket_id = 'blog-images');

-- ============ leads_empresas: validacao no INSERT ============
DROP POLICY IF EXISTS "Anyone can submit a company lead" ON public.leads_empresas;
CREATE POLICY "Anyone can submit a company lead"
ON public.leads_empresas FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(nome)) BETWEEN 2 AND 120
  AND length(btrim(empresa)) BETWEEN 2 AND 160
  AND email ~* '^[^@\s]+@[^@\s]+\.[a-z]{2,}$' AND length(email) <= 200
  AND length(btrim(telefone)) BETWEEN 8 AND 30
  AND (cidade IS NULL OR length(cidade) <= 120)
  AND (colaboradores IS NULL OR length(colaboradores) <= 60)
  AND (segmento IS NULL OR length(segmento) <= 120)
  AND (unidades IS NULL OR length(unidades) <= 60)
  AND (objetivo IS NULL OR length(objetivo) <= 120)
  AND (mensagem IS NULL OR length(mensagem) <= 3000)
);