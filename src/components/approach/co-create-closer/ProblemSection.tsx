
import React from 'react';
import { AlertTriangle, TrendingDown, Ban, ArrowDownRight } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const problemCards = [
  {
    icon: <TrendingDown className="h-8 w-8 text-red-500" />,
    title: "Shrinking Market Share",
    description: "Generic, one-size-fits-all products are losing market share to targeted solutions that address specific customer pain points."
  },
  {
    icon: <Ban className="h-8 w-8 text-red-500" />,
    title: "Wasted Development",
    description: "Enterprises spend millions developing features customers don't want while missing the ones they actually need."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Internal Misalignment",
    description: "Without a shared vision, product, marketing, and sales teams work at cross-purposes, delaying launches and confusing customers."
  },
  {
    icon: <ArrowDownRight className="h-8 w-8 text-red-500" />,
    title: "Declining Customer Loyalty",
    description: "Today's customers expect personalization. Generic offerings lead to higher churn and reduced lifetime value."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Why Traditional Product Development Is Failing Enterprise Brands</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-red-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            The days of building one product for all customers are over. 
            In an age of hyper-personalization, enterprises that fail to segment and target 
            their offerings are facing existential threats from more agile competitors.
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
            <div className="text-3xl font-bold text-red-600 whitespace-nowrap">The Cost of Inaction</div>
            <div className="w-full h-0.5 bg-red-200"></div>
            <div className="text-xl font-semibold text-red-600">$4.12M</div>
          </div>
          <Paragraph className="mt-4 text-red-800">
            Average cost of a failed enterprise product launch, including development costs, 
            opportunity costs, and market share loss (McKinsey, 2023)
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
