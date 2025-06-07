
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from "lucide-react";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  navLinks: Array<{ name: string; path: string }>;
  serviceItems: Array<{ name: string; path: string }>;
  industryItems: Array<{ name: string; path: string; image: string; description: string }>;
  approachItems: Array<{ name: string; path: string; image: string; description: string }>;
  mobileExpandedService: string | null;
  mobileExpandedIndustry: string | null;
  mobileExpandedApproach: string | null;
  toggleMobileService: (serviceId: string) => void;
  toggleMobileIndustry: (industryId: string) => void;
  toggleMobileApproach: (approachId: string) => void;
  setIsMenuOpen: (open: boolean) => void;
  isActive: (path: string) => string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMenuOpen,
  navLinks,
  serviceItems,
  industryItems,
  approachItems,
  mobileExpandedService,
  mobileExpandedIndustry,
  mobileExpandedApproach,
  toggleMobileService,
  toggleMobileIndustry,
  toggleMobileApproach,
  setIsMenuOpen,
  isActive
}) => {
  const location = useLocation();

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-background dark:bg-background border-b border-gray-100 dark:border-gray-800 animate-fade-in">
      <nav className="flex flex-col space-y-2 py-6 px-8">
        <Link 
          to="/" 
          className={`${isActive('/')} text-lg py-2`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        
        {/* What We Do - with sub-menu */}
        <div className="flex flex-col">
          <button 
            className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/unify-brand-experiences') || 
              location.pathname.includes('/digitalize-product-lines') || 
              location.pathname.includes('/expand-product-offerings') || 
              location.pathname.includes('/scale-digital-experiences') || 
              location.pathname.includes('/pilot-emerging-tech') || 
              location.pathname.includes('/standardize-digital-portfolio') ? 'text-brand-600 font-medium' : ''}`}
            onClick={() => toggleMobileService('services')}
          >
            <span>What We Do</span>
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedService === 'services' ? 'transform rotate-180' : ''}`} />
          </button>
          
          {mobileExpandedService === 'services' && (
            <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
              {serviceItems.map((service) => (
                <div key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    <span>{service.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Our Approach - with sub-menu - Updated items */}
        <div className="flex flex-col">
          <button 
            className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/approach/') ? 'text-brand-600 font-medium' : ''}`}
            onClick={() => toggleMobileApproach('approach')}
          >
            <span>Our Approach</span>
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedApproach === 'approach' ? 'transform rotate-180' : ''}`} />
          </button>
          
          {mobileExpandedApproach === 'approach' && (
            <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
              {approachItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Industries - with sub-menu */}
        <div className="flex flex-col">
          <button 
            className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/industries/') ? 'text-brand-600 font-medium' : ''}`}
            onClick={() => toggleMobileIndustry('industries')}
          >
            <span>Industries</span>
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedIndustry === 'industries' ? 'transform rotate-180' : ''}`} />
          </button>
          
          {mobileExpandedIndustry === 'industries' && (
            <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
              {industryItems.map((industry) => (
                <div key={industry.name}>
                  <Link
                    to={industry.path}
                    className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    <span>{industry.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Main nav links */}
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`${isActive(link.path)} text-lg py-2`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavigation;
