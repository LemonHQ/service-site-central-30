
import React from 'react';
import { cn } from '@/lib/utils';

interface FilterButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className
}) => {
  return (
    <div className={cn("flex gap-2 justify-center mb-10 flex-wrap", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedCategory === category
              ? 'bg-brand-400 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
