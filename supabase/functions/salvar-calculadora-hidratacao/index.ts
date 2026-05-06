import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SPREADSHEET_ID = "1FjuUAHc7PbaSJ97YRUH6Ah30ttxDfV0Y-GlzCrKA61A";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
function limited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  e.count++;
  return e.count > 20;
}

function s(v: unknown, max = 200): string {
  if (v === undefined || v === null) return "";
  return String(v).replace(/[<>]/g, "").replace(/[\x00-\x1F\x7F]/g, "").trim().slice(0, max);
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (limited(ip)) {
      return new Response(JSON.stringify({ error: "rate_limited" }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      return new Response(JSON.stringify({ error: "config_missing" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const evento = s(body.evento, 50) || "calculo";

    const row = [
      new Date().toISOString(),
      evento,
      s(body.nome, 120),
      s(body.email, 200),
      s(body.whatsapp, 30),
      s(body.sexo, 20),
      s(body.idade, 10),
      s(body.peso_kg, 10),
      s(body.altura_cm, 10),
      s(body.atividade_min_semana, 10),
      s(body.intensidade, 30),
      s(body.clima, 30),
      s(body.gestante_lactante, 20),
      s(body.cafe_alcool, 30),
      s(body.agua_ml, 10),
      s(body.agua_litros, 10),
      s(body.cta_destino, 200),
      s(req.headers.get("user-agent") || "", 300),
      s(req.headers.get("referer") || "", 300),
    ];

    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const r = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error("sheets error", r.status, txt);
      return new Response(JSON.stringify({ error: "sheets_failed", status: r.status }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "internal" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
