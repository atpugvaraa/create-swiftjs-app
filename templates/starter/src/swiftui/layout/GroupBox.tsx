import React, { CSSProperties } from "react";
import { ViewProps } from "@/swiftui/types";

interface GroupBoxProps extends ViewProps {
  title?: string;
}

export const GroupBox: React.FC<GroupBoxProps> = ({
  children,
  title,
  className = "",
  style,
  ...props
}) => {
  const containerStyle: CSSProperties = {
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#0a0a0a",
    ...style,
  };

  const headerStyle: CSSProperties = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "12px",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  };

  return (
    <div className={`${className}`} style={containerStyle} {...props}>
      {title && <div style={headerStyle}>{title}</div>}
      {children}
    </div>
  );
};
