import { Suspense, lazy } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { BackRedirectModal } from "@/components/ui/BackRedirectModal";
import { TopBar } from "@/components/sections/TopBar";
import { HeroSection } from "@/components/sections/HeroSection";

const DiscoverSection   = lazy(() => import("@/components/sections/DiscoverSection").then(m => ({ default: m.DiscoverSection })));
const ImageCarousel     = lazy(() => import("@/components/sections/ImageCarousel").then(m => ({ default: m.ImageCarousel })));
const StepByStepSection = lazy(() => import("@/components/sections/StepByStepSection").then(m => ({ default: m.StepByStepSection })));
const BonusSection      = lazy(() => import("@/components/sections/BonusSection").then(m => ({ default: m.BonusSection })));
const CountdownTimer    = lazy(() => import("@/components/sections/CountdownTimer").then(m => ({ default: m.CountdownTimer })));
const CTASection        = lazy(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const ExpertSection     = lazy(() => import("@/components/sections/ExpertSection").then(m => ({ default: m.ExpertSection })));
const GuaranteeSection  = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const FAQSection        = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const Footer            = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <BackRedirectModal />
      <TopBar />
      <div className="pt-9">
        <HeroSection />
        <Suspense fallback={null}>
          <DiscoverSection />
          <ImageCarousel />
          <StepByStepSection />
          <BonusSection />
          <CountdownTimer />
          <CTASection />
          <TestimonialsSection />
          <ExpertSection />
          <GuaranteeSection />
          <FAQSection />
          <Footer />
        </Suspense>
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
