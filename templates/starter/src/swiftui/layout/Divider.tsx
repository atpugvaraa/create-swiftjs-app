import React from "react";
import { ViewProps } from "@/swiftui/types";

export const Divider: React.FC<ViewProps> = ({ className = "", ...props }) => {
  return <div className={`w-full h-px bg-gray-200 ${className}`} {...props} />;
};
