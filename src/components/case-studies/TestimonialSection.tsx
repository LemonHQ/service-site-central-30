
import React from 'react';
import { Quote } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';
import { Paragraph } from '@/components/ui/Typography';

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
        <Paragraph className="text-xl italic mb-6">{testimonial.quote}</Paragraph>
        <div>
          <p className="font-semibold text-gray-800">{testimonial.author}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
