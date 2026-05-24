import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { TopBar } from "@/components/sections/TopBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { DiscoverSection } from "@/components/sections/DiscoverSection";
import { StepByStepSection } from "@/components/sections/StepByStepSection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <TopBar />
      <div className="pt-9">
        <HeroSection />
        <DiscoverSection />
        <StepByStepSection />
        <CTASection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
