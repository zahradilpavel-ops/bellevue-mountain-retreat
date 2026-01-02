import IndexEN from "./pages/IndexEN";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Tento blok kódu zajistí, že pokud přijdeme z 404.html, 
  // správně vyčistíme URL, aby ji React Router rozpoznal
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('p');
  
  if (redirectPath) {
    window.history.replaceState(null, '', redirectPath);
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Hlavní česká verze */}
              <Route path="/" element={<Index />} />
              
              {/* Anglická verze */}
              <Route path="/en" element={<IndexEN />} />
              
              {/* Pojistka pro případ, že by cesta /en/ nefungovala přesně */}
              <Route path="/en/" element={<IndexEN />} />
              
              {/* Ostatní */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
