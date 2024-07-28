import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const dropdownRef = useRef(null);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setActiveCategory(null);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const ArrowRightIcon = () => (
    <svg
      className="w-4 h-4 ml-2 inline-block"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 5l7 7-7 7"></path>
    </svg>
  );

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between shadow-lg relative z-50">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="text-white text-2xl font-bold">Your Brand</span>
      </div>

      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="relative mx-2" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="text-white bg-orange-700 px-4 py-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          Category
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('electronics');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Electronics <ArrowRightIcon />
              </a>
              {activeCategory === 'electronics' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/electronics/laptop" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Laptop</a>
                  <a href="/electronics/mobile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Mobile</a>
                  <a href="/electronics/television" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Television</a>
                  <a href="/electronics/speakers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Speakers</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('kids-wear');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Kids Wear <ArrowRightIcon />
              </a>
              {activeCategory === 'kids-wear' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/kids-wear/innerwear" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Innerwear</a>
                  <a href="/kids-wear/shirts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Shirts</a>
                  <a href="/kids-wear/pants" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Pants</a>
                  <a href="/kids-wear/trousers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Trousers</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('beauty');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Beauty <ArrowRightIcon />
              </a>
              {activeCategory === 'beauty' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/beauty/makeup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Makeup</a>
                  <a href="/beauty/lashes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Lashes</a>
                  <a href="/beauty/brushes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Brushes</a>
                  <a href="/beauty/eyeliners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Eyeliners</a>
                  <a href="/beauty/kajals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Kajals</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('home-decor');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Home Decor <ArrowRightIcon />
              </a>
              {activeCategory === 'home-decor' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/home-decor/frames" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Frames</a>
                  <a href="/home-decor/showpiece" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Showpiece</a>
                  <a href="/home-decor/table-lamp" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Table Lamp</a>
                  <a href="/home-decor/lights" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Lights</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('sports');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Sports <ArrowRightIcon />
              </a>
              {activeCategory === 'sports' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/sports/yoga-mat" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Yoga Mat</a>
                  <a href="/sports/carrom" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Carrom</a>
                  <a href="/sports/chess" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Chess</a>
                  <a href="/sports/badminton-rackets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Badminton Rackets</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick('stationery');
                }}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition text-left flex justify-between items-center"
              >
                Stationery <ArrowRightIcon />
              </a>
              {activeCategory === 'stationery' && (
                <div className="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a href="/stationery/books" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Books</a>
                  <a href="/stationery/pens" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Pens</a>
                  <a href="/stationery/pencils" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Pencils</a>
                  <a href="/stationery/papers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Papers</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-6">
        <a
          href="/login"
          className="text-white bg-orange-700 px-4 py-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          Login
        </a>
        <a href="/cart">
          <img src={cart} alt="Cart" className="h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
