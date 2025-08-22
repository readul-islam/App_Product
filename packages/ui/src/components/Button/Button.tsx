import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'dangerOutline'
    | 'successOutline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  iconOnly = false,
}) => {
  const baseClasses = 'btn';

  const variantClasses = {
    primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    secondary:
      'dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500',
    tertiary:
      'dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300',
    danger: 'bg-rose-500 hover:bg-rose-600 text-white',
    dangerOutline:
      'dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    successOutline:
      'dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-emerald-500',
  };

  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn',
    lg: 'btn-lg',
  };

  const disabledClasses =
    'disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none';

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled || loading ? disabledClasses : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    if (loading) {
      return (
        <svg
          className="animate-spin w-4 h-4 fill-current shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      );
    }

    if (icon) {
      return (
        <span className={`shrink-0 ${iconOnly ? 'w-4 h-4' : 'w-4 h-4'}`}>
          {icon}
        </span>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (iconOnly) {
      return renderIcon();
    }

    if (loading) {
      return (
        <>
          {renderIcon()}
          <span className="ml-2">{children}</span>
        </>
      );
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          {renderIcon()}
          <span className="ml-2">{children}</span>
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          <span className="mr-2">{children}</span>
          {renderIcon()}
        </>
      );
    }

    return children;
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};
