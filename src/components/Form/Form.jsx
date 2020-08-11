import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Error from './../Error/Error';
import './Form.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  // const [error, setError] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    if (value.length <= 0) {
    } else {
      dispatch(addTodo(value));
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
      {/* <Error name={error} /> */}
    </form>
  );
};

export default Form;
