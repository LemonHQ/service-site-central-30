
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/card';
import { 
  Bulb, 
  Search, 
  LayoutDashboard, 
  Hammer, 
  Rocket, 
  ArrowUpRight, 
  TrendingUp 
} from 'lucide-react';

interface JourneyStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${color} rounded-full p-4 mb-4 inline-flex`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProductJourney: React.FC = () => {
  const journeySteps = [
    {
      id: 'ideation',
      icon: <Bulb className="h-8 w-8 text-amber-500" />,
      title: 'Ideation',
      description: 'Transform business challenges into product opportunities through structured ideation workshops and strategic thinking.',
      color: 'bg-amber-100',
      details: 'Our ideation process combines design thinking methodologies with market research to identify high-potential product concepts that align with your business goals and customer needs.'
    },
    {
      id: 'validation',
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'Validation',
      description: 'Test assumptions and validate product concepts with target users before investing in full development.',
      color: 'bg-blue-100',
      details: 'Through rapid prototyping and user testing, we validate your product concepts, reducing risk and ensuring market fit. Our validation frameworks help prioritize features based on user feedback and business impact.'
    },
    {
      id: 'design',
      icon: <LayoutDashboard className="h-8 w-8 text-purple-500" />,
      title: 'Design',
      description: 'Create intuitive, accessible interfaces that deliver exceptional user experiences across all touchpoints.',
      color: 'bg-purple-100',
      details: 'Our design process blends aesthetics with functionality, creating user interfaces that are both beautiful and intuitive. We focus on consistent brand experiences while ensuring accessibility and usability standards are met.'
    },
    {
      id: 'build',
      icon: <Hammer className="h-8 w-8 text-teal-500" />,
      title: 'Build',
      description: 'Develop robust, scalable products using modern frameworks and agile methodologies.',
      color: 'bg-teal-100',
      details: 'Our engineering teams leverage modern technologies and agile development practices to build robust, scalable products. We emphasize code quality, performance optimization, and security throughout the build process.'
    },
    {
      id: 'launch',
      icon: <Rocket className="h-8 w-8 text-red-500" />,
      title: 'Launch',
      description: 'Deploy products with confidence through comprehensive go-to-market strategies and launch playbooks.',
      color: 'bg-red-100',
      details: 'Launching a product extends beyond technical deployment. We create comprehensive go-to-market strategies, including marketing materials, training, and support structures to ensure successful adoption.'
    },
    {
      id: 'scale',
      icon: <ArrowUpRight className="h-8 w-8 text-green-500" />,
      title: 'Scale',
      description: 'Expand functionality and user base while maintaining performance and reliability.',
      color: 'bg-green-100',
      details: 'As your product grows, we help you scale both technically and operationally. Our focus includes performance optimization, architecture refinement, and operational excellence to support increasing demand and complexity.'
    },
    {
      id: 'grow',
      icon: <TrendingUp className="h-8 w-8 text-accent-400" />,
      title: 'Grow',
      description: 'Drive continuous improvement through data-driven insights and product evolution strategies.',
      color: 'bg-beige-100',
      details: 'Product growth requires continuous refinement based on user behavior, market trends, and business objectives. Our data-driven approach identifies opportunities for feature enhancements, optimizations, and strategic pivots.'
    }
  ];

  return (
    <section className="section-padding bg-ivory-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Product Journey" 
          subtitle="We partner with you through every stage of the product lifecycle, from initial concept to ongoing growth"
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {journeySteps.map((step) => (
            <JourneyStep
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="ideation" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8 bg-transparent">
              {journeySteps.map((step) => (
                <TabsTrigger 
                  key={step.id} 
                  value={step.id}
                  className="data-[state=active]:bg-brand-100 data-[state=active]:text-brand-600"
                >
                  <div className="flex items-center gap-2">
                    <div className={`${step.color} rounded-full p-1.5 inline-flex`}>
                      {React.cloneElement(step.icon as React.ReactElement, { className: "h-4 w-4" })}
                    </div>
                    {step.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {journeySteps.map((step) => (
              <TabsContent key={step.id} value={step.id}>
                <Card className="border-0 shadow-md overflow-hidden">
                  <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className={`${step.color} rounded-full p-6 mb-4 inline-flex flex-shrink-0`}>
                      {React.cloneElement(step.icon as React.ReactElement, { className: "h-12 w-12" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-brand-600">{step.title}</h3>
                      <p className="text-gray-700 text-lg">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductJourney;
