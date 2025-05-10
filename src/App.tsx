
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import LeadQualification from "./pages/LeadQualification";
import ThankYouPage from "./pages/ThankYouPage";
import CvSubmission from "./pages/CvSubmission";
import UnifyBrandExperiences from "./pages/services/UnifyBrandExperiences";
import DigitalizeProductLines from "./pages/services/DigitalizeProductLines";
import ExpandProductOfferings from "./pages/services/ExpandProductOfferings";
import ScaleDigitalExperiences from "./pages/services/ScaleDigitalExperiences";
import PilotEmergingTech from "./pages/services/PilotEmergingTech";
import StandardizeDigitalPortfolio from "./pages/services/StandardizeDigitalPortfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Blog />} /> {/* Changed from /blog to /insights */}
          <Route path="/blog" element={<Blog />} /> {/* Keep old route for backward compatibility */}
          <Route path="/insights/:postId" element={<BlogDetail />} /> {/* Added new route */}
          <Route path="/blog/:postId" element={<BlogDetail />} /> {/* Keep old route for backward compatibility */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
          <Route path="/lead-qualification" element={<LeadQualification />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/cv-submission" element={<CvSubmission />} />
          
          {/* New service pages */}
          <Route path="/services/unify-brand-experiences" element={<UnifyBrandExperiences />} />
          <Route path="/services/digitalize-product-lines" element={<DigitalizeProductLines />} />
          <Route path="/services/expand-product-offerings" element={<ExpandProductOfferings />} />
          <Route path="/services/scale-digital-experiences" element={<ScaleDigitalExperiences />} />
          <Route path="/services/pilot-emerging-tech" element={<PilotEmergingTech />} />
          <Route path="/services/standardize-digital-portfolio" element={<StandardizeDigitalPortfolio />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
