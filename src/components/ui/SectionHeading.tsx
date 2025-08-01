
import React from 'react';
import { cn } from '@/lib/utils';
import { SectionTitle, Subtitle } from './Typography';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'py-12 md:py-20',
      centered ? 'text-center' : '',
      className
    )}>
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {subtitle && (
        <Subtitle className={cn("max-w-4xl", centered && "mx-auto")}>
          {subtitle}
        </Subtitle>
      )}
    </div>
  );
};

export default SectionHeading;
