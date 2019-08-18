import React from "react";
import "./InputField.css";
const InputField = ({ inputData, handleChange }) => {
  return (
    <div className="flex column input-field">
      {inputData.label && (
        <label className="label">
          <b>{inputData.label}:</b>
        </label>
      )}
      <input
        className={inputData.class}
        name={inputData.name}
        placeholder={inputData.placeholder}
        type={inputData.type}
        onChange={handleChange}
        min="1"
        max="5"
      />
    </div>
  );
};

export default InputField;
