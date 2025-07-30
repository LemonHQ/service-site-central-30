import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibleLinkProps extends Omit<LinkProps, 'to'> {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  description?: string;
  showExternalIcon?: boolean;
}

const AccessibleLink: React.FC<AccessibleLinkProps> = ({
  to,
  href,
  children,
  className,
  external = false,
  ariaLabel,
  description,
  showExternalIcon = true,
  ...props
}) => {
  // Determine if this is an external link
  const isExternal = external || href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:');
  const linkUrl = to || href || '#';

  const baseClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors";

  const linkProps = {
    className: cn(baseClasses, className),
    'aria-label': ariaLabel,
    'aria-describedby': description ? `${linkUrl}-description` : undefined,
    ...props
  };

  if (isExternal && href) {
    return (
      <>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
          {showExternalIcon && isExternal && (
            <ExternalLink 
              className="inline-block ml-1 h-3 w-3" 
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {isExternal ? ' (opens in new tab)' : ''}
          </span>
        </a>
        {description && (
          <span 
            id={`${linkUrl}-description`} 
            className="sr-only"
          >
            {description}
          </span>
        )}
      </>
    );
  }

  if (to) {
    return (
      <>
        <Link
          to={to}
          {...linkProps}
        >
          {children}
        </Link>
        {description && (
          <span 
            id={`${linkUrl}-description`} 
            className="sr-only"
          >
            {description}
          </span>
        )}
      </>
    );
  }

  // Fallback for hash links or other cases
  return (
    <>
      <a
        href={linkUrl}
        {...linkProps}
      >
        {children}
      </a>
      {description && (
        <span 
          id={`${linkUrl}-description`} 
          className="sr-only"
        >
          {description}
        </span>
      )}
    </>
  );
};

export default AccessibleLink;