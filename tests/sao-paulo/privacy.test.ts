import { test, expect } from "bun:test";
import { allowsSaoPauloMarketing } from "../../src/data/sao-paulo-privacy";

test("marketing tracking stays disabled before a choice", () => {
  expect(allowsSaoPauloMarketing(null)).toBe(false);
});
test("refusing marketing does not enable tracking", () => {
  expect(allowsSaoPauloMarketing("rejected")).toBe(false);
});
test("only explicit acceptance enables marketing", () => {
  expect(allowsSaoPauloMarketing("accepted")).toBe(true);
  expect(allowsSaoPauloMarketing("unknown")).toBe(false);
});