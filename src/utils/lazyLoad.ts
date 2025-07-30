import { lazy } from 'react';

// Lazy load pages for better code splitting
export const LazyHomePage = lazy(() => import('@/pages/Home'));
export const LazyAboutPage = lazy(() => import('@/pages/About'));
export const LazyContactPage = lazy(() => import('@/pages/Contact'));
export const LazyServicesPage = lazy(() => import('@/pages/Services'));
export const LazyCaseStudiesPage = lazy(() => import('@/pages/CaseStudies'));
export const LazyBlogPage = lazy(() => import('@/pages/Blog'));
export const LazyInsightsPage = lazy(() => import('@/pages/Insights'));

// Case study pages
export const LazyMeraasRewardsEcosystemPage = lazy(() => import('@/pages/case-study/MeraasRewardsEcosystemPage'));
export const LazyDrivingMultiMarketD2CSalesPage = lazy(() => import('@/pages/case-study/DrivingMultiMarketD2CSalesPage'));
export const LazyReimaginingPatientExperiencePage = lazy(() => import('@/pages/case-study/ReimaginingPatientExperiencePage'));

// Blog pages
export const LazyInnovationFrameworks2024Page = lazy(() => import('@/pages/blog/InnovationFrameworks2024Page'));
export const LazyDigitalLeadershipSkillsPage = lazy(() => import('@/pages/blog/DigitalLeadershipSkillsPage'));
export const LazyConsultingIndustryEvolutionPage = lazy(() => import('@/pages/blog/ConsultingIndustryEvolutionPage'));

// Service pages
export const LazyUnifyBrandPage = lazy(() => import('@/pages/services/UnifyBrandPage'));
export const LazyDigitalizeProductPage = lazy(() => import('@/pages/services/DigitalizeProductPage'));
export const LazyExpandOfferingsPage = lazy(() => import('@/pages/services/ExpandOfferingsPage'));
export const LazyScaleExperiencesPage = lazy(() => import('@/pages/services/ScaleExperiencesPage'));
export const LazyPilotTechPage = lazy(() => import('@/pages/services/PilotTechPage'));
export const LazyStandardizePortfolioPage = lazy(() => import('@/pages/services/StandardizePortfolioPage'));

// Industry pages
export const LazyInsurancePage = lazy(() => import('@/pages/industries/InsurancePage'));
export const LazyFinancePage = lazy(() => import('@/pages/industries/FinancePage'));
export const LazyHealthcarePage = lazy(() => import('@/pages/industries/HealthcarePage'));
export const LazyRetailPage = lazy(() => import('@/pages/industries/RetailPage'));

// Approach pages
export const LazyCoCreatePage = lazy(() => import('@/pages/approach/CoCreatePage'));
export const LazyCoInnovatePage = lazy(() => import('@/pages/approach/CoInnovatePage'));

// Legal pages
export const LazyPrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicy'));
export const LazyTermsAndConditionsPage = lazy(() => import('@/pages/legal/TermsAndConditions'));
export const LazyCookiePolicyPage = lazy(() => import('@/pages/legal/CookiePolicy'));
export const LazyDisclaimerPage = lazy(() => import('@/pages/legal/Disclaimer'));