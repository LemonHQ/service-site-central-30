import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Palette, ArrowDown, Globe, Database, Shield, Settings } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';
import { getCustomerProfilesByServiceSlug } from '@/data/customerProfiles';

const UnifyBrandPage = () => {
  // Get customer profiles for this service
  const customerProfiles = getCustomerProfilesByServiceSlug('unify-brand-experiences');

  return (
    <ServiceLandingTemplate
      title="Unify Brand Experiences"
      subtitle="Create cohesive experiences across all customer touchpoints"
      description="We partner with leading enterprise brands to turn fragmented touchpoints into integrated brand experiences—aligning digital portfolios with strategic brand goals to drive customer loyalty and competitive differentiation"
      ctaText="Start Your Brand Transformation"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
      quotePanel={serviceQuotes['unify-brand-experiences']}
      featuredCaseStudy="global-bank-digital-transformation"
      showConsultingPanel={false}
      customerProfiles={customerProfiles}
      customerProfilesTitle="Who is unify brand experience for"
      customerProfilesSubtitle="With you at different stages of your brand journey"
      features={[
        {
          title: "Strategic Brand Expansion",
          description: "Grow across markets and channels with a unified identity that supports both masterbrand and sub-brand strategies.",
          icon: Palette
        },
        {
          title: "Reusable Brand Infrastructure",
          description: "Build once and deploy globally with modular templates and systems that cut duplication and speed delivery.",
          icon: ArrowDown
        },
        {
          title: "Localized Global Consistency",
          description: "Maintain global consistency while enabling local adaptation through structured localization frameworks.",
          icon: Globe
        },
        {
          title: "Centralized Brand Operations",
          description: "Manage assets, messaging, and delivery from a central platform to align teams and partners.",
          icon: Database
        },
        {
          title: "Brand Integrity & IP Protection",
          description: "Protect brand identity and IP with access control, usage rights, and built-in compliance.",
          icon: Shield
        },
        {
          title: "Governance & Quality Control",
          description: "Ensure brand consistency and execution quality through embedded standards and approval workflows.",
          icon: Settings
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Comprehensive solutions to unify your brand experience across all touchpoints"
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
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default UnifyBrandPage;
