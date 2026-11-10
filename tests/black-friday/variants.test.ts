import { describe, expect, test } from "bun:test";
import { resolveCampaignLead } from "../../src/components/black-friday/variants";

describe("product-first campaign routes", () => {
  test("Terracota route keeps Terracota first even with a DUO query", () => {
    expect(resolveCampaignLead("/black-terracota-26", "?produto=duo")).toBe("terracota");
  });
  test("Premium route keeps V Self Premium first even with a Terracota query", () => {
    expect(resolveCampaignLead("/black-premium-26", "?produto=terracota")).toBe("premium");
  });
  test("original campaign keeps DUO as its default", () => {
    expect(resolveCampaignLead("/black-friday-26")).toBe("duo");
  });
});