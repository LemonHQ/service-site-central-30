
import React from 'react';
import { cn } from "@/lib/utils";
import { Headphones, Sparkles } from "lucide-react";
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
      {/* Spotlight effect from top left */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-brand-300/70 to-transparent blur-[80px] -translate-x-1/3 -translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-brand-600 rounded-lg relative overflow-hidden shadow-xl">
          {/* Subtle radial gradient spotlight */}
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-brand-500/30 via-transparent to-transparent"></div>
          
          {/* Sparkle icon in top left */}
          <div className="absolute top-6 left-6 text-brand-100/30">
            <Sparkles size={32} />
          </div>

          {/* Headphones visual breaking out from the left */}
          <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-brand-50 rounded-full flex items-center justify-center shadow-lg">
                <Headphones size={64} className="text-brand-600" />
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 w-12 h-4 bg-brand-50"></div>
            </div>
          </div>

          {/* Mobile version of headphones - centered above quote */}
          <div className="md:hidden flex justify-center -mt-10">
            <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center shadow-md">
              <Headphones size={36} className="text-brand-600" />
            </div>
          </div>
          
          {/* Quote content */}
          <div className="p-8 md:p-12 md:pl-40">
            <blockquote className="relative">
              {/* Subtle spotlight highlight behind the text */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-300/30 to-transparent rounded-full blur-md"></div>
              
              <H2 className="text-white font-light italic relative z-10">
                {quote}
              </H2>
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
      
      {/* Enhanced background gradient with spotlight effect from top left */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/40 via-brand-600/20 to-yellow-500/20"></div>
      
      {/* Top left spotlight effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-200/50 via-accent-300/30 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default QuotePanel;
