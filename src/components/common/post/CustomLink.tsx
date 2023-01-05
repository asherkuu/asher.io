"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const CustomLink: React.FC = (props: any) => {
  const pathname = usePathname();
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    const link = pathname + href;
    return (
      <Link {...props} href={link}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;
