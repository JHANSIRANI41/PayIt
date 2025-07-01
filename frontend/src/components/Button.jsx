import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-blue-600 hover:bg-blue-900 text-white py-2 font-medium px-5 hover:cursor-pointer my-2 focus:outline-none focus:ring-4 focus:ring-gray-300"
    >
      {label}
    </button>
  );
};

export default Button;
