// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { ScanProvider } from './contexts/ScanContext';
import Header from './components/Header';
import HomePage from './components/Home';
import Profile from './components/Profile';
import Map from './components/Map';
import Login from './components/Login';
import Scanner from './components/Scanner';
import BarcodeGenerator from './components/BarcodeGenerator';
import BarcodeScannerWrapper from './components/BarcodeScannerWrapper';
import Cart from './components/Cart';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <UserProvider>
      <ScanProvider>
        <BrowserRouter>
          <main className="bg-gray-100 text-black min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/scanner" element={<Scanner />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/map" element={<Map />} />
              <Route path="/login" element={<Login />} />
              <Route path="/barcode_scanner" element={<BarcodeScannerWrapper />} />
              <Route path="/barcode_generator" element={<BarcodeGenerator />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ScanProvider>
    </UserProvider>
  );
}

export default App;
