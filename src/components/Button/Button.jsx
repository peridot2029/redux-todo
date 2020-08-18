import React from 'react';
import PropTypes, { element, string, func } from 'prop-types';
import { FiXCircle as Delete } from 'react-icons/fi';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ type = 'button', name, children, onClick, icon }) => {
  const buttonClass = classNames('button', name && `button--${name}`);

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {!icon && (children || name)}
      {icon && <Delete size='1.40em' color='red' />}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  name: string,
  children: PropTypes.oneOfType([element, string]),
  onClick: func,
};

export default Button;
