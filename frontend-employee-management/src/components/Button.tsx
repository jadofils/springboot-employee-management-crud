// Button.js
import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-800 text-gray-300 py-2 px-4 mt-4 rounded hover:bg-gray-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
