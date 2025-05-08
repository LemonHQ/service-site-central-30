
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-4">
      <h2 className="text-2xl font-semibold mb-6 text-brand-700">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        Have a question about our services or want to discuss a potential project? Reach out to us using the contact information below or fill out the form.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-brand-100 p-3 rounded-full mr-4">
            <Mail className="w-5 h-5 text-brand-500" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <a href="mailto:create@lemonhq.co.uk" className="text-brand-400 hover:text-brand-500">
              create@lemonhq.co.uk
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-100 p-3 rounded-full mr-4">
            <MapPin className="w-5 h-5 text-brand-500" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">UK & Europe</h4>
            <address className="not-italic text-gray-600">
              Lemon Marketing & Consultancy Ltd, <br />
              128, City Road, London,England, EC1V 2NX
            </address>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-brand-100 p-3 rounded-full mr-4">
            <MapPin className="w-5 h-5 text-brand-500" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Middle East</h4>
            <address className="not-italic text-gray-600">
              Lemon Adv, & Pub. LLC<br />
              Damas 14 Office Tower, Suite #1948<br />
              Al Zahra Street, Sharjah, United Arab Emirates
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
