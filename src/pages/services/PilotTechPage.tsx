
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Brain, FlaskConical, Zap, History, BarChart2 } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const PilotTechPage = () => {
  return (
    <ServiceLandingTemplate
      title="Pilot Emerging Tech"
      subtitle="Test and implement innovative technologies"
      description="We help organizations evaluate and implement emerging technologies like AI, blockchain, and IoT through focused pilot programs. Our approach minimizes risk while allowing you to explore new capabilities that could transform your business."
      ctaText="Pilot New Technologies"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      quotePanel={serviceQuotes['pilot-emerging-tech']}
      featuredCaseStudy="smart-city-infrastructure"
      showConsultingPanel={true}
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
          icon: BarChart2
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions that let you safely experiment with cutting-edge technologies"
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
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default PilotTechPage;
