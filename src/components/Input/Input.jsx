import React from 'react';
import classNames from 'classnames';
import './Input.scss';

const Input = ({
  type = 'text',
  name,
  active,
  id,
  value,
  placeholder,
  label,
  ...props
}) => {
  const inputClass = classNames('input', name && `input--${name}`, {
    'input__is-readonly': !active && id,
  });

  const labelClass = classNames('label', name && `label--${name}`, {
    'label__is-readonly': !active && id,
  });

  const onChange = e => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <label className={labelClass}>
        {label && <span className='label__input'>{label}</span>}
        <input
          type={type}
          className={inputClass}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;
