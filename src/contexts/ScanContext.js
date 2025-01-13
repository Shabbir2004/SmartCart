import React, { createContext, useState } from 'react';

const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
  const [scannedData, setScannedData] = useState(null);

  return (
    <ScanContext.Provider value={{ scannedData, setScannedData }}>
      {children}
    </ScanContext.Provider>
  );
};

export default ScanContext;
