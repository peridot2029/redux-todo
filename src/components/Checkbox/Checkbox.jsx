import React, { useState, useEffect } from 'react';
import { BsCheck as Check } from 'react-icons/bs';
import classNames from 'classnames';
import './Checkbox.scss';

const Checkbox = ({ type = 'checkbox', value, id, ...props }) => {
  const [checked, setChecked] = useState(value || false);
  console.group('check -> checked value');
  console.log(typeof checked);
  console.groupEnd('check -> checked value');

  const onChange = e => {
    const { onChange } = props;

    setChecked(!checked);

    if (onChange) {
      onChange(e.target.checked);
    }
  };
  useEffect(() => {
    if (checked) {
      setChecked(true);
    }
  }, [checked]);
  return (
    <>
      <label className={classNames('label')}>
        <input
          type={type}
          id={id}
          className={classNames('checkbox')}
          checked={checked}
          value={value}
          onChange={onChange}
        />

        <span className='icon-cover'>
          <Check size='1.15em' color='#FF6666' className='icon--check' />
        </span>
      </label>
    </>
  );
};

export default Checkbox;
