
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const Disclaimer = () => {
  return (
    <MainLayout pageTitle="Disclaimer">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: May 10, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Website Disclaimer</h2>
          <p>
            The information provided by LemonHQ ("we," "us," or "our") on our website is for general informational purposes only.
            All information on the site is provided in good faith, however we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any
            information on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
          <p>
            Our website may contain links to other websites or content belonging to or originating from third parties.
            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
            availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy
            or reliability of any information offered by third-party websites linked through the site or any website or feature
            linked in any banner or other advertising.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Disclaimer</h2>
          <p>
            The site cannot and does not contain legal, financial, or medical advice. The legal, financial, or medical information
            is provided for general informational and educational purposes only and is not a substitute for professional advice.
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate
            professionals.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Testimonials Disclaimer</h2>
          <p>
            The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life
            experiences and opinions of such users. However, the experiences are personal to those particular users, and may not
            necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume,
            that all users will have the same experiences.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every effort to ensure that the information on our website is complete, accurate, and up to date,
            we make no claims, promises, or guarantees about the accuracy, completeness, or adequacy of the contents of this
            website and expressly disclaim liability for errors and omissions in the contents of this website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Fair Use Disclaimer</h2>
          <p>
            This website may use copyrighted material which has not always been specifically authorized by the copyright owner.
            We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the
            United States Copyright law.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@lemonhq.io<br />
            <strong>Address:</strong> 128, City Road, London, England, EC1V 2NX
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Disclaimer;
