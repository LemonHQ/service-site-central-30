
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudySummaryProps {
  caseStudy: CaseStudy;
}

const CaseStudySummary: React.FC<CaseStudySummaryProps> = ({ caseStudy }) => {
  // Format date
  const formattedDate = new Date(caseStudy.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
      <div className="mb-6">
        <Link to="/case-studies" className="inline-flex items-center text-brand-400 hover:text-brand-500">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row md:gap-8 mb-10">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <Badge className="mb-4">{caseStudy.industry}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{caseStudy.summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.services.map((service, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/3 space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-500">Client</h4>
                  <p className="font-medium">{caseStudy.client}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-500">Completed</h4>
                  <p className="font-medium">{formattedDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="mb-12 rounded-lg overflow-hidden">
        <img 
          src={caseStudy.featuredImage}
          alt={caseStudy.title}
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>
    </>
  );
};

export default CaseStudySummary;
