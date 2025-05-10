
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Library, FileText, Grid, Layers, Sparkles } from 'lucide-react';

const StandardizePortfolioPage = () => {
  return (
    <ServiceLandingTemplate
      title="Standardize Digital Portfolio"
      subtitle="Create consistency across your digital ecosystem"
      description="We help organizations create standardized digital experiences that improve efficiency and brand consistency. Our approach unifies disparate digital properties through shared components, design systems, and governance frameworks."
      ctaText="Standardize Your Digital Portfolio"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
