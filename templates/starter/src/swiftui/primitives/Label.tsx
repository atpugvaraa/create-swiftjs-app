import React from "react";
import { ViewProps } from "@/swiftui/types";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface LabelProps extends ViewProps {
  title: string;
  systemImage: keyof typeof LucideIcons; // Icon name from lucide-react
}

export const Label: React.FC<LabelProps> = ({
  title,
  systemImage,
  className = "",
  style,
  ...props
}) => {
  const IconComponent = LucideIcons[systemImage] as LucideIcon;

  if (!IconComponent || typeof IconComponent !== "function") {
    console.warn(`Icon "${systemImage}" not found in lucide-react.`);
    return (
      <div
        className={`flex items-center space-x-2 ${className}`}
        style={style}
        {...props}
      >
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center space-x-2 ${className}`}
      style={style}
      {...props}
    >
      <IconComponent size={16} />
      <span>{title}</span>
    </div>
  );
};
