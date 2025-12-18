import React from "react";
import { ViewProps } from "@/swiftui/types";

interface RoundedRectangleProps extends ViewProps {
  fill?: string;
  width?: string | number;
  height?: string | number;
  cornerRadius?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | number;
}

export const RoundedRectangle: React.FC<RoundedRectangleProps> = ({
  fill,
  width,
  height,
  cornerRadius,
  className = "",
  style,
  ...props
}) => {
  const inlineStyle: React.CSSProperties = {
    backgroundColor: fill,
    width,
    height,
    ...style,
  };

  let roundedClass = "";
  if (typeof cornerRadius === "number") {
    inlineStyle.borderRadius = `${cornerRadius}px`;
  } else if (cornerRadius) {
    roundedClass = `rounded-${cornerRadius}`;
  } else {
    roundedClass = "rounded-md"; // Default roundedness
  }

  return (
    <div
      className={`${roundedClass} ${className}`}
      style={inlineStyle}
      {...props}
    />
  );
};
