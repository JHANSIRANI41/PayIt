import React from "react";

const InputBox = ({ label, placeholder, onChange, name, value }) => {
  return (
    <label className="self-start text-blue-700 w-full block">
      <span className="block font-medium text-left text-sm py-2">{label}</span>
      <input
        className="peer w-full text-black px-2 py-1 border rounded border-blue-200"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value || ""}
      />
    </label>
  );
};

export default InputBox;
