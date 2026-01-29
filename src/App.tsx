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

// Auth Pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

// Admin Layout and Pages (for the actual app)
import { AdminLayout } from "./components/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import AppointmentsPage from "./pages/admin/AppointmentsPage";
import WorkshopPage from "./pages/admin/WorkshopPage";
import ServicesPage from "./pages/admin/ServicesPage";
import PersonnelPage from "./pages/admin/PersonnelPage";
import InventoryPage from "./pages/admin/InventoryPage";
import CustomersPage from "./pages/admin/CustomersPage";
import ReportsPage from "./pages/admin/ReportsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import SchedulePage from "./pages/admin/SchedulePage";

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
          
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Admin App Routes (the actual application) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="citas" element={<AppointmentsPage />} />
            <Route path="workshop" element={<WorkshopPage />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="personal" element={<PersonnelPage />} />
            <Route path="inventario" element={<InventoryPage />} />
            <Route path="clientes" element={<CustomersPage />} />
            <Route path="reportes" element={<ReportsPage />} />
            <Route path="configuracion" element={<SettingsPage />} />
            <Route path="horarios" element={<SchedulePage />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
