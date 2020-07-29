import React from "react";
import classNames from "classnames";
import "./Input.scss";

const Input = ({ type = "text", name, placeholder }) => {
  const inputClass = classNames("input", name && `input--${name}`);

  const labelClass = classNames("label", name && `label--${name}`);

  return (
    <>
      <label className={labelClass}>
        <input placeholder={placeholder} type={type} className={inputClass} />
      </label>
    </>
  );
};

export default Input;
