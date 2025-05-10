import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Banknote, CreditCard, TrendingUp, Shield, Network } from 'lucide-react';

const FinancePage = () => {
  return (
    <ServiceLandingTemplate
      title="Financial Services Solutions"
      subtitle="Digital transformation strategies for banks, wealth management, and fintech"
      description="We help financial institutions create modern digital experiences that balance innovation with security and compliance. Our tailored solutions address the evolving needs of both retail and commercial banking customers while streamlining operations and reducing costs."
      ctaText="Transform Your Financial Services"
      ctaLink="/lead-qualification"
      secondaryCtaText="View Case Studies"
      secondaryCtaLink="/case-studies"
      heroImage="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      isAiHeroImage={false}
      features={[
        {
          title: "Digital Banking Transformation",
          description: "Modernize retail and commercial banking experiences with intuitive digital interfaces.",
          icon: Banknote
        },
        {
          title: "Payment Solutions Integration",
          description: "Implement seamless, secure payment processing across multiple channels and methods.",
          icon: CreditCard
        },
        {
          title: "Wealth Management Platforms",
          description: "Create personalized investment platforms that help clients achieve financial goals.",
          icon: TrendingUp
        },
        {
          title: "Regulatory Compliance Solutions",
          description: "Build systems that ensure compliance with evolving financial regulations.",
          icon: Shield
        },
        {
          title: "Open Banking Implementation",
          description: "Develop secure API infrastructures for open banking initiatives and fintech partnerships.",
          icon: Network
        }
      ]}
      benefits={[
        "Enhanced customer acquisition and retention",
        "Reduced operational costs through automation",
        "Improved security and fraud prevention",
        "Seamless compliance with evolving regulations",
        "Accelerated time-to-market for new financial products",
        "Increased cross-selling opportunities through data insights",
        "Greater competitive advantage against fintech disruptors"
      ]}
      relatedServices={[
        {
          title: "Unify Brand Experiences",
          description: "Create consistent, compliant brand experiences across all customer touchpoints.",
          link: "/unify-brand-experiences"
        },
        {
          title: "Pilot Emerging Tech",
          description: "Test and implement AI, blockchain, and other emerging technologies securely.",
          link: "/pilot-emerging-tech"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital financial product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "How do you ensure the security of financial applications?",
          answer: "We implement multiple security layers including encryption at rest and in transit, multi-factor authentication, secure API architecture, continuous security monitoring, regular penetration testing, and compliance with financial industry regulations like PCI DSS, SOC 2, and GDPR."
        },
        {
          question: "Can you integrate with our existing core banking systems?",
          answer: "Yes, we specialize in integrating modern digital experiences with legacy core banking systems through secure middleware and API layers that preserve your existing infrastructure investments while enabling innovation at the customer experience layer."
        },
        {
          question: "How do you address regulatory compliance in financial services projects?",
          answer: "Compliance is integrated throughout our development process with regulatory requirements documented at the outset, regular reviews with compliance stakeholders, built-in audit trails, and documentation aligned with regulatory frameworks specific to your markets."
        }
      ]}
    />
  );
};

export default FinancePage;
