
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { SectionTitle, Paragraph } from './Typography';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  onButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  backgroundVariant?: 'brand' | 'gray' | 'white';
  className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  onButtonClick,
  onSecondaryButtonClick,
  backgroundVariant = 'brand',
  className
}) => {
  const backgroundClasses = {
    brand: 'bg-brand-50',
    gray: 'bg-gray-50',
    white: 'bg-white'
  };

  return (
    <section className={cn(
      'py-16 md:py-20',
      backgroundClasses[backgroundVariant],
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle className="mb-4">{title}</SectionTitle>
          {subtitle && (
            <Paragraph className="text-lg mb-8">{subtitle}</Paragraph>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttonLink ? (
              <Button asChild className="btn-primary">
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            ) : (
              <Button onClick={onButtonClick} className="btn-primary">
                {buttonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              secondaryButtonLink ? (
                <Button asChild variant="outline">
                  <a href={secondaryButtonLink}>{secondaryButtonText}</a>
                </Button>
              ) : (
                <Button onClick={onSecondaryButtonClick} variant="outline">
                  {secondaryButtonText}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
