import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Heart, FileChartColumn,LineChart, Users, Shield, Network } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const HealthcarePage = () => {
  return (
    <ServiceLandingTemplate
      title="Healthcare"
      subtitle="Owning the health journey, not just the device"
      description="Healthcare device makers can no longer rely on traditional distribution channels to own the patient relationship. As patient expectations rise, they must design connected, experience-first digital channels that engage users directly—unlocking data, driving adherence, and building long-term brand trust across the care continuum."
      ctaText="Getting Started"
      ctaLink="/getting-started"
      secondaryCtaText="Getting Started"
      secondaryCtaLink="/getting-started"
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      isAiHeroImage={false}
      quotePanel={serviceQuotes['healthcare']}
      features={[
        {
          title: "Multi-market D2C platform",
          description: "Expand uniformly from one market to the other, customizing only for local regulations",
          icon: Heart
        },
      {
          title: "Standard product experience",
          description: "Take control of how patients experience your products and receive value",
          icon: LineChart
        },
        {
          title: "Customer self-service portals",
          description: "Deliver standard customer services at scale",
          icon: Shield
        },
        {
          title: "Market performance dashboards",
          description: "Monitor and track market trends and opportunities",
          icon: Users
        },
        {
          title: "Customer 360 view",
          description: "Observe customer purchasing behaviour and patterns across markets",
          icon: Users
        },
        {
          title: "Market management platform",
          description: "Manage products catalog and distribution by market",
          icon: Users
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions designed for healthcare's unique challenges and compliance requirements"
      benefits={[
        "Enhanced patient engagement and satisfaction",
        "Reduced administrative burden for customer services",
        "Improved patient coordination and outcomes",
        "Seamless compliance with healthcare regulations",
        "Decreased operational costs through automation",
        "Extended care delivery through digital channels",
        "Better data-driven decision making for device makers"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform traditional healthcare services into modern digital offerings.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Pilot Emerging Tech",
          description: "Safely test AI and other emerging technologies in healthcare settings.",
          link: "/pilot-emerging-tech"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems that support growth across facilities and service lines.",
          link: "/scale-digital-experiences"
        }
      ]}
      faqs={[
        {
          question: "How do you ensure compliance with healthcare regulations like HIPAA?",
          answer: "We integrate compliance requirements from the beginning with technical safeguards including encryption, access controls, audit trails, and secure authentication. Our development process includes regular compliance reviews, documentation aligned with regulatory frameworks, and validation testing specific to healthcare regulations."
        },
        {
          question: "Can your solutions integrate with our existing EHR system?",
          answer: "Yes, we have extensive experience integrating with major EHR systems like Epic, Cerner, and Allscripts through secure API connections, HL7/FHIR standards, and custom middleware when needed, creating seamless workflows while preserving your existing infrastructure investments."
        },
        {
          question: "What security measures do you implement for healthcare applications?",
          answer: "Our healthcare applications implement multiple security layers including end-to-end encryption, role-based access controls, multi-factor authentication, comprehensive audit logging, secure API architecture, regular vulnerability assessments, and continuous security monitoring to protect sensitive patient data."
        }
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default HealthcarePage;
