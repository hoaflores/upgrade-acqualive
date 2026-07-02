import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const STATUS_LABEL: Record<string, string> = {
  nova: "Na fila",
  em_andamento: "Em andamento",
  em_revisao: "Em revisão",
  concluida: "Entregue",
  cancelada: "Cancelada",
};

const STATUS_DESC: Record<string, string> = {
  nova: "Sua demanda está na fila e será iniciada em breve.",
  em_andamento: "Sua demanda começou a ser produzida pelo time de marketing.",
  em_revisao: "Sua demanda está em revisão final antes da entrega.",
  concluida: "Sua demanda foi entregue. Verifique os comentários e anexos no painel.",
  cancelada: "Sua demanda foi cancelada. Entre em contato com o time para mais detalhes.",
};

const STATUS_COLOR: Record<string, string> = {
  nova: "#3b82f6",
  em_andamento: "#f59e0b",
  em_revisao: "#8b5cf6",
  concluida: "#10b981",
  cancelada: "#64748b",
};

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
  if (!resp.ok) {
    console.error("Gmail send failed", resp.status, await resp.text());
  }
}

function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function htmlEmail(d: any, statusNovo: string, statusAnterior: string | null, observacao: string | null) {
  const labelNovo = STATUS_LABEL[statusNovo] || statusNovo;
  const labelAntigo = statusAnterior ? (STATUS_LABEL[statusAnterior] || statusAnterior) : "";
  const cor = STATUS_COLOR[statusNovo] || "#0a3d62";
  const desc = STATUS_DESC[statusNovo] || "";
  const primeiroNome = (d.solicitante || "").split(" ")[0] || "";

  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f6f7f9">
    <div style="background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e5e7eb">
      <div style="background:linear-gradient(135deg,#0a3d62,#1e6091);color:#fff;padding:18px 20px;border-radius:8px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:1px;opacity:.8">ATUALIZAÇÃO DE STATUS</div>
        <div style="font-size:24px;font-weight:700">${escapeHtml(d.protocolo)}</div>
      </div>

      <p style="color:#333;margin:0 0 16px">Olá ${escapeHtml(primeiroNome)}, sua demanda teve uma atualização de status.</p>

      <h3 style="color:#0a3d62;margin:0 0 12px">${escapeHtml(d.titulo)}</h3>

      <div style="text-align:center;margin:24px 0">
        ${labelAntigo ? `<span style="display:inline-block;padding:8px 14px;background:#f1f5f9;color:#64748b;border-radius:999px;font-weight:600;font-size:13px">${escapeHtml(labelAntigo)}</span>
        <span style="margin:0 10px;color:#94a3b8;font-size:18px">→</span>` : ""}
        <span style="display:inline-block;padding:10px 18px;background:${cor};color:#fff;border-radius:999px;font-weight:700;font-size:14px">${escapeHtml(labelNovo)}</span>
      </div>

      <p style="color:#475569;background:#f9fafb;padding:14px 16px;border-radius:8px;border-left:4px solid ${cor};margin:0 0 18px">${escapeHtml(desc)}</p>

      ${observacao ? `<p style="margin:16px 0 4px"><strong>Observação do time:</strong></p><div style="background:#fffbeb;border:1px solid #fde68a;padding:14px;border-radius:8px;color:#78350f;white-space:pre-wrap">${escapeHtml(observacao)}</div>` : ""}

      <table style="width:100%;border-collapse:collapse;margin:18px 0">
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb;width:40%"><strong>Tipo</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.tipo)}</td></tr>
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb"><strong>Prazo esperado</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.prazo_esperado)}</td></tr>
        ${d.responsavel ? `<tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb"><strong>Responsável</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.responsavel)}</td></tr>` : ""}
      </table>

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
  return { ok: true as const, email: data.user.email };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const auth = await requireAdmin(req);
    if (!auth.ok) {
      return new Response(JSON.stringify({ error: auth.msg }), {
        status: auth.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const body = await req.json();
    const { demanda_id, status_novo, status_anterior, alterado_por, observacao } = body;

    if (!demanda_id || !status_novo) {
      return new Response(JSON.stringify({ error: "demanda_id e status_novo são obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: demanda, error } = await supabase
      .from("demandas")
      .select("*")
      .eq("id", demanda_id)
      .single();
    if (error || !demanda) throw error || new Error("Demanda não encontrada");

    await supabase.from("demanda_status_log").insert({
      demanda_id,
      status_anterior: status_anterior || null,
      status_novo,
      alterado_por: alterado_por || auth.email || "marketing",
      observacao: observacao || null,
    });

    const subject = `[${demanda.protocolo}] Status atualizado: ${STATUS_LABEL[status_novo] || status_novo}`;
    await sendGmail(demanda.solicitante_email, subject, htmlEmail(demanda, status_novo, status_anterior, observacao));

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error("notificar-status-demanda error", e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

