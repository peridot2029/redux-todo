import React, { useState, useEffect } from 'react';
import { compltedTodo, deletedTodo } from '../../redux/actions';
import { useDispatch, connect, useSelector } from 'react-redux';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './TodoItem.scss';

const TodoItem = ({ item, completed }) => {
  console.group('todo item -> completed');
  console.log(typeof completed);
  console.groupEnd('todo item -> completed');
  const { todos } = useSelector(state => state.todos, []);
  const [active, setActive] = useState(false);
  const [isCheckced, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deletedTodo(item.id));
  };

  const onChange = () => {
    setIsChecked(true);
  };

  useEffect(() => {
    if (!isCheckced) {
      return;
    }

    if (isCheckced && !completed) {
      console.group('todo item -> useEffect');
      console.log(typeof completed);
      console.groupEnd('todo item -> useEffect');

      dispatch(compltedTodo(item.id));
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [isCheckced, completed]);

  return (
    <li>
      <Checkbox
        type='checkbox'
        id={item.id}
        value={item.completed}
        onChange={onChange}
      />
      <Input type='text' id={item.id} label={item.content} active={active} />

      <div className='btnGroup'>
        <Button type='button' name='delete' onClick={onClick} icon={true} />
      </div>
    </li>
  );
};
export default connect()(TodoItem);
