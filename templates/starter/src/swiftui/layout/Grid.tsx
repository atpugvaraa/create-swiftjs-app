import React from "react";
import { ViewProps } from "@/swiftui/types";

interface GridProps extends ViewProps {
  columns?: number;
  rows?: number;
  spacing?: number; // Gap between grid items
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns,
  rows,
  spacing = 0,
  className = "",
  style,
  ...props
}) => {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gap: `${spacing}px`,
    ...style,
  };

  if (columns) {
    gridStyle.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
  }
  if (rows) {
    gridStyle.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
  }

  return (
    <div className={className} style={gridStyle} {...props}>
      {children}
    </div>
  );
};
