
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Github, Youtube, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  // Service links
  const serviceLinks = [
    { name: 'Design', path: '/services/design' },
    { name: 'UI Engineering', path: '/services/ui-engineering' },
    { name: 'Application Development', path: '/services/application-development' },
    { name: 'Application Modernization', path: '/services/application-modernization' },
    { name: 'Data Engineering & Modernization', path: '/services/data-engineering' },
    { name: 'AI Engineering', path: '/services/ai-engineering' },
  ];

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

  // Quick links
  const quickLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Case Studies', path: '/case-studies' },
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

  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  {link.name === 'Trust Center' && <CheckCircle className="w-4 h-4 mr-2 text-brand-500" />}
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-brand-600">UK & Europe</h4>
              <p className="text-gray-600">Lemon Marketing & Consultancy Ltd,</p>
              <p className="text-gray-600">128, City Road, London,England, EC1V 2NX</p>
              <p className="text-gray-600 flex items-center mt-2">
                <span className="mr-2">+44-7570-631159</span>
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-brand-600">Middle East</h4>
              <p className="text-gray-600">Lemon Adv, & Pub. LLC</p>
              <p className="text-gray-600">Damas 14 Office Tower, Suite #1948</p>
              <p className="text-gray-600">Al Zahra Street, Sharjah, United Arab Emirates</p>
              <p className="text-gray-600 flex items-center mt-2">
                <span className="mr-2">+971-6-5629519</span>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Follow</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Certifications/Icons */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-xs">ISO 27001</div>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-600">Subscribe to our newsletter</h4>
            <p className="text-gray-600 mb-4">
              Our bi-weekly newsletter delivers serverless, AI, tech trends, podcasts and blogs straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 flex-grow"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-accent-400 text-white rounded-md hover:bg-accent-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <img 
                src="/lovable-uploads/50fa6423-029f-4a1e-87c3-051a066b6c9b.png" 
                alt="Newsletter Logo" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <Separator className="my-8" />
        <div className="text-center text-gray-600 text-sm">
          &copy; 2019 - {new Date().getFullYear()} ElevateDigital. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
