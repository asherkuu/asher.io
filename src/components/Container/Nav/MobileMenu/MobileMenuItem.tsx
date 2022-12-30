import React from "react";
import Link from "next/link";

type MobileMenuItemProps = {
  delay: string;
  href: string;
  text: string;
  onClick: () => void;
};

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  delay = "0ms",
  text,
  href = "#",
  onClick,
}) => {
  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
      style={{transitionDelay: delay}}
      onClick={onClick}
    >
      <Link href={href} className="flex w-auto p-2" passHref>
        {text}
      </Link>
    </li>
  );
};

export default MobileMenuItem;
