
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Adding console log to debug component loading
console.log("ServiceCard component is being loaded");

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
  console.log(`Rendering ServiceCard: ${title}`);
  return (
    <Link
      to={link}
      className={cn(
        'block bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform border border-beige-300/30',
        className
      )}
    >
      <div className="mb-4">
        {Icon && <Icon className="w-10 h-10 text-teal-400" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-400">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
