import React, { useState } from 'react';

const CheckoutPage = () => {
  const [deliveryOption, setDeliveryOption] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide popup after 3 seconds
  };

  const handleEBill = () => {
    alert('E-Bill sent to your registered email!');
  };

  return React.createElement('div', { className: 'p-6 bg-gray-50 min-h-screen' },
    React.createElement('h1', { className: 'text-4xl font-extrabold mb-8 text-center text-gray-800' }, 'CHECK OUT'),
    
    React.createElement('div', { className: 'mb-8 text-center border border-gray-300 rounded-lg p-6 bg-white shadow-lg' },
      React.createElement('h2', { className: 'text-2xl font-bold mb-4 text-gray-700' }, 'Choose Delivery Method'),
      React.createElement('div', { className: 'flex justify-center space-x-4' },
        React.createElement('button', {
          className: `py-3 px-6 w-48 rounded-lg border-2 ${deliveryOption === 'pickup' ? 'bg-blue-500 text-white border-blue-600 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setDeliveryOption('pickup')
        }, 'In-Store Pickup'),
        React.createElement('button', {
          className: `py-3 px-6 w-48 rounded-lg border-2 ${deliveryOption === 'delivery' ? 'bg-blue-500 text-white border-blue-600 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setDeliveryOption('delivery')
        }, 'Home Delivery')
      )
    ),
    
    React.createElement('div', { className: 'mb-8 text-center border border-gray-300 bg-white rounded-lg p-6 shadow-lg' },
      React.createElement('h2', { className: 'text-2xl font-bold mb-4 text-gray-700' }, 'Payment Method'),
      React.createElement('div', { className: 'flex flex-col items-center space-y-4' },
        React.createElement('button', {
          className: `py-3 px-6 w-72 rounded-lg border-2 ${paymentMethod === 'netbanking' ? 'bg-purple-500 text-white border-purple-600 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setPaymentMethod('netbanking')
        }, 'Net Banking'),
        React.createElement('button', {
          className: `py-3 px-6 w-72 rounded-lg border-2 ${paymentMethod === 'upi' ? 'bg-purple-600 text-white border-purple-700 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setPaymentMethod('upi')
        }, 'UPI'),
        React.createElement('button', {
          className: `py-3 px-6 w-72 rounded-lg border-2 ${paymentMethod === 'card' ? 'bg-purple-700 text-white border-purple-800 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setPaymentMethod('card')
        }, 'Credit / Debit Card'),
        deliveryOption === 'delivery' && React.createElement('button', {
          className: `py-3 px-6 w-72 rounded-lg border-2 ${paymentMethod === 'cod' ? 'bg-purple-800 text-white border-purple-900 shadow-md' : 'bg-gray-200 text-gray-700 border-gray-300'}`,
          onClick: () => setPaymentMethod('cod')
        }, 'Cash on Delivery')
      )
    ),
    
    React.createElement('div', { className: 'text-center' },
      React.createElement('button', {
        className: 'py-3 px-6 bg-green-500 text-white rounded-lg border-2 border-green-600 shadow-lg transition-transform transform hover:scale-105',
        onClick: handlePayment,
        disabled: !paymentMethod
      }, 'Proceed to Payment')
    ),
    
    showPopup && React.createElement('div', { className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' },
      React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-lg text-center' },
        React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'Payment Successful'),
        React.createElement('button', {
          className: 'py-2 px-4 bg-blue-500 text-white rounded-lg border-2 border-blue-600',
          onClick: () => setShowPopup(false)
        }, 'Close')
      )
    ),
    
    React.createElement('div', { className: 'mt-8 text-center border border-gray-300 bg-white rounded-lg p-6 shadow-lg' },
      React.createElement('h2', { className: 'text-2xl font-bold mb-4 text-gray-700' }, 'Click Here for E-Bill'),
      React.createElement('button', {
        className: 'py-3 px-6 bg-red-500 text-white rounded-lg border-2 border-red-600 shadow-md hover:bg-red-600',
        onClick: handleEBill
      }, 'Send E-Bill')
    )
  );
};

export default CheckoutPage;
