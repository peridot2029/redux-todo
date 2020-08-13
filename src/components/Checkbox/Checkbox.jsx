import React from 'react';
import classNames from 'classnames';
import Icon from './../Icon/Icon';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox' }) => {
  const checkboxClass = classNames('checkbox');
  const labelClass = classNames('label');

  return (
    <>
      <label className={labelClass}>
        <input type={type} className={checkboxClass} />
        <span className='overlay'>
          <Icon name='check' />
        </span>
      </label>
    </>
  );
};

export default Checkbox;
