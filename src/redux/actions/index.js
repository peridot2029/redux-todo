import {
  ADD_TODO,
  TOGGLE_TODO,
  COMPLETE_TODO,
  DELTE_TODO,
  SET_TODOLIST_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from './actionTypes';
import cuid from 'cuid';

const addTodo = text => ({
  type: ADD_TODO,

  payload: {
    id: cuid(),
    content: text,
    completed: false,
    created: new Date(),
  },
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,

  payload: {
    id,
  },
});

const compltedTodo = id => ({
  type: COMPLETE_TODO,

  payload: {
    id,
  },
});

const deletedTodo = id => ({
  type: DELTE_TODO,
  payload: {
    id,
  },
});

const setTodoListFilter = filter => ({
  type: SET_TODOLIST_FILTER,
  filter,
});

const todoListFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_ACTIVE: SHOW_ACTIVE,
  SHOW_COMPLETED: SHOW_COMPLETED,
};

export {
  addTodo,
  toggleTodo,
  compltedTodo,
  deletedTodo,
  setTodoListFilter,
  todoListFilters,
};
