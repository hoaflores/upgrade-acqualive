/**
 * Plugin de build que gera um HTML estatico por rota (dist/<rota>/index.html)
 * com title, description, canonical e og:* proprios daquela rota.
 *
 * Robos de link preview (WhatsApp, Telegram, Facebook, LinkedIn, Slack, iMessage)
 * nao executam JavaScript: eles leem o HTML servido na URL. Com um arquivo por
 * rota, cada slug compartilhado mostra a miniatura da propria pagina e nunca a
 * da home. O app React continua sendo a mesma SPA.
 */

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import type { Plugin } from "vite";
import { DEFAULT_IMAGE, SITE_URL, routeMeta, type RouteMeta } from "../src/seo/routeMeta";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Remove do head as tags que serao reescritas por rota. */
const stripHeadTags = (html: string) =>
  html
    .replace(/[ \t]*<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(
      /[ \t]*<meta\s+[^>]*(?:name="description"|name="twitter:(?:card|title|description|image|url|site)"|property="og:[^"]*")[^>]*>\s*/gi,
      "",
    )
    .replace(/[ \t]*<link\s+[^>]*rel="canonical"[^>]*>\s*/gi, "");

const headFor = (route: RouteMeta) => {
  const url = `${SITE_URL}${route.path === "/" ? "" : route.path}`;
  const image = route.image ?? DEFAULT_IMAGE;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="Acqualive" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:secure_url" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@Acqualive" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:url" content="${url}" />`,
    route.noindex ? `<meta name="robots" content="noindex, follow" />` : null,
  ]
    .filter(Boolean)
    .map((line) => `    ${line}`)
    .join("\n");
};

export function prerenderMeta(): Plugin {
  return {
    name: "acqualive-prerender-meta",
    apply: "build",
    closeBundle() {
      const outDir = resolve("dist");
      const indexPath = resolve(outDir, "index.html");

      let template: string;
      try {
        template = readFileSync(indexPath, "utf-8");
      } catch {
        return;
      }

      const base = stripHeadTags(template);
      let count = 0;

      for (const route of routeMeta) {
        const html = base.replace(/<\/head>/i, `${headFor(route)}\n  </head>`);
        const target =
          route.path === "/"
            ? indexPath
            : resolve(outDir, `.${route.path}`, "index.html");

        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, html);
        count += 1;
      }

      console.log(`prerender-meta: ${count} rotas com head proprio geradas`);
    },
  };
}
