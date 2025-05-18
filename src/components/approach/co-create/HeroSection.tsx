
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { H1, Lead, Paragraph } from '@/components/ui/Typography';

interface HeroSectionProps {
  titleHighlight?: string;
  titleNormal?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  titleHighlight = "Co-Create", 
  titleNormal = "Demand for personalization", 
  subtitle = "In today's fast-moving markets, enterprise brands can no longer rely on one-size-fits-all products. To stay competitive, brands must unbundle traditional offerings and deliver targeted, use case–driven solutions that resonate with specific segments."
}) => {
  return (
    <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <H1><span className="text-brand-500">{titleHighlight}</span> {titleNormal}</H1>
            <Lead className="text-brand-400 mb-8">{subtitle}</Lead>
            {/** 
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/lead-qualification">
                <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                  How it works
                </Button>
              </Link>
            </div>
                  */}
          </div>
          <div className="flex justify-center relative">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Co-Create - Hero Image" className="rounded-xl shadow-lg w-full h-[400px] object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
