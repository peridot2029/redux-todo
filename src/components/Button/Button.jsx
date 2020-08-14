import React from 'react';
import PropTypes, { element, string, func } from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ type = 'button', name, children }) => {
  const buttonClass = classNames('button', name && `button--${name}`);

  return (
    <button type={type} className={buttonClass}>
      {children || name}
    </button>
  );
};
Button.propTypes = {
  type: string.isRequired,
  name: string,
  children: PropTypes.oneOfType([element, string]),
  onClick: func,
};
export default Button;
