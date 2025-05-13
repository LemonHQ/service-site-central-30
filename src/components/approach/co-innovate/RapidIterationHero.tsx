
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { H1, Lead, Paragraph } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';

const RapidIterationHero = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg w-fit">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Rapid Product Innovation</span>
            </div>
            
            <H1>Co-<span className="text-green-600">Innovate</span></H1>
            
            <div className="flex items-center gap-3 bg-green-50 p-3 rounded-md border border-green-100">
              <span className="text-3xl font-bold text-green-600">5x</span>
              <Paragraph className="text-green-700">faster time-to-market through rapid iteration methodology</Paragraph>
            </div>
            
            <Lead className="text-green-700 font-semibold">
              Safe spaces for high-velocity experimentation with minimal risk
            </Lead>
            
            <Paragraph className="mb-8">
              Co-Innovate transforms how organizations approach product innovation through rapid 
              iteration cycles that limit financial exposure, minimize brand risk, and generate 
              momentum through quick action and accelerated learning.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/getting-started">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  Get started with rapid iteration <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-red-500">Traditional Approach</p>
              <p className="text-sm">High financial exposure</p>
              <p className="text-sm">Significant brand risk</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-green-500 p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-white">Rapid Iteration</p>
              <p className="text-sm text-white">Limited exposure</p>
              <p className="text-sm text-white">Accelerated learning</p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Rapid Iteration Innovation" 
              className={cn(
                "rounded-xl shadow-lg w-full h-[400px] object-cover object-center",
                "border-4 border-white"
              )} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidIterationHero;
