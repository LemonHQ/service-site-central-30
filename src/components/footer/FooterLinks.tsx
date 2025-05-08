
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkItem {
  name: string;
  path: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
  showIcon?: boolean;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links, showIcon = false }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-brand-600">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name} className="flex items-center">
            {showIcon && link.name === 'Trust Center' && (
              <CheckCircle className="w-4 h-4 mr-2 text-brand-500" />
            )}
            <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
