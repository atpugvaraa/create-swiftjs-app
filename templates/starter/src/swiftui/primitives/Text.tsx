import React from "react";
import { ViewProps } from "@/swiftui/types";

interface TextProps extends ViewProps {
  content: string;
  font?: "largeTitle" | "title" | "body" | "caption";
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  content,
  font = "body",
  color,
  className = "",
  style,
  ...props
}) => {
  const fontMap = {
    largeTitle: "text-5xl font-bold",
    title: "text-2xl font-bold",
    body: "text-base",
    caption: "text-xs text-gray-500",
  };

  return (
    <span
      className={`${fontMap[font]} ${className}`}
      style={{ color: color, ...style }}
      {...props}
    >
      {content}
    </span>
  );
};
