
import React from 'react';
import { cn } from '@/lib/utils';

interface NumberOptionItemProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}

const NumberOptionItem: React.FC<NumberOptionItemProps> = ({ value, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "border rounded-lg px-4 py-3 text-center cursor-pointer transition-all",
        "hover:shadow-md",
        selected ? 
          "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" : 
          "border-gray-200 bg-white text-gray-700"
      )}
    >
      <span className="font-medium">{value}</span>
    </div>
  );
};

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
          <NumberOptionItem
            key={option}
            value={option}
            selected={value === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default NumberOption;
