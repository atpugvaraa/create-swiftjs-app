import React, { CSSProperties } from "react";
import { ViewProps, Binding } from "@/swiftui/types";

interface ColorPickerProps extends ViewProps {
  selection: Binding<string>;
  label?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  children,
  selection,
  label,
  className = "",
  style,
  ...props
}) => {
  const combinedStyle: CSSProperties = {
    ...style,
  };

  return (
    <div
      className={`flex items-center ${className}`}
      style={combinedStyle}
      {...props}
    >
      {label && <label className="mr-2">{label}</label>}
      <input
        type="color"
        value={selection.get()}
        onChange={(e) => selection.set(e.target.value)}
        className="w-8 h-8 border-none"
      />
      {children}
    </div>
  );
};
