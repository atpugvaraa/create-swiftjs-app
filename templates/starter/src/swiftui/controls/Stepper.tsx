import React from "react";
import { ViewProps } from "@/swiftui/types";
import { Plus, Minus } from "lucide-react"; // Assuming lucide-react is available

interface StepperProps extends ViewProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  label?: string; // Optional label for the stepper
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  className = "",
  ...props
}) => {
  const increment = () => {
    if (value + step <= max) {
      onChange(value + step);
    } else {
      onChange(max);
    }
  };

  const decrement = () => {
    if (value - step >= min) {
      onChange(value - step);
    } else {
      onChange(min);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`} {...props}>
      {label && <span className="mr-2">{label}</span>}
      <button
        onClick={decrement}
        disabled={value === min}
        className="p-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        <Minus size={16} />
      </button>
      <span className="font-medium">{value}</span>
      <button
        onClick={increment}
        disabled={value === max}
        className="p-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};
