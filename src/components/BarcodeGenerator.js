import React, { useState } from 'react';
import { Fab, TextField, TextareaAutosize } from '@material-ui/core';
import { ArrowBack, GetApp } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useBarcode } from '@createnextapp/react-barcode';

function BarcodeGenerator() {
    const [barcode, setBarcode] = useState('lintangwisesa');

    const handleChange = (event) => {
        setBarcode(event.target.value ? event.target.value : '');
    };

    const { inputRef } = useBarcode({
        value: barcode,
        options: {
            background: '#ffffff',
        }
    });

    const downloadBarcode = () => {
        const canvas = document.getElementById("mybarcode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "mybarcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
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
            <span className="text-xl font-semibold mb-6">Barcode Generator</span>
            
            <div className="mb-6">
                <TextField
                    onChange={handleChange}
                    value={barcode}
                    label="Barcode content"
                    variant="outlined"
                    color="secondary"
                    className="w-full max-w-md"
                />
            </div>
            
            <div className="mb-6">
                {barcode !== '' ? (
                    <canvas id="mybarcode" ref={inputRef} className="mx-auto" />
                ) : (
                    <p>No barcode preview</p>
                )}
            </div>
            
            <div className="flex items-center space-x-4">
                {barcode && (
                    <>
                        <TextareaAutosize
                            className="font-medium w-60 h-24 p-2 border border-gray-300 rounded-md"
                            rowsMax={4}
                            defaultValue={barcode}
                            value={barcode}
                        />
                        <Fab onClick={downloadBarcode} color="secondary">
                            <GetApp />
                        </Fab>
                    </>
                )}
            </div>
        </div>
    );
}

export default BarcodeGenerator;
