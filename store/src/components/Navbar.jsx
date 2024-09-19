import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageIcon from '@/assets/Language.png';
import SearchIcon from '@/assets/Search.png';
import HeartIcon from '@/assets/Heart.png';
import CartIcon from '@/assets/Cart.png';
import ProfileIcon from '@/assets/Profile.png';

const Navbar = () => {
  const [showUserTypeBar, setShowUserTypeBar] = useState(true);
  const [userType, setUserType] = useState('');

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setShowUserTypeBar(false); // Automatically hides the selection bar after choice
  };

  const handleCloseUserTypeBar = () => {
    setShowUserTypeBar(false); // Hides the user type selection bar when close button is clicked
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-neutral-800 text-white w-full py-4 fixed top-0 left-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left side: Logo */}
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold">EGA</div>
            <div className="text-xl text-gray-400">|</div>

            <div className="flex items-center bg-gray-600 rounded-full px-3 py-1 h-8 w-48">
              <img src={SearchIcon} alt="Search" className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white outline-none text-sm w-full"
              />
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-green-600 transition duration-300"> Home</Link>
              </li>
              <li>
                <Link to="/Filter" className="hover:text-green-600 transition duration-300"> Filter</Link>
              </li>
            </ul>

          </div>

          {/* Right side: Home, Store, and Icons */}

          <div className="flex items-center space-x-6">
            <Link to="/cart">
              <img
                src={CartIcon}
                alt="Cart"
                className="w-6 h-6 cursor-pointer"

              />
            </Link>

            <img
              src={LanguageIcon}
              alt="Language"
              className="w-6 h-6 cursor-pointer"
              onClick={() => alert('Language clicked')}
            />
            <img
              src={ProfileIcon}
              alt="Profile"
              className="w-6 h-6 cursor-pointer"
              onClick={() => alert('Profile clicked')}
            />
          </div>
        </div >
      </nav >

      {/* User Type Selection Bar (Conditional) */}
      {
        showUserTypeBar && (
          <div className="border border-gray-300 text-white w-3/4 rounded-3xl py-1.5 mt-16 ml-16 shadow-lg border-gray-500">
            <div className="container mx-auto flex justify-between items-center px-6">
              <span>For better experience, please choose which user type you are:</span>
              <div className="flex space-x-4">
                <button
                  className="bg-gray-600 text-white px-5 py-1 rounded-3xl hover:bg-gray-700 transition duration-300"
                  onClick={() => handleUserTypeSelection('Parent')}
                >
                  Parent
                </button>
                <button
                  className="bg-gray-600 text-white px-5 py-1 rounded-3xl hover:bg-gray-700 transition duration-300"
                  onClick={() => handleUserTypeSelection('Adult')}
                >
                  Adult
                </button>
              </div>
              <button className="text-gray-400 hover:text-white" onClick={handleCloseUserTypeBar}>
                ✕
              </button>
            </div>
          </div>
        )
      }

      {/* Display user choice */}
      {
        userType && !showUserTypeBar && (
          <div className="bg-gray-600 text-white w-full py-2 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
              <span>User Type Selected: {userType}</span>
              <button className="text-gray-400 hover:text-white" onClick={() => setUserType('')}>
                ✕
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
