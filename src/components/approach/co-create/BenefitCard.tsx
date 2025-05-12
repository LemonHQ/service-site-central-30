
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { H4, Paragraph } from '@/components/ui/Typography';

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-brand-500" />
      </div>
      <H4 className="mb-2">{title}</H4>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default BenefitCard;
