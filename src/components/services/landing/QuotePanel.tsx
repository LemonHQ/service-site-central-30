
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface QuotePanelProps {
  quote: string;
  author?: string;
  authorTitle?: string;
  imageUrl?: string;
  sourceText?: string;
  sourceUrl?: string;
  className?: string;
}

const QuotePanel: React.FC<QuotePanelProps> = ({
  quote,
  author,
  authorTitle,
  imageUrl,
  sourceText,
  sourceUrl,
  className,
}) => {
  return (
    <section className={cn("py-16 bg-brand-50", className)}>
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {imageUrl && (
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={imageUrl}
                    alt={author || "Quote image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={cn("p-8 md:p-12 flex-1", imageUrl ? "md:w-2/3" : "w-full")}>
                <QuoteIcon className="h-10 w-10 text-brand-300 mb-6" />
                <blockquote className="text-xl md:text-2xl font-display font-light italic text-gray-700 mb-6">
                  "{quote}"
                </blockquote>
                <div className="flex flex-col">
                  {author && (
                    <span className="font-semibold text-brand-600">{author}</span>
                  )}
                  {authorTitle && (
                    <span className="text-gray-500 text-sm">{authorTitle}</span>
                  )}
                  {sourceText && sourceUrl && (
                    <Link
                      to={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-400 text-sm mt-2 hover:text-brand-500"
                    >
                      Source: {sourceText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuotePanel;
