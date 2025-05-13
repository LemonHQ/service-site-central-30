
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
          <p className="mt-4">
            UNDER NO CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
            RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
            AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
          <p>
            Our website may contain links to other websites or content belonging to or originating from third parties.
            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
            availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy
            or reliability of any information offered by third-party websites linked through the site or any website or feature
            linked in any banner or other advertising.
          </p>
          <p className="mt-4">
            WE WILL NOT BE LIABLE FOR ANY HARM OR DAMAGES IN CONNECTION WITH YOUR USE OF THIRD-PARTY WEBSITES. WE STRONGLY
            ADVISE YOU TO READ THE TERMS AND CONDITIONS AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Disclaimer</h2>
          <p>
            The site cannot and does not contain legal, financial, or medical advice. The legal, financial, or medical information
            is provided for general informational and educational purposes only and is not a substitute for professional advice.
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate
            professionals.
          </p>
          <p className="mt-4">
            We do not provide any kind of legal, financial, or medical advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED
            ON THIS SITE IS SOLELY AT YOUR OWN RISK.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Testimonials Disclaimer</h2>
          <p>
            The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life
            experiences and opinions of such users. However, the experiences are personal to those particular users, and may not
            necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume,
            that all users will have the same experiences.
          </p>
          <p className="mt-4">
            YOUR INDIVIDUAL RESULTS MAY VARY. The testimonials on the site are submitted in various forms such as text, audio,
            and/or video, and are reviewed by us before being posted. They appear on the site verbatim as given by the users,
            except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of
            brevity, where the full testimonial contained information irrelevant to the general public.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every effort to ensure that the information on our website is complete, accurate, and up to date,
            we make no claims, promises, or guarantees about the accuracy, completeness, or adequacy of the contents of this
            website and expressly disclaim liability for errors and omissions in the contents of this website.
          </p>
          <p className="mt-4">
            If you believe that any content on our website is outdated, incomplete, or otherwise inaccurate, please contact us
            so we can promptly address your concern.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Fair Use Disclaimer</h2>
          <p>
            This website may use copyrighted material which has not always been specifically authorized by the copyright owner.
            We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the
            United States Copyright law.
          </p>
          <p className="mt-4">
            If you wish to use copyrighted material from this site for your own purposes that go beyond fair use, you must
            obtain permission from the copyright owner.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Views Expressed Disclaimer</h2>
          <p>
            The views and opinions expressed in this website are those of the authors and do not necessarily reflect the official
            policy or position of any other agency, organization, employer, or company. Comments published by users are their
            sole responsibility and the users will take full responsibility, liability, and blame for any libel or litigation
            that results from something written in or as a direct result of something written in a comment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">No Responsibility Disclaimer</h2>
          <p>
            The information on the website is provided with the understanding that we are not herein engaged in rendering legal,
            accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for
            consultation with professional accounting, tax, legal, or other competent advisers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@lemonhq.co.uk<br />
            <strong>Address:</strong> 128, City Road, London, England, EC1V 2NX
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Disclaimer;
