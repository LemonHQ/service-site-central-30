
import React from 'react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const caseStudies = [
  {
    company: "Financial Services Provider",
    result: "From concept to validated MVP in 3 weeks",
    description: "By adopting rapid iteration, a leading financial services firm created and validated a new mobile payment solution in just 3 weeks, compared to their usual 6-month timeline."
  },
  {
    company: "Healthcare Technology Startup",
    result: "5 iterations, 90% user satisfaction",
    description: "A healthcare startup refined their patient engagement platform through 5 rapid iteration cycles, improving user satisfaction from 45% to 90% before full market launch."
  },
  {
    company: "Retail Brand",
    result: "$300K saved in failed feature development",
    description: "A national retail brand used rapid iteration to test 12 potential features quickly and at low cost, identifying 4 winners and avoiding $300K in development costs for features that would have failed."
  }
];

const RapidIterationProofSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Results That Speak For Themselves</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-green-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            Our rapid iteration methodology has helped organizations across industries 
            accelerate innovation while reducing risk and investment. Here are some results 
            we've achieved with our clients.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-green-100 hover:border-green-300 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Case Study {index + 1}
                </div>
                
                <H4 className="text-gray-800 mb-3">{study.company}</H4>
                
                <div className="text-xl font-bold text-green-600 mb-4">
                  {study.result}
                </div>
                
                <Paragraph>{study.description}</Paragraph>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-green-50 p-8 rounded-lg">
          <div className="md:w-2/3">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "The rapid iteration approach transformed how we innovate. We're now able to test multiple product concepts 
              simultaneously while maintaining focus on our core business. It's been a game-changer for our product development."
            </blockquote>
            <div className="font-medium">
              <span className="text-green-700">Sarah Johnson</span> — VP of Product, Enterprise Tech Company
            </div>
          </div>
          
          <div className="md:w-1/4 mt-6 md:mt-0">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">Based on 42 innovation projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidIterationProofSection;
