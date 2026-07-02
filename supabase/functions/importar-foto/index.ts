const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

// Extrai o ID do arquivo de várias formas de URL do Google Drive.
function extractDriveId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]{15,})/,
    /[?&]id=([a-zA-Z0-9_-]{15,})/,
    /\/uc\?[^#]*id=([a-zA-Z0-9_-]{15,})/,
    /^([a-zA-Z0-9_-]{25,})$/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

async function fetchDrive(id: string): Promise<{ blob: Uint8Array; contentType: string } | null> {
  // Tenta primeiro o endpoint do googleusercontent (arquivos públicos)
  const urls = [
    `https://drive.google.com/uc?export=download&id=${id}`,
    `https://lh3.googleusercontent.com/d/${id}`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) continue;
      const contentType = res.headers.get("content-type") || "image/jpeg";
      // Se veio HTML (página de aviso), pular
      if (contentType.startsWith("text/html")) continue;
      const buf = new Uint8Array(await res.arrayBuffer());
      if (buf.byteLength < 200) continue;
      return { blob: buf, contentType };
    } catch { /* try next */ }
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => ({}));
    const url: string = body?.url || "";
    if (!url) {
      return new Response(JSON.stringify({ ok: false, error: "url obrigatória" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    let fileBytes: Uint8Array | null = null;
    let contentType = "image/jpeg";

    const driveId = extractDriveId(url);
    if (driveId) {
      const r = await fetchDrive(driveId);
      if (!r) {
        return new Response(JSON.stringify({ ok: false, error: "não consegui baixar do Google Drive (verifique se está público)" }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      fileBytes = r.blob;
      contentType = r.contentType;
    } else {
      // URL direta http(s)
      try {
        const res = await fetch(url, { redirect: "follow" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        contentType = res.headers.get("content-type") || "image/jpeg";
        fileBytes = new Uint8Array(await res.arrayBuffer());
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: "download falhou: " + (e as Error).message }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const ext = contentType.includes("png") ? "png"
      : contentType.includes("webp") ? "webp"
      : contentType.includes("gif") ? "gif"
      : "jpg";
    const path = `franqueados/${crypto.randomUUID()}.${ext}`;

    const { error: upErr } = await supabase.storage.from("blog-images").upload(path, fileBytes!, {
      contentType, cacheControl: "3600", upsert: false,
    });
    if (upErr) {
      return new Response(JSON.stringify({ ok: false, error: "upload: " + upErr.message }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    return new Response(JSON.stringify({ ok: true, url: data.publicUrl }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
