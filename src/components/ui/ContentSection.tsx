
import React from 'react';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundVariant?: 'white' | 'gray' | 'brand';
  paddingVariant?: 'normal' | 'large' | 'small';
}

const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
  backgroundVariant = 'white',
  paddingVariant = 'normal'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-brand-50'
  };

  const paddingClasses = {
    small: 'py-8',
    normal: 'py-16',
    large: 'py-16 md:py-24'
  };

  return (
    <section className={cn(
      paddingClasses[paddingVariant],
      backgroundClasses[backgroundVariant],
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
