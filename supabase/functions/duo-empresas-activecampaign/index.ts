import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

const LIST_NAME = "DUO Empresas";
const TAG_NAME = "duo-empresas";

const Body = z.object({
  nome: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  telefone: z.string().trim().min(8).max(25),
  empresa: z.string().trim().max(150).optional().default(""),
  origem: z.string().trim().max(60).optional().default("duo-empresas"),
});

const json = (d: unknown, status = 200) =>
  new Response(JSON.stringify(d), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const apiUrl = Deno.env.get("ACTIVECAMPAIGN_API_URL")!.replace(/\/$/, "");
    const apiKey = Deno.env.get("ACTIVECAMPAIGN_API_KEY")!;
    const parsed = Body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
    const { nome, email, telefone, empresa, origem } = parsed.data;
    const sheetOk = (async () => {
      try {
        const lk = Deno.env.get("LOVABLE_API_KEY"), sk = Deno.env.get("GOOGLE_SHEETS_API_KEY");
        if (!lk || !sk) return false;
        const r = await fetch(
          `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/1KCoJYwIWH_R2FLcN-wTAiUebQv1SA1WIw1Z3lgozQfo/values/A:F:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${lk}`, "X-Connection-Api-Key": sk, "Content-Type": "application/json" },
            body: JSON.stringify({ values: [[new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }), nome, email, telefone, empresa, origem]] }),
          },
        );
        if (!r.ok) console.error("sheet", r.status, await r.text());
        return r.ok;
      } catch (e) { console.error("sheet", e); return false; }
    })();
    const h = { "Api-Token": apiKey, "Content-Type": "application/json" };
    const ac = async (path: string, init?: RequestInit) => {
      const r = await fetch(`${apiUrl}/api/3/${path}`, { ...init, headers: h });
      const t = await r.text();
      if (!r.ok) console.error(path, r.status, t);
      return { ok: r.ok, data: t ? JSON.parse(t) : {} };
    };

    // Lista (cria se não existir)
    let listId: string | undefined;
    const lists = await ac(`lists?filters[name]=${encodeURIComponent(LIST_NAME)}`);
    listId = lists.data.lists?.find((l: any) => l.name === LIST_NAME)?.id;
    if (!listId) {
      const created = await ac("lists", {
        method: "POST",
        body: JSON.stringify({
          list: {
            name: LIST_NAME,
            stringid: "duo-empresas",
            sender_url: "https://paginas.acqualive.com.br/acqualive-duo-empresas",
            sender_reminder: "Você solicitou informações sobre o Acqualive DUO para empresas.",
          },
        }),
      });
      listId = created.data.list?.id;
    }

    // Tag (cria se não existir)
    const tags = await ac(`tags?search=${encodeURIComponent(TAG_NAME)}`);
    let tagId = tags.data.tags?.find((t: any) => t.tag.toLowerCase() === TAG_NAME)?.id;
    if (!tagId) {
      const ct = await ac("tags", { method: "POST", body: JSON.stringify({ tag: { tag: TAG_NAME, tagType: "contact" } }) });
      tagId = ct.data.tag?.id;
    }

    const [firstName, ...rest] = nome.split(" ");
    const sync = await ac("contact/sync", {
      method: "POST",
      body: JSON.stringify({ contact: { email, firstName, lastName: rest.join(" "), phone: telefone } }),
    });
    const contactId = sync.data.contact?.id;
    if (!contactId) return json({ error: "Falha ao registrar contato" }, 502);

    if (listId) await ac("contactLists", { method: "POST", body: JSON.stringify({ contactList: { list: listId, contact: contactId, status: 1 } }) });
    if (tagId) await ac("contactTags", { method: "POST", body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } }) });
    await ac("notes", {
      method: "POST",
      body: JSON.stringify({
        note: {
          note: `LEAD DUO EMPRESAS\nEmpresa: ${empresa || "-"}\nTelefone: ${telefone}\nOrigem: ${origem}\nData: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`,
          relid: contactId,
          reltype: "Subscriber",
        },
      }),
    });

    return json({ success: true, listId, sheet: await sheetOk });
  } catch (e) {
    console.error(e);
    return json({ error: "Erro interno" }, 500);
  }
});
