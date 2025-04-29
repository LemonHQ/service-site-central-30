
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Database, Globe } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-700">
              Expert product innovation for regulated enterprise brands
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine deep industry expertise, experience with regulatory frameworks, and human-centered design to enable enterprise brands navigate today's rapidly evolving digital landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cross-Functional Teams</h4>
                  <p className="text-gray-600">Strategists, designers, and engineers working together to deliver holistic solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Database className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data-Driven Approach</h4>
                  <p className="text-gray-600">Insights and analytics that inform every decision and strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Perspective</h4>
                  <p className="text-gray-600">Experience working with multinational enterprise brands across industries.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="border-brand-300 text-brand-600 hover:bg-brand-100">
                Learn About Our Approach
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-brand-100 rounded-lg p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2">15+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2">200+</h3>
                  <p className="text-gray-600">Enterprise Clients</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2">92%</h3>
                  <p className="text-gray-600">Client Retention</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2">500+</h3>
                  <p className="text-gray-600">Successful Projects</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
