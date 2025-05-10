
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { ShoppingBag, Store, Users, TrendingUp, BarChart } from 'lucide-react';
import ClientLogosCarousel from '@/components/homepage/ClientLogosCarousel';

const RetailPage = () => {
  return (
    <ServiceLandingTemplate
      title="Retail Industry Solutions"
      subtitle="Digital transformation for modern retail enterprises"
      description="We help retailers create seamless omnichannel experiences that bridge online and offline shopping journeys. Our solutions enable personalized customer engagement, streamlined operations, and data-driven decision making to drive growth in today's competitive retail landscape."
      ctaText="Transform Your Retail Business"
      ctaLink="/lead-qualification"
      secondaryCtaText="View Success Stories"
      secondaryCtaLink="/case-studies"
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      isAiHeroImage={false}
      quotePanel={{
        quote: "Retailers who effectively combine digital and physical channels see 40% higher conversion rates and 30% higher customer lifetime value.",
        author: "Harvard Business Review",
        authorTitle: "Retail Innovation Analysis",
        imageUrl: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        sourceText: "Reinventing the Customer Experience in Retail",
        sourceUrl: "https://hbr.org/topic/customer-experience"
      }}
      features={[
        {
          title: "Omnichannel Experience Design",
          description: "Create consistent shopping experiences across digital and physical touchpoints.",
          icon: Store
        },
        {
          title: "E-commerce Optimization",
          description: "Enhance online shopping platforms for improved conversion and customer satisfaction.",
          icon: ShoppingBag
        },
        {
          title: "Customer Loyalty Solutions",
          description: "Develop personalized engagement programs that increase retention and lifetime value.",
          icon: Users
        },
        {
          title: "Retail Analytics Implementation",
          description: "Implement data solutions that provide actionable insights for merchandising and operations.",
          icon: BarChart
        },
        {
          title: "Digital Growth Strategies",
          description: "Create and execute plans for expanding digital revenue channels and market reach.",
          icon: TrendingUp
        }
      ]}
      featuresTitle="Use cases we solve for"
      featuresSubtitle="Solutions designed specifically for modern retail challenges"
      benefits={[
        "Increased online and in-store conversion rates",
        "Enhanced customer loyalty and repeat purchases",
        "Unified view of inventory and customer data",
        "Reduced operational costs through automation",
        "Improved merchandising decisions through data insights",
        "Faster time-to-market for new products and promotions",
        "Seamless shopping experiences across all channels"
      ]}
      relatedServices={[
        {
          title: "Unify Brand Experiences",
          description: "Create consistent brand experiences across all digital and physical touchpoints.",
          link: "/unify-brand-experiences"
        },
        {
          title: "Expand Product Offerings",
          description: "Identify and launch new digital services and product lines.",
          link: "/expand-product-offerings"
        },
        {
          title: "Standardize Digital Portfolio",
          description: "Establish consistent patterns across your digital product catalog.",
          link: "/standardize-digital-portfolio"
        }
      ]}
      faqs={[
        {
          question: "How can we create a consistent experience across our online and physical stores?",
          answer: "We develop unified commerce platforms that integrate inventory, customer, and transaction data across channels, enabling features like buy-online-pickup-in-store, shared loyalty programs, and personalized recommendations based on cross-channel shopping history."
        },
        {
          question: "What technologies do you recommend for enhancing in-store digital experiences?",
          answer: "We implement technologies like mobile POS systems, digital signage, customer-facing apps with in-store features, RFID for inventory tracking, AR for virtual try-ons, and integrated loyalty programs that bridge the digital and physical shopping experience."
        },
        {
          question: "How do you approach personalization in retail?",
          answer: "Our approach combines customer data platforms, machine learning algorithms, and content management systems to deliver personalized product recommendations, targeted promotions, custom content, and tailored shopping journeys based on customer preferences, purchase history, and browsing behavior."
        }
      ]}
    >
      <ClientLogosCarousel title="Our clients" subtitle="Enterprise brands we've partnered with to reimagine, reshape and redefine the way people experience their businesses." />
    </ServiceLandingTemplate>
  );
};

export default RetailPage;
