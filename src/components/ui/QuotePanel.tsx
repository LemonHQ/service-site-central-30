
import React from 'react';
import { cn } from "@/lib/utils";
import { Headphones } from "lucide-react";
import { H2 } from './Typography';

interface QuotePanelProps {
  quote: string;
  author?: string;
  authorTitle?: string;
  className?: string;
}

const QuotePanel: React.FC<QuotePanelProps> = ({
  quote,
  author,
  authorTitle,
  className
}) => {
  return (
    <section className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-brand-600 rounded-lg relative overflow-hidden">
          {/* Headphones visual breaking out from the left */}
          <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-brand-50 rounded-full flex items-center justify-center">
                <Headphones size={64} className="text-brand-600" />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 w-12 h-4 bg-brand-50"></div>
            </div>
          </div>

          {/* Mobile version of headphones - centered above quote */}
          <div className="md:hidden flex justify-center -mt-10">
            <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center">
              <Headphones size={36} className="text-brand-600" />
            </div>
          </div>
          
          {/* Quote content */}
          <div className="p-8 md:p-12 md:pl-40">
            <blockquote>
              <H2 className="text-white font-light italic">{quote}</H2>
            </blockquote>
            {(author || authorTitle) && (
              <div className="mt-6 text-right">
                {author && <p className="text-white font-semibold">{author}</p>}
                {authorTitle && <p className="text-brand-100">{authorTitle}</p>}
              </div>
            )}
          </div>

          {/* Visual elements inspired by the uploaded image */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-24 w-16 h-16 bg-accent-300 rounded-full opacity-20 transform -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Enhanced background gradient with blue and yellow tones inspired by the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-brand-600 to-yellow-500 opacity-20"></div>
    </section>
  );
};

export default QuotePanel;
