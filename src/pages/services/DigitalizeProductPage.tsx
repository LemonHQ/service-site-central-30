
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Lightbulb, FileCode2, Rocket, Cloud, ShieldCheck, Users } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';
import ProductJourney from '@/components/homepage/ProductJourney';
import { serviceQuotes } from '@/data/quotes';
import { getCustomerProfilesByServiceSlug } from '@/data/customerProfiles';

const DigitalizeProductPage = () => {
   // Get customer profiles for this service
    const customerProfiles = getCustomerProfilesByServiceSlug('digitalize-product-lines');

  return (
    <ServiceLandingTemplate
      title="Digitalize Product Lines"
      subtitle="Transform legacy products into modern digital offerings"
      description="We partner with leading enterprises to re-architect their core products into modular, data-rich, and platform-ready offerings—designed to enable rapid innovation and unlock emerging business models."
      ctaText="Digitalize Your Products"
      ctaLink="/lead-qualification"
      heroImage="/assets/imgs/product-roadmap-profile.jpg"
      quotePanel={serviceQuotes['digitalize-product-lines']}
      featuredCaseStudy="snacks-direct-to-consumer"
      showConsultingPanel={false}
      customerProfiles={customerProfiles}
      customerProfilesTitle="Who is digitalize product lines for"
      customerProfilesSubtitle="With you at different stages of your digitalization journey"
      features={[
        {
          title: "Drive Top-Line revenue",
          description: "Decompose traditional products into stand-alone offerings customized around a specific customer segment",
          icon: Cloud
        },
        {
          title: "Create competitive advantage",
          description: "Establish market leadership by embedding digital features that are hard to replicate—driving customer lock-in and reducing competitive threats",
          icon: Cloud
        },
        {
          title: "Monetize emerging business models",
          description: "Repackage existing offerings into subscription-based digital services with tiered access and recurring revenue",
          icon: Rocket
        },
        {
          title: "Accelerate sales pipelines",
          description: "Expand product reach consistently across multiple customer touchpoints and partners",
          icon: Lightbulb
        },
        {
          title: "Surface new capabilities",
          description: "Extend the capability of the core product to unlock adjacent value streams and accelerate ecosystem integration",
          icon: ShieldCheck
        },
        {
          title: "Derisk compliance",
          description: "Embed regulatory adherence at the core, ensuring new product lines are market-ready, audit-ready, and regulator-proof",
          icon: FileCode2
        },
        {
          title: "Modernize legacy experiences",
          description: "Redesing product journeys and experiences for a digital-first customer",
          icon: Users
        }
        ,
        {
          title: "Enhance customer acquisition and retention",
          description: "Enable customers to experience value upfront whilst incentivising eco-system transactions",
          icon: Users
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Comprehensive solutions for transforming traditional products into modern digital-first experiences"
      benefits={[
        "New revenue streams from digital products",
        "Improved customer engagement and loyalty",
        "Reduced costs through standardization and efficiency",
        "Faster time-to-market for new offers",
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
      {/* <ProductJourney /> */}
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default DigitalizeProductPage;
