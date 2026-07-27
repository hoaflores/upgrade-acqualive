DROP POLICY IF EXISTS "Anexos demandas - upload publico restrito" ON storage.objects;

CREATE POLICY "Anexos demandas - upload do proprio usuario"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'demandas-anexos'
  AND octet_length(name) BETWEEN 1 AND 255
  AND (
    name LIKE ('novas/' || auth.uid()::text || '/%')
    OR name LIKE ('comentarios/' || auth.uid()::text || '/%')
  )
  AND lower(name) ~ '\.(png|jpe?g|gif|webp|svg|pdf|docx?|xlsx?|csv|txt|pptx?|zip)$'
);

DROP POLICY IF EXISTS "Blog images sao publicas" ON storage.objects;