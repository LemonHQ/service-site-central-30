
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CaseStudy } from '@/data/caseStudies';

interface FeaturedCaseStudyPanelProps {
  caseStudy: CaseStudy;
  label?: string;
}

const FeaturedCaseStudyPanel: React.FC<FeaturedCaseStudyPanelProps> = ({
  caseStudy,
  label = "FEATURED CASE STUDY"
}) => {
  return (
    <section className="bg-ivory-200 text-brand-600 py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              {caseStudy.images && caseStudy.images.length > 0 ? (
                <img 
                  src={caseStudy.images[0]} 
                  alt={caseStudy.title} 
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img 
                  src={caseStudy.featuredImage} 
                  alt={caseStudy.title} 
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-8 md:mb-0">
            <div className="mb-4 text-xs font-semibold tracking-wider text-brand-500">
              {label}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6 text-brand-600">
              {caseStudy.title}
            </h2>
            
            <p className="text-base md:text-lg mb-8 text-brand-500">
              {caseStudy.summary}
            </p>
            
            <Link to={`/case-studies/${caseStudy.id}`}>
              <Button 
                variant="outline"
                className="bg-transparent hover:bg-brand-500 hover:text-white text-brand-500 border border-brand-500"
              >
                See Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            {caseStudy.testimonial && (
              <div className="mt-12 border-t border-brand-300/20 pt-8">
                <blockquote className="text-lg font-light italic mb-4 text-brand-500">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div>
                    <p className="font-medium text-brand-600">{caseStudy.testimonial.author}</p>
                    <p className="text-sm text-brand-400">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudyPanel;
