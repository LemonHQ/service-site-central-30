
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart, Users, Lightbulb, Clock, ExternalLink } from 'lucide-react';
import { H2, H3, H4, Paragraph } from '@/components/ui/Typography';
import BenefitsSection from '@/components/services/landing/BenefitsSection';

const benefits = [
  'Faster product-market fit with early customer validation',
  'Stronger differentiation through precise, relevant offerings',
  'Actionable innovation that uncovers fresh opportunities',
  'Less risk and better alignment across teams',
  'Execution-ready frameworks and prototypes',
  'Customer-centricity that scales across regions',
  'Measurable outcomes with clear business impact'
];

const ProofSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Co-Create in Action</H2>
          <Paragraph className="text-lg">
            See how leading enterprises are using our Co-Create framework to deliver 
            products that customers actually want—and driving real business results.
          </Paragraph>
        </div>
        
        {/* Main case study */}
        <div className="bg-brand-50 rounded-xl p-6 md:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="inline-block bg-brand-600 text-white px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-medium">Featured Case Study</span>
              </div>
              
              <H3 className="mb-4">Reinventing Claims Processing for a Digital Future</H3>
              
              <Paragraph className="mb-6">
                A leading insurance provider needed to reimagine their claims process to improve customer 
                satisfaction and reduce operational costs. Through our Co-Create approach, we brought 
                together their claims specialists, customer service teams, and our product designers 
                for a 6-week engagement.
              </Paragraph>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-brand-600 mr-2" />
                    <span className="font-medium text-gray-700">Timeline</span>
                  </div>
                  <p className="text-brand-700 font-bold">6 Weeks</p>
                  <p className="text-sm text-gray-600">From kickoff to validated prototype</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-brand-600 mr-2" />
                    <span className="font-medium text-gray-700">Team Size</span>
                  </div>
                  <p className="text-brand-700 font-bold">12 People</p>
                  <p className="text-sm text-gray-600">Cross-functional participants</p>
                </div>
              </div>
              
              <Link to="/case-studies/expanding-and-standardizing-motor-insurance-for-a-digital-future">
                <Button 
                  variant="outline" 
                  className="flex items-center border-brand-300 text-brand-700 hover:bg-brand-50"
                >
                  Read Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <H4 className="text-brand-700">Measurable Results</H4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-brand-100">
                  <div className="text-3xl font-bold text-brand-700 mb-1">40%</div>
                  <p className="text-sm text-center text-gray-600">Reduction in claims processing time</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-brand-100">
                  <div className="text-3xl font-bold text-brand-700 mb-1">62%</div>
                  <p className="text-sm text-center text-gray-600">Increase in customer satisfaction scores</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-brand-100">
                  <div className="text-3xl font-bold text-brand-700 mb-1">85%</div>
                  <p className="text-sm text-center text-gray-600">Of customers reported easier claims navigation</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-brand-100">
                  <div className="text-3xl font-bold text-brand-700 mb-1">28%</div>
                  <p className="text-sm text-center text-gray-600">Reduction in customer support calls</p>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <BarChart className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-green-800 mb-1">ROI Impact</p>
                    <p className="text-sm text-gray-700">
                      $4.2M in operational savings within first year and 22% increase in policy renewal rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section - replacing testimonials and industry recognition */}
        <BenefitsSection benefits={benefits} />
      </div>
    </section>
  );
};

export default ProofSection;
