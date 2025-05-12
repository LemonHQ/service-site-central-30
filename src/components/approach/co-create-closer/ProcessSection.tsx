
import React, { useState } from 'react';
import { CheckCircle, Users, Network, Globe, Layers, ChevronRight, Clock } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';

const processSteps = [
  {
    step: 1,
    title: "Ecosystem Positioning",
    description: "We map the digital ecosystem landscape, identify partnership opportunities, and align stakeholders on platform strategy.",
    duration: "Week 1",
    deliverables: ["Ecosystem opportunity map", "Partnership model canvas", "Platform capability assessment"]
  },
  {
    step: 2,
    title: "Platform Co-Creation",
    description: "Cross-functional teams collaborate to define platform architecture, APIs, and integration patterns that enable ecosystem participation.",
    duration: "Week 2",
    deliverables: ["Platform architecture blueprint", "API design patterns", "Integration roadmap"]
  },
  {
    step: 3,
    title: "Ecosystem Prototyping",
    description: "We develop working prototypes of core platform capabilities and test integration scenarios with potential ecosystem partners.",
    duration: "Week 3",
    deliverables: ["API prototypes", "Integration demos", "Partner onboarding flows"]
  },
  {
    step: 4,
    title: "Ecosystem Validation",
    description: "Prototype testing with actual ecosystem partners validates the platform strategy and refines technical requirements.",
    duration: "Week 4",
    deliverables: ["Partner feedback analysis", "Technical requirement specs", "Ecosystem scaling plan"]
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">How It Works</span>
          </div>
          
          <H2 className="mb-6">The Ecosystem Co-Create Process</H2>
          
          <Paragraph className="text-lg">
            Our structured 4-week process transforms your product vision into a scalable 
            platform strategy, designed to thrive in connected digital ecosystems.
          </Paragraph>
        </div>
        
        <div className="mb-10">
          {/* Step indicators - horizontal timeline */}
          <div className="hidden md:flex justify-between items-center mb-8 relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2 z-0"></div>
            
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className={`w-12 h-12 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${
                  activeStep === step.step 
                    ? 'bg-brand-600 text-white' 
                    : activeStep > step.step 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white border border-gray-300 text-gray-500'
                }`}
                onClick={() => setActiveStep(step.step)}
              >
                {activeStep > step.step ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="font-medium">{step.step}</span>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile step selector */}
          <div className="md:hidden flex overflow-x-auto gap-3 pb-4 mb-4">
            {processSteps.map((step) => (
              <button
                key={step.step}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                  activeStep === step.step
                    ? 'bg-brand-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700'
                }`}
                onClick={() => setActiveStep(step.step)}
              >
                Step {step.step}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active step content */}
        {processSteps.map((step) => (
          activeStep === step.step && (
            <div key={step.step} className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3">
                    <span className="font-medium">{step.step}</span>
                  </div>
                  <H4>{step.title}</H4>
                </div>
                
                <Paragraph className="mb-6">
                  {step.description}
                </Paragraph>
                
                <div className="flex items-center text-brand-700 mb-4">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">{step.duration}</span>
                </div>
                
                <div className="mt-6">
                  <p className="font-medium text-gray-700 mb-3">Deliverables:</p>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button 
                    className={`flex items-center text-brand-700 ${step.step === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                    onClick={() => step.step > 1 && setActiveStep(step.step - 1)}
                    disabled={step.step === 1}
                  >
                    <ChevronRight className="w-5 h-5 mr-1 rotate-180" /> Previous
                  </button>
                  
                  <button 
                    className={`flex items-center text-brand-700 ${step.step === processSteps.length ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                    onClick={() => step.step < processSteps.length && setActiveStep(step.step + 1)}
                    disabled={step.step === processSteps.length}
                  >
                    Next <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <p className="font-medium text-brand-700 mb-4">Why This Step Matters:</p>
                
                {step.step === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Identifying the right ecosystem position determines your platform's market potential</p>
                    </div>
                    <div className="flex items-start">
                      <Network className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">74% of successful platforms started with clear ecosystem mapping</p>
                    </div>
                  </div>
                )}
                
                {step.step === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Cross-functional collaboration ensures your platform meets both technical and business ecosystem needs</p>
                    </div>
                    <div className="flex items-start">
                      <Layers className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Platforms with well-designed architecture attract 3x more ecosystem partners</p>
                    </div>
                  </div>
                )}
                
                {step.step === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Network className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Ecosystem prototyping reduces integration friction with potential partners</p>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">API prototyping reduces ecosystem integration costs by up to 65%</p>
                    </div>
                  </div>
                )}
                
                {step.step === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Partner validation ensures your platform creates mutual value across the ecosystem</p>
                    </div>
                    <div className="flex items-start">
                      <Network className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Ecosystem-validated platforms achieve market growth 4x faster than non-validated solutions</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
