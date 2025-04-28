
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  icon: Icon,
  className,
}) => {
  return (
    <Link
      to={link}
      className={cn(
        'block tech-card p-6 group',
        className
      )}
    >
      <div className="mb-4 relative">
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-brand-400" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-600 group-hover:text-brand-400 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      <div className="mt-4 flex items-center text-brand-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceCard;
