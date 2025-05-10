import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';

const UnifyBrandPage = () => {
  return (
    <ServiceLandingTemplate
      title="Unify Brand Experiences"
      subtitle="Create cohesive experiences across all customer touchpoints"
      description="We help organizations build unified brand experiences that deliver consistent messaging and functionality across web, mobile, and physical touchpoints. Our approach aligns digital products with your brand strategy to strengthen customer connections and build trust."
      ctaText="Start Your Brand Transformation"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
      features={[
        {
          title: "Brand Consistency Framework",
          description: "Develop a comprehensive framework to ensure brand consistency across all digital touchpoints.",
          icon: BadgeCheck
        },
        {
          title: "Cross-Channel Experience Design",
          description: "Create cohesive brand experiences that span web, mobile, social, and physical touchpoints.",
          icon: Globe
        },
        {
          title: "Design System Implementation",
          description: "Build and implement scalable design systems that enforce brand standards while enabling innovation.",
          icon: Palette
        },
        {
          title: "Multi-Market Brand Governance",
          description: "Establish governance models that balance global brand integrity with regional market needs.",
          icon: Users
        },
        {
          title: "Brand Performance Measurement",
          description: "Implement metrics and analytics to measure brand consistency and its impact on business outcomes.",
          icon: Gauge
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Discovery & Audit",
          description: "Comprehensive analysis of existing brand touchpoints, inconsistencies, and opportunities."
        },
        {
          number: 2,
          title: "Strategy Development",
          description: "Creation of brand unification strategy aligned with business objectives and customer needs."
        },
        {
          number: 3,
          title: "Design System Creation",
          description: "Development of scalable design system with component library and usage guidelines."
        },
        {
          number: 4,
          title: "Implementation",
          description: "Phased rollout of unified brand experiences across channels and markets."
        }
      ]}
      benefits={[
        "Enhanced brand recognition and trust through consistency",
        "Faster time-to-market for new products and campaigns",
        "Reduced design and development costs through reusable components",
        "Improved regulatory compliance and risk management",
        "Better customer experience across all touchpoints",
        "Simplified governance and quality control"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy offerings into modern, scalable digital products.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems and operating models that power sustainable digital expansion.",
          link: "/scale-digital-experiences"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "How long does it typically take to unify brand experiences across an enterprise?",
          answer: "The timeline varies based on the size and complexity of your organization, but typically ranges from 3-9 months for initial implementation, with ongoing optimization thereafter."
        },
        {
          question: "How do you balance global brand consistency with local market needs?",
          answer: "We create tiered governance frameworks that define clear guardrails for what must remain consistent globally while allowing flexibility for local market adaptation where appropriate."
        },
        {
          question: "What technologies do you use to implement design systems?",
          answer: "We're technology agnostic and can work with your existing tech stack. Common technologies include Figma, Adobe XD, Storybook, and custom component libraries for your development framework."
        }
      ]}
    />
  );
};

export default UnifyBrandPage;
