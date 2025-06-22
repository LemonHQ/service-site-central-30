
import React from 'react';
import { cn } from '@/lib/utils';
import { PageTitle, Lead } from './Typography';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundVariant?: 'brand' | 'gray' | 'white';
  children?: React.ReactNode;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundVariant = 'brand',
  children,
  className
}) => {
  const backgroundClasses = {
    brand: 'bg-brand-50',
    gray: 'bg-gray-50',
    white: 'bg-white'
  };

  return (
    <section className={cn(
      'py-16 md:py-24',
      backgroundClasses[backgroundVariant],
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <PageTitle>{title}</PageTitle>
          {subtitle && (
            <Lead className="mb-8">{subtitle}</Lead>
          )}
          {description && (
            <p className="text-gray-600 mb-8">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
