import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import AcceptableUse from "./pages/AcceptableUse.tsx";
import Partner from "./pages/Partner.tsx";
import Customers from "./pages/Customers.tsx";
import CustomerStory from "./pages/CustomerStory.tsx";
import { WhatsAppFloat } from "./components/landing/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/landing/term-of-service" element={<Terms />} />
          <Route path="/landing/acceptable-use" element={<AcceptableUse />} />
          <Route path="/landing/partner" element={<Partner />} />
          <Route path="/landing/customers" element={<Customers />} />
          <Route path="/landing/customers/:slug" element={<CustomerStory />} />
          {/* Legacy redirects */}
          <Route path="/privacy" element={<Navigate to="/landing/privacy-policy" replace />} />
          <Route path="/terms" element={<Navigate to="/landing/term-of-service" replace />} />
          <Route path="/acceptable-use" element={<Navigate to="/landing/acceptable-use" replace />} />
          <Route path="/partner" element={<Navigate to="/landing/partner" replace />} />
          <Route path="/customers" element={<Navigate to="/landing/customers" replace />} />
          <Route path="/customers/:slug" element={<Navigate to="/landing/customers/:slug" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
