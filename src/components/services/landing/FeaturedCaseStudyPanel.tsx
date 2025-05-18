
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedCaseStudyPanelProps {
  caseStudy: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    industry: string;
    slug: string;
  };
}

const FeaturedCaseStudyPanel: React.FC<FeaturedCaseStudyPanelProps> = ({ caseStudy }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl uppercase tracking-wide text-brand-600 mb-2">Featured Case Study</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h3>
            <p className="text-gray-600 mb-6">{caseStudy.description}</p>
            
            <Link to={`/case-studies/${caseStudy.slug}`}>
              <Button className="group">
                <span>Read Case Study</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src={caseStudy.imageUrl} 
              alt={caseStudy.title}
              className="rounded-xl w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudyPanel;
