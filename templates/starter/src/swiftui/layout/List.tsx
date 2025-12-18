import React from "react";
import { ViewProps } from "@/swiftui/types";

export const List: React.FC<ViewProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <ul className={`divide-y divide-gray-200 ${className}`} {...props}>
      {React.Children.map(children, (child) => (
        <li className="py-2">{child}</li>
      ))}
    </ul>
  );
};
