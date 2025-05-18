import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Lightbulb, FlaskConical, Zap, History, BarChart2 } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const PilotTechPage = () => {
  return ( 
    <ServiceLandingTemplate
      title="Pilot Emerging Tech"
      subtitle="Experiment with confidence. Scale what works."
      description="We partner with leading enterprise brands and digital leaders to explore and validate emerging technologies through focused, low-risk pilots—grounded in real business value, not hype. Sandboxed experiements, targeted use cases and testable experiences to make informed decisions"
      ctaText="Pilot New Technologies"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      quotePanel={serviceQuotes['pilot-emerging-tech']}
      featuredCaseStudy="smart-city-infrastructure"
      showConsultingPanel={false}
      features={[
        {
          title: "Test Ecosystem plays",
          description: "Explore how your product or service performs when integrated into a partner environment or digital ecosystem.",
          icon: Lightbulb
        },   
        {
          title: "Explore new value propositions",
          description: "Pilot lightweight versions of new offerings to assess adoption, engagement and business value in live environments",
          icon: History
        },    
        {
          title: "Build internal buy-in through evidence",
          description: "Generate early results that help align cross-functional teams and secure executive sponsorship",
          icon: BarChart2
        },                 
        {
          title: "Hypothesis validation",
          description: "Run short, controlled pilots to test assumptions about new customer behaviors, market demand, or innovation bets",
          icon: Brain
        },
        {
          title: "Accelerate Time-to-Learning",
          description: "Shorten the gap between idea and insight by testing in-market quickly",
          icon: BarChart2
        },
        {
          title: "Identify Scalable Opportunities",
          description: "Distinguish between promising concepts and scalable business models early in the process",
          icon: BarChart2
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions that let you safely experiment in sandboxed environments"
      benefits={[
        "De-risked adoption through validated pilots",
        "Accelerated innovation cycle times",
        "Early stakeholder and executive buy-in",
        "Reduced investment in unsuccessful products",
        "Clear ROI impact before full-scale committment",
        "Increased organizational digital moat",
        "Compliance-ready by design"
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
