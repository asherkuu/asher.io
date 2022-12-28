import React, {forwardRef} from 'react';
import clsx from 'clsx';
import TextInput, {TextInputTypes} from '#/src/components/Controls/TextInput';

type LabelInputTypes = {
  htmlFor?: string;
  label: string;
  labelClassName?: string;
} & TextInputTypes;

const LabelInput = forwardRef<HTMLInputElement, LabelInputTypes>(
  (
    {
      htmlFor = 'text',
      label = 'label',
      labelClassName = undefined,
      type = 'text',
      id = 'input',
      className = undefined,
      placeholder = undefined,
      ariaDescribedby = undefined,
      required = false,
      maxLength = undefined,
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
        <TextInput
          ref={ref}
          type={type}
          id={id}
          ariaDescribedby={ariaDescribedby}
          className={className}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
        />
      </>
    );
  }
);

LabelInput.displayName = 'LabelInput';
export default LabelInput;
