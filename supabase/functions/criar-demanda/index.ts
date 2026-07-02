import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SPREADSHEET_ID = "1aiYQRZbBFTR44G7aLAu0rU8YjZgIb4QyRbReDfUQgxg";
const SHEETS_GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";
const GMAIL_GATEWAY = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const MARKETING_EMAILS = [
  "socialmedia@acqualivesul.com.br",
  "guilherme@acqualivesul.com.br",
  "mktdigital@acqualivesul.com.br",
  "flores@acqualivesul.com.br",
  "gustavo@acqualivesul.com.br",
  "gustavo@acqualive.com.br",
];

const PRAZO_POR_TIPO: Record<string, number> = {
  texto: 2,
  arte: 3,
  video: 7,
  pagina: 5,
  outro: 5,
};

const TIPO_LABEL: Record<string, string> = {
  texto: "Texto / Copy",
  arte: "Arte / Design",
  video: "Vídeo",
  pagina: "Página / Landing",
  outro: "Outro",
};

function b64url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeUrl(u: unknown): string {
  const s = String(u ?? "").trim();
  if (/^https?:\/\//i.test(s)) return escapeHtml(s);
  return "#";
}

function buildEmailRaw(to: string[], subject: string, html: string, fromName = "Demandas Acqualive") {
  const boundary = "BOUNDARY_" + Math.random().toString(36).slice(2);
  const headers = [
    `To: ${to.join(", ")}`,
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

async function sendGmail(to: string[], subject: string, html: string) {
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

async function appendToSheet(row: (string | number)[]) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
  if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) return;
  const url = `${SHEETS_GATEWAY}/spreadsheets/${SPREADSHEET_ID}/values/Demandas!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });
  if (!resp.ok) console.error("Sheets append failed", resp.status, await resp.text());
}

function emailHtml(d: any, anexosUrls: string[]) {
  const anexosHtml = anexosUrls.length
    ? `<p style="margin:12px 0 4px"><strong>Anexos:</strong></p><ul>${anexosUrls
        .map((u) => `<li><a href="${safeUrl(u)}">${escapeHtml(String(u).split("/").pop() || "")}</a></li>`)
        .join("")}</ul>`
    : "";
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f6f7f9">
    <div style="background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e5e7eb">
      <div style="background:linear-gradient(135deg,#0a3d62,#1e6091);color:#fff;padding:18px 20px;border-radius:8px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:1px;opacity:.8">PROTOCOLO</div>
        <div style="font-size:24px;font-weight:700">${escapeHtml(d.protocolo)}</div>
      </div>
      <h2 style="margin:0 0 8px;color:#0a3d62">${escapeHtml(d.titulo)}</h2>
      <p style="color:#555;margin:0 0 16px"><strong>Tipo:</strong> ${escapeHtml(d.tipo_label || TIPO_LABEL[d.tipo] || d.tipo)} • <strong>Frequência:</strong> ${d.frequencia === "recorrente" ? "Recorrente" : "Individual"} • <strong>Prioridade:</strong> ${escapeHtml(String(d.prioridade).toUpperCase())}</p>
      <table style="width:100%;border-collapse:collapse;margin:12px 0">
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb;width:40%"><strong>Solicitante</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.solicitante)}</td></tr>
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.solicitante_email)}</td></tr>
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb"><strong>Prazo esperado</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.prazo_esperado)}</td></tr>
        <tr><td style="padding:8px;background:#f9fafb;border:1px solid #e5e7eb"><strong>Estimativa interna</strong></td><td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(d.prazo_estimado_dias)} dias úteis</td></tr>
      </table>
      <p style="margin:16px 0 4px"><strong>Briefing:</strong></p>
      <div style="background:#f9fafb;padding:14px;border-radius:8px;border:1px solid #e5e7eb;white-space:pre-wrap;color:#333">${escapeHtml(d.briefing)}</div>
      ${d.links_referencia ? `<p style="margin:16px 0 4px"><strong>Links de referência:</strong></p><div style="background:#f9fafb;padding:14px;border-radius:8px;border:1px solid #e5e7eb;white-space:pre-wrap;color:#333">${escapeHtml(d.links_referencia)}</div>` : ""}
      ${anexosHtml}
      <p style="margin-top:24px;color:#666;font-size:13px">Acesse o painel de demandas para acompanhar e responder.</p>
    </div>
  </div>`;
}

function confirmEmailHtml(d: any) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f6f7f9">
    <div style="background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e5e7eb">
      <div style="background:linear-gradient(135deg,#0a3d62,#1e6091);color:#fff;padding:18px 20px;border-radius:8px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:1px;opacity:.8">DEMANDA RECEBIDA</div>
        <div style="font-size:24px;font-weight:700">${escapeHtml(d.protocolo)}</div>
      </div>
      <p style="color:#333">Olá ${escapeHtml(String(d.solicitante).split(" ")[0])}, recebemos sua solicitação. O time de marketing já foi notificado.</p>
      <h3 style="color:#0a3d62;margin:20px 0 8px">${escapeHtml(d.titulo)}</h3>
      <p style="color:#555;margin:0 0 12px"><strong>Tipo:</strong> ${escapeHtml(d.tipo_label || TIPO_LABEL[d.tipo] || d.tipo)} • <strong>Frequência:</strong> ${d.frequencia === "recorrente" ? "Recorrente" : "Individual"}</p>
      <p style="color:#555;margin:0 0 12px"><strong>Estimativa interna:</strong> ${escapeHtml(d.prazo_estimado_dias)} dias úteis</p>
      <p style="color:#555;margin:0 0 12px"><strong>Prazo esperado por você:</strong> ${escapeHtml(d.prazo_esperado)}</p>
      <p style="margin-top:24px;color:#666;font-size:13px">Guarde este protocolo para acompanhamento: <strong>${escapeHtml(d.protocolo)}</strong></p>
    </div>
  </div>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    // Verify JWT — any authenticated user can create a demanda
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const authClient = createClient(supabaseUrl, supabaseAnon, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: userData, error: userErr } = await authClient.auth.getUser(token);
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userEmail = (userData.user.email || "").toLowerCase();
    if (!userEmail) {
      return new Response(JSON.stringify({ error: "Usuário sem email" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const required = ["solicitante", "tipo", "titulo", "briefing", "prazo_esperado"];
    for (const k of required) {
      if (!body[k] || String(body[k]).trim() === "") {
        return new Response(JSON.stringify({ error: `Campo obrigatório: ${k}` }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Basic input length limits
    if (String(body.titulo).length > 300 || String(body.briefing).length > 20000) {
      return new Response(JSON.stringify({ error: "Campos excedem o tamanho permitido" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      supabaseUrl,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const prazoEstimado = PRAZO_POR_TIPO[body.tipo] ?? 5;
    const emailsExtras: string[] = Array.isArray(body.emails_extras)
      ? body.emails_extras.filter((e: string) => typeof e === "string" && e.includes("@")).slice(0, 20)
      : [];

    const tipoOutroDesc = body.tipo === "outro" && body.tipo_outro
      ? String(body.tipo_outro).trim()
      : "";
    const tipoLabel = tipoOutroDesc
      ? `Outro: ${tipoOutroDesc}`
      : (TIPO_LABEL[body.tipo] || body.tipo);

    const { data: demanda, error } = await supabase
      .from("demandas")
      .insert({
        solicitante: String(body.solicitante).trim().slice(0, 200),
        solicitante_email: userEmail, // Trusted from JWT — cannot be spoofed
        emails_extras: emailsExtras,
        tipo: body.tipo,
        titulo: String(body.titulo).trim().slice(0, 300),
        briefing: String(body.briefing).trim(),
        links_referencia: body.links_referencia ? String(body.links_referencia).trim().slice(0, 2000) : null,
        prazo_esperado: body.prazo_esperado,
        prazo_estimado_dias: prazoEstimado,
        prioridade: body.prioridade || "media",
        frequencia: body.frequencia === "recorrente" ? "recorrente" : "individual",
      })
      .select()
      .single();

    if (error) throw error;

    const anexosUrls: string[] = [];
    if (Array.isArray(body.anexos)) {
      for (const a of body.anexos) {
        await supabase.from("demanda_anexos").insert({
          demanda_id: demanda.id,
          storage_path: a.path,
          nome_arquivo: a.nome,
          tipo_mime: a.tipo || null,
          tamanho_bytes: a.tamanho || null,
        });
        const { data: pub } = supabase.storage.from("demandas-anexos").getPublicUrl(a.path);
        anexosUrls.push(pub.publicUrl);
      }
    }

    appendToSheet([
      demanda.protocolo,
      new Date(demanda.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      demanda.solicitante,
      demanda.solicitante_email,
      tipoLabel,
      demanda.titulo,
      demanda.briefing,
      demanda.links_referencia || "",
      demanda.prazo_esperado,
      demanda.prazo_estimado_dias,
      demanda.prioridade,
      demanda.frequencia === "recorrente" ? "Recorrente" : "Individual",
      demanda.status,
      anexosUrls.join(" | "),
    ]).catch((e) => console.error("sheet error", e));

    const destinatarios = [...new Set([...MARKETING_EMAILS, ...emailsExtras])];
    sendGmail(
      destinatarios,
      `[${demanda.protocolo}] Nova demanda: ${demanda.titulo}`,
      emailHtml({ ...demanda, tipo_label: tipoLabel }, anexosUrls),
    ).catch((e) => console.error("gmail mkt error", e));

    sendGmail(
      [demanda.solicitante_email],
      `Demanda recebida: ${demanda.protocolo}`,
      confirmEmailHtml({ ...demanda, tipo_label: tipoLabel }),
    ).catch((e) => console.error("gmail confirm error", e));

    return new Response(
      JSON.stringify({ success: true, protocolo: demanda.protocolo, id: demanda.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e: any) {
    console.error("criar-demanda error", e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
