
import React, { useState } from 'react';
import { CheckCircle, Users, Network, Globe, Layers, ChevronRight, Clock, Package, Database, Zap, ArrowRight } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';

const processSteps = [
  {
    step: 1,
    title: "User & Product Stakeholder Alignment",
    description: "We align product vision with user needs by engaging directly with target users and key product stakeholders to identify core value propositions and product opportunities.",
    duration: "Week 1",
    deliverables: ["User needs assessment", "Product vision canvas", "Stakeholder alignment report"]
  },
  {
    step: 2,
    title: "Ecosystem Landscape Mapping",
    description: "We map the digital ecosystem landscape to identify strategic integration opportunities and position your product within the broader market context.",
    duration: "Week 2",
    deliverables: ["Ecosystem opportunity map", "Competitive positioning matrix", "Integration value framework"]
  },
  {
    step: 3,
    title: "Product Prototype Development",
    description: "We develop interactive prototypes of your product's core features while designing the foundations for ecosystem connectivity and future scaling.",
    duration: "Week 3",
    deliverables: ["Interactive product prototype", "Platform architecture model", "Technical implementation roadmap"]
  },
  {
    step: 4,
    title: "Target User Validation",
    description: "We validate the product with target users through structured testing sessions, gathering feedback to refine both the core product experience and ecosystem strategy.",
    duration: "Week 4",
    deliverables: ["User testing insights", "Product refinement plan", "Go-to-market strategy"]
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
          
          <H2 className="mb-6">The Product Co-Create Process</H2>
          
          <Paragraph className="text-lg">
            Our structured 4-week process transforms your product vision into a market-ready 
            solution validated by real users and designed for ecosystem integration.
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
                      <Users className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Products built with direct user input are 3x more likely to meet market needs</p>
                    </div>
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Stakeholder alignment reduces product development timeline by 40%</p>
                    </div>
                  </div>
                )}
                
                {step.step === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Network className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Products that map ecosystem opportunities see 75% higher integration rates</p>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Understanding market positioning unlocks 2.5x more partnership opportunities</p>
                    </div>
                  </div>
                )}
                
                {step.step === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Layers className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Interactive prototypes reduce development rework by 60%</p>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Products designed with ecosystem connectivity grow 3x faster in their first year</p>
                    </div>
                  </div>
                )}
                
                {step.step === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">User-validated products achieve 80% higher adoption rates</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-brand-600 mr-2 mt-1" />
                      <p className="text-sm">Products with a clear go-to-market strategy reach profitability 2x faster</p>
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
