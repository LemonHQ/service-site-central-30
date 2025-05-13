
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Search, Target, Maximize as Expand, Network, LineChart } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import ProductJourney from '@/components/homepage/ProductJourney';
import { serviceQuotes } from '@/data/quotes';

const ExpandOfferingsPage = () => {
  return (
    <ServiceLandingTemplate
      title="Expand Product Offerings"
      subtitle="Innovate and grow your digital portfolio"
      description="We help organizations identify and develop new digital products and services that align with customer needs and business goals. Our approach combines market research, customer insights, and rapid prototyping to accelerate innovation and drive growth."
      ctaText="Expand Your Digital Portfolio"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      quotePanel={serviceQuotes['expand-product-offerings']}
      featuredCaseStudy="ai-powered-financial-advisor"
      showConsultingPanel={true}
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
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions to help you identify and develop new revenue streams"
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
    >
       {/* Product Journey Section */}
       <ProductJourney /> 

      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default ExpandOfferingsPage;
