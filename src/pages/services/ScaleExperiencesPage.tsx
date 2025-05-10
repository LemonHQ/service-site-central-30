
import React from 'react';
import ServiceLandingTemplate from '@/components/services/ServiceLandingTemplate';
import { Database, Globe, Shield, BarChart2, Settings } from 'lucide-react';

const ScaleExperiencesPage = () => {
  return (
    <ServiceLandingTemplate
      title="Scale Digital Experiences"
      subtitle="Build systems that support rapid growth"
      description="We help organizations create scalable digital platforms that can grow with your business. Our approach focuses on building flexible architectures and development practices that allow you to quickly adapt to changing market conditions and customer needs."
      ctaText="Scale Your Digital Presence"
      ctaLink="/lead-qualification"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      features={[
        {
          title: "Scalable Architecture Design",
          description: "Create flexible architectures that can handle increasing traffic and data volumes.",
          icon: Database
        },
        {
          title: "Automated Deployment Pipelines",
          description: "Implement CI/CD pipelines for rapid and reliable deployments.",
          icon: Globe
        },
        {
          title: "Cloud Infrastructure Management",
          description: "Optimize cloud infrastructure for performance and cost efficiency.",
          icon: Settings
        },
        {
          title: "Performance Monitoring and Optimization",
          description: "Implement monitoring tools and practices to ensure optimal performance.",
          icon: BarChart2
        },
        {
          title: "Disaster Recovery Planning",
          description: "Develop strategies to minimize downtime and data loss.",
          icon: Shield
        },
      ]}
      benefits={[
        "Improved performance and reliability",
        "Reduced downtime and data loss",
        "Increased agility and responsiveness",
        "Lower infrastructure costs",
        "Better customer experience",
      ]}
      relatedServices={[
        {
          title: "Unify Brand Experiences",
          description: "Create consistent experiences across all customer touchpoints.",
          link: "/unify-brand-experiences",
        },
        {
          title: "Digitalize Product Lines",
          description: "Transform physical products and services into digital experiences.",
          link: "/digitalize-product-lines",
        },
        {
          title: "Expand Product Offerings",
          description: "Innovate and grow your digital portfolio.",
          link: "/expand-product-offerings",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure scalability?",
          answer:
            "We use a variety of techniques to ensure scalability, including load balancing, caching, and database optimization.",
        },
        {
          question: "How do you handle disaster recovery?",
          answer:
            "We develop disaster recovery plans that include regular backups, failover systems, and data replication.",
        },
        {
          question: "How do you monitor performance?",
          answer:
            "We use a variety of monitoring tools to track performance metrics such as CPU usage, memory usage, and network traffic.",
        },
      ]}
    />
  );
};

export default ScaleExperiencesPage;
