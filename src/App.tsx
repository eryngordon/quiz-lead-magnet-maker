
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ResultsRouter } from "@/components/Results/ResultsRouter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results/florence" element={<ResultsRouter destination="florence" />} />
          <Route path="/results/kyoto" element={<ResultsRouter destination="kyoto" />} />
          <Route path="/results/santorini" element={<ResultsRouter destination="santorini" />} />
          <Route path="/results/patagonia" element={<ResultsRouter destination="patagonia" />} />
          <Route path="/results/morocco" element={<ResultsRouter destination="morocco" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
