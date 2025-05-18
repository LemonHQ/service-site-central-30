import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Maximize, Globe, Shield, BarChart2, Settings } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const ScaleExperiencesPage = () => {
  return (
    <ServiceLandingTemplate
      title="Scale Digital Experiences"
      subtitle="Deliver unified, high-quality digital experiences—at enterprise scale"
      description="We partner with leading enteprises to replace fragmented, inconsistent digital delivery with a scalable foundation that supports multiple brands, markets, and products—without sacrificing speed, flexibility, or experience quality."
      ctaText="Scale Your Digital Presence"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      quotePanel={serviceQuotes['scale-digital-experiences']}
      featuredCaseStudy="e-commerce-platform-redesign"
      showConsultingPanel={false}
      features={[
        {
          title: "Market share expansion",
          description: "Operationalize and scale early success to sustained, multi-market impact",
          icon: Maximize
        },
        {
          title: "Distribution expansion",
          description: "Apart from owned channels reach customers where they already are - 3rd party marketplaces, platforms and products",
          icon: Database
        },
        {
          title: "Vertical integration",
          description: "Conenct upstream or downstream services seamlessly across the customer experience",
          icon: Globe
        },
        {
          title: "Horinzontal integration",
          description: "Deliver a unified experience that reflects the full depth of your brand and product portfolios",
          icon: Settings
        },
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions to help your digital platforms grow efficiently and reliably"
      benefits={[
        "Build sustainable competitive moats",
        "Convert early wins into multi-market opportunities",
        "Respond to market signals faster",
        "Bridge business unit siloes",
        "Deliver experiences customers expect",
      ]}
      relatedServices={[
        {
          title: "Unify Brand Experiences",
          description: "Create consistent experiences across all customer touchpoints.",
          link: "/unify-brand-experiences",
        },
        {
          title: "Digitalize Product Lines",
          description: "Transform physical products and services into digital experiences.",
          link: "/digitalize-product-lines",
        },
        {
          title: "Expand Product Offerings",
          description: "Innovate and grow your digital portfolio.",
          link: "/expand-product-offerings",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure scalability?",
          answer:
            "We use a variety of techniques to ensure scalability, including load balancing, caching, and database optimization.",
        },
        {
          question: "How do you handle disaster recovery?",
          answer:
            "We develop disaster recovery plans that include regular backups, failover systems, and data replication.",
        },
        {
          question: "How do you monitor performance?",
          answer:
            "We use a variety of monitoring tools to track performance metrics such as CPU usage, memory usage, and network traffic.",
        },
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default ScaleExperiencesPage;
