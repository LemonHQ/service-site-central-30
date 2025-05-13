
import React from 'react';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  {
    question: "How does Co-Innovate differ from traditional product development?",
    answer: "Co-Innovate focuses on rapid, low-risk experiments rather than large upfront investments in unvalidated ideas. Traditional development often involves lengthy planning and development cycles before getting market feedback, while Co-Innovate shortens feedback loops through quick iteration and testing with real users."
  },
  {
    question: "How long does a typical rapid iteration cycle take?",
    answer: "A typical rapid iteration cycle lasts between 1-2 weeks, with some cycles taking as little as a few days depending on the complexity of what's being tested. This is in contrast to traditional product development cycles that may take months before receiving any user feedback."
  },
  {
    question: "What types of projects benefit most from the Co-Innovate approach?",
    answer: "Co-Innovate works best for new product concepts, feature additions, UI/UX improvements, and market expansion ideas. It's particularly valuable when there's uncertainty about user needs or solution effectiveness, and when the organization wants to minimize risk while exploring innovation opportunities."
  },
  {
    question: "Do we need specialized skills or tools to implement rapid iteration?",
    answer: "While rapid prototyping tools can accelerate the process, the methodology itself doesn't require specialized skills or expensive tools. Our team can help you implement rapid iteration with your existing resources, and we can provide guidance on simple, effective tools that match your specific needs and capabilities."
  },
  {
    question: "How does Co-Innovate fit with our existing development practices?",
    answer: "Co-Innovate is designed to complement, not replace, your existing development practices. It works as a front-end process to validate ideas before they enter your formal development pipeline, ensuring you only invest significant resources in concepts that have been validated with real users."
  }
];

const RapidIterationFAQ = () => {
  return (
    <FaqSection 
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Get answers to common questions about our rapid iteration approach"
      backgroundColor="bg-green-50"
    />
  );
};

export default RapidIterationFAQ;
