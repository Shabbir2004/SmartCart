import React, { Component } from 'react';
import Scanner from './Scanner';
import { Fab, TextareaAutosize, Paper } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link } from "react-router-dom";

class BarcodeScanner extends Component {
  state = {
    results: [],
    scanning: false,
  };

  _scan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  _onDetected = (result) => {
    this.setState({ results: [] });
    this.setState({ results: this.state.results.concat([result]) });
  };

  render() {
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
          <Scanner onDetected={this._onDetected} />
        </Paper>

        <TextareaAutosize
          className="font-medium w-full max-w-md h-24 p-2 border border-black-300 rounded-md text-center"
          rowsMax={4}
          defaultValue={'No data scanned'}
          value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />
      </div>
    );
  }
}

export default BarcodeScanner;