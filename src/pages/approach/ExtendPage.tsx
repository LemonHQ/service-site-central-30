
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, UserPlus, Clock, LineChart, Activity, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ExtendPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-600 mb-4">
                Extend
              </h1>
              <p className="text-xl text-brand-400 mb-8">Expert-as-a-service delivery model</p>
              <div className="text-gray-600 text-lg mb-8 space-y-4">
                <p>
                  Our Extend model seamlessly integrates our specialized talent into your teams, 
                  providing the precise expertise you need to accelerate delivery and close capability gaps.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lead-qualification">
                  <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                    Engage Expert Resources
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Extend - Hero Image"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Expert Roles Available</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Access specialized talent across the full spectrum of digital product development, 
            from strategy through delivery and optimization.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Product & Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Product Managers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Business Analysts</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Digital Strategists</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Innovation Consultants</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Design & Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>UX/UI Designers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Service Designers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Design System Architects</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>User Researchers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Full-Stack Developers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Mobile Engineers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>DevOps Specialists</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Quality Engineers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Data & AI</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Data Scientists</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>ML Engineers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Data Architects</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>BI Specialists</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Project Delivery</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Delivery Managers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Agile Coaches</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Scrum Masters</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Project Managers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Leadership & Advisory</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Technical Directors</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Digital Transformation Leads</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Interim CTOs</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brand-400 mr-2" />
                  <span>Program Directors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Extend</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Precise Expertise</h3>
                <p className="text-gray-600">Access specific skills exactly when and where they're needed without costly permanent hiring.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-600">Our specialists work as part of your team, adopting your tools and processes for maximum productivity.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scaling</h3>
                <p className="text-gray-600">Easily scale resources up or down based on project demands and changing business priorities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Transfer</h3>
                <p className="text-gray-600">Our experts upskill your permanent staff through collaboration, mentoring and formal training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Extend Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Needs Assessment</h3>
              <p className="text-gray-600">
                We work with you to understand your project goals, skill requirements, and resource gaps to create a precise talent plan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Matching</h3>
              <p className="text-gray-600">
                Our specialists are carefully selected based on technical skills, industry experience, and team fit.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Optimization</h3>
              <p className="text-gray-600">
                Regular check-ins and performance reviews ensure objectives are met and resources are aligned with evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Extend Case Study" 
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Extend in Action</h2>
              <p className="text-gray-600 mb-4">
                A global financial services firm needed to accelerate their mobile app development but lacked specialized 
                React Native expertise on their internal team.
              </p>
              <p className="text-gray-600 mb-4">
                We provided a team of three senior engineers and a technical lead who integrated with their agile team, 
                bringing the specific skills needed to meet their ambitious launch timeline.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">App launched 2 months ahead of original schedule</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">95% knowledge transfer achieved to internal team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is the minimum engagement period?
              </AccordionTrigger>
              <AccordionContent>
                Our standard minimum engagement is 3 months, which allows sufficient time for specialists to integrate 
                with your team and deliver meaningful value. For certain specialized roles or advisory positions, 
                we can arrange shorter engagements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How are specialists managed?
              </AccordionTrigger>
              <AccordionContent>
                Our specialists work under your day-to-day direction as part of your team structure. We provide 
                additional support through regular check-ins, performance reviews, and professional development to 
                ensure they're delivering maximum value.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What if the specialist isn't the right fit?
              </AccordionTrigger>
              <AccordionContent>
                We have a 2-week trial period for all placements. If you're not completely satisfied, we'll replace 
                the specialist at no additional cost. Our rigorous matching process means this rarely happens, but we 
                want you to have complete confidence in your extended team.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can we hire the specialist permanently?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a conversion option after 6 months of engagement. If you'd like to bring a specialist 
                onto your permanent team, we have a straightforward process with a reasonable conversion fee based on 
                the engagement duration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Extend Your Team's Capabilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with us today to discuss your resource needs and discover how our expert-as-a-service model can 
            accelerate your digital initiatives.
          </p>
          <Link to="/lead-qualification">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
              Get Started with Extend
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExtendPage;
