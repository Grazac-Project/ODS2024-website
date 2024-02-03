import { cn } from "@/utils/twcx";
import React from "react";
import Link from "next/link";

const DropdownLink = ({
  text,
  className,
  ariaLabel,
  icon,
  href,
}: {
  text: string;
  className?: HTMLLinkElement["className"];
  icon?: JSX.Element;
  href: string;
  ariaLabel: string;
}) => {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        " transition-opacity duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full flex items-center gap-x-3 text-header hover:opacity-70 hover:text-primary font-medium font-montserrat ",
        className
      )}
      href={href}
    >
      {icon && icon}
      <span className="text-sm">{text}</span>
    </Link>
  );
};
export default DropdownLink;
