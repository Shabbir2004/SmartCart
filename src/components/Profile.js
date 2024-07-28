import React from 'react';
import { useUser } from '../UserContext';

export default function Profile() {
  const { user } = useUser();

  const handleOrderHistory = () => {
    alert('Show Order History');
  };

  const handleSecurity = () => {
    alert('Show Security Settings');
  };

  const handleOffersRedeemed = () => {
    alert('Show Offers Redeemed');
  };

  const handleDeleteAccount = () => {
    alert('Delete Account');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">User Profile</h1>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <div className="bg-slate-300 p-6 rounded-lg shadow-md w-full max-w-lg">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Username</h2>
            <p className="text-gray-700">{user.username}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Mobile</h2>
            <p className="text-gray-700">{user.mobile}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Address</h2>
            <p className="text-gray-700">{user.address}</p>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleOrderHistory}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Your Orders
            </button>
            <button
              onClick={handleSecurity}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Security & Password
            </button>
            <button
              onClick={handleOffersRedeemed}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Offers Redeemed
            </button>
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
