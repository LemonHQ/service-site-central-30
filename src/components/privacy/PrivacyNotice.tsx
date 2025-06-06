
import React from 'react';
import { Link } from 'react-router-dom';

interface PrivacyNoticeProps {
  className?: string;
  formType: 'contact' | 'newsletter' | 'lead-qualification' | 'cv-submission' | 'assessment';
}

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ className = '', formType }) => {
  const getDataUsagePurpose = () => {
    switch (formType) {
      case 'contact':
        return 'respond to your inquiry and provide the services you've requested';
      case 'newsletter':
        return 'send you our newsletter and relevant marketing communications';
      case 'lead-qualification':
        return 'assess your business needs and provide tailored recommendations';
      case 'cv-submission':
        return 'evaluate your application for current and future job opportunities';
      case 'assessment':
        return 'generate your assessment results and provide relevant recommendations';
      default:
        return 'provide the services you've requested';
    }
  };

  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 ${className}`}>
      <h4 className="font-semibold mb-2">How we use your information</h4>
      <p className="mb-3">
        We collect and process your personal data to {getDataUsagePurpose()}. Your data will be stored securely and only used for the purposes outlined in our{' '}
        <Link to="/legal/privacy-policy" className="text-brand-600 hover:underline">
          Privacy Policy
        </Link>.
      </p>
      
      <ul className="space-y-1 mb-3">
        <li>• <strong>Lawful basis:</strong> Legitimate interest and consent (where applicable)</li>
        <li>• <strong>Data retention:</strong> We retain your data for up to 3 years or until you request deletion</li>
        <li>• <strong>Your rights:</strong> You can access, update, or delete your data at any time</li>
      </ul>
      
      <p className="text-xs">
        For data protection queries, contact us at{' '}
        <a href="mailto:privacy@lemonhq.co.uk" className="text-brand-600 hover:underline">
          privacy@lemonhq.co.uk
        </a>. 
        Read our full{' '}
        <Link to="/legal/privacy-policy" className="text-brand-600 hover:underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/legal/cookie-policy" className="text-brand-600 hover:underline">
          Cookie Policy
        </Link>.
      </p>
    </div>
  );
};

export default PrivacyNotice;
