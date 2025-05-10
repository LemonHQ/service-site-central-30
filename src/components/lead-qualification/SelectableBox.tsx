
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectableBoxProps {
  id: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableBox: React.FC<SelectableBoxProps> = ({ id, label, selected, onClick }) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={cn(
        "border rounded-lg px-4 py-3 cursor-pointer transition-all",
        "hover:shadow-md flex items-center justify-between",
        selected ? 
          "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" : 
          "border-gray-200 bg-white text-gray-700"
      )}
    >
      <span className="font-medium">{label}</span>
      {selected && <Check className="w-5 h-5 text-brand-500" />}
    </div>
  );
};

export default SelectableBox;
