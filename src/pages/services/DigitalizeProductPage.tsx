import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Database, Code, Workflow, Lightbulb, Share2 } from 'lucide-react';

const DigitalizeProductPage = () => {
  return (
    <ServiceLandingTemplate
      title="Digitalize Product Lines"
      subtitle="Transform physical products and services into digital experiences"
      description="We help organizations reimagine physical products and services as digital experiences. Our approach combines deep product strategy with technical expertise to create digital offerings that extend your reach and open new revenue streams."
      ctaText="Transform Your Products"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      features={[
        {
          title: "Digital Product Strategy",
          description: "Develop comprehensive strategies to transform physical products and services into digital offerings.",
          icon: Lightbulb
        },
        {
          title: "Legacy System Modernization",
          description: "Transform outdated systems into flexible, cloud-native digital platforms.",
          icon: Database
        },
        {
          title: "API-First Architecture",
          description: "Create scalable, interoperable digital products with API-first design principles.",
          icon: Code
        },
        {
          title: "Digital Process Automation",
          description: "Automate manual processes to increase efficiency and improve customer experience.",
          icon: Workflow
        },
        {
          title: "Omnichannel Integration",
          description: "Ensure seamless product experiences across all digital channels and touchpoints.",
          icon: Share2
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Discovery",
          description: "Deep analysis of existing products, market opportunities, and digital transformation potential."
        },
        {
          number: 2,
          title: "Strategy & Design",
          description: "Development of digital product strategy and experience design aligned with business goals."
        },
        {
          number: 3,
          title: "Development",
          description: "Agile implementation of digital products with continuous testing and refinement."
        },
        {
          number: 4,
          title: "Scaling & Optimization",
          description: "Ongoing enhancements and scaling of digital products based on market feedback and performance data."
        }
      ]}
      benefits={[
        "Expanded market reach and accessibility",
        "New revenue streams through digital business models",
        "Improved customer engagement and satisfaction",
        "Reduced operational costs through automation",
        "Faster time-to-market for product enhancements",
        "Data-driven insights to inform product decisions",
        "Increased agility to respond to market changes"
      ]}
      relatedServices={[
        {
          title: "Expand Product Offerings",
          description: "Identify and launch new services and solutions that drive growth.",
          link: "/expand-product-offerings"
        },
        {
          title: "Pilot Emerging Tech",
          description: "Prototype and validate AI, automation, and other emerging technologies.",
          link: "/pilot-emerging-tech"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems and operating models that power sustainable digital expansion.",
          link: "/scale-digital-experiences"
        }
      ]}
      faqs={[
        {
          question: "How do you approach the digitalization of complex physical products?",
          answer: "We start by identifying the core value proposition and customer needs, then determine which aspects can be enhanced through digital capabilities. This might involve adding digital interfaces, connecting to IoT platforms, creating companion apps, or completely reimagining the product experience."
        },
        {
          question: "What industries have you helped digitalize product lines?",
          answer: "We've worked across multiple industries including healthcare, financial services, manufacturing, retail, and professional services, helping transform everything from physical documents to complex machinery into digital-first experiences."
        },
        {
          question: "How do you ensure regulatory compliance during product digitalization?",
          answer: "Compliance is integrated throughout our process, not added as an afterthought. We conduct thorough regulatory assessments at the outset, incorporate compliance requirements into design specifications, and implement validation procedures to ensure all digital products meet relevant industry regulations."
        }
      ]}
    />
  );
};

export default DigitalizeProductPage;
