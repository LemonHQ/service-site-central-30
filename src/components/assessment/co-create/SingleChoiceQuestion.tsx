
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  score?: number;
}

interface SingleChoiceQuestionProps {
  question: string;
  options: Option[];
  selectedOption: string;
  onChange: (optionId: string) => void;
  error?: string;
  description?: string;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  options,
  selectedOption,
  onChange,
  error,
  description
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      {description && (
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "border rounded-lg px-4 py-2 cursor-pointer transition-all flex items-center justify-between",
              "hover:shadow-md",
              selectedOption === option.id
                ? "border-brand-500 bg-brand-100 text-brand-700 shadow-sm"
                : "border-gray-200 bg-white text-gray-700"
            )}
          >
            <span className="font-medium">{option.label}</span>
            {selectedOption === option.id && (
              <Check className="w-5 h-5 text-brand-500 flex-shrink-0 ml-2" />
            )}
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SingleChoiceQuestion;
