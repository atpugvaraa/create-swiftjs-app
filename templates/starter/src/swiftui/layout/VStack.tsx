import React, { CSSProperties } from "react";
import { ViewProps } from "@/swiftui/types";

interface VStackProps extends ViewProps {
  alignment?: "leading" | "center" | "trailing";
  spacing?: number;
}

export const VStack: React.FC<VStackProps> = ({
  children,
  alignment = "center",
  spacing = 0,
  className = "",
  style,
  ...props
}) => {
  const alignMap = {
    leading: "items-start",
    center: "items-center",
    trailing: "items-end",
  };

  return (
    <div
      className={`flex flex-col ${alignMap[alignment]} ${className}`}
      style={{ gap: `${spacing}px`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
