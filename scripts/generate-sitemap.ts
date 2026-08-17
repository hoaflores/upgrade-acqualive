// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// A lista de rotas vive em src/seo/routeMeta.ts (fonte unica de verdade).

import { writeFileSync } from "fs"
import { resolve } from "path"
import { SITE_URL, routeMeta } from "../src/seo/routeMeta"

const entries = routeMeta.filter((r) => !r.noindex)

function generateSitemap() {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${SITE_URL}${e.path === "/" ? "/" : e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap())
console.log(`sitemap.xml written (${entries.length} entries)`)
