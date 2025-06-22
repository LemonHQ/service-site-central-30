
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Database, Globe, Shield, BarChart2, Settings,Cloud, ShieldCheck, Users  } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';
import { getCustomerProfilesByServiceSlug } from '@/data/customerProfiles';

const ScaleExperiencesPage = () => {

    // Get customer profiles for this service
    const customerProfiles = getCustomerProfilesByServiceSlug('unify-brand-experiences');
  
  return (
    <ServiceLandingTemplate
      title="Scale Digital Experiences"
      subtitle="Deliver unified, high-quality digital experiences—at enterprise scale"
      description="We partner with leading enteprises to replace fragmented, inconsistent digital delivery with a scalable foundation that supports multiple brands, markets, and products—without sacrificing speed, flexibility, or experience quality."
      ctaText="Scale Your Digital Presence"
      ctaLink="/lead-qualification"
      heroImage="/assets/imgs/scale-experiences.jpg"
      quotePanel={serviceQuotes['scale-digital-experiences']}
      featuredCaseStudy="e-commerce-platform-redesign"
      customerProfiles={customerProfiles}
      customerProfilesTitle="Who is digitalize product lines for"
      customerProfilesSubtitle="With you at different stages of your digitalization journey"      
      showConsultingPanel={false}
      features={[
        {
          title: "Market share expansion",
          description: "Operationalize and scale early success to sustained, multi-market impact",
          icon: Database
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
        {
          title: "Drive Top-Line revenue",
          description: "Decompose traditional products into stand-alone offerings customized around a specific customer segment",
          icon: Cloud
        },
        {
          title: "Create competitive advantage",
          description: "Establish market leadership by embedding digital features that are hard to replicate—driving customer lock-in and reducing competitive threats",
          icon: Cloud
        },
        {
          title: "Enhance customer acquisition and retention",
          description: "Enable customers to experience value upfront whilst incentivising eco-system transactions",
          icon: Users
        }            
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
