
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { FlaskConical, Zap, Brain, History, BarChart } from 'lucide-react';

const PilotTechPage = () => {
  return (
    <ServiceLandingTemplate
      title="Pilot Emerging Tech"
      subtitle="Prototype and validate AI, automation, and other emerging technologies"
      description="We help enterprises rapidly prototype and validate AI, automation, and other emerging technologies to drive future-ready innovation in regulated environments. Our approach reduces risk while accelerating adoption of transformative technologies."
      ctaText="Explore Possibilities"
      ctaLink="/lead-qualification"
      secondaryCtaText="View Case Studies"
      secondaryCtaLink="/case-studies"
      heroImage="/lovable-uploads/pilot-tech-ai-hero.png"
      isAiHeroImage={true}
      features={[
        {
          title: "AI & Machine Learning Prototyping",
          description: "Rapidly develop and test AI-powered solutions for specific business challenges.",
          icon: Brain
        },
        {
          title: "Emerging Tech Evaluation",
          description: "Assess new technologies for business impact and implementation feasibility.",
          icon: FlaskConical
        },
        {
          title: "Proof of Concept Development",
          description: "Create working prototypes to validate technical feasibility and business value.",
          icon: Zap
        },
        {
          title: "Technology Compliance Framework",
          description: "Ensure emerging tech implementations meet regulatory requirements.",
          icon: History
        },
        {
          title: "Impact Measurement",
          description: "Quantify business outcomes and ROI of emerging technology initiatives.",
          icon: BarChart
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Discovery",
          description: "Identify high-impact technology opportunities aligned with business objectives."
        },
        {
          number: 2,
          title: "Proof of Concept",
          description: "Rapid development and testing of minimum viable solutions."
        },
        {
          number: 3,
          title: "Validation",
          description: "Rigorous testing and refinement based on user feedback and performance data."
        },
        {
          number: 4,
          title: "Scaling Strategy",
          description: "Development of implementation roadmap for production deployment."
        }
      ]}
      benefits={[
        "De-risked technology adoption through validated pilots",
        "Accelerated innovation cycle times",
        "Competitive advantage through early adoption",
        "Reduced investment in unsuccessful technologies",
        "Clear ROI measurement before full-scale implementation",
        "Increased organizational digital capabilities",
        "Compliance-ready technology implementations"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy offerings into modern, scalable digital products.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Expand Product Offerings",
          description: "Identify and launch new services and solutions that drive growth.",
          link: "/expand-product-offerings"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems and operating models that power sustainable digital expansion.",
          link: "/scale-digital-experiences"
        }
      ]}
      faqs={[
        {
          question: "How do you determine which emerging technologies are worth exploring?",
          answer: "We use a structured evaluation framework that considers business alignment, potential impact, implementation complexity, organizational readiness, and regulatory considerations to prioritize technologies with the highest potential return."
        },
        {
          question: "How long does a typical technology pilot take?",
          answer: "Most of our pilots run for 6-12 weeks, though the timeline varies based on complexity. Our approach emphasizes rapid learning cycles to quickly determine viability rather than extended development periods."
        },
        {
          question: "How do you handle data privacy and security when piloting new technologies?",
          answer: "We implement privacy-by-design principles from the outset, using anonymized or synthetic data where possible, and incorporating appropriate security controls throughout the pilot process to ensure compliance with relevant regulations."
        }
      ]}
    />
  );
};

export default PilotTechPage;
