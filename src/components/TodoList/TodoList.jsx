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
      <main className='todo-main'>
        <header className='todo-header'>
          <div className='todo-header__date-wrapper'>
            <span className='date--day'>{DAY}</span>
            <span className='date--month'>{MONTH}</span>
            <span className='date--date'>{DATE}</span>
            <span className='date--year'>{YEAR}</span>
          </div>
        </header>

        <nav className='todo-nav'>
          <div className='todo-nav__task--counts'>{TODOS_COUNT} tasks</div>

          <div className='todo-nav__task--links'>
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
          <ul className='todo__completed--list'>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>

        <div className='todo__incompleted-wrapper'>
          <ul className='incompleted--list'></ul>
        </div>
      </main>
    </>
  );
};
export default TodoList;
