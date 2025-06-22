
import React from 'react';
import { cn } from '@/lib/utils';
import { H3, Paragraph } from './Typography';

interface QuotePanelProps {
  quote: string;
  author?: string;
  authorTitle?: string;
  className?: string;
  backgroundVariant?: 'brand' | 'gray' | 'white';
}

const QuotePanel: React.FC<QuotePanelProps> = ({
  quote,
  author,
  authorTitle,
  className,
  backgroundVariant = 'gray'
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
        <div className="max-w-4xl mx-auto text-center">
          <blockquote>
            <H3 className="italic mb-6 leading-relaxed">
              "{quote}"
            </H3>
            {author && (
              <footer className="text-center">
                <Paragraph className="font-medium">{author}</Paragraph>
                {authorTitle && (
                  <Paragraph className="text-sm text-gray-500">{authorTitle}</Paragraph>
                )}
              </footer>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QuotePanel;
