
import React from 'react';

interface IndustryQuotePanelProps {
  quote: string;
  author: string;
  authorTitle?: string;
  imageUrl?: string;
  sourceText?: string;
  sourceUrl?: string;
}

const IndustryQuotePanel: React.FC<IndustryQuotePanelProps> = ({
  quote,
  author,
  authorTitle,
  imageUrl,
  sourceText,
  sourceUrl
}) => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {imageUrl && (
            <div className="md:w-1/3">
              <img 
                src={imageUrl} 
                alt={author}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className={imageUrl ? 'md:w-2/3' : 'w-full'}>
            <blockquote className="text-xl md:text-2xl italic mb-6">
              "{quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <p className="font-bold text-white">{author}</p>
                {authorTitle && <p className="text-gray-400">{authorTitle}</p>}
                {sourceText && sourceUrl && (
                  <a 
                    href={sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-300 hover:underline mt-2 inline-block"
                  >
                    {sourceText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryQuotePanel;
