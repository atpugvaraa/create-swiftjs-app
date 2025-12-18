import React from "react";
import { ViewProps } from "@/swiftui/types";

interface CapsuleProps extends ViewProps {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

export const Capsule: React.FC<CapsuleProps> = ({
  fill,
  width,
  height,
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

  return (
    <div
      className={`rounded-full ${className}`}
      style={inlineStyle}
      {...props}
    />
  );
};
