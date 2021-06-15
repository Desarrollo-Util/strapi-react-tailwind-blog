import React from "react";

const InputText = ({ placeholder, name, type = "text", className = "" }) => (
  <label
    className={`flex flex-col justify-items-start items-start ${className}`}
  >
    <span className="w-full text-gray-500 ml-2">{placeholder}</span>
    <input
      className="border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
      type={type}
      name={name}
    ></input>
  </label>
);

export default InputText;
