// import React, { useState } from 'react';

// const CheckoutPage = () => {
//   const [deliveryOption, setDeliveryOption] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [paymentDone, setPaymentDone] = useState(false);

//   const handlePayment = () => {
//     setShowPopup(true);
//     setPaymentDone(true);
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 3000); // Hide popup after 3 seconds
//   };

//   const handleEBill = () => {
//     alert('E-Bill sent to your registered email!');
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-center py-0 px-4">CHECK OUT</h1>
      
//       <div className="mb-6 text-center border-2 border-gray-300 rounded-lg p-4 bg-slate-300">
//         <h2 className="text-2xl mb-4 py-3 text-center font-bold">Choose Delivery Method</h2>
//         <div className="flex justify-center space-x-6">
//           <button
//             className={`py-2 px-4 w-48 rounded border-2 border-gray-400 ${deliveryOption === 'pickup' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
//             onClick={() => setDeliveryOption('pickup')}
//           >
//             In-Store Pickup
//           </button>
//           <button
//             className={`py-2 px-4 w-48 rounded border-2 border-gray-400 ${deliveryOption === 'delivery' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
//             onClick={() => setDeliveryOption('delivery')}
//           >
//             Home Delivery
//           </button>
//         </div>
//       </div>
      
//       <div className="mb-6 text-center border-2 border-gray-300 bg-slate-300 rounded-lg p-4">
//         <h2 className="text-2xl font-bold text-center mb-4 py-4">Payment Method</h2>
//         <div className="flex flex-col items-center space-y-4">
//           <button
//             className={`py-2 px-4 w-64 rounded border-2 border-gray-400 ${paymentMethod === 'netbanking' ? 'bg-pink-300 text-white' : 'bg-gray-300'}`}
//             onClick={() => setPaymentMethod('netbanking')}
//           >
//             Net Banking
//           </button>
//           <button
//             className={`py-2 px-4 w-64 rounded border-2 border-gray-400 ${paymentMethod === 'upi' ? 'bg-pink-400 text-white' : 'bg-gray-300'}`}
//             onClick={() => setPaymentMethod('upi')}
//           >
//             UPI
//           </button>
//           <button
//             className={`py-2 px-4 w-64 rounded border-2 border-gray-400 ${paymentMethod === 'card' ? 'bg-pink-500 text-white' : 'bg-gray-300'}`}
//             onClick={() => setPaymentMethod('card')}
//           >
//             Credit / Debit Card
//           </button>
//           {deliveryOption === 'delivery' && (
//             <button
//               className={`py-2 px-4 w-64 rounded border-2 border-gray-400 ${paymentMethod === 'cod' ? 'bg-pink-600 text-white' : 'bg-gray-300'}`}
//               onClick={() => setPaymentMethod('cod')}
//             >
//               Cash on Delivery
//             </button>
//           )}
//         </div>
//       </div>
      
//       <div className="text-center">
//         <button
//           className="py-2 px-4 bg-green-600 text-white rounded border-2 border-gray-400"
//           onClick={handlePayment}
//           disabled={!paymentMethod}
//         >
//           Proceed to Payment
//         </button>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Payment Successful</h3>
//             <button className="py-2 px-4 bg-blue-500 text-white rounded border-2 border-gray-400" onClick={() => setShowPopup(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="mt-6 text-center border-2 border-gray-300 bg-slate-300 rounded-lg p-4">
//         <h2 className="text-2xl font-bold mb-4 py-2">Click Here for E-Bill</h2>
//         <button
//           className="py-2 px-4 bg-red-500 text-white rounded border-2 border-gray-400"
//           onClick={handleEBill}
//         >
//           Send E-Bill
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
