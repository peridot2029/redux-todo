import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './TodoItem.scss';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <Checkbox />
    </li>
  );
};
export default TodoItem;
