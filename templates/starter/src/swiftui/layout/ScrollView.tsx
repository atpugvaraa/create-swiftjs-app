import React from "react";
import { ViewProps } from "@/swiftui/types";

export const ScrollView: React.FC<ViewProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`overflow-y-auto flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};
