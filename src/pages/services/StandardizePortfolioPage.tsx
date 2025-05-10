
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Library, FileText, Grid, Layers, Sparkles } from 'lucide-react';

const StandardizePortfolioPage = () => {
  return (
    <ServiceLandingTemplate
      title="Standardize Digital Portfolio"
      subtitle="Establish consistent patterns across your digital product catalog"
      description="We help enterprises establish consistent patterns and templates across their digital product catalog to improve efficiency, governance, and user experience. Our approach creates a unified framework that enhances quality while reducing development costs and time-to-market."
      ctaText="Standardize Your Portfolio"
      ctaLink="/lead-qualification"
      secondaryCtaText="Learn More"
      secondaryCtaLink="/contact"
      heroImage="/lovable-uploads/standardize-portfolio-ai-hero.png"
      isAiHeroImage={true}
      features={[
        {
          title: "Digital Product Taxonomy",
          description: "Create a structured classification system for your digital product portfolio.",
          icon: Grid
        },
        {
          title: "Component Libraries",
          description: "Develop reusable UI and functional components to accelerate development.",
          icon: Library
        },
        {
          title: "Pattern Documentation",
          description: "Comprehensive documentation of standards and best practices.",
          icon: FileText
        },
        {
          title: "Platform Integration Strategy",
          description: "Plan for consistent integration across your technology ecosystem.",
          icon: Layers
        },
        {
          title: "UX Standardization",
          description: "Create consistent user experience patterns across your entire digital portfolio.",
          icon: Sparkles
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Portfolio Audit",
          description: "Comprehensive assessment of existing digital products and patterns."
        },
        {
          number: 2,
          title: "Standards Development",
          description: "Creation of digital standards, guidelines, and reusable components."
        },
        {
          number: 3,
          title: "Implementation Planning",
          description: "Strategic roadmap for applying standards across your digital portfolio."
        },
        {
          number: 4,
          title: "Governance Establishment",
          description: "Development of processes to maintain and evolve standards over time."
        }
      ]}
      benefits={[
        "Accelerated product development through reusable components",
        "Reduced development and maintenance costs",
        "Improved product quality and consistency",
        "Enhanced user experience across all digital products",
        "Simplified compliance with regulations and policies",
        "More efficient onboarding of new team members",
        "Greater flexibility to adapt to changing business needs"
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
    />
  );
};

export default StandardizePortfolioPage;
