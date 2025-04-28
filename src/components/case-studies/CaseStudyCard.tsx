
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
    <Card className="overflow-hidden card-hover h-full transition-all">
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
        
        <Link 
          to={`/case-studies/${caseStudy.id}`}
          className="flex items-center text-brand-400 hover:text-brand-500 font-medium mt-2"
        >
          View Case Study <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
