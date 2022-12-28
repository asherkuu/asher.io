import clsx from 'clsx';
import React from 'react';

type ButtonTypes = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  variant?: 'primary' | 'default';
  label: React.ReactNode;
  hasBorder?: boolean;
};

const variantTheme = {
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  default:
    'text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700',
};

const Button: React.FC<ButtonTypes> = ({
  type = 'button',
  className = undefined,
  variant = 'default',
  label = 'button',
  hasBorder = false,
}) => {
  return (
    <button
      type={type}
      className={clsx(className, hasBorder && 'border border-gray-200', variantTheme[variant])}
    >
      {label}
    </button>
  );
};

export default Button;
