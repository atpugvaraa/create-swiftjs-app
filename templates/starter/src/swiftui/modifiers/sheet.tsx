import React, { useState, useContext, createContext, ReactNode } from "react";

interface SheetContextType {
  showSheet: (content: ReactNode) => void;
  hideSheet: () => void;
}

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a SheetProvider");
  }
  return context;
};

interface SheetProviderProps {
  children: ReactNode;
}

export const SheetProvider: React.FC<SheetProviderProps> = ({ children }) => {
  const [sheetContent, setSheetContent] = useState<ReactNode | null>(null);

  const showSheet = (content: ReactNode) => {
    setSheetContent(content);
  };

  const hideSheet = () => {
    setSheetContent(null);
  };

  return (
    <SheetContext.Provider value={{ showSheet, hideSheet }}>
      {children}
      {sheetContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end"
          onClick={hideSheet}
        >
          <div
            className="bg-white rounded-t-lg w-full max-w-lg p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sheet
          >
            {sheetContent}
          </div>
        </div>
      )}
    </SheetContext.Provider>
  );
};
