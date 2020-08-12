import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODOLIST_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from './actionTypes';
import cuid from 'cuid';

const addTodo = text => ({
  type: ADD_TODO,
  id: cuid(),
  text,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const setTodoListFilter = filter => ({
  type: SET_TODOLIST_FILTER,
  filter,
});

// VisibilityFilters
const todoListFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_ACTIVE: SHOW_ACTIVE,
  SHOW_COMPLETED: SHOW_COMPLETED,
};

export { addTodo, toggleTodo, setTodoListFilter, todoListFilters };
