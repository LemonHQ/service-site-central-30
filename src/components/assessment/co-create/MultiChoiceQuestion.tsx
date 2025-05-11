
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  score?: number;
}

interface MultiChoiceQuestionProps {
  question: string;
  options: Option[];
  selectedOptions: string[];
  onChange: (optionId: string) => void;
  error?: string;
  description?: string;
}

const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = ({
  question,
  options,
  selectedOptions,
  onChange,
  error,
  description
}) => {
  const isSelected = (optionId: string) => selectedOptions.includes(optionId);
  
  // Special handling for "None" option
  const handleOptionClick = (optionId: string) => {
    const isNoneOption = optionId === "none";
    onChange(optionId);
    
    // If "None" was clicked, deselect other options
    if (isNoneOption) {
      options.forEach(opt => {
        if (opt.id !== "none" && isSelected(opt.id)) {
          onChange(opt.id);
        }
      });
    } 
    // If another option was clicked and "None" is selected, deselect "None"
    else if (isSelected("none")) {
      onChange("none");
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={cn(
              "border rounded-lg px-4 py-3 cursor-pointer transition-all flex items-center justify-between",
              "hover:shadow-md",
              isSelected(option.id)
                ? "border-brand-500 bg-brand-100 text-brand-700 shadow-sm"
                : "border-gray-200 bg-white text-gray-700"
            )}
          >
            <span className="font-medium">{option.label}</span>
            {isSelected(option.id) && (
              <Check className="w-5 h-5 text-brand-500" />
            )}
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default MultiChoiceQuestion;
