import React, { useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { compltedTodo, deletedTodo } from '../../redux/actions';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './TodoItem.scss';

const TodoItem = ({ item }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos, []);

  const onClick = () => {
    const index = todos.findIndex(todo => todo.id === item.id);
    dispatch(deletedTodo(index));
  };

  return (
    <li>
      <Checkbox type='checkbox' />
      <Input type='text' id={item.id} label={item.content} active={active} />
      <Button type='submit' name='delete' onClick={onClick} icon={true} />
    </li>
  );
};
export default connect()(TodoItem);
