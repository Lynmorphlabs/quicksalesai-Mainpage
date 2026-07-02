import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
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
import { ScrollToHash } from "./components/ScrollToHash";

const queryClient = new QueryClient();

const LegacyCustomerStoryRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/customers/${slug ?? ""}`} replace />;
};

// Vite BASE_URL is "/landing/"; react-router expects a basename without a
// trailing slash, otherwise generated hrefs get malformed (e.g. "/landing//x").
const routerBasename = import.meta.env.BASE_URL.replace(/\/+$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <ScrollToHash />
        <Routes>
          {/* basename ("/landing") is prepended automatically — routes must NOT repeat it */}
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-of-service" element={<Terms />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:slug" element={<CustomerStory />} />
          {/* Legacy redirects (old double-prefixed and short URLs) */}
          <Route path="/landing" element={<Navigate to="/" replace />} />
          <Route path="/landing/privacy-policy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/landing/term-of-service" element={<Navigate to="/term-of-service" replace />} />
          <Route path="/landing/acceptable-use" element={<Navigate to="/acceptable-use" replace />} />
          <Route path="/landing/partner" element={<Navigate to="/partner" replace />} />
          <Route path="/landing/customers" element={<Navigate to="/customers" replace />} />
          <Route path="/landing/customers/:slug" element={<LegacyCustomerStoryRedirect />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms" element={<Navigate to="/term-of-service" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
