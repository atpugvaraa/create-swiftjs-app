"use client";

import React, { useState } from "react";
import { ViewProps } from "@/swiftui/types";

interface TabViewProps extends ViewProps {
  initialTab?: number;
  labels: string[]; // Labels for each tab
}

export const TabView: React.FC<TabViewProps> = ({
  children,
  initialTab = 0,
  labels,
  className = "",
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`flex flex-col ${className}`} {...props}>
      <div className="flex border-b border-gray-200">
        {labels.map((label, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="p-4">{childrenArray[activeTab]}</div>
    </div>
  );
};
