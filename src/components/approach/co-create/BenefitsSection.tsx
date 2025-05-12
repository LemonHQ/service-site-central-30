
import React from 'react';
import { CheckCircle, Users, Lightbulb, BarChart } from 'lucide-react';
import { H4, Paragraph } from '@/components/ui/Typography';
import SectionHeading from '@/components/ui/SectionHeading';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    title: 'Faster product-market fit',
    description: 'Validate real customer needs early and shape solutions that resonate—before you commit full-scale resources.',
    icon: CheckCircle
  },
  {
    title: 'Stronger differentiation',
    description: 'Stand out with offerings that are precise, relevant, and built with the end customer segment in mind.',
    icon: Users
  },
  {
    title: 'Actionable innovation',
    description: 'Uncover fresh opportunities, niche use cases, and value models hidden in your customer or partner ecosystem.',
    icon: Lightbulb
  },
  {
    title: 'Less risk, more alignment',
    description: 'Minimize missteps and internal friction by involving brand, product, market, channel teams from day one.',
    icon: Lightbulb
  },
  {
    title: 'Execution-ready frameworks',
    description: 'Turn strategy into speed with assets, prototypes, and modular systems ready for market deployment.',
    icon: Lightbulb
  },
  {
    title: 'Customer-centricity at scale',
    description: 'Design for flexibility—so your product can flex across regions, verticals, or partner channels without losing focus.',
    icon: Lightbulb
  },
  {
    title: 'Measurable outcomes',
    description: 'Define clear KPIs and success metrics aligned with your business objectives.',
    icon: BarChart
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="The benefits of Co-creation"
          subtitle="Our Co-Create model brings your team and our experts together in collaborative environments designed to accelerate unbundling, build alignment, and deliver impactful business outcomes."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
