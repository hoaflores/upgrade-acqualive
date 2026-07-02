import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

function b64url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildEmailRaw(to: string, subject: string, html: string, fromName = "Demandas Acqualive") {
  const boundary = "BOUNDARY_" + Math.random().toString(36).slice(2);
  const headers = [
    `To: ${to}`,
    `From: ${fromName} <me>`,
    `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    html,
    `--${boundary}--`,
  ].join("\r\n");
  return b64url(headers);
}

async function sendGmail(to: string, subject: string, html: string) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GOOGLE_MAIL_API_KEY = Deno.env.get("GOOGLE_MAIL_API_KEY");
  if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
    console.error("Missing Gmail credentials");
    return;
  }
  const raw = buildEmailRaw(to, subject, html);
  const resp = await fetch(`${GMAIL_GATEWAY}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });
  if (!resp.ok) console.error("Gmail send failed", resp.status, await resp.text());
}

function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function htmlEmail(d: any, autor: string, texto: string) {
  const primeiroNome = (d.solicitante || "").split(" ")[0] || "";
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f6f7f9">
    <div style="background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e5e7eb">
      <div style="background:linear-gradient(135deg,#0a3d62,#1e6091);color:#fff;padding:18px 20px;border-radius:8px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:1px;opacity:.8">NOVO COMENTÁRIO</div>
        <div style="font-size:24px;font-weight:700">${escapeHtml(d.protocolo)}</div>
      </div>
      <p style="color:#333;margin:0 0 16px">Olá ${escapeHtml(primeiroNome)}, o time deixou um novo comentário na sua demanda.</p>
      <h3 style="color:#0a3d62;margin:0 0 12px">${escapeHtml(d.titulo)}</h3>
      <div style="background:#f9fafb;border-left:4px solid #0a3d62;padding:14px 16px;border-radius:6px;margin:16px 0">
        <div style="font-size:12px;color:#64748b;margin-bottom:6px"><strong>${escapeHtml(autor)}</strong> escreveu:</div>
        <div style="color:#1f2937;white-space:pre-wrap">${escapeHtml(texto)}</div>
      </div>
      <p style="margin-top:24px;color:#666;font-size:13px">Acompanhe sua demanda informando o protocolo <strong>${escapeHtml(d.protocolo)}</strong> em nosso painel.</p>
    </div>
  </div>`;
}

async function requireAdmin(req: Request) {
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "");
  if (!token) return { ok: false, status: 401, msg: "Não autenticado" };
  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const authClient = createClient(url, anon);
  const { data, error } = await authClient.auth.getUser(token);
  if (error || !data.user) return { ok: false, status: 401, msg: "Sessão inválida" };
  const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: roles } = await admin.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin").maybeSingle();
  if (!roles) return { ok: false, status: 403, msg: "Acesso negado" };
  return { ok: true as const };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const auth = await requireAdmin(req);
    if (!auth.ok) {
      return new Response(JSON.stringify({ error: auth.msg }), {
        status: auth.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { demanda_id, autor, texto } = await req.json();
    if (!demanda_id || !autor || !texto) {
      return new Response(JSON.stringify({ error: "demanda_id, autor e texto são obrigatórios" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: demanda, error } = await supabase.from("demandas").select("*").eq("id", demanda_id).single();
    if (error || !demanda) throw error || new Error("Demanda não encontrada");

    await sendGmail(
      demanda.solicitante_email,
      `[${demanda.protocolo}] Novo comentário do time`,
      htmlEmail(demanda, autor, texto),
    );
    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e: any) {
    console.error("notificar-comentario error", e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

