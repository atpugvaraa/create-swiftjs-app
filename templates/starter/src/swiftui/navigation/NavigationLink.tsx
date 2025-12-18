import React from "react";
import Link from "next/link";
import { ViewProps } from "@/swiftui/types";

interface NavigationLinkProps extends ViewProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  replace?: boolean;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  target = "_self",
  replace = false,
  className = "",
  style,
  ...props
}) => {
  return (
    <Link
      href={href}
      target={target}
      replace={replace}
      className={`no-underline text-inherit inline-block ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
};
