import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  className, 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={cn('flex flex-col items-center justify-center space-y-2', className)}
      role="status"
      aria-live="polite"
    >
      <div className={cn('animate-spin rounded-full border-2 border-gray-300 border-t-brand-600', sizeClasses[size])}>
        <span className="sr-only">{text}</span>
      </div>
      {text && (
        <span className="text-sm text-gray-600" aria-hidden="true">
          {text}
        </span>
      )}
    </div>
  );
};

export default LoadingSpinner;