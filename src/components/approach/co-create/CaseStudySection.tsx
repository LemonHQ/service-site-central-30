
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart, Users, Lightbulb } from 'lucide-react';
import { H2, Paragraph } from '@/components/ui/Typography';

const CaseStudySection = () => {
  return (
    <section className="py-16 bg-brand-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <H2 className="mb-6">Co-Create in Action</H2>
            <Paragraph className="mb-4">
              A leading insurance provider needed to reimagine their claims process to improve customer satisfaction 
              and reduce operational costs.
            </Paragraph>
            <Paragraph className="mb-4">
              Through our Co-Create approach, we brought together their claims specialists, customer service teams, 
              and our product designers for a 6-week engagement.
            </Paragraph>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <span className="text-lg font-medium">40% reduction in claims processing time</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center">
                  <BarChart className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <span className="text-lg font-medium">62% increase in customer satisfaction scores</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <span className="text-lg font-medium">85% of customers reported easier claims navigation</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <span className="text-lg font-medium">28% reduction in customer support calls</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/case-studies/expanding-and-standardizing-motor-insurance-for-a-digital-future">
                  <Button className="bg-brand-500 hover:bg-brand-600 text-white">
                    Read the full case study
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Co-Create Workshop" className="rounded-xl shadow-lg w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
