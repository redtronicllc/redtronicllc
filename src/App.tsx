import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

import Index from "./pages/Index";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Thinture from "./pages/Thinture";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * IMPORTANT:
 * Header height = 88px
 * So we offset content using pt-[88px]
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* FIXED HEADER */}
          <Header />

          {/* PAGE CONTENT OFFSET FOR FIXED HEADER */}
          <main className="pt-[88px] min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/:productId"
                element={<ProductDetail />}
              />
              <Route path="/thinture" element={<Thinture />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;