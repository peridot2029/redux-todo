import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from './../../redux/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Error from './../Error/Error';
import './Form.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  // const dispatch = useDispatch();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (value.length <= 0) {
        setError(true);
      } else {
        // dispatch(addTodo(value));
        setError(false);
        setValue('');
      }
    },
    [error, value]
  );

  const onChange = useCallback(
    value => {
      setValue(value);
    },
    [value]
  );

  return (
    <form className='form-add' onSubmit={onSubmit}>
      <Input
        type='text'
        name='add'
        placeholder='add a new task'
        value={value}
        onChange={onChange}
      />
      <Button type='submit' name='add' />
      <Error name={error} />
    </form>
  );
};

export default Form;
