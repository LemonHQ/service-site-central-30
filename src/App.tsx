import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Import Pages
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import MainServicePage from "./pages/MainServicePage";
import SubServicePage from "./pages/SubServicePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Insights from "./pages/Insights";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import GettingStarted from "./pages/GettingStarted";
import ThankYouPage from "./pages/ThankYouPage";
import CvSubmission from "./pages/CvSubmission";
import CoCreateAssessment from "./pages/CoCreateAssessment";
import WebinarSignupPage from "./pages/WebinarSignupPage";
import CoInnovateWebinarPage from "./pages/CoInnovateWebinarPage";

// Import service landing pages
import UnifyBrandPage from "./pages/services/UnifyBrandPage";
import DigitalizeProductPage from "./pages/services/DigitalizeProductPage";
import ExpandOfferingsPage from "./pages/services/ExpandOfferingsPage";
import ScaleExperiencesPage from "./pages/services/ScaleExperiencesPage";
import PilotTechPage from "./pages/services/PilotTechPage";
import StandardizePortfolioPage from "./pages/services/StandardizePortfolioPage";

// Import approach pages
import CoCreatePage from "./pages/approach/CoCreatePage";
import CoInnovatePage from "./pages/approach/CoInnovatePage";
import CoCreateLegacyPage from "./pages/approach/CoCreateLegacyPage";
import ExtendPage from "./pages/approach/ExtendPage";

// Import industry landing pages
import InsurancePage from "./pages/industries/InsurancePage";
import FinancePage from "./pages/industries/FinancePage";
import HealthcarePage from "./pages/industries/HealthcarePage";
import RetailPage from "./pages/industries/RetailPage";

// Import legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Disclaimer from "./pages/legal/Disclaimer";

// Import individual case study pages
import StandardizingMotorInsurancePage from "./pages/case-study/StandardizingMotorInsurancePage";
import ReimaginingPatientExperiencePage from "./pages/case-study/ReimaginingPatientExperiencePage";
import DrivingMultiMarketD2CSalesPage from "./pages/case-study/DrivingMultiMarketD2CSalesPage";
import DigitalPolicyAndClaimsUsingAIPage from "./pages/case-study/DigitalPolicyAndClaimsUsingAIPage";
import AbdulLatifJameelMarketLeadershipPage from "./pages/case-study/AbdulLatifJameelMarketLeadershipPage";
import MeraasRewardsEcosystemPage from "./pages/case-study/MeraasRewardsEcosystemPage";
import StandardizingIntellectualPropertyPage from "./pages/case-study/StandardizingIntellectualPropertyPage";
import BuildingComposableDigitalBrandEnginePage from "./pages/case-study/BuildingComposableDigitalBrandEnginePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Direct routes to service landing pages */}
            <Route path="/unify-brand-experiences" element={<UnifyBrandPage />} />
            <Route path="/digitalize-product-lines" element={<DigitalizeProductPage />} />
            <Route path="/expand-product-offerings" element={<ExpandOfferingsPage />} />
            <Route path="/scale-digital-experiences" element={<ScaleExperiencesPage />} />
            <Route path="/pilot-emerging-tech" element={<PilotTechPage />} />
            <Route path="/standardize-digital-portfolio" element={<StandardizePortfolioPage />} />
            
            {/* Approach pages */}
            <Route path="/approach/co-create" element={<CoCreatePage />} />
            <Route path="/approach/co-innovate" element={<CoInnovatePage />} />
            <Route path="/approach/co-create-legacy" element={<CoCreateLegacyPage />} />
            <Route path="/approach/extend" element={<ExtendPage />} />
            <Route path="/approach/co-create-assessment" element={<CoCreateAssessment />} />
            <Route path="/webinar-signup" element={<WebinarSignupPage />} />
            <Route path="/co-innovate-webinar" element={<CoInnovateWebinarPage />} />
            
            {/* Industry landing pages */}
            <Route path="/industries/insurance" element={<InsurancePage />} />
            <Route path="/industries/finance" element={<FinancePage />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/retail" element={<RetailPage />} />
            
            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* Individual case study pages */}
            <Route path="/case-study/standardizing-motor-insurance-for-a-digital-future" element={<StandardizingMotorInsurancePage />} />
            <Route path="/case-study/reimagining-patient-experience" element={<ReimaginingPatientExperiencePage />} />
            <Route path="/case-study/driving-multi-market-d2c-sales" element={<DrivingMultiMarketD2CSalesPage />} />
            <Route path="/case-study/digital-policy-and-claims-using-ai" element={<DigitalPolicyAndClaimsUsingAIPage />} />
            <Route path="/case-study/how-abdul-latif-jameel-established-its-market-leadership" element={<AbdulLatifJameelMarketLeadershipPage />} />
            <Route path="/case-study/how-meraas-used-a-live-pilot-to-strategize-the-next-major-rewards-ecosystem" element={<MeraasRewardsEcosystemPage />} />
            <Route path="/case-study/standardizing-intellectual-property-management" element={<StandardizingIntellectualPropertyPage />} />
            <Route path="/case-study/building-a-composable-digital-brand-engine" element={<BuildingComposableDigitalBrandEnginePage />} />
            
            {/* Keep the service structure routes for backward compatibility */}
            <Route path="/services/:serviceSlug" element={<MainServicePage />} />
            <Route path="/services/:serviceSlug/:subServiceSlug" element={<SubServicePage />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/insights/scaling-digital-how-traditional-brands-can-win-with-d2c-strategies" element={<BlogDetail />} />
            <Route path="/insights/:postId" element={<BlogDetail />} />
            <Route path="/blog/:postId" element={<BlogDetailPage />} />
            <Route path="/case-studies-1" element={<CaseStudies />} />
            <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/lead-qualification" element={<GettingStarted />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/cv-submission" element={<CvSubmission />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
