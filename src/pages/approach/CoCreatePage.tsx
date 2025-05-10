
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Lightbulb, Repeat, BarChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CoCreatePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-600 mb-4">
                Co-Create
              </h1>
              <p className="text-xl text-brand-400 mb-8">Collaborative innovation approach</p>
              <div className="text-gray-600 text-lg mb-8 space-y-4">
                <p>
                  Our Co-Create model brings your team and our experts together in collaborative environments 
                  designed to accelerate innovation, build alignment, and deliver impactful digital solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lead-qualification">
                  <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                    Start a Co-Create Engagement
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Co-Create - Hero Image"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Co-Create Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-functional Teams</h3>
              <p className="text-gray-600">
                We bring together product specialists, designers, engineers, and your stakeholders into dedicated innovation teams.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Structured Workshops</h3>
              <p className="text-gray-600">
                Our facilitated sessions use proven ideation techniques to quickly move from problems to validated solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Repeat className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapid Iteration</h3>
              <p className="text-gray-600">
                We develop functional prototypes, gather feedback, and refine solutions in accelerated development cycles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Co-Create Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Accelerated Time-to-Value</h3>
                <p className="text-gray-600">Cut delivery timelines by 30-50% through parallel workflows and reduced handoffs.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Stakeholder Alignment</h3>
                <p className="text-gray-600">Build consensus and shared understanding through collaborative problem-solving.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Transfer</h3>
                <p className="text-gray-600">Your team learns our methods and approaches to innovation, enhancing your internal capabilities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Better Solutions</h3>
                <p className="text-gray-600">Diverse perspectives and iterative testing lead to more innovative, user-centered products.</p>
              </div>
            </div>
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
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Co-Create Workshop" 
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
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
                Co-Create engagements typically run between 4-12 weeks, depending on the complexity of the challenge. 
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
          <h2 className="text-3xl font-bold mb-6">Ready to Co-Create Your Next Innovation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start a conversation about how our collaborative approach can help you solve complex challenges and build 
            better digital products.
          </p>
          <Link to="/lead-qualification">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
              Start Your Co-Create Journey
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default CoCreatePage;
