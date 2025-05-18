
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Library, FileText, Grid, Layers, Sparkles } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const StandardizePortfolioPage = () => {
  return (
    <ServiceLandingTemplate
      title="Standardize Digital Portfolio"
      subtitle="Unlock the value of M&A. Bring order to complexity."
      description="We partner with leading enterprise brands to align multi-market product offerings, journeys, and systems around a shared structure that allows you to scale faster, operate leaner, and deliver consistent value across every market, brand or channel"
      ctaText="Standardize Your Digital Portfolio"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      quotePanel={serviceQuotes['standardize-digital-portfolio']}
      featuredCaseStudy="healthcare-patient-portal"
      showConsultingPanel={false}
      features={[
        {
          title: "Post-Merger portfolio consolidation",
          description: "Rationalize offerings, unify platforms, and build a single, consistent experience across merged entities",
          icon: Library
        },
        {
          title: "Growing portfolio",
          description: "Bring order to expansion by introducing common structures for experience, delivery, and governance",
          icon: FileText
        }, 
        {
          title: "Entering new markets",
          description: "Standardize products and experience frameworks to enter segments, markets faster and more efficiently.",
          icon: Sparkles
        },            
        {
          title: "Standardizing portfolio experiences",
          description: "Align customer experience principles across all products and brands to project one unified enterprise",
          icon: Layers
        },           
        {
          title: "Building the foundation for future growth",
          description: "Build a shared, reusable foundation for delivering common digital experiences across the portfolio",
          icon: Grid
        },
        {
          title: "Refactor across teams and regions",
          description: "Introduce shared systems, templates, and standards to reduce rework and improve cross-team collaboration",
          icon: Sparkles
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions to bring consistency and efficiency to your digital ecosystem"
      benefits={[
        "Accelerate post merger integration",
        "Reduce duplicate efforts and costs",
        "Improve experience quality and consistency",
        "Simplify compliance and portfolio governance",
        "More efficient onboarding of new team members",
        "Greater flexibility to adapt to evolving business needs"
      ]}
      relatedServices={[
        {
          title: "Unify Brand Experiences",
          description: "Create consistent, compliant brand experiences across all touchpoints.",
          link: "/unify-brand-experiences"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems and operating models that power sustainable digital expansion.",
          link: "/scale-digital-experiences"
        },
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy offerings into modern, scalable digital products.",
          link: "/digitalize-product-lines"
        }
      ]}
      faqs={[
        {
          question: "How do you balance standardization with the need for product differentiation?",
          answer: "Our approach creates a 'flexibility within framework' model where core elements maintain consistency while allowing for appropriate customization and differentiation where it creates strategic value."
        },
        {
          question: "What's involved in creating a digital product taxonomy?",
          answer: "We develop a structured classification system that categorizes your digital products by function, audience, business unit, and other relevant dimensions to create clarity and enable better management of your digital portfolio."
        },
        {
          question: "How do you ensure standards are actually adopted across the organization?",
          answer: "We combine technical infrastructure (component libraries, templates) with organizational approaches (governance models, training) and measurement frameworks to drive and track adoption throughout the enterprise."
        }
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default StandardizePortfolioPage;
