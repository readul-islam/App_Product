import React, { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
  success?: string;
  supportingText?: string;
  prefixText?: React.ReactNode;
  suffixText?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  successClassName?: string;
  supportingTextClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required = false,
      error,
      success,
      supportingText,
      prefixText,
      suffixText,
      icon,
      iconPosition = 'left',
      inputSize = 'md',
      fullWidth = false,
      className = '',
      containerClassName = '',
      labelClassName = '',
      inputClassName = '',
      errorClassName = '',
      successClassName = '',
      supportingTextClassName = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    };

    const baseInputClasses =
      'form-input  w-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-500';

    const stateClasses = error
      ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500'
      : success
      ? 'border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500'
      : '';

    const disabledClasses = disabled
      ? 'disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed'
      : '';

    const inputClasses = [
      baseInputClasses,
      sizeClasses[inputSize],
      stateClasses,
      disabledClasses,
      fullWidth ? 'w-full' : '',
      inputClassName,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const renderPrefix = () => {
      if (prefixText) {
        return (
          <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
            <span className="text-sm text-slate-400 dark:text-slate-500 font-medium px-3">
              {prefixText}
            </span>
          </div>
        );
      }
      return null;
    };

    const renderSuffix = () => {
      if (suffixText) {
        return (
          <div className="absolute inset-0 left-auto flex items-center pointer-events-none">
            <span className="text-sm text-slate-400 dark:text-slate-500 font-medium px-3">
              {suffixText}
            </span>
          </div>
        );
      }
      return null;
    };

    const renderIcon = () => {
      if (icon) {
        return (
          <div
            className={`absolute inset-0 ${
              iconPosition === 'left' ? 'right-auto' : 'left-auto'
            } flex items-center pointer-events-none`}
          >
            <span
              className={`${
                iconPosition === 'left' ? 'ml-3 mr-2' : 'mr-3 ml-2'
              }`}
            >
              {icon}
            </span>
          </div>
        );
      }
      return null;
    };

    const getPaddingClasses = () => {
      let paddingClasses = '';

      if (prefixText || (icon && iconPosition === 'left')) {
        paddingClasses += iconPosition === 'left' ? '!pl-9' : '!pl-12';
      }

      if (suffixText || (icon && iconPosition === 'right')) {
        paddingClasses += iconPosition === 'right' ? '!pr-9' : '!pr-8';
      }

      return paddingClasses;
    };

    const finalInputClasses = [inputClasses, getPaddingClasses()]
      .filter(Boolean)
      .join(' ');

    const hasRelativePositioning = prefixText || suffixText || icon;

    return (
      <div className={`${containerClassName}`}>
        {label && (
          <label className={`block text-sm font-medium mb-1 ${labelClassName}`}>
            {label}
            {required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}

        <div className={hasRelativePositioning ? 'relative' : ''}>
          <input
            ref={ref}
            className={finalInputClasses}
            disabled={disabled}
            {...props}
          />
          {renderPrefix()}
          {renderSuffix()}
          {renderIcon()}
        </div>

        {supportingText && (
          <div
            className={`text-xs mt-1 text-slate-500 dark:text-slate-400 ${supportingTextClassName}`}
          >
            {supportingText}
          </div>
        )}

        {error && (
          <div className={`text-xs mt-1 text-rose-500 ${errorClassName}`}>
            {error}
          </div>
        )}

        {success && (
          <div className={`text-xs mt-1 text-emerald-500 ${successClassName}`}>
            {success}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
