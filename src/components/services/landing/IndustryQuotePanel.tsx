
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { QuoteData } from '@/data/quotes';

interface QuotePanelProps extends QuoteData {
  className?: string;
}

const IndustryQuotePanel: React.FC<QuotePanelProps> = ({
  quote,
  author,
  authorTitle,
  imageUrl,
  sourceText,
  sourceUrl,
  className,
}) => {
  return (
    <section className={cn("py-16 bg-[#1A1F2C]", className)}>
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {imageUrl && (
                <div className="md:w-1/3 h-64 md:h-auto flex items-center justify-center bg-[#222222]">
                  <img
                    src={imageUrl}
                    alt={author || "Quote image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={cn("p-8 md:p-12 flex-1 bg-[#222222] text-white", imageUrl ? "md:w-2/3" : "w-full")}>
                <QuoteIcon className="h-10 w-10 text-white/80 mb-6" />
                <blockquote>
                  <h2 className="text-xl md:text-2xl font-display font-light italic text-white mb-6">
                    "{quote}"
                  </h2>
                </blockquote>
                <div className="flex flex-col">
                  {author && (
                    <span className="font-semibold text-white">{author}</span>
                  )}
                  {authorTitle && (
                    <span className="text-white/80 text-sm">{authorTitle}</span>
                  )}
                  {sourceText && sourceUrl && (
                    <Link
                      to={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-sm mt-2 hover:text-white border-white/30 hover:border-white"
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

export default IndustryQuotePanel;
