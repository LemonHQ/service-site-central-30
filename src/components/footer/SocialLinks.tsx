
import React from 'react';
import { Github, Youtube, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
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
    </div>
  );
};

export default SocialLinks;
