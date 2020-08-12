import React from 'react';
import { dateYear, dateMonth, dateDay, dateDate } from '../../api/todoDate';
import { todoListFilters } from '../../redux/actions';
import FilterLink from '../../containers/FilterLink';
import TodoItem from './../TodoItem/TodoItem';
import Form from '../Form/Form';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  const TODOS_COUNT = todos.length;
  const YEAR = dateYear();
  const MONTH = dateMonth();
  const DAY = dateDay();
  const DATE = dateDate();

  return (
    <>
      <main className='todo__main'>
        <header className='todo__header'>
          <div className='todo__header-date-wrapper'>
            <span className='todo-date-day'>{DAY}</span>
            <span className='todo-date-month'>{MONTH}</span>
            <span className='todo-date-date'>{DATE}</span>
            <span className='todo-date-year'>{YEAR}</span>
          </div>
        </header>

        <nav className='todo__nav'>
          <div className='todo__nav-task-count'>{TODOS_COUNT} tasks</div>

          <div className='todo__nav-task-btngroup'>
            <FilterLink filter={todoListFilters.SHOW_ALL} name='all' />
            <FilterLink filter={todoListFilters.SHOW_ACTIVE} name='active' />
            <FilterLink
              filter={todoListFilters.SHOW_COMPLETED}
              name='Completed'
            />
          </div>
        </nav>

        <Form />

        <div className='todo__completed-wrapper'>
          <ul className='todo__completed-list'>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>

        <div className='todo__incompleted-wrapper'>
          <ul className='todo__incompleted-list'></ul>
        </div>
      </main>
    </>
  );
};
export default TodoList;
