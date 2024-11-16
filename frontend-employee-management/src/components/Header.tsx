import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-2 w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl text-gray-300 font-bold">MyApp</a>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-300 hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gray-300">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-gray-300">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gray-300">Contact</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-gray-300">Login</a></li>
            </ul>
          </div>
          <button className="md:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
