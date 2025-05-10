
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import MainServicePage from "./pages/MainServicePage";
import SubServicePage from "./pages/SubServicePage";
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
          
          {/* New service structure routes */}
          <Route path="/services/:serviceSlug" element={<MainServicePage />} />
          <Route path="/services/:serviceSlug/:subServiceSlug" element={<SubServicePage />} />
          
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
