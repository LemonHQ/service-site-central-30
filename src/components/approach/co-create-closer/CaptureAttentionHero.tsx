
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { H1, Lead, Paragraph } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';

const CountdownTimer = () => {
  return (
    <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg w-fit">
      <Clock className="h-4 w-4" />
      <span className="text-sm font-medium">Limited availability for Q3 Co-Create workshops</span>
    </div>
  );
};

const CaptureAttentionHero = () => {
  return (
    <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <CountdownTimer />
            
            <H1>Stop launching <span className="text-red-500 line-through decoration-2">failed</span> products</H1>
            
            <div className="flex items-center gap-3 bg-brand-50 p-3 rounded-md border border-brand-100">
              <span className="text-3xl font-bold text-brand-600">76%</span>
              <Paragraph className="text-brand-600">of enterprises waste resources on products that don't meet market needs</Paragraph>
            </div>
            
            <Lead className="text-brand-700 font-semibold">
              Co-Create: The framework that eliminates guesswork from product development
            </Lead>
            
            <Paragraph className="mb-8">
              In today's hyper-competitive markets, generic products fail. Our Co-Create framework 
              brings your team and our experts together to build targeted solutions that customers 
              actually want—before you invest millions in development.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/approach/co-create-assessment">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 w-full sm:w-auto">
                  Assess Your Readiness <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/lead-qualification">
                <Button size="lg" variant="outline" className="border-brand-300 text-brand-700 hover:bg-brand-50 w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-red-500">Traditional Approach</p>
              <p className="text-sm">12-18 months to market</p>
              <p className="text-sm">60%+ budget overruns</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-brand-500 p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-white">Co-Create Approach</p>
              <p className="text-sm text-white">4-6 weeks to validation</p>
              <p className="text-sm text-white">85% success rate</p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Co-Create Workshop" 
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

export default CaptureAttentionHero;
