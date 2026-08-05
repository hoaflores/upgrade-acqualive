// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://paginas.acqualive.com.br"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/upgrade", changefreq: "weekly", priority: "0.9" },
  { path: "/programa-de-indicacao", changefreq: "monthly", priority: "0.8" },
  { path: "/massaru-emoto", changefreq: "monthly", priority: "0.7" },
  { path: "/massaru-emoto-historia", changefreq: "monthly", priority: "0.7" },
  { path: "/filtro-de-barro", changefreq: "monthly", priority: "0.7" },
  { path: "/terracota", changefreq: "monthly", priority: "0.7" },
  { path: "/comunidade-acqualive", changefreq: "monthly", priority: "0.6" },
  { path: "/acqualive-club", changefreq: "monthly", priority: "0.6" },
  { path: "/indica-club", changefreq: "monthly", priority: "0.6" },
  { path: "/indica-acqualive-2026", changefreq: "monthly", priority: "0.6" },
  { path: "/dayan-siebra", changefreq: "monthly", priority: "0.7" },
  { path: "/fernando-beteti", changefreq: "monthly", priority: "0.6" },
  { path: "/acqualive-shower", changefreq: "monthly", priority: "0.7" },
  { path: "/clean-care", changefreq: "monthly", priority: "0.6" },
  { path: "/calculadora-acqualive", changefreq: "monthly", priority: "0.8" },
  { path: "/ebook-quantidade-agua", changefreq: "monthly", priority: "0.6" },
  { path: "/midia-kit", changefreq: "monthly", priority: "0.5" },
  { path: "/parcerias-cafe", changefreq: "monthly", priority: "0.5" },
  { path: "/1000-dias", changefreq: "monthly", priority: "0.6" },
  { path: "/franquias-solo", changefreq: "weekly", priority: "0.8" },
  { path: "/acqualive-empresas", changefreq: "weekly", priority: "0.9" },
  { path: "/portal-cientifico", changefreq: "weekly", priority: "0.9" },
  { path: "/agua-alcalina-inflamacao", changefreq: "monthly", priority: "0.9" },
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
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

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
