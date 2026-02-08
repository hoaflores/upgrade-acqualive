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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
