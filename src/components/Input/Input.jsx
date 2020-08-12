import React from 'react';
import classNames from 'classnames';
import './Input.scss';

const Input = ({ type = 'text', name, value, placeholder, ...props }) => {
  const inputClass = classNames('input', name && `input--${name}`);

  const labelClass = classNames('label', name && `label--${name}`);

  const onChange = e => {
    const { onChange } = props;
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <label className={labelClass}>
        <input
          placeholder={placeholder}
          type={type}
          className={inputClass}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;
