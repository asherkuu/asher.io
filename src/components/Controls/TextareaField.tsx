import clsx from 'clsx';
import React, {forwardRef} from 'react';

export type TextareaFieldTypes = {
  id: string;
  className?: string;
  placeholder?: string;
  ariaDescribedby?: string;
  required?: boolean;
  rows?: number;
};

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldTypes>(
  (
    {
      id = 'input',
      className = undefined,
      placeholder = undefined,
      ariaDescribedby = 'text-input',
      required = false,
      rows = 4,
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        id={id}
        aria-describedby={ariaDescribedby}
        className={clsx(
          className,
          'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        )}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    );
  }
);

TextareaField.displayName = 'TextareaField';
export default TextareaField;
