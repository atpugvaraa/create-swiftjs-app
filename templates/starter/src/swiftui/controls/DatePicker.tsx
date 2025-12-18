import React, { CSSProperties } from "react";
import { ViewProps, Binding } from "@/swiftui/types";

interface DatePickerProps extends ViewProps {
  selection: Binding<Date>;
  label?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    selection.set(new Date(dateValue));
  };

  // Format the date to YYYY-MM-DD for the input value
  const dateString = selection.get().toISOString().split("T")[0];

  return (
    <div
      className={`flex flex-col ${className}`}
      style={combinedStyle}
      {...props}
    >
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type="date"
        value={dateString}
        onChange={handleDateChange}
        className="border rounded px-2 py-1"
      />
      {children}
    </div>
  );
};
