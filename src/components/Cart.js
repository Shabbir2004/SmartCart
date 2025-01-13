import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleBuyAll = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md flex items-center">
              <img src={item.imageUrl} alt={item.name} className="h-32 w-32 object-cover mr-4" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">RFID: {item.rfid}</p>
                <p className="text-gray-700">Price: Rs {item.price}</p>
                {/* <p className="text-gray-700">Quantity: {item.quantity}</p> */}
              </div>
              <button 
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleBuyAll}
      >
        Buy All Items
      </button>
    </div>
  );
};

export default Cart;
