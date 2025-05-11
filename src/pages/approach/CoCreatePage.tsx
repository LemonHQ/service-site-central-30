
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Lightbulb, Repeat, BarChart, ArrowRight, Zap, FlaskConical, History } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from '@/components/ui/ServiceCard';
const CoCreatePage = () => {
  return <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-600 mb-4">
                Co-Create
              </h1>
              <p className="text-xl text-brand-400 mb-8">Demand for personalization</p>
              <div className="text-gray-600 text-lg mb-8 space-y-4">
                <p>
                  In today's fast-moving markets, enterprise brands can no longer rely on one-size-fits-all products. To stay competitive, brands must unbundle traditional offerings and deliver targeted, use case–driven solutions that resonate with specific segments.                  
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/assessment/co-create">
                  <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                    How it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Co-Create - Hero Image" className="rounded-xl shadow-lg w-full h-[400px] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">The benefits of Co-creation</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our Co-Create model brings your team and our experts together in collaborative environments designed to accelerate unbundling, build alignment, and deliver impactful business outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Faster product-market fit</h3>
              <p className="text-gray-600">Validate real customer needs early and shape solutions that resonate—before you commit full-scale resources.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Stronger differentiation</h3>
              <p className="text-gray-600">Stand out with offerings that are precise, relevant, and built with the end customer segment in mind.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Actionable innovation</h3>
              <p className="text-gray-600">Uncover fresh opportunities, niche use cases, and value models hidden in your customer or partner ecosystem.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Less risk, more alignment</h3>
              <p className="text-gray-600">Minimize missteps and internal friction by involving brand, product, market, channel teams from day one.</p>
            </div>


            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Execution-ready frameworks</h3>
              <p className="text-gray-600">Turn strategy into speed with assets, prototypes, and modular systems ready for market deployment.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Customer-centricity at scale</h3>
              <p className="text-gray-600">Design for flexibility—so your product can flex across regions, verticals, or partner channels without losing focus.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Measurable outcomes</h3>
              <p className="text-gray-600">Define clear KPIs and success metrics aligned with your business objectives.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Offerings Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Access these services through Co-Create</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our Co-Create model can be applied across a wide range of digital innovation needs, from product design to emerging technology exploration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard title="Digital Product Design" description="Create user-centric digital products through collaborative ideation, prototyping, and testing." icon={FlaskConical} />
            
            <ServiceCard title="Rapid Prototyping" description="Transform concepts into functional prototypes within days, not weeks or months." icon={Zap} />
            
            <ServiceCard title="Technology Modernization" description="Reimagine legacy systems with modern architectures and technology stacks." icon={History} />
            
            <ServiceCard title="Innovation Workshops" description="Structured sessions to solve complex challenges and generate breakthrough ideas." icon={Lightbulb} />
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Co-Create in Action</h2>
              <p className="text-gray-600 mb-4">
                A leading insurance provider needed to reimagine their claims process to improve customer satisfaction 
                and reduce operational costs.
              </p>
              <p className="text-gray-600 mb-4">
                Through our Co-Create approach, we brought together their claims specialists, customer service teams, 
                and our product designers for a 6-week engagement.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">40% reduction in claims processing time</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">62% increase in customer satisfaction scores</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Co-Create Workshop" className="rounded-xl shadow-lg w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How long does a typical Co-Create engagement last?
              </AccordionTrigger>
              <AccordionContent>
                Co-Create engagements typically run between 1-4 weeks, depending on the complexity of the challenge. 
                We often start with a 2-day kickoff workshop followed by sprint cycles of 1-2 weeks each.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How many people from my organization need to be involved?
              </AccordionTrigger>
              <AccordionContent>
                A core team of 3-5 stakeholders from your organization typically participates throughout the engagement, 
                with additional subject matter experts joining for specific workshops or review sessions as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can Co-Create be conducted remotely?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we've developed highly effective virtual Co-Create experiences using digital collaboration tools. 
                While we recommend in-person sessions when possible, our remote approach delivers comparable outcomes 
                with added flexibility and global participation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What happens after the Co-Create engagement ends?
              </AccordionTrigger>
              <AccordionContent>
                After Co-Create, you'll have validated prototypes, detailed implementation plans, and technical requirements. 
                Many clients transition into our full development services to bring the solution to market, while others 
                implement with their internal teams using our specifications.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6 font-normal text-slate-50">Ready to explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-thin">
            Assess your readiness for a co-creation journey
          </p>
          <Link to="/assessment/co-create">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
              Take the assessment
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>;
};
export default CoCreatePage;
