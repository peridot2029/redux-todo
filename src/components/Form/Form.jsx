import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Form.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    if (value.length <= 0) {
      setError(true);
    } else {
      dispatch(addTodo(value));
      setError(false);
      setValue('');
    }
  };

  const handleChange = value => {
    setValue(value);
  };

  return (
    <form className='form-add' onSubmit={handleSubmit}>
      <Input
        type='text'
        name='add'
        placeholder='add a new task'
        value={value}
        onChange={handleChange}
      />
      <Button type='submit' name='add' />

      <div className={classNames('error', error && 'is--error')} />
    </form>
  );
};

export default connect()(Form);
