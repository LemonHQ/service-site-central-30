
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { H1, Paragraph } from '@/components/ui/Typography';

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
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <H1 className="text-gray-900 mb-4">
              {title}
            </H1>
            <Paragraph className="text-xl text-gray-600 mb-8">{subtitle}</Paragraph>
            <div className="text-gray-600 text-lg mb-8 space-y-4">
              <Paragraph>{description}</Paragraph>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink}>
                <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                  {ctaText}
                </Button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button size="lg" variant="outline" className="border-brand-300 text-brand-500">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>

          </div>
          <div className="flex justify-center relative">
            <img
              src={heroImage}
              alt={`${title} - Hero Image`}
              className={`rounded-xl shadow-lg w-full h-[400px] object-cover object-center ${isAiHeroImage ? 'border-2 border-brand-300' : ''}`}
            />
            {isAiHeroImage && (
              <div className="absolute bottom-2 right-2 bg-brand-100 text-brand-600 text-xs px-2 py-1 rounded-md opacity-80">
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
