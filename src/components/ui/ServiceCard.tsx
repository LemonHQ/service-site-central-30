
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
        'block bg-white p-6 rounded-xl shadow-sm card-hover',
        className
      )}
    >
      <div className="mb-4">
        {Icon && <Icon className="w-10 h-10 text-brand-400" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
