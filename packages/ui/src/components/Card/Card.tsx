import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  interactive?: boolean;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  elevation = 'md',
  padding = 'md',
  onClick,
  interactive = false,
}) => {
  const baseClasses =
    'bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200';
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = [
    baseClasses,
    elevationClasses[elevation],
    paddingClasses[padding],
    interactive ? 'cursor-pointer hover:-translate-y-1' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => (
  <div className={`pb-4 mb-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
}) => <div className={className}>{children}</div>;

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => (
  <div className={`pt-4 mt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);
