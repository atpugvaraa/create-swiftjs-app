import React, { CSSProperties } from "react";
import { ViewProps } from "@/swiftui/types";

interface ProgressViewProps extends ViewProps {
  value: number; // Progress value between 0 and 1
  total?: number; // Total value for calculating progress (default: 1)
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  value,
  total = 1,
  className = "",
  style,
  ...props
}) => {
  // Ensure value is within bounds
  const clampedValue = Math.max(0, Math.min(1, value / total));

  const containerStyle: CSSProperties = {
    width: "100%",
    height: "4px",
    backgroundColor: "#e5e7eb",
    borderRadius: "2px",
    overflow: "hidden",
    ...style,
  };

  const progressStyle: CSSProperties = {
    width: `${clampedValue * 100}%`,
    height: "100%",
    backgroundColor: "#3b82f6",
    borderRadius: "2px",
    transition: "width 0.3s ease",
  };

  return (
    <div
      className={`${className}`}
      style={containerStyle}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={1}
      {...props}
    >
      <div style={progressStyle} />
    </div>
  );
};
