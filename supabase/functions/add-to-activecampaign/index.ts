import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactData {
  name: string;
  phone: string;
  friendName: string;
  friendPhone: string;
}

async function addContactToActiveCampaign(
  apiUrl: string,
  apiKey: string,
  contact: { email?: string; firstName: string; lastName?: string; phone: string; fieldValues?: any[] },
  listId: string,
  tagId: string
) {
  // Create or update contact
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
    throw new Error(`Failed to create contact: ${errorText}`);
  }

  const contactData = await contactResponse.json();
  const contactId = contactData.contact.id;
  console.log("Contact created/updated with ID:", contactId);

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
        status: 1, // 1 = subscribed
      },
    }),
  });

  if (!listResponse.ok) {
    const errorText = await listResponse.text();
    console.error("Error adding to list:", errorText);
    // Don't throw - contact might already be on list
  } else {
    console.log("Contact added to list");
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
    const errorText = await tagResponse.text();
    console.error("Error adding tag:", errorText);
    // Don't throw - tag might already be added
  } else {
    console.log("Tag added to contact");
  }

  return contactId;
}

async function getListIdByName(apiUrl: string, apiKey: string, listName: string): Promise<string | null> {
  const response = await fetch(`${apiUrl}/api/3/lists?filters[name]=${encodeURIComponent(listName)}`, {
    headers: {
      "Api-Token": apiKey,
    },
  });

  if (!response.ok) {
    console.error("Error fetching lists");
    return null;
  }

  const data = await response.json();
  if (data.lists && data.lists.length > 0) {
    return data.lists[0].id;
  }
  return null;
}

async function getTagIdByName(apiUrl: string, apiKey: string, tagName: string): Promise<string | null> {
  const response = await fetch(`${apiUrl}/api/3/tags?search=${encodeURIComponent(tagName)}`, {
    headers: {
      "Api-Token": apiKey,
    },
  });

  if (!response.ok) {
    console.error("Error fetching tags");
    return null;
  }

  const data = await response.json();
  if (data.tags && data.tags.length > 0) {
    // Find exact match
    const exactMatch = data.tags.find((tag: any) => tag.tag.toLowerCase() === tagName.toLowerCase());
    return exactMatch ? exactMatch.id : data.tags[0].id;
  }
  return null;
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiUrl = Deno.env.get("ACTIVECAMPAIGN_API_URL");
    const apiKey = Deno.env.get("ACTIVECAMPAIGN_API_KEY");

    if (!apiUrl || !apiKey) {
      console.error("Missing ActiveCampaign credentials");
      return new Response(
        JSON.stringify({ error: "Missing ActiveCampaign credentials" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, phone, friendName, friendPhone }: ContactData = await req.json();

    // Validate input
    if (!name || !phone || !friendName || !friendPhone) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing referral:", { name, phone, friendName, friendPhone });

    // Get list and tag IDs
    const listName = "Lovable - Programa de Indicação";
    const tagName = "programa-de-indicacao";

    const [listId, tagId] = await Promise.all([
      getListIdByName(apiUrl, apiKey, listName),
      getTagIdByName(apiUrl, apiKey, tagName),
    ]);

    console.log("List ID:", listId, "Tag ID:", tagId);

    if (!listId) {
      console.error("List not found:", listName);
      return new Response(
        JSON.stringify({ error: `Lista "${listName}" não encontrada no ActiveCampaign` }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!tagId) {
      console.error("Tag not found:", tagName);
      return new Response(
        JSON.stringify({ error: `Tag "${tagName}" não encontrada no ActiveCampaign` }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    // Create a single contact with all referral data
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

    // Add a note with the referral details
    await fetch(`${apiUrl}/api/3/notes`, {
      method: "POST",
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: {
          note: `📱 INDICAÇÃO DO PROGRAMA EMBAIXADOR\n\n👤 Quem Indicou:\nNome: ${name}\nTelefone: ${phone}\n\n👥 Amigo Indicado:\nNome: ${friendName}\nTelefone: ${friendPhone}\n\n📅 Data: ${new Date().toLocaleDateString("pt-BR")}`,
          relid: contactId,
          reltype: "Subscriber",
        },
      }),
    });

    console.log("Contact added successfully with all referral data");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Indicação registrada com sucesso",
        contactId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
