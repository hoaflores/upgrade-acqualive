import { test, expect } from "bun:test";
import { saoPauloContact, saoPauloWhatsAppUrl } from "./sao-paulo-contact";

test("São Paulo preserves its existing WhatsApp destination", () => {
  expect(new URL(saoPauloWhatsAppUrl()).pathname).toBe("/5511989712793");
});
test("telephone display matches the preserved existing call destination", () => {
  expect(saoPauloContact.telephoneLabel.replace(/\D/g, "")).toBe(saoPauloContact.telephone.slice(2));
});
test("product contact carries the chosen model without changing the destination", () => {
  const url = new URL(saoPauloWhatsAppUrl("Flow NIION Click"));
  expect(url.pathname).toBe("/5511989712793");
  expect(url.searchParams.get("text")).toContain("Flow NIION Click");
});