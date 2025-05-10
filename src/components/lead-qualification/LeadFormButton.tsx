
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LeadFormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'back';
  isSubmitting?: boolean;
  icon?: 'right-arrow' | 'left-arrow' | 'none';
  fullWidth?: boolean;
}

const LeadFormButton: React.FC<LeadFormButtonProps> = ({
  variant = 'primary',
  children,
  isSubmitting = false,
  icon = 'none',
  fullWidth = false,
  className,
  ...props
}) => {
  // Determine button styles based on variant
  const buttonStyles = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white",
    secondary: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700",
    back: "border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
  };

  // Determine icon component based on the icon prop
  const renderIcon = () => {
    switch (icon) {
      case 'right-arrow':
        return <ArrowRight className="ml-2 h-4 w-4" />;
      case 'left-arrow':
        return <ArrowLeft className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Button
      type={props.type || "button"}
      className={cn(
        buttonStyles[variant],
        fullWidth ? "w-full" : "",
        icon === 'left-arrow' ? 'flex-row-reverse' : '',
        className
      )}
      disabled={isSubmitting || props.disabled}
      {...props}
    >
      {isSubmitting ? "Processing..." : children}
      {!isSubmitting && renderIcon()}
    </Button>
  );
};

export default LeadFormButton;
