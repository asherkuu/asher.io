import React, {forwardRef} from "react";
import clsx from "clsx";
import TextareaField, {TextareaFieldProps} from "#/src/components/Controls/TextareaField";

type LabelTextareaFieldProps = {
  htmlFor?: string;
  label: string;
  labelClassName?: string;
} & TextareaFieldProps;

const LabelTextareaField = forwardRef<HTMLTextAreaElement, LabelTextareaFieldProps>(
  (
    {
      label = "label",
      labelClassName = undefined,
      id = "input",
      className = undefined,
      placeholder = undefined,
      ariaDescribedby = undefined,
      required = false,
      rows = 4,
    },
    ref,
  ) => {
    return (
      <>
        <label
          htmlFor={id}
          className={clsx(
            labelClassName,
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
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
  },
);

LabelTextareaField.displayName = "LabelTextareaField";
export default LabelTextareaField;
