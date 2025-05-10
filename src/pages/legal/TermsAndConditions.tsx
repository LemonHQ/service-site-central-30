
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
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms</h2>
          <p>
            If you purchase any services from us, you agree to pay all fees and charges associated with those services.
            All payments are non-refundable unless otherwise specified at the time of purchase or required by law.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
            use, goodwill, or other intangible losses, resulting from your use of our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. By continuing to use our services after those changes
            become effective, you agree to be bound by the revised Terms.
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
