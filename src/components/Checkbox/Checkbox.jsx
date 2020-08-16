import React, { useState } from 'react';
import classNames from 'classnames';
import { BsCheck as Check } from 'react-icons/bs';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox', value, ...props }) => {
  const [checked, setChecked] = useState(value || false);

  const checkboxClass = classNames('checkbox');
  const labelClass = classNames('label');

  const handleChange = e => {
    const { onChange } = props;

    setChecked(!checked);

    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <>
      <label className={labelClass}>
        <input type={type} className={checkboxClass} />

        <span
          className='icon-cover'
          onChange={handleChange}
          value={value}
          checked={checked}
        >
          <Check size='1.15em' color='#FF6666' className='icon--check' />
        </span>
      </label>
    </>
  );
};

export default Checkbox;
