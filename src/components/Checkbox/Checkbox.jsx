import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ type = "checkbox" }) => {
  const checkboxClass = classNames("checkbox");

  return (
    <>
      <label htmlFor={id}>
        <input
          type={type}
          className={checkboxClass}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Checkbox;
