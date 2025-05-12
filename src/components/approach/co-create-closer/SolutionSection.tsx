
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FlaskConical, Zap, Scale, Palette, CheckCircle, ArrowRight } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';

const SolutionCard = ({ title, problem, solution, icon: Icon }) => {
  return (
    <div className={cn(
      'bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-md',
      'border border-brand-200'
    )}>
      <div className="mb-4">
        {Icon && <Icon className="w-10 h-10 text-brand-500" />}
      </div>
      <H4 className="mb-2 text-brand-700">{title}</H4>
      
      <div className="mb-4 p-3 bg-red-50 rounded-md">
        <p className="text-sm font-medium text-red-700 mb-1">The Problem:</p>
        <p className="text-sm text-gray-700">{problem}</p>
      </div>
      
      <div className="p-3 bg-green-50 rounded-md">
        <p className="text-sm font-medium text-green-700 mb-1">Our Solution:</p>
        <p className="text-sm text-gray-700">{solution}</p>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const solutions = [
    {
      title: "Product Lab",
      problem: "Products built without real user insights fail to address actual customer needs",
      solution: "Structured sessions with end users and stakeholders to uncover actionable insights and pain points",
      icon: FlaskConical
    },
    {
      title: "Rapid Prototyping",
      problem: "Months spent developing features customers don't actually want",
      solution: "Transform concepts into functional prototypes within days, allowing immediate user testing and validation",
      icon: Zap
    },
    {
      title: "Technology Assessments",
      problem: "Legacy systems constrain innovation and limit customer experience",
      solution: "Reimagine experiences without technical constraints, then build practical implementation paths",
      icon: Scale
    },
    {
      title: "Design Studio",
      problem: "Disjointed products that don't align with brand standards or user expectations",
      solution: "Visualize cohesive products and experiences shaped by your brand guidelines and design system",
      icon: Palette
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">The Co-Create Solution</span>
          </div>
          
          <H2 className="mb-6">Stop Guessing What Your Customers Want</H2>
          
          <Paragraph className="text-lg">
            Our Co-Create framework brings your team and our experts together in collaborative 
            environments designed to validate hypotheses, build alignment, and deliver impactful 
            products that resonate with your exact target segments.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              title={solution.title} 
              problem={solution.problem}
              solution={solution.solution}
              icon={solution.icon}
            />
          ))}
        </div>
        
        <div className="bg-brand-50 p-6 rounded-lg border border-brand-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <H4 className="text-brand-700 mb-2">Not just another workshop</H4>
              <Paragraph>
                Co-Create isn't a theoretical exercise. It's a proven, repeatable framework that 
                delivers tangible artifacts: validated prototypes, user journey maps, technical 
                requirements, and execution roadmaps.
              </Paragraph>
            </div>
          </div>
          
          <Link to="/approach/co-create-assessment" className="flex-shrink-0">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 whitespace-nowrap">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
