
import React from 'react';
import { cn } from '@/lib/utils';

interface NumberOptionProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const NumberOption: React.FC<NumberOptionProps> = ({ label, options, value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-800">{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map(option => (
          <div
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "border rounded-lg px-4 py-3 text-center cursor-pointer transition-all",
              "hover:shadow-md",
              value === option ? 
                "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" : 
                "border-gray-200 bg-white text-gray-700"
            )}
          >
            <span className="font-medium">{option}</span>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default NumberOption;
