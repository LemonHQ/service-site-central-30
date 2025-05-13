
import React from 'react';
import { Clock, TrendingDown, AlertCircle, FileX, ExternalLink } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const problemCards = [
  {
    icon: <Clock className="h-8 w-8 text-brand-500" />,
    title: "Slow Innovation Cycles",
    description: "Traditional product development takes too long, causing businesses to miss market opportunities and fall behind faster-moving competitors."
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-brand-500" />,
    title: "Resource-Heavy Experiments",
    description: "High-stakes innovation requires significant investment before knowing if ideas will succeed, leading to wasteful spending and organizational fatigue."
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-brand-500" />,
    title: "Risk Aversion",
    description: "Fear of failure and negative consequences leads to conservative decision-making that stifles creativity and genuine innovation."
  },
  {
    icon: <FileX className="h-8 w-8 text-brand-500" />,
    title: "Long Feedback Loops",
    description: "Delayed market validation means companies invest heavily in features or products before learning if customers actually want them."
  }
];

const TraditionalProblemSection = () => {
  return (
    <section className="py-16 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Why traditional innovation approaches fail</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-brand-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            In today's fast-paced market, the traditional "big bet" approach to 
            product innovation is increasingly risky. Organizations that invest 
            heavily in untested ideas often face expensive failures and missed 
            opportunities.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemCards.map((card, index) => (
            <Card key={index} className="border-brand-100 bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{card.icon}</div>
                  <div>
                    <H4 className="text-gray-800 mb-2">{card.title}</H4>
                    <Paragraph>{card.description}</Paragraph>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-brand-50 rounded-lg border border-brand-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-3xl font-bold text-brand-600 whitespace-nowrap">The innovation gap</div>
            <div className="w-full h-0.5 bg-brand-200"></div>
            <div className="text-xl font-semibold text-brand-600">70-95%</div>
          </div>
          <Paragraph className="mt-4 text-brand-800">
            According to CB Insights, between 70-95% of new product launches fail. Most of this waste could be prevented with faster, 
            lower-risk experimentation approaches that validate ideas before major investments.{' '}
            <a 
              href="https://www.cbinsights.com/research/startup-failure-reasons-top/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-400 hover:text-brand-500"
            >
              Source <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default TraditionalProblemSection;
