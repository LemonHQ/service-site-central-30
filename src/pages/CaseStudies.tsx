
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';

const CaseStudies: React.FC = () => {
  // Get all unique industries for filtering
  const industries = useMemo(() => {
    const uniqueIndustries = new Set(caseStudies.map(cs => cs.industry));
    return ['All Industries', ...Array.from(uniqueIndustries)];
  }, []);
  
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  
  // Filter case studies based on selected industry
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      const matchesIndustry = 
        selectedIndustry === 'All Industries' || 
        caseStudy.industry === selectedIndustry;
      
      return matchesIndustry;
    });
  }, [selectedIndustry]);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped organizations across industries transform their digital capabilities and achieve remarkable results.
          </p>
        </div>
        
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === industry
                  ? 'bg-brand-400 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No case studies found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CaseStudies;
