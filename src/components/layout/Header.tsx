import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedService, setMobileExpandedService] = useState<string | null>(null);
  const [mobileExpandedIndustry, setMobileExpandedIndustry] = useState<string | null>(null);
  const [mobileExpandedApproach, setMobileExpandedApproach] = useState<string | null>(null);
  const [mobileExpandedResources, setMobileExpandedResources] = useState<string | null>(null);
  const location = useLocation();

  // Navigation links - Updated to remove 'Insights' from main nav
  const navLinks = [
    { name: 'Our Work', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Service items with direct URLs
  const serviceItems = [
    { name: "Unify Brand Experiences", path: "/unify-brand-experiences" },
    { name: "Digitalize Product Lines", path: "/digitalize-product-lines" },
    { name: "Expand Product Offerings", path: "/expand-product-offerings" },
    { name: "Scale Digital Experiences", path: "/scale-digital-experiences" },
    { name: "Pilot Emerging Tech", path: "/pilot-emerging-tech" },
    { name: "Standardize Digital Portfolio", path: "/standardize-digital-portfolio" }
  ];

  // Industry items
  const industryItems = [
    { name: "Insurance", path: "/industries/insurance", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Digital solutions for insurance providers" },
    { name: "Finance", path: "/industries/finance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Transformative tech for financial services" },
    { name: "Healthcare", path: "/industries/healthcare", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", description: "Patient-centered digital solutions" },
    { name: "Retail", path: "/industries/retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Omnichannel retail experiences" }
  ];
  
  // Our Approach items - Updated to include Co-Innovate and remove Extend
  const approachItems = [
    { name: "Co-Create", path: "/approach/co-create", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Collaborative innovation approach" },
    { name: "Co-Innovate", path: "/approach/co-innovate", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Rapid product innovation framework" }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path ? 'active-nav-link' : 'nav-link';
    }
    return location.pathname.startsWith(path) ? 'active-nav-link' : 'nav-link';
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleMobileService = (serviceId: string) => {
    if (mobileExpandedService === serviceId) {
      setMobileExpandedService(null);
    } else {
      setMobileExpandedService(serviceId);
    }
  };

  const toggleMobileIndustry = (industryId: string) => {
    if (mobileExpandedIndustry === industryId) {
      setMobileExpandedIndustry(null);
    } else {
      setMobileExpandedIndustry(industryId);
    }
  };
  
  const toggleMobileApproach = (approachId: string) => {
    if (mobileExpandedApproach === approachId) {
      setMobileExpandedApproach(null);
    } else {
      setMobileExpandedApproach(approachId);
    }
  };

  const toggleMobileResources = (resourceId: string) => {
    if (mobileExpandedResources === resourceId) {
      setMobileExpandedResources(null);
    } else {
      setMobileExpandedResources(resourceId);
    }
  };

  return (
    <header className="sticky top-0 bg-background dark:bg-background border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNavigation
            navLinks={navLinks}
            industryItems={industryItems}
            approachItems={approachItems}
            isActive={isActive}
          />

          {/* Theme toggle and placeholder div */}
          <div className="hidden md:flex items-center gap-4">
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button 
              className="text-gray-600 hover:text-brand-400 dark:text-gray-300 dark:hover:text-brand-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isMenuOpen={isMenuOpen}
        navLinks={navLinks}
        serviceItems={serviceItems}
        industryItems={industryItems}
        approachItems={approachItems}
        mobileExpandedService={mobileExpandedService}
        mobileExpandedIndustry={mobileExpandedIndustry}
        mobileExpandedApproach={mobileExpandedApproach}
        mobileExpandedResources={mobileExpandedResources}
        toggleMobileService={toggleMobileService}
        toggleMobileIndustry={toggleMobileIndustry}
        toggleMobileApproach={toggleMobileApproach}
        toggleMobileResources={toggleMobileResources}
        setIsMenuOpen={setIsMenuOpen}
        isActive={isActive}
      />
    </header>
  );
};

export default Header;
