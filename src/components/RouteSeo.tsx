import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { DEFAULT_IMAGE, SITE_URL, findRouteMeta } from "@/seo/routeMeta";

/**
 * Head dinamico no navegador. A miniatura de compartilhamento em si vem do
 * HTML estatico gerado por rota no build (scripts/prerender-meta.ts), porque
 * os robos de preview nao executam JavaScript.
 */
const RouteSeo = () => {
  const { pathname, search } = useLocation();
  const path = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
  const canonical = `${SITE_URL}${path}`;
  const fullUrl = `${canonical}${search || ""}`;
  const meta = findRouteMeta(pathname);
  const image = meta?.image ?? DEFAULT_IMAGE;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Acqualive",
        url: SITE_URL,
        logo: `${SITE_URL}/images/og-acqualive.jpg`,
        description:
          "Purificadores e ionizadores de água alcalina, mineralizada e livre de cloro.",
      },
      {
        "@type": "WebSite",
        name: "Acqualive",
        url: SITE_URL,
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={fullUrl} />
      <meta name="twitter:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      {meta && <title>{meta.title}</title>}
      {meta && <meta name="description" content={meta.description} />}
      {meta && <meta property="og:title" content={meta.title} />}
      {meta && <meta property="og:description" content={meta.description} />}
      {meta && <meta name="twitter:title" content={meta.title} />}
      {meta && <meta name="twitter:description" content={meta.description} />}
      {meta?.noindex && <meta name="robots" content="noindex, follow" />}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
    </Helmet>
  );
};

export default RouteSeo;
