const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SHEET_ID = "1eaT79rlqJkm-13azcYnz4OtmM_jFL33v2I5adqsqmhg";
const RANGE = "A:C";
const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { email, source } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "email inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GS_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY || !GS_KEY) {
      return new Response(JSON.stringify({ error: "credenciais ausentes" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = `${GATEWAY}/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const now = new Date().toISOString();
    const row = [[email.trim().toLowerCase(), source || "blog-home", now]];

    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GS_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: row, majorDimension: "ROWS" }),
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error("sheets append failed", r.status, txt);
      return new Response(JSON.stringify({ error: "falha ao gravar", status: r.status }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
