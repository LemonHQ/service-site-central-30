
import React from 'react';
import { SectionTitle, Paragraph, H3 } from '../ui/Typography';

const CompanyOverview = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '6', label: 'Global Markets' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionTitle className="mb-6">
            Digital-First Solutions for Enterprise Growth
          </SectionTitle>
          <Paragraph className="text-lg leading-relaxed">
            We partner with forward-thinking enterprise brands to create scalable digital ecosystems 
            that drive sustainable growth across multiple markets and product portfolios.
          </Paragraph>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-brand-400 mb-2">
                {stat.number}
              </div>
              <Paragraph className="text-sm font-medium text-gray-600">
                {stat.label}
              </Paragraph>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <H3 className="mb-4">Enterprise Focus</H3>
            <Paragraph>
              Specialized in complex, multi-stakeholder environments with proven 
              frameworks for large-scale digital transformation.
            </Paragraph>
          </div>
          
          <div className="text-center">
            <H3 className="mb-4">Global Expertise</H3>
            <Paragraph>
              Deep understanding of diverse markets, regulatory requirements, 
              and cultural nuances across six global regions.
            </Paragraph>
          </div>
          
          <div className="text-center">
            <H3 className="mb-4">Future-Ready Solutions</H3>
            <Paragraph>
              Building scalable architectures and experiences that adapt to 
              evolving customer expectations and emerging technologies.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
