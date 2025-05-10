
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Expand, Target, LineChart, Search, Network } from 'lucide-react';

const ExpandOfferingsPage = () => {
  return (
    <ServiceLandingTemplate
      title="Expand Product Offerings"
      subtitle="Identify, validate, and launch new services that drive growth"
      description="We help enterprises identify, validate, and launch new services, bundles, and adjacent solutions that deepen customer value and drive growth. Our methodology combines market intelligence with rapid experimentation to minimize risk and maximize impact."
      ctaText="Explore Opportunities"
      ctaLink="/lead-qualification"
      secondaryCtaText="See Our Process"
      secondaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      features={[
        {
          title: "Market Opportunity Analysis",
          description: "Identify untapped market segments and high-potential product opportunities through data-driven research.",
          icon: Search
        },
        {
          title: "Product Portfolio Strategy",
          description: "Develop strategic frameworks for expanding your product portfolio in alignment with business objectives.",
          icon: Target
        },
        {
          title: "Rapid Prototyping & Validation",
          description: "Quickly test new product concepts with target customers to validate demand before full investment.",
          icon: Expand
        },
        {
          title: "Digital Business Model Design",
          description: "Create innovative revenue models and pricing strategies for new digital offerings.",
          icon: Network
        },
        {
          title: "Go-to-Market Planning",
          description: "Comprehensive launch planning to ensure successful market entry and early adoption.",
          icon: LineChart
        }
      ]}
      processes={[
        {
          number: 1,
          title: "Opportunity Scanning",
          description: "Systematic research to identify high-potential product and service opportunities."
        },
        {
          number: 2,
          title: "Concept Development",
          description: "Creation and refinement of product concepts with clear value propositions."
        },
        {
          number: 3,
          title: "Validation & Testing",
          description: "Rapid prototyping and market testing to validate demand and refine offerings."
        },
        {
          number: 4,
          title: "Launch & Scale",
          description: "Strategic go-to-market execution and ongoing optimization based on market feedback."
        }
      ]}
      benefits={[
        "Diversified revenue streams to drive growth",
        "Deeper customer relationships through expanded value",
        "Reduced risk through methodical validation",
        "Faster time-to-market for new offerings",
        "Competitive differentiation in saturated markets",
        "Increased customer lifetime value",
        "Entry into adjacent markets and customer segments"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform legacy offerings into modern, scalable digital products.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Pilot Emerging Tech",
          description: "Prototype and validate AI, automation, and other emerging technologies.",
          link: "/pilot-emerging-tech"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "How do you identify which new products or services we should develop?",
          answer: "Our approach combines market analysis, customer research, competitive intelligence, and internal capability assessment to identify opportunities with the highest potential return on investment and strategic fit."
        },
        {
          question: "What's your approach to validating new product concepts?",
          answer: "We use a multi-stage validation process including customer interviews, concept testing, design sprints, and minimum viable product (MVP) launches to gather real-world feedback before significant investment."
        },
        {
          question: "How long does it typically take to launch a new product offering?",
          answer: "Timelines vary based on complexity, but our approach typically enables initial market testing within 4-8 weeks and full-scale launches within 3-6 months, significantly faster than traditional product development cycles."
        }
      ]}
    />
  );
};

export default ExpandOfferingsPage;
