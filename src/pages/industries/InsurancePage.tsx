
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Shield, BadgeCheck, Umbrella, FileChartColumn, Heart } from 'lucide-react';

const InsurancePage = () => {
  return (
    <ServiceLandingTemplate
      title="Insurance Industry Solutions"
      subtitle="Digital transformation solutions for the modern insurance enterprise"
      description="We help insurance providers modernize their digital presence, streamline claims processing, and create personalized customer experiences that increase retention and satisfaction. Our solutions combine industry expertise with cutting-edge technology to address the unique challenges facing insurers today."
      ctaText="Transform Your Insurance Business"
      ctaLink="/lead-qualification"
      secondaryCtaText="Schedule a Consultation"
      secondaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      isAiHeroImage={false}
      features={[
        {
          title: "Claims Process Digitalization",
          description: "Streamline and automate claims processing with intelligent workflows and digital interfaces.",
          icon: FileChartColumn
        },
        {
          title: "Policyholder Portal Development",
          description: "Create intuitive self-service experiences that empower customers and reduce operational costs.",
          icon: Shield
        },
        {
          title: "Risk Assessment Modernization",
          description: "Implement data-driven risk evaluation tools to improve accuracy and reduce underwriting time.",
          icon: BadgeCheck
        },
        {
          title: "Insurance Product Innovation",
          description: "Design and develop digital-first insurance offerings tailored to emerging market needs.",
          icon: Umbrella
        },
        {
          title: "Customer Experience Enhancement",
          description: "Build personalized experiences that strengthen relationships and improve retention rates.",
          icon: Heart
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Assessment",
          description: "Comprehensive analysis of your current digital infrastructure and customer journeys."
        },
        {
          number: 2,
          title: "Strategic Roadmap",
          description: "Development of a prioritized digital transformation plan aligned with business objectives."
        },
        {
          number: 3,
          title: "Implementation",
          description: "Agile delivery of solutions with continuous stakeholder feedback and refinement."
        },
        {
          number: 4,
          title: "Optimization",
          description: "Ongoing performance analysis and enhancement based on user feedback and metrics."
        }
      ]}
      benefits={[
        "Reduced claims processing time by up to 70%",
        "Increased customer satisfaction and retention rates",
        "Lower operational costs through automation",
        "Enhanced data security and regulatory compliance",
        "Improved risk assessment accuracy",
        "Greater agility to adapt to changing market conditions",
        "Increased cross-selling and upselling opportunities"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy insurance products into modern, scalable digital offerings.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Unify Brand Experiences",
          description: "Create consistent customer experiences across all touchpoints and channels.",
          link: "/unify-brand-experiences"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems that support sustainable growth and expansion.",
          link: "/scale-digital-experiences"
        }
      ]}
      faqs={[
        {
          question: "How can digital transformation help us improve our claims process?",
          answer: "Digital transformation can reduce claims processing time by up to 70% through automation, real-time data integration, mobile-first interfaces for documentation submission, and AI-powered initial assessments, all while improving customer satisfaction and reducing operational costs."
        },
        {
          question: "What security measures do you implement for insurance applications?",
          answer: "We implement comprehensive security measures including end-to-end encryption, multi-factor authentication, regular security audits, compliance with industry regulations (GDPR, HIPAA), secure API integrations, and continuous monitoring systems to protect sensitive policyholder data."
        },
        {
          question: "How long does a typical insurance digital transformation project take?",
          answer: "The timeline varies based on scope, but typically ranges from 3-6 months for initial implementations like a policyholder portal, to 12-18 months for a comprehensive enterprise-wide digital transformation. We use an iterative approach to deliver value incrementally throughout the process."
        }
      ]}
    />
  );
};

export default InsurancePage;
