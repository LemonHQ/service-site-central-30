
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  heroImage: string;
  isAiHeroImage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  heroImage,
  isAiHeroImage = false
}) => {
  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">{title}</h1>
            <p className="text-xl md:text-2xl mb-4 text-brand-600 font-medium">{subtitle}</p>
            <p className="text-lg mb-8 text-gray-700">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink}>
                <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                  {ctaText}
                </Button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src={heroImage} 
              alt={title}
              className={`rounded-xl shadow-lg w-full h-[350px] object-cover ${isAiHeroImage ? 'object-contain bg-white p-4' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
