
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Lightbulb, FileCode2, Rocket, Cloud, ShieldCheck, Users } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import { serviceQuotes } from '@/data/quotes';

const DigitalizeProductPage = () => {
  return (
    <ServiceLandingTemplate
      title="Digitalize Product Lines"
      subtitle="Transform legacy offerings into modern digital products"
      description="We help organizations transform traditional products and services into modern digital experiences. Our approach leverages cloud, mobile, and data analytics to create new revenue streams and improve customer engagement."
      ctaText="Digitalize Your Products"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      quotePanel={serviceQuotes['digitalize-product-lines']}
      featuredCaseStudy="snacks-direct-to-consumer"
      showConsultingPanel={true}
      features={[
        {
          title: "Cloud-Native Development",
          description: "Build scalable and resilient digital products on leading cloud platforms.",
          icon: Cloud
        },
        {
          title: "Mobile-First Design",
          description: "Create engaging mobile experiences that reach customers on any device.",
          icon: Rocket
        },
        {
          title: "Data-Driven Insights",
          description: "Leverage data analytics to personalize experiences and optimize product performance.",
          icon: Lightbulb
        },
        {
          title: "Secure & Compliant",
          description: "Ensure your digital products meet the highest standards for security and compliance.",
          icon: ShieldCheck
        },
        {
          title: "API-First Architecture",
          description: "Design products with open APIs for seamless integration with other systems.",
          icon: FileCode2
        },
        {
          title: "Customer-Centric Design",
          description: "Focus on user needs and preferences to create delightful product experiences.",
          icon: Users
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Comprehensive solutions for transforming traditional products into digital experiences"
      benefits={[
        "New revenue streams from digital products",
        "Improved customer engagement and loyalty",
        "Reduced costs through automation and efficiency",
        "Faster time-to-market for new products",
        "Better data-driven decision making",
        "Increased agility and innovation"
      ]}
      relatedServices={[
        {
          title: "Expand Product Offerings",
          description: "Identify and launch new services and solutions that drive growth.",
          link: "/expand-product-offerings"
        },
        {
          title: "Scale Digital Experiences",
          description: "Build systems and operating models that power sustainable digital expansion.",
          link: "/scale-digital-experiences"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "What types of products can be digitalized?",
          answer: "Almost any product or service can be digitalized, from physical goods to traditional services. The key is to identify how digital technologies can create new value for customers."
        },
        {
          question: "How long does it take to digitalize a product line?",
          answer: "The timeline varies depending on the complexity of the product and the scope of the project. However, we typically aim to deliver initial results within 3-6 months."
        },
        {
          question: "How do you ensure the security of digital products?",
          answer: "We follow industry best practices for security and compliance, including secure coding, penetration testing, and data encryption. We also work with our clients to develop security policies and procedures."
        }
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default DigitalizeProductPage;
