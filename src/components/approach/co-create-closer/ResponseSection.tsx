
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calendar, ArrowRight } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const ResponseSection = () => {
  return (
    <section className="py-16 bg-brand-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white text-brand-700 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium">Ready to get started?</span>
            </div>
            <H2 className="mb-6 text-white">Take the First Step Towards Product Success</H2>
            <Paragraph className="text-lg text-white/90">
              Choose the path that works best for your organization
            </Paragraph>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Readiness Assessment</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">5-minute online questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Detailed readiness report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized recommendation</span>
                  </li>
                </ul>
                
                <Link to="/approach/co-create-assessment" className="w-full">
                  <Button variant="outline" className="w-full border-brand-200 text-brand-700 hover:bg-brand-50">
                    Start Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-700 text-white px-4 py-1 rounded-full">
                <span className="text-sm font-medium">Most Popular</span>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Strategy Consultation</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-minute strategy call</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom Co-Create approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Preliminary roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Investment estimate</span>
                  </li>
                </ul>
                
                <Link to="/lead-qualification" className="w-full">
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Schedule Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Case Study Package</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete case study library</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-Create methodology guide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ROI calculator</span>
                  </li>
                </ul>
                
                <Link to="/case-studies" className="w-full">
                  <Button variant="outline" className="w-full border-brand-200 text-brand-700 hover:bg-brand-50">
                    Download Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">100%</span>
                </div>
                <div>
                  <p className="font-medium text-lg">Risk-Free Guarantee</p>
                  <p className="text-white/80">If you're not satisfied with the Co-Create workshop outcomes, we'll refund your investment.</p>
                </div>
              </div>
              
              <Link to="/lead-qualification">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 whitespace-nowrap">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseSection;
