import React, { CSSProperties } from "react";
import { ViewProps } from "@/swiftui/types";

interface CircleProps extends ViewProps {
  size?: number | string;
  fill?: string;
}

export const Circle: React.FC<CircleProps> = ({
  size = 50,
  fill,
  className = "",
  style,
  ...props
}) => {
  const combinedStyle: CSSProperties = {
    backgroundColor: fill,
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    ...style,
  };

  return (
    <div
      className={`rounded-full ${className}`}
      style={combinedStyle}
      {...props}
    />
  );
};
