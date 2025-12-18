import React, { createContext, ReactNode, useContext } from "react";

// Define the shape of your environment values
interface EnvironmentValues {
  [key: string]: unknown;
}

// Create the context with a default value
export const EnvironmentContext = createContext<EnvironmentValues>({});

interface EnvironmentProviderProps {
  values: EnvironmentValues;
  children: ReactNode;
}

export const EnvironmentProvider: React.FC<EnvironmentProviderProps> = ({
  values,
  children,
}) => {
  const parentValues = useContext(EnvironmentContext);
  const combinedValues = { ...parentValues, ...values };

  return (
    <EnvironmentContext.Provider value={combinedValues}>
      {children}
    </EnvironmentContext.Provider>
  );
};
