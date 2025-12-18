import React from "react";
import { ViewProps, Binding } from "@/swiftui/types";

interface SecureFieldProps extends ViewProps {
  text: Binding<string>;
  placeholder?: string;
}

export const SecureField: React.FC<SecureFieldProps> = ({
  text,
  placeholder,
  className = "",
  style,
  ...props
}) => {
  return (
    <input
      type="password"
      value={text.get()}
      onChange={(e) => text.set(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow sm:text-sm ${className}`}
      style={style}
      {...props}
    />
  );
};
