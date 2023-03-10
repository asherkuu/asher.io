import clsx from "clsx";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "primary" | "default";
  label: React.ReactNode;
  hasBorder?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  ariaLabelledby?: string;
};

const variantTheme = {
  primary:
    "text-white bg-peri-secondary-0 hover:bg-peri-secondary-700 focus:ring-4 focus:outline-none focus:ring-peri-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-peri-secondary-0 dark:hover:bg-peri-600 dark:focus:ring-peri-500",
  default:
    "text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700",
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className = undefined,
  variant = "default",
  label = "button",
  hasBorder = false,
  onClick,
  ariaLabelledby = "button",
}) => {
  return (
    <button
      type={type}
      className={clsx(className, hasBorder && "border border-gray-200", variantTheme[variant])}
      onClick={onClick}
      aria-label={ariaLabelledby}
      aria-labelledby={ariaLabelledby}
    >
      {label}
    </button>
  );
};

export default Button;
