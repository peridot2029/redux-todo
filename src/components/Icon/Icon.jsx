import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import './Icon.scss';

const Icon = ({ className, name }) => {
  let ICON_URL = require(`../../assets/icon/${name}.svg`);

  return (
    <i className={classNames('icon', `icon-${name}`, className)}>
      <img src={ICON_URL} alt={name} />
    </i>
  );
};

Icon.propTypes = {
  name: string.isRequired,
  className: string,
};

export default Icon;
