
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Heart, FileChartColumn, Users, Shield, Network } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';

const HealthcarePage = () => {
  return (
    <ServiceLandingTemplate
      title="Healthcare Industry Solutions"
      subtitle="Digital transformation for healthcare providers and payers"
      description="We help healthcare organizations deliver better patient experiences and streamline clinical workflows through strategic digital solutions. Our approach balances innovation with compliance, creating secure systems that improve care delivery while meeting strict regulatory requirements."
      ctaText="Transform Healthcare Delivery"
      ctaLink="/lead-qualification"
      secondaryCtaText="Learn Our Approach"
      secondaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      isAiHeroImage={false}
      quotePanel={{
        quote: "Healthcare organizations that implement digital-first patient experiences see 62% higher patient satisfaction scores and 28% improvement in clinical outcomes.",
        author: "NEJM Catalyst",
        authorTitle: "Innovations in Care Delivery",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        sourceText: "Digital Health and the Future of Healthcare Delivery",
        sourceUrl: "https://catalyst.nejm.org/topics/digital-health"
      }}
      features={[
        {
          title: "Patient Experience Platforms",
          description: "Create intuitive digital interfaces that improve engagement and satisfaction.",
          icon: Heart
        },
        {
          title: "Clinical Workflow Optimization",
          description: "Streamline clinical processes with intelligent digital tools and integrations.",
          icon: FileChartColumn
        },
        {
          title: "Telehealth Solutions",
          description: "Implement secure virtual care platforms that extend healthcare reach.",
          icon: Network
        },
        {
          title: "Healthcare Data Security",
          description: "Build HIPAA-compliant systems that protect sensitive patient information.",
          icon: Shield
        },
        {
          title: "Provider Collaboration Tools",
          description: "Develop solutions that enhance communication between healthcare teams.",
          icon: Users
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions designed for healthcare's unique challenges and compliance requirements"
      benefits={[
        "Enhanced patient engagement and satisfaction",
        "Reduced administrative burden for clinical staff",
        "Improved care coordination and outcomes",
        "Seamless compliance with healthcare regulations",
        "Decreased operational costs through automation",
        "Extended care delivery through digital channels",
        "Better data-driven decision making for care teams"
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
