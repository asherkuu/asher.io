import React, {forwardRef} from "react";
import clsx from "clsx";

export type TextInputProps = {
  type?: string;
  id: string;
  className?: string;
  placeholder?: string;
  ariaDescribedby?: string;
  required?: boolean;
  maxLength?: number;
  isOveride?: boolean;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = "text",
      id = "input",
      className = undefined,
      placeholder = undefined,
      ariaDescribedby = "text-input",
      required = false,
      maxLength = undefined,
      isOveride = false,
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        id={id}
        aria-describedby={ariaDescribedby}
        className={clsx(
          !isOveride &&
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className,
        )}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
      />
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
