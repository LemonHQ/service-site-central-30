
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import FooterLinks from '../footer/FooterLinks';
import SocialLinks from '../footer/SocialLinks';
import LocationInfo from '../footer/LocationInfo';
import ContactSection from '../footer/ContactSection';
import NewsletterSubscribe from '../footer/NewsletterSubscribe';
import Copyright from '../footer/Copyright';
import { mainServices } from '@/data/services';

const Footer = () => {
  // Service links - Updated with actual services from our data structure
  const serviceLinks = mainServices.map(service => ({
    name: service.title,
    path: `/services/${service.slug}`
  }));

  // Industry links
  const industryLinks = [
    { name: 'Small and mid level enterprises', path: '/industries/sme' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'Construction', path: '/industries/construction' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'Social & NGO', path: '/industries/social-ngo' },
    { name: 'Insurtech', path: '/industries/insurtech' },
  ];

  // Quick links - Renamed Blog to Resources
  const quickLinks = [
    { name: 'Resources', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Our Work', path: '/case-studies' },
    { name: 'Guides', path: '/guides' },
    { name: 'Talks', path: '/talks' },
    { name: 'Serverless', path: '/serverless' },
    { name: 'Serverless Tools', path: '/serverless-tools' },
    { name: 'Serverless Architecture', path: '/serverless-architecture' },
  ];

  // Company links
  const companyLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Your Next Tech Leader', path: '/about#tech-leader' },
    { name: 'AntVerse', path: '/antverse' },
    { name: 'Careers', path: '/careers' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Brand Guidelines', path: '/brand-guidelines' },
    { name: 'Trust Center', path: '/trust-center' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterLinks title="What We Do" links={serviceLinks} />
          <FooterLinks title="Industries" links={industryLinks} />
          <FooterLinks title="Quick links" links={quickLinks} />
          <FooterLinks title="Company" links={companyLinks} showIcon={true} />
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <LocationInfo 
              title="UK & Europe"
              addressLines={[
                "Lemon Marketing & Consultancy Ltd,",
                "128, City Road, London,England, EC1V 2NX"
              ]}
              mapUrl="https://maps.google.com/?q=128, City Road, London, England, EC1V 2NX"
            />
            
            <LocationInfo 
              title="Middle East"
              addressLines={[
                "Lemon Adv, & Pub. LLC",
                "Damas 14 Office Tower, Suite #1948",
                "Al Zahra Street, Sharjah, United Arab Emirates"
              ]}
              mapUrl="https://maps.google.com/?q=Damas 14 Office Tower, Al Zahra Street, Sharjah, UAE"
            />
            
            <ContactSection />
          </div>

          {/* Follow Us */}
          <div>
            <SocialLinks />
            {/* ISO certifications hidden as requested */}
          </div>

          {/* Subscribe */}
          <div>
            <NewsletterSubscribe />
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <Separator className="my-8" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
