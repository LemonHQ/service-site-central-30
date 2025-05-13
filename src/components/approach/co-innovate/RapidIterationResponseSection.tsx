
import React from 'react';
import { Link } from 'react-router-dom';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Rocket } from 'lucide-react';

const RapidIterationResponseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <H2 className="mb-6">Ready to accelerate your innovation?</H2>
            
            <Paragraph className="text-lg mb-8">
              Transform how your organization approaches product development with our 
              Co-Innovate rapid iteration methodology. Start small, learn fast, and build products
              your customers actually want.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/getting-started">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  Start your rapid iteration journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 w-full sm:w-auto">
                  Talk to an innovation expert
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-green-500" />
                <h4 className="font-semibold text-lg">Fast Results</h4>
              </div>
              <Paragraph>
                Go from concept to validated prototype in as little as 2-4 weeks, dramatically 
                reducing time-to-market and innovation cycles.
              </Paragraph>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-green-500" />
                <h4 className="font-semibold text-lg">Minimal Risk</h4>
              </div>
              <Paragraph>
                Test ideas with limited financial exposure and brand risk, allowing you to 
                explore innovative concepts safely.
              </Paragraph>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-green-500" />
                <h4 className="font-semibold text-lg">Sustainable Innovation</h4>
              </div>
              <Paragraph>
                Build a culture of continuous improvement and innovation that keeps your 
                team energized and your products competitive.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidIterationResponseSection;
