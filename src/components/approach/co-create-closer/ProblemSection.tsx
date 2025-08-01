
import React from 'react';
import { Share2, Network, Ban, Globe } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const problemCards = [
  {
    icon: <Share2 className="h-8 w-8 text-red-500" />,
    title: "Ecosystem Fragmentation",
    description: "Companies with isolated initiatives are being outperformed by those who build connected platforms that participate in multiple ecosystems."
  },
  {
    icon: <Ban className="h-8 w-8 text-red-500" />,
    title: "Integration Inefficiencies",
    description: "Organizations waste millions developing proprietary solutions instead of leveraging platform approach for faster time to market."
  },
  {
    icon: <Network className="h-8 w-8 text-red-500" />,
    title: "Product Inconsistencies",
    description: "Without a cohesive plarform strategy, initiatives use different technologies, stacks and standards, making expansion costly and complex ."
  },
  {
    icon: <Globe className="h-8 w-8 text-red-500" />,
    title: "Limited Extensibility",
    description: "Single-purpose initiatives cannot easily extend to multiple markets and other product lines."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Why siloed initiatives limit your potential</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-red-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            The era of disconnected initiatives is over. Today's most successful enterprises 
            build platforms that connect to broader digital ecosystems, enabling partnerships 
            and creating value networks that isolated initiatives simply cannot match.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemCards.map((card, index) => (
            <Card key={index} className="border-red-100 bg-white hover:shadow-md transition-shadow">
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
        
        <div className="mt-12 p-6 bg-red-50 rounded-lg border border-red-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-3xl font-light text-red-600 whitespace-nowrap">The cost of isolation</div>
            <div className="w-full h-0.5 bg-red-200"></div>
            <div className="text-xl font-normal text-red-600">$2.2M</div>
          </div>
          <Paragraph className="mt-4 text-red-800">
           CG's research indicates that over $50 billion of capital is lost annually due to failed ecosystem investments, highlighting the substantial financial risks associated with mismanaging or not participating in digital ecosystems.
           (<a href="https://web-assets.bcg.com/img-src/BCG-Why-Do-Most-Business-Ecosystems-Fail-Jun-2020_tcm9-252663.pdf?utm_source=chatgpt.com" target="_blank">BCG, 2020</a>)
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
