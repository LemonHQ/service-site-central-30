
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Shield, FileCheck, ClipboardList, LineChart, Users } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';

const InsurancePage = () => {
  return (
    <ServiceLandingTemplate
      title="Insurance Industry Solutions"
      subtitle="Digital transformation solutions for insurance carriers and brokers"
      description="We help insurance companies modernize their digital customer experiences and streamline operations through strategic technology solutions. Our approach balances innovation with compliance to help you stay competitive in a rapidly evolving market."
      ctaText="Transform Your Insurance Business"
      ctaLink="/lead-qualification"
      secondaryCtaText="View Case Studies"
      secondaryCtaLink="/case-studies"
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      isAiHeroImage={false}
      quotePanel={{
        quote: "Insurance companies that implement digital-first customer experiences reduce policy acquisition costs by 43% and increase retention rates by 29% compared to industry averages.",
        author: "Accenture Insurance",
        authorTitle: "Financial Services Technology Research",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        sourceText: "The Future of Insurance: Personalized, Digital, and Connected",
        sourceUrl: "https://www.accenture.com/us-en/industries/insurance-index"
      }}
      features={[
        {
          title: "Digital Policy Management",
          description: "Streamline policy administration with intuitive digital interfaces for customers and agents.",
          icon: FileCheck
        },
        {
          title: "Claims Process Automation",
          description: "Accelerate claims processing with intelligent automation and digital-first experiences.",
          icon: ClipboardList
        },
        {
          title: "Insurance Analytics Platform",
          description: "Make data-driven decisions with advanced analytics and reporting capabilities.",
          icon: LineChart
        },
        {
          title: "Regulatory Compliance Solutions",
          description: "Ensure adherence to evolving insurance regulations across multiple jurisdictions.",
          icon: Shield
        },
        {
          title: "Customer Engagement Tools",
          description: "Build stronger relationships with policyholders through personalized digital experiences.",
          icon: Users
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions tailored for modern insurance companies and their unique challenges"
      benefits={[
        "Reduced operational costs through automation",
        "Improved customer acquisition and retention",
        "Accelerated claims processing and settlement",
        "Enhanced fraud detection and prevention",
        "Seamless compliance with insurance regulations",
        "Increased agent productivity and satisfaction",
        "Better data-driven underwriting decisions"
      ]}
      relatedServices={[
        {
          title: "Digitalize Product Lines",
          description: "Transform traditional insurance products into modern, scalable digital offerings.",
          link: "/digitalize-product-lines"
        },
        {
          title: "Pilot Emerging Tech",
          description: "Safely test AI, blockchain, and other emerging insurance technologies.",
          link: "/pilot-emerging-tech"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Create consistent experiences across your insurance product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "How do you ensure security and compliance in insurance applications?",
          answer: "We build security and compliance into every layer of our solutions with encryption, role-based access controls, audit trails, and regular security testing. Our development process incorporates insurance-specific regulatory requirements from the start to ensure all solutions meet applicable standards across jurisdictions."
        },
        {
          question: "Can you integrate with legacy insurance systems?",
          answer: "Yes, we specialize in creating modern digital experiences that integrate with legacy policy administration, claims management, and underwriting systems. We use APIs, microservices, and middleware approaches that preserve your existing infrastructure investments while enabling innovation."
        },
        {
          question: "How long does it typically take to implement a new digital insurance solution?",
          answer: "Implementation timelines vary based on complexity, but our approach emphasizes quick wins through phased delivery. Basic digital experiences can often be launched within 3-6 months, with more complex enterprise solutions taking 6-12 months for full implementation."
        }
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default InsurancePage;
