import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Upgrade from "./pages/Upgrade";
import ProgramaIndicacao from "./pages/ProgramaIndicacao";
import MassaruEmoto from "./pages/MassaruEmoto";
import FiltroDeBarro from "./pages/FiltroDeBarro";
import Terracota from "./pages/Terracota";
import ComunidadeAcqualive from "./pages/ComunidadeAcqualive";
import ApresentacaoComunidade from "./pages/ApresentacaoComunidade";
import IndicaPDF from "./pages/IndicaPDF";
import Bonifiq from "./pages/Bonifiq";
import IndicaClub from "./pages/IndicaClub";
import EmailTemplates from "./pages/EmailTemplates";
import EmailRefilTemplates from "./pages/EmailRefilTemplates";
import BlogTemplates from "./pages/BlogTemplates";
import EmailsFranquias from "./pages/EmailsFranquias";
import IndicaAcqualive2026 from "./pages/IndicaAcqualive2026";
import DayanSiebra from "./pages/DayanSiebra";
import FernandoBeteti from "./pages/FernandoBeteti";
import ShowerCare from "./pages/ShowerCare";
import Demandas from "./pages/Demandas";
import DemandasSolicitadas from "./pages/DemandasSolicitadas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/programa-de-indicacao" element={<ProgramaIndicacao />} />
            <Route path="/massaru-emoto" element={<MassaruEmoto />} />
            <Route path="/filtro-de-barro" element={<FiltroDeBarro />} />
            <Route path="/terracota" element={<Terracota />} />
            <Route path="/comunidade-acqualive" element={<ComunidadeAcqualive />} />
            <Route path="/apresentacao-comunidade-projeto" element={<ApresentacaoComunidade />} />
            <Route path="/indica-pdf" element={<IndicaPDF />} />
            <Route path="/acqualive-club" element={<Bonifiq />} />
            <Route path="/indica-club" element={<IndicaClub />} />
            <Route path="/email-templates" element={<EmailTemplates />} />
            <Route path="/email-refil" element={<EmailRefilTemplates />} />
            <Route path="/blog-templates" element={<BlogTemplates />} />
            <Route path="/emails-franquias" element={<EmailsFranquias />} />
            <Route path="/indica-acqualive-2026" element={<IndicaAcqualive2026 />} />
            <Route path="/indicado-acqualive" element={<IndicaAcqualive2026 />} />
            <Route path="/dayan-siebra" element={<DayanSiebra />} />
            <Route path="/fernando-beteti" element={<FernandoBeteti />} />
            <Route path="/acqualive-shower" element={<ShowerCare />} />
            <Route path="/demandas" element={<Demandas />} />
            <Route path="/demandas-solicitadas" element={<DemandasSolicitadas />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
