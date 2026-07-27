import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://paginas.acqualive.com.br";

/**
 * Garante que cada rota tenha canonical / og:url / twitter:url apontando
 * para a URL completa do slug atual (nunca para a home), para que a
 * miniatura de compartilhamento (WhatsApp, Telegram, email, redes) seja
 * sempre a da pagina compartilhada.
 */
const RouteSeo = () => {
  const { pathname, search } = useLocation();
  const path = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
  const canonical = `${SITE_URL}${path}`;
  const fullUrl = `${canonical}${search || ""}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={fullUrl} />
      <meta name="twitter:url" content={fullUrl} />
    </Helmet>
  );
};

export default RouteSeo;
