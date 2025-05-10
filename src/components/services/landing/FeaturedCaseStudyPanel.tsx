
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
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:justify-start mb-2">
          <div className="text-xs tracking-wider font-medium text-gray-400">
            [ {label} ]
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              {caseStudy.title}
            </h2>
            
            <p className="text-base md:text-lg mb-8">
              {caseStudy.summary}
            </p>
            
            <Link to={`/case-studies/${caseStudy.id}`}>
              <Button 
                variant="outline"
                className="bg-transparent hover:bg-white hover:text-black text-white border border-white"
              >
                See Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            {caseStudy.testimonial && (
              <div className="mt-12 border-t border-gray-800 pt-8">
                <blockquote className="text-lg font-light italic mb-4">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{caseStudy.testimonial.author}</p>
                    <p className="text-sm text-gray-400">{caseStudy.testimonial.position}</p>
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
