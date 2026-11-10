export type CampaignLead = "terracota" | "duo" | "premium";

export const resolveCampaignLead = (pathname: string, search = ""): CampaignLead => {
  if (pathname === "/black-terracota-26") return "terracota";
  if (pathname === "/black-premium-26") return "premium";
  return new URLSearchParams(search).get("produto")?.toLowerCase() === "terracota" ? "terracota" : "duo";
};