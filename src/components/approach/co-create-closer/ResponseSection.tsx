
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calendar, ArrowRight, Network } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import EcosystemPartnersCarousel from './EcosystemPartnersCarousel';

const ResponseSection = () => {
  return (
    <section className="py-16 bg-brand-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white text-brand-700 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-normal">Ready to build your ecosystem strategy?</span>
            </div>
            <H2 className="mb-6 text-white">Take the First Step Towards Ecosystem Success</H2>
            <Paragraph className="text-lg text-white/90 font-light">
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
                
                <H4 className="text-center mb-4">Ecosystem assessment</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">1-minute ecosystem readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">Ecosystem report</span>
                  </li>
                </ul>
                
                <Link to="/approach/co-create-assessment" className="w-full">
                  <Button variant="outline" className="w-full border-brand-200 text-brand-700 hover:bg-brand-50 font-normal">
                    Start Assessment
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 relative">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Intro to ecosystem strategy</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">30-minute ecosystem session with expert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">Why ecosystems now?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">How they create value?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">How can you gain a competitive edge?</span>
                  </li>
                </ul>
                
                <Link to="/webinar-signup" className="w-full">
                  <Button className="w-full bg-brand-600 hover:bg-brand-700 font-normal">
                    Learn more
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <Network className="h-8 w-8 text-brand-600" />
                  </div>
                </div>
                
                <H4 className="text-center mb-4">Success Stories</H4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-normal">Digital ecosystem case studies</span>
                  </li>
                </ul>
                
                <Link to="/case-studies" className="w-full">
                  <Button variant="outline" className="w-full border-brand-200 text-brand-700 hover:bg-brand-50 font-normal">
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

export default ResponseSection;
