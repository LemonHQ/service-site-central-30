
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { ArrowUp, Shield, Server, Users, Settings } from 'lucide-react';

const ScaleExperiencesPage = () => {
  return (
    <ServiceLandingTemplate
      title="Scale Digital Experiences"
      subtitle="Build systems and operating models that power sustainable growth"
      description="We help enterprises build the systems, standards, and operating models that power sustainable, enterprise-grade digital expansion. Our approach ensures your digital experiences maintain quality and performance while scaling to meet growing demands and new markets."
      ctaText="Scale Your Digital Presence"
      ctaLink="/lead-qualification"
      secondaryCtaText="Learn Our Methodology"
      secondaryCtaLink="/contact"
      heroImage="/lovable-uploads/scale-experiences-ai-hero.png"
      isAiHeroImage={true}
      features={[
        {
          title: "Scalable Architecture Design",
          description: "Create technical foundations that flex and scale with your business growth.",
          icon: Server
        },
        {
          title: "Performance Optimization",
          description: "Enhance digital experience performance and reliability at scale.",
          icon: ArrowUp
        },
        {
          title: "DevOps Transformation",
          description: "Implement DevOps practices for faster, more reliable digital experience delivery.",
          icon: Settings
        },
        {
          title: "Digital Governance Framework",
          description: "Establish governance models that balance innovation with control.",
          icon: Shield
        },
        {
          title: "Digital Operating Model",
          description: "Design organizational structures and processes optimized for digital delivery.",
          icon: Users
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Assessment",
          description: "Comprehensive evaluation of current digital capabilities, bottlenecks, and scaling challenges."
        },
        {
          number: 2,
          title: "Architecture & Strategy",
          description: "Development of scalable architecture and operational strategies aligned with growth objectives."
        },
        {
          number: 3,
          title: "Implementation",
          description: "Phased implementation of technical and organizational changes to enable scaling."
        },
        {
          number: 4,
          title: "Optimization",
          description: "Continuous improvement of systems and processes based on performance data and growth patterns."
        }
      ]}
      benefits={[
        "Increased capacity to handle growing user demand",
        "Consistent experience quality across all markets",
        "Reduced operational overhead through automation",
        "Faster deployment of updates and new features",
        "Enhanced security and compliance at scale",
        "More efficient resource utilization",
        "Improved disaster recovery and business continuity"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy offerings into modern, scalable digital products.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital product catalog.",
          link: "/standardize-digital-portfolio"
        },
        {
          title: "Unify Brand Experiences",
          description: "Create consistent, compliant brand experiences across all touchpoints.",
          link: "/unify-brand-experiences"
        }
      ]}
      faqs={[
        {
          question: "What are the most common challenges companies face when scaling digital experiences?",
          answer: "The most common challenges include performance degradation under increased load, inconsistent user experiences across channels, governance complexity, technical debt that slows innovation, and organizational structures that aren't optimized for digital delivery."
        },
        {
          question: "How do you approach security when scaling digital systems?",
          answer: "Security is integrated throughout our scaling methodology, including automated security testing in CI/CD pipelines, zero-trust architecture principles, comprehensive monitoring, and regular penetration testing to ensure security scales alongside your digital footprint."
        },
        {
          question: "What technologies do you recommend for scalable digital experiences?",
          answer: "While we're technology-agnostic, we often recommend cloud-native architectures, containerization, microservices for specific use cases, robust API management, and serverless computing where appropriate to enable cost-effective scaling."
        }
      ]}
    />
  );
};

export default ScaleExperiencesPage;
