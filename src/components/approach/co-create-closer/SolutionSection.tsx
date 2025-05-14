
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Network, Layers, Link2, Globe, CheckCircle, ArrowRight } from 'lucide-react';
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
      title: "Platform roadmap",
      problem: "Siloed initiatives that can't connect to wider ecosystems, limiting expansion and market reach",
      solution: "Strategic sessions to map digital plaform roadmap that enable multi-market participation",
      icon: Network
    },
    {
      title: "Prototyping",
      problem: "Inability to validate product capabilities and integration before costly development of connection points",
      solution: "Rapidly develop and test functional interactive prototypes for each use case",
      icon: Layers
    },
    {
      title: "Integration Architecture",
      problem: "Legacy systems and technical debt that prevent seamless platform participation",
      solution: "Design scalable integration patterns that enable your products to connect to multiple backend systems while maintaining control",
      icon: Link2
    },
    {
      title: "Design Studio",
      problem: "Disjointed user experiences when customers move between your products and touchpoints",
      solution: "Create coherent cross-ecosystem journeys that maintain your brand identity while enabling frictionless customer experiences across touchpoints",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">The Ecosystem Solution</span>
          </div>
          
          <H2 className="mb-6">Create multi-product ecosystems</H2>
          
          <Paragraph className="text-lg">
            Our Co-Create framework enables your organization to design, create extensible multi-product, multi-market platforms that integrate with complementary services, partners and create exponential value across markets.
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
              <H4 className="text-brand-700 mb-2">Beyond isolated initiatives</H4>
              <Paragraph>
                Co-Create isn't just another product goto market methodology. It's a strategic framework for 
                designing digital offerings that thrive in connected ecosystems, creating value beyond 
                what any single initiatives could deliver in isolation.
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
