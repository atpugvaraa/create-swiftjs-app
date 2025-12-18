import React from "react";
import { ViewProps, Binding } from "@/swiftui/types";

interface ToggleProps extends ViewProps {
  isOn: Binding<boolean>;
  label?: string; // Optional label for the toggle
}

export const Toggle: React.FC<ToggleProps> = ({
  isOn,
  label,
  className = "",
  ...props
}) => {
  const toggleId = React.useId(); // Generate a unique ID for accessibility

  return (
    <div className={`flex items-center space-x-2 ${className}`} {...props}>
      {label && <label htmlFor={toggleId}>{label}</label>}
      <input
        type="checkbox"
        id={toggleId}
        checked={isOn.get()}
        onChange={(e) => isOn.set(e.target.checked)}
        className="sr-only peer" // Hide the default checkbox visually
      />
      <div
        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        onClick={() => isOn.set(!isOn.get())}
      ></div>
    </div>
  );
};
