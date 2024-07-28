import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core'; // Assuming you still want to use Material UI for Typography


const Home = () => {
  const navigate = useNavigate();

  // const goToBarcodeGenerator = () => {
  //   navigate('/barcode_generator');
  // };

  const goToBarcodeScanner = () => {
    navigate('/barcode_scanner');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Typography className="mb-10 text-3xl font-bold text-gray-800">React Barcode</Typography>
      <div className="flex flex-wrap justify-center gap-6">
        {/* <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={goToBarcodeGenerator}
          className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-upc" viewBox="0 0 16 16">
            <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
          </svg>
          <span className="mt-2 text-lg">Barcode Generator</span>
        </Button> */}
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={goToBarcodeScanner}
          className="flex flex-col items-center bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-upc-scan" viewBox="0 0 16 16">
            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
          </svg>
          <span className="mt-2 text-lg">Barcode Scanner</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
