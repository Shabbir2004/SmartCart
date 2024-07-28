import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import galaxy from '../assets/galaxy.jpg';
import mac from '../assets/mac.jpg';
import men from '../assets/men.jpg';
import home from '../assets/home.jpg';

const HomePage = () => {
  const items = [
    { image: galaxy, title: 'Samsung Galaxy S23' },
    { image: mac, title: 'Macbook Pro' },
    { image: men, title: 'Men Tshirts' },
    { image: home, title: 'Home Decor' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto mt-10 flex-grow">
        <Carousel items={items} />
      </div>
      <div className="text-center mt-8"> {/* Adjusted margin-top */}
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Our Store</h2>
        <p className="text-xl text-gray-600 mt-12">Discover the best products at unbeatable prices.</p>
      </div>
      <div className="flex justify-center items-center mt-12 space-x-4 py-8"> {/* Adjusted margin-top and padding-bottom */}
        <button
          onClick={() => window.location.href = './map'} 
          className="px-8 py-5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-lg transition duration-300"
        >
          Click here for MAP
        </button>
        <button
          onClick={() => window.location.href = './home'} 
          className="px-14 py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-lg transition duration-300"
        >
          SCAN TO BUY
        </button>
        <button
          onClick={() => window.location.href = './profile'} 
          className="px-6 py-5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 shadow-lg transition duration-300"
        >
          Click here for PROFILE
        </button>
      </div>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
