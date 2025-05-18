
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { MainService, SubService } from '@/data/services';

interface SubServiceHeroProps {
  parentService: MainService;
  subService: SubService;
}

const SubServiceHero: React.FC<SubServiceHeroProps> = ({ parentService, subService }) => {
  const Icon = subService.icon;

  return (
    <section className="bg-brand-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Link to="/services" className="text-sm text-gray-500 hover:text-brand-600">Services</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <Link to={`/services/${parentService.slug}`} className="text-sm text-gray-500 hover:text-brand-600">{parentService.title}</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-sm text-gray-700">{subService.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{subService.title}</h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700">{subService.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/lead-qualification">
                <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={parentService.coverImage} 
                alt={subService.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-100 p-2 rounded mr-3">
                    {Icon && <Icon className="h-5 w-5 text-brand-600" />}
                  </div>
                  <h3 className="font-semibold text-gray-900">{subService.title}</h3>
                </div>
                
                <h4 className="text-sm font-medium text-gray-700 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {subService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <div className="h-2 w-2 bg-brand-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubServiceHero;
