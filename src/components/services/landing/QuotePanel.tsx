
import React from 'react';

interface QuotePanelProps {
  quote: string;
  author?: string;
  authorTitle?: string;
}

const QuotePanel: React.FC<QuotePanelProps> = ({
  quote,
  author,
  authorTitle
}) => {
  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-800">
            "{quote}"
          </blockquote>
          
          {(author || authorTitle) && (
            <div className="flex flex-col items-center justify-center">
              {author && <p className="font-bold text-gray-900">{author}</p>}
              {authorTitle && <p className="text-gray-600">{authorTitle}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuotePanel;
