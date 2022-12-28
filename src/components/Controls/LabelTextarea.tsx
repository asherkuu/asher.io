import React, {forwardRef} from 'react';
import clsx from 'clsx';
import TextareaField, {TextareaFieldTypes} from '#/src/components/Controls/TextareaField';

type LabelTextareaFieldTypes = {
  htmlFor?: string;
  label: string;
  labelClassName?: string;
} & TextareaFieldTypes;

const LabelTextareaField = forwardRef<HTMLTextAreaElement, LabelTextareaFieldTypes>(
  (
    {
      htmlFor = 'text',
      label = 'label',
      labelClassName = undefined,
      id = 'input',
      className = undefined,
      placeholder = undefined,
      ariaDescribedby = undefined,
      required = false,
      rows = 4,
    },
    ref
  ) => {
    return (
      <>
        <label
          htmlFor={htmlFor}
          className={clsx(
            labelClassName,
            'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          )}
        >
          {label}
        </label>
        <TextareaField
          ref={ref}
          id={id}
          ariaDescribedby={ariaDescribedby}
          className={className}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      </>
    );
  }
);

LabelTextareaField.displayName = 'LabelTextareaField';
export default LabelTextareaField;
