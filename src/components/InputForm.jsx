import React from "react";

const InputForm = ({ type, name, placeHolder, value, change }) => {
  return (
    <div>
      <label htmlFor="">{name}</label>
      <input
        className="border-none outline-none text-black"
        type={type}
        id="courseName"
        name="courseName"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => change(e.target.value)}
      />
    </div>
  );
};

export default InputForm;
