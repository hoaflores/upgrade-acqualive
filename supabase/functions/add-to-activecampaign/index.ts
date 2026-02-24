import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiter (per IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Input validation and sanitization
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "") // Strip angle brackets
    .replace(/[\x00-\x1F\x7F]/g, "") // Strip control characters
    .trim();
}

function validateContactData(body: unknown): { valid: true; data: { name: string; phone: string; friendName: string; friendPhone: string } } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, phone, friendName, friendPhone } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof phone !== "string" || typeof friendName !== "string" || typeof friendPhone !== "string") {
    return { valid: false, error: "All fields must be strings" };
  }

  const sName = sanitize(name);
  const sPhone = sanitize(phone);
  const sFriendName = sanitize(friendName);
  const sFriendPhone = sanitize(friendPhone);

  if (sName.length < 2 || sName.length > 100) {
    return { valid: false, error: "Nome deve ter entre 2 e 100 caracteres" };
  }
  if (sFriendName.length < 2 || sFriendName.length > 100) {
    return { valid: false, error: "Nome do amigo deve ter entre 2 e 100 caracteres" };
  }

  // Allow Brazilian phone formats: (XX) XXXXX-XXXX or just digits, 10-15 chars after stripping
  const phoneDigits = sPhone.replace(/\D/g, "");
  const friendPhoneDigits = sFriendPhone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { valid: false, error: "Telefone inválido (mínimo 10 dígitos)" };
  }
  if (friendPhoneDigits.length < 10 || friendPhoneDigits.length > 15) {
    return { valid: false, error: "Telefone do amigo inválido (mínimo 10 dígitos)" };
  }

  return { valid: true, data: { name: sName, phone: sPhone, friendName: sFriendName, friendPhone: sFriendPhone } };
}

async function addContactToActiveCampaign(
  apiUrl: string,
  apiKey: string,
  contact: { email?: string; firstName: string; lastName?: string; phone: string; fieldValues?: any[] },
  listId: string,
  tagId: string
) {
  const contactResponse = await fetch(`${apiUrl}/api/3/contact/sync`, {
    method: "POST",
    headers: {
      "Api-Token": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact: {
        email: contact.email || `${contact.phone.replace(/\D/g, "")}@indicacao.acqualive.com.br`,
        firstName: contact.firstName,
        lastName: contact.lastName || "",
        phone: contact.phone,
        fieldValues: contact.fieldValues || [],
      },
    }),
  });

  if (!contactResponse.ok) {
    const errorText = await contactResponse.text();
    console.error("Error creating contact:", errorText);
    throw new Error("Failed to create contact in CRM");
  }

  const contactData = await contactResponse.json();
  const contactId = contactData.contact.id;

  // Add contact to list
  const listResponse = await fetch(`${apiUrl}/api/3/contactLists`, {
    method: "POST",
    headers: {
      "Api-Token": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactList: {
        list: listId,
        contact: contactId,
        status: 1,
      },
    }),
  });

  if (!listResponse.ok) {
    console.error("Error adding to list");
  }

  // Add tag to contact
  const tagResponse = await fetch(`${apiUrl}/api/3/contactTags`, {
    method: "POST",
    headers: {
      "Api-Token": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactTag: {
        contact: contactId,
        tag: tagId,
      },
    }),
  });

  if (!tagResponse.ok) {
    console.error("Error adding tag");
  }

  return contactId;
}

async function getListIdByName(apiUrl: string, apiKey: string, listName: string): Promise<string | null> {
  const response = await fetch(`${apiUrl}/api/3/lists?filters[name]=${encodeURIComponent(listName)}`, {
    headers: { "Api-Token": apiKey },
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data.lists?.[0]?.id ?? null;
}

async function getTagIdByName(apiUrl: string, apiKey: string, tagName: string): Promise<string | null> {
  const response = await fetch(`${apiUrl}/api/3/tags?search=${encodeURIComponent(tagName)}`, {
    headers: { "Api-Token": apiKey },
  });

  if (!response.ok) return null;
  const data = await response.json();
  if (data.tags?.length > 0) {
    const exactMatch = data.tags.find((tag: any) => tag.tag.toLowerCase() === tagName.toLowerCase());
    return exactMatch ? exactMatch.id : data.tags[0].id;
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Muitas tentativas. Aguarde um momento e tente novamente." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiUrl = Deno.env.get("ACTIVECAMPAIGN_API_URL");
    const apiKey = Deno.env.get("ACTIVECAMPAIGN_API_KEY");

    if (!apiUrl || !apiKey) {
      console.error("Missing ActiveCampaign credentials");
      return new Response(
        JSON.stringify({ error: "Erro de configuração do servidor" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Parse and validate input
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Corpo da requisição inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const validation = validateContactData(rawBody);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, phone, friendName, friendPhone } = validation.data;

    // Get list and tag IDs
    const listName = "Lovable - Programa de Indicação";
    const tagName = "programa-de-indicacao";

    const [listId, tagId] = await Promise.all([
      getListIdByName(apiUrl, apiKey, listName),
      getTagIdByName(apiUrl, apiKey, tagName),
    ]);

    if (!listId) {
      console.error("List not found:", listName);
      return new Response(
        JSON.stringify({ error: "Configuração de lista não encontrada" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!tagId) {
      console.error("Tag not found:", tagName);
      return new Response(
        JSON.stringify({ error: "Configuração de tag não encontrada" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    const contactId = await addContactToActiveCampaign(
      apiUrl,
      apiKey,
      {
        firstName,
        lastName,
        phone,
        fieldValues: [
          { field: "1", value: `Amigo Indicado: ${friendName} | Telefone: ${friendPhone}` },
        ],
      },
      listId,
      tagId
    );

    // Add note with referral details
    await fetch(`${apiUrl}/api/3/notes`, {
      method: "POST",
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: {
          note: `INDICAÇÃO DO PROGRAMA EMBAIXADOR\n\nQuem Indicou:\nNome: ${name}\nTelefone: ${phone}\n\nAmigo Indicado:\nNome: ${friendName}\nTelefone: ${friendPhone}\n\nData: ${new Date().toLocaleDateString("pt-BR")}`,
          relid: contactId,
          reltype: "Subscriber",
        },
      }),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Indicação registrada com sucesso",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor. Tente novamente." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
