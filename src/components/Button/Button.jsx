import React from "react";
import classNames from "classnames";
import "./Button.scss";
const Button = ({ type = "button", name, children }) => {
  const buttonClass = classNames("button", name && `button--${name}`);

  return (
    <button type={type} className={buttonClass}>
      {children || name}
    </button>
  );
};

export default Button;
