import React, { useState, useContext, createContext, ReactNode } from "react";

interface AlertOptions {
  title: string;
  message?: string;
  buttons: {
    text: string;
    role?: "cancel" | "destructive";
    onClick?: () => void;
  }[];
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertOptions | null>(null);

  const showAlert = (options: AlertOptions) => {
    setAlert(options);
  };

  const handleClose = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 w-80">
            <h3 className="font-bold text-lg">{alert.title}</h3>
            {alert.message && <p className="text-sm mt-2">{alert.message}</p>}
            <div className="mt-4 flex justify-end space-x-2">
              {alert.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (button.onClick) button.onClick();
                    handleClose();
                  }}
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    button.role === "destructive"
                      ? "bg-red-500 text-white"
                      : button.role === "cancel"
                        ? "bg-gray-200"
                        : "bg-blue-500 text-white"
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};
