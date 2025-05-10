
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const CookiePolicy = () => {
  return (
    <MainLayout pageTitle="Cookie Policy">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: May 10, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            This Cookie Policy explains how LemonHQ ("we", "our", or "us") uses cookies and similar technologies
            to recognize you when you visit our website. It explains what these technologies are and why we use them,
            as well as your rights to control our use of them.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>
          <p className="mt-4">
            Cookies set by the website owner (in this case, LemonHQ) are called "first-party cookies".
            Cookies set by parties other than the website owner are called "third-party cookies".
            Third-party cookies enable third-party features or functionality to be provided on or through the website
            (e.g., advertising, interactive content, and analytics).
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality
            such as security, network management, and account access. You may disable these by changing your
            browser settings, but this may affect how the website functions.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. They help us improve our website and services.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Functionality Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as video playback and live chat.
            They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Marketing Cookies</h3>
          <p>
            These cookies are used to track visitors across websites. The intention is to display ads that are
            relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Control Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
            and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually
            adjust some preferences every time you visit a site, and some services and functionalities may not work.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use
            or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@lemonhq.io<br />
            <strong>Address:</strong> 128, City Road, London, England, EC1V 2NX
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default CookiePolicy;
