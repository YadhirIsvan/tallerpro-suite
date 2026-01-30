import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Promo Pages
import HomePage from "./pages/promo/HomePage";
import FeaturesPage from "./pages/promo/FeaturesPage";
import BenefitsPage from "./pages/promo/BenefitsPage";
import DemoPage from "./pages/promo/DemoPage";
import ContactPage from "./pages/promo/ContactPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Promotional Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/caracteristicas" element={<FeaturesPage />} />
          <Route path="/beneficios" element={<BenefitsPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
