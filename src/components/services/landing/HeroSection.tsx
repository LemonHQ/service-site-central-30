
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
    <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-700 font-light mb-8">{subtitle}</p>
            <div className="text-gray-600 text-lg mb-8 space-y-4 font-light">
              <p>{description}</p>
            </div>

            {/* Commented out buttons to match the current structure
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink}>
                <Button size="lg" className="font-light">
                  {ctaText}
                </Button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 font-light">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
            */}

          </div>
          <div className="flex justify-center relative">
            <img
              src={heroImage}
              alt={`${title} - Hero Image`}
              className={`rounded-xl shadow-lg w-full h-[400px] object-cover object-center ${isAiHeroImage ? 'border-2 border-gray-300' : ''}`}
            />
            {isAiHeroImage && (
              <div className="absolute bottom-2 right-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md opacity-80 font-light">
                AI Generated
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
