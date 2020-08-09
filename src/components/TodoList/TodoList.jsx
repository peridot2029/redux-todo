import React from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';
import { dateYear, dateMonth, dateDay, dateDate } from '../../api/todoDate';
import './TodoList.scss';

const TodoList = () => {
  const year = dateYear();
  const month = dateMonth();
  const day = dateDay();
  const date = dateDate();

  return (
    <>
      <main className='todo__main'>
        <header className='todo__header'>
          <div className='todo__header-date-wrapper'>
            <span className='todo-date-day'>{day}</span>
            <span className='todo-date-month'>{month}</span>
            <span className='todo-date-date'>{date}</span>
            <span className='todo-date-year'>{year}</span>
          </div>
        </header>

        <nav className='todo__nav'>
          <div className='todo__nav-task-count'>3 tasks</div>

          <div className='todo__nav-task-btngroup'>
            <Button type='button' name='all' />
            <Button type='button' name='active' />
            <Button type='button' name='completed' />
          </div>
        </nav>

        <Form />

        <div className='todo__completed-wrapper'>
          <ul className='todo__completed-list'>
            <li>Test One</li>
          </ul>
        </div>

        <div className='todo__incompleted-wrapper'>
          <ul className='todo__incompleted-list'>
            <li>Test Two</li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default TodoList;
