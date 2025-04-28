
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="bg-beige-200 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-600">{title}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={buttonLink}>
              <Button className="bg-accent-400 hover:bg-accent-500 text-white py-6 px-8 text-lg">
                {buttonText}
              </Button>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button variant="outline" className="border-brand-400 text-brand-400 hover:bg-beige-100 py-6 px-8 text-lg">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
