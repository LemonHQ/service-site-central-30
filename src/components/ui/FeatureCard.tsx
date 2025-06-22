
import React from 'react';
import { cn } from '@/lib/utils';
import { CardTitle, Paragraph } from './Typography';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-gray-50 border-0',
    outlined: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-sm hover:shadow-md transition-shadow'
  };

  return (
    <div className={cn(
      'p-6 rounded-lg',
      variantClasses[variant],
      className
    )}>
      {Icon && (
        <div className="bg-brand-100 p-3 rounded-lg w-fit mb-4">
          <Icon className="h-6 w-6 text-brand-600" />
        </div>
      )}
      <CardTitle>{title}</CardTitle>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default FeatureCard;
