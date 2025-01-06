// App.tsx
import React from 'react';
import { CustomizationProvider, useCustomization } from './context/CustomizationContext';
import Scene from './components/Scene';
import CustomizationForm from './components/CustomizationForm';

const App: React.FC = () => {
  const { customization, setCustomization } = useCustomization();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 3D Configurator */}
      <div style={{ flex: 1 }}>
        <Scene
          modelColor={customization.color}
          modelSize={customization.size}
          modelTexture={customization.texture}
        />
      </div>

      {/* Customization Form */}
      <div style={{ width: '300px', padding: '20px' }}>
        <CustomizationForm onSubmit={setCustomization} />
      </div>
    </div>
  );
};

// Wrap the entire application with CustomizationProvider
const AppWrapper: React.FC = () => {
  return (
    <CustomizationProvider>
      <App />
    </CustomizationProvider>
  );
};

export default AppWrapper;
