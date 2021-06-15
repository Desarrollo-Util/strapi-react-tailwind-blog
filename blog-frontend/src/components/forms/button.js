import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
