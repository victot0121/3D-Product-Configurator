import React, { createContext, useContext, useState } from 'react';

interface CustomizationContextType {
  customization: {
    color: string;
    size: string;
    texture: string;
  };
  setCustomization: React.Dispatch<
    React.SetStateAction<{
      color: string;
      size: string;
      texture: string;
    }>
  >;
}

const CustomizationContext = createContext<CustomizationContextType | undefined>(
  undefined
);

export const CustomizationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [customization, setCustomization] = useState({
    color: '#ffffff',
    size: 'Medium',
    texture: 'Smooth',
  });

  return (
    <CustomizationContext.Provider value={{ customization, setCustomization }}>
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error('useCustomization must be used within a CustomizationProvider');
  }
  return context;
};
