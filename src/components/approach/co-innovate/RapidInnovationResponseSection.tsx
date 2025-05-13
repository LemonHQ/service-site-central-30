
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calendar, ArrowRight, Zap } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const RapidInnovationResponseSection = () => {
  return (
    <section className="py-16 bg-accent-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white text-accent-700 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Ready to accelerate your innovation?</span>
            </div>
            <H2 className="mb-6 text-white">Take the First Step Towards Rapid Innovation</H2>
            <Paragraph className="text-lg text-white/90">
              Choose the approach that works best for your organization
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-accent-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Innovation Assessment</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">5-minute innovation readiness quiz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Product innovation gap analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized rapid iteration plan</span>
                  </li>
                </ul>
                
                <Link to="/contact" className="w-full">
                  <Button variant="outline" className="w-full border-accent-200 text-accent-700 hover:bg-accent-50">
                    Request Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-700 text-white px-4 py-1 rounded-full">
                <span className="text-sm font-medium">Most Popular</span>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-accent-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Rapid Innovation Session</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">90-minute strategy workshop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Product innovation assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Rapid iteration framework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Innovation roadmap creation</span>
                  </li>
                </ul>
                
                <Link to="/co-innovate-webinar" className="w-full">
                  <Button className="w-full bg-accent-600 hover:bg-accent-700">
                    Sign Up For The Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-accent-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Innovation Success Stories</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Rapid innovation case studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Product iteration playbook</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Innovation ROI calculator</span>
                  </li>
                </ul>
                
                <Link to="/case-studies" className="w-full">
                  <Button variant="outline" className="w-full border-accent-200 text-accent-700 hover:bg-accent-50">
                    Case Studies
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidInnovationResponseSection;
