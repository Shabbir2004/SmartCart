import React from 'react';
import map from '../assets/map.png';

export default function Map() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold px-4 py-10">
        EXPLORE THE STORE WITH THIS MAP!
      </h1>
      <p className='font-semibold text-xl px-10 py-6'>Store name: Walmart, USA</p>
      <img src={map} alt="Store Map" className="w-full max-w-4xl h-auto mx-auto" />
    </div>
  );
}
