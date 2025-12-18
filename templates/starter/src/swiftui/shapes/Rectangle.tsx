import React from "react";
import { ViewProps } from "@/swiftui/types";

interface RectangleProps extends ViewProps {
  fill?: string;
  width?: string | number;
  height?: string | number;
}

export const Rectangle: React.FC<RectangleProps> = ({
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

  return <div className={className} style={inlineStyle} {...props} />;
};
