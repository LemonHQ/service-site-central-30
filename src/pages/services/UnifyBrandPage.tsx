
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { BadgeCheck, Library, Globe, BarChart2, Network, Layers, Shield, Settings, Database } from 'lucide-react';

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
          title: "Strategic Brand Expansion",
          description: "Grow into new markets and offerings with clarity, control, and cohesion.",
          icon: Globe
        },
        {
          title: "Reusable Brand Infrastructure",
          description: "Deploy scalable templates and systems to reduce duplication and speed up delivery.",
          icon: Layers
        },
        {
          title: "Masterbrand-Led Growth",
          description: "Expand under a unified identity while giving sub-brands room to flex.",
          icon: Network
        },
        {
          title: "Market Localization at Scale",
          description: "Adapt global experiences locally—without losing consistency or speed.",
          icon: Globe
        },
        {
          title: "Centralized Brand Management",
          description: "Control assets, messaging, and delivery from a single, centralized hub.",
          icon: Database
        },
        {
          title: "Consistent Brand Experiences",
          description: "Align every touchpoint to reinforce your brand across platforms.",
          icon: BadgeCheck
        },
        {
          title: "Scalable Design & Brand Libraries",
          description: "Provide teams with modular systems and approved assets that grow with you.",
          icon: Library
        },
        {
          title: "IP Protection and Control",
          description: "Protect brand identity and assets through controlled access and usage.",
          icon: Shield
        },
        {
          title: "Integrated Brand Governance",
          description: "Enforce quality and accountability with embedded standards and workflows.",
          icon: Settings
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
