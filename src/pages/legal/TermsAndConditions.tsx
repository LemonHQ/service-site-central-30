
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const TermsAndConditions = () => {
  return (
    <MainLayout pageTitle="Terms and Conditions">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: May 10, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the LemonHQ website and services.
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms,
            you may not access or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
          <p>
            In these Terms, the following definitions apply:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>"We," "our," or "us"</strong> refers to LemonHQ, its subsidiaries, affiliates, and partners.</li>
            <li><strong>"You" or "your"</strong> refers to the individual or entity accessing or using our services.</li>
            <li><strong>"Services"</strong> refers to our website, applications, software, products, and other offerings.</li>
            <li><strong>"Content"</strong> refers to text, graphics, images, music, software, audio, video, works of authorship, and other materials that may be available through our services.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Our Services</h2>
          <p>
            You may use our services only as permitted by these Terms and any applicable laws. You may not:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use our services in any way that violates any applicable laws or regulations</li>
            <li>Use our services to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>Interfere with or disrupt our services or servers or networks connected to our services</li>
            <li>Attempt to gain unauthorized access to any part of our services</li>
            <li>Use our services for any fraudulent or illegal purpose</li>
            <li>Use scrapers, bots, or other automated tools to access our services</li>
            <li>Decompile, reverse engineer, or attempt to obtain the source code of our software</li>
            <li>Remove any copyright, trademark, or other proprietary notices from our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            Our services and their contents, including but not limited to text, graphics, logos, icons, images, software,
            and other material, are protected by copyright, trademark, and other intellectual property laws. You may not 
            modify, reproduce, distribute, create derivative works of, publicly display or perform, or in any way exploit
            any of our content without our prior written consent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for 
            safeguarding your account credentials and for any activities or actions under your account. You must notify us
            immediately of any unauthorized use of your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
          <p>
            When you submit, upload, or post content to our services, you grant us a worldwide, non-exclusive, royalty-free
            license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display,
            and distribute such content in any and all media or distribution methods now known or later developed.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms</h2>
          <p>
            If you purchase any services from us, you agree to pay all fees and charges associated with those services.
            All payments are non-refundable unless otherwise specified at the time of purchase or required by law.
            You are responsible for any taxes applicable to your purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability,
            for any reason, including if you breach these Terms. Upon termination, your right to use our services will
            cease immediately.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" and "as available" without any warranties of any kind, either express or
            implied, including but not limited to the implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement. We do not warrant that our services will be uninterrupted or error-free.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
            use, goodwill, or other intangible losses, resulting from your use of our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of England and Wales,
            without regard to its conflict of law provisions. Any dispute arising from these Terms shall be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. By continuing to use our services after those changes
            become effective, you agree to be bound by the revised Terms. We recommend checking this page periodically for
            any changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditions;
