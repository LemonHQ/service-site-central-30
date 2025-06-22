
import React from 'react';
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn("text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight", className)}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight tracking-tight", className)}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={cn("text-xl md:text-2xl font-normal text-gray-800 leading-relaxed", className)}>
      {children}
    </h3>
  );
};

export const H4 = ({ children, className }: TypographyProps) => {
  return (
    <h4 className={cn("text-lg md:text-xl font-normal text-gray-800 leading-relaxed", className)}>
      {children}
    </h4>
  );
};

export const H5 = ({ children, className }: TypographyProps) => {
  return (
    <h5 className={cn("text-base md:text-lg font-medium text-gray-700 leading-relaxed", className)}>
      {children}
    </h5>
  );
};

export const H6 = ({ children, className }: TypographyProps) => {
  return (
    <h6 className={cn("text-sm md:text-base font-medium text-gray-700 leading-relaxed", className)}>
      {children}
    </h6>
  );
};

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-base leading-7 text-gray-600", className)}>
      {children}
    </p>
  );
};

export const Lead = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-lg md:text-xl leading-8 text-gray-700 font-light", className)}>
      {children}
    </p>
  );
};

export const Subtitle = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-lg text-gray-600 font-light leading-7", className)}>
      {children}
    </p>
  );
};

// Semantic Typography Components
export const PageTitle = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn("text-4xl md:text-5xl font-light text-gray-900 leading-tight tracking-tight mb-6", className)}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-4", className)}>
      {children}
    </h2>
  );
};

export const CardTitle = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={cn("text-xl font-normal text-gray-800 leading-relaxed mb-2", className)}>
      {children}
    </h3>
  );
};

export const ButtonText = ({ children, className }: TypographyProps) => {
  return (
    <span className={cn("font-medium", className)}>
      {children}
    </span>
  );
};
