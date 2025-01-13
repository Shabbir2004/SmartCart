import React, { useContext, useState } from 'react';
import { Fab, TextareaAutosize, Paper } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Scanner from './Scanner';
import ScanContext from '../contexts/ScanContext';
import axios from 'axios';

const BarcodeScanner = ({ navigate }) => {
  const { setScannedData } = useContext(ScanContext);
  const [results, setResults] = useState([]);

  const _onDetected = (result) => {
    setResults([result]);
    if (result) {
      const barcode = result.codeResult.code;
      axios.get(`http://localhost:5000/product/${barcode}`)
        .then(response => {
          setScannedData(response.data);
          console.log('Navigating to /cart'); // Debug log
          navigate('/cart');
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="mb-4">
        <Link to="/">
          <Fab color="secondary">
            <ArrowBack />
          </Fab>
        </Link>
      </div>
      <span className="text-xl font-semibold mb-6">Barcode Scanner</span>

      <Paper variant="outlined" className="w-full max-w-xl h-80 mb-6">
        <Scanner onDetected={_onDetected} />
      </Paper>

      <TextareaAutosize
        className="font-medium w-full max-w-md h-24 p-2 border border-black-300 rounded-md text-center"
        rowsMax={4}
        defaultValue={'No data scanned'}
        value={results[0] ? results[0].codeResult.code : 'No data scanned'}
      />
    </div>
  );
};

export default BarcodeScanner;
