
import React from 'react';
import { Quote } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface TestimonialSectionProps {
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonial }) => {
  if (!testimonial) {
    return null;
  }
  
  return (
    <div className="mb-16 bg-gray-50 rounded-lg p-8 relative">
      <Quote className="absolute text-gray-200 h-16 w-16 top-4 left-4 opacity-50" />
      <div className="relative z-10 pl-4">
        <p className="text-xl italic mb-6">{testimonial.quote}</p>
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
