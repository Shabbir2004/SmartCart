import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Header from './components/Header';
import HomePage from './components/Home';
import Profile from './components/Profile';
import Map from './components/Map';
import Login from './components/Login';
// import CheckoutPage from './components/CheckoutPage';
import Scanner from './components/Scanner';
import BarcodeScanner from './components/BarcodeScanner';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <main className="bg-gray-100 text-black min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/home" element={<HomePage />} />

      <Route path="/scanner" element={<Scanner />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/map" element={<Map />} />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/barcode_scanner" element={<BarcodeScanner />} />
          </Routes>
        </main>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
