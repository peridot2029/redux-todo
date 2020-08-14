import React from 'react';
import classNames from 'classnames';
import { BsCheck as Check } from 'react-icons/bs';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox' }) => {
  const checkboxClass = classNames('checkbox');
  const labelClass = classNames('label');

  return (
    <>
      <label className={labelClass}>
        <input type={type} className={checkboxClass} />
        <span className='icon-cover'>
          <Check size='1.15em' color='#FF6666' className='icon--check' />
        </span>
      </label>
    </>
  );
};

export default Checkbox;
