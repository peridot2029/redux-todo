import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <li>
      <Checkbox />
      {/* <Input type='text' value={todo.content} /> */}
    </li>
  );
};
export default TodoItem;
