import React from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScanner from './BarcodeScanner'; // Adjust the path as needed

const BarcodeScannerWrapper = () => {
  const navigate = useNavigate();
  return <BarcodeScanner navigate={navigate} />;
};

export default BarcodeScannerWrapper;
