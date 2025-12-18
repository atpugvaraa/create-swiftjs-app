import React, { CSSProperties } from "react";
import { ViewProps, Binding } from "@/swiftui/types";

interface PickerProps extends ViewProps {
  selection: Binding<string>;
  label?: string;
  options: { label: string; value: string }[];
}

export const Picker: React.FC<PickerProps> = ({
  children,
  selection,
  label,
  options,
  className = "",
  style,
  ...props
}) => {
  const combinedStyle: CSSProperties = {
    ...style,
  };

  return (
    <div
      className={`flex flex-col ${className}`}
      style={combinedStyle}
      {...props}
    >
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <select
        value={selection.get()}
        onChange={(e) => selection.set(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {children}
    </div>
  );
};
