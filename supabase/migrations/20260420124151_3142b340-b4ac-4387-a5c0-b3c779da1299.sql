
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

CREATE POLICY "Public read blog-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

CREATE POLICY "Public upload blog-images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images');
