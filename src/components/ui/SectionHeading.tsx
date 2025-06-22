
import React from 'react';
import { cn } from '@/lib/utils';
import { H2, Subtitle } from './Typography';

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
      'py-10 md:py-16',
      centered ? 'text-center' : '',
      className
    )}>
      <H2>{title}</H2>
      {subtitle && (
        <Subtitle className={cn("max-w-3xl", centered && "mx-auto", "mt-4")}>
          {subtitle}
        </Subtitle>
      )}
    </div>
  );
};

export default SectionHeading;
