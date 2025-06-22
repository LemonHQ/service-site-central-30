
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <Link to={`/case-studies/${caseStudy.id}`} className="block h-full">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
        <div className="relative h-48 overflow-hidden">
          <img
            src={caseStudy.featuredImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              {caseStudy.industry}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{caseStudy.summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.services.slice(0, 3).map((service, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center text-brand-400 hover:text-brand-500 font-medium mt-2">
            View Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
