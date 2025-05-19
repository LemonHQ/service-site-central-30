
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import FooterLinks from '../footer/FooterLinks';
import SocialLinks from '../footer/SocialLinks';
import LocationInfo from '../footer/LocationInfo';
import ContactSection from '../footer/ContactSection';
import NewsletterSubscribe from '../footer/NewsletterSubscribe';
import Copyright from '../footer/Copyright';

const Footer = () => {
  // Service links - Updated with direct URLs
  const serviceLinks = [
    { name: 'Unify Brand Experiences', path: '/unify-brand-experiences' },
    { name: 'Digitalize Product Lines', path: '/digitalize-product-lines' },
    { name: 'Expand Product Offerings', path: '/expand-product-offerings' },
    { name: 'Scale Digital Experiences', path: '/scale-digital-experiences' },
    { name: 'Pilot Emerging Tech', path: '/pilot-emerging-tech' },
    { name: 'Standardize Digital Portfolio', path: '/standardize-digital-portfolio' }
  ];

  // Industry links
  const industryLinks = [
    { name: 'Insurance', path: '/industries/insurance' },
    { name: 'Finance', path: '/industries/finance' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Retail', path: '/industries/retail' },
  ];

  // Approach links - Added new section
  const approachLinks = [
    { name: 'Co-Create', path: '/approach/co-create' },
    { name: 'Co-Innovate', path: '/approach/co-innovate' },
  ];

  // Company links - Updated
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <FooterLinks title="What We Do" links={serviceLinks} />
          <FooterLinks title="Industries" links={industryLinks} />
          <FooterLinks title="Our Approach" links={approachLinks} />
          <FooterLinks title="Company" links={companyLinks} showIcon={false} />
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
            <NewsletterSubscribe />
            {/* <SocialLinks /> */}
            {/* ISO certifications hidden as requested */}
          </div>

          {/* Subscribe */}
          {/* <div>
            <NewsletterSubscribe />
          </div> */}
        </div>

        {/* Disclaimer and Copyright */}
        <Separator className="my-8" />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
