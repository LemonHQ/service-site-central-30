
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const PrivacyPolicy = () => {
  return (
    <MainLayout pageTitle="Privacy Policy">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: May 10, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            LemonHQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, information we collect automatically when you use our 
            services, and information from third parties sources as described below.
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Contact information (name, email address, phone number, etc.)</li>
            <li>Account information (username, password, etc.)</li>
            <li>Profile information (company details, job title, etc.)</li>
            <li>Payment information (credit card details, billing address, etc.)</li>
            <li>Communications and feedback you provide to us</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to comments, questions, and requests</li>
            <li>Personalize your experience and provide customized content</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p>
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>In connection with a business transaction such as a merger or acquisition</li>
            <li>With your consent or at your direction</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee 
            absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to our processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
