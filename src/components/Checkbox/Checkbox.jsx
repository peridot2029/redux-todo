import React from 'react';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox' }) => {
  const checkboxClass = classNames('checkbox');

  return (
    <>
      <label>
        <input type={type} className={checkboxClass} />
      </label>
    </>
  );
};

export default Checkbox;
