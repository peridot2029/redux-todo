import { ADD_TODO, CHANGE_INPUT, IS_ERROR } from './actionTypes';
import cuid from 'cuid';

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: cuid(),
    content: text,
    isCompleted: false,
    created: new Date(),
  },
});

const changeInput = text => ({
  type: CHANGE_INPUT,
  text,
});

const isError = () => ({
  type: IS_ERROR,
  payload: {
    error: true,
  },
});

export { addTodo, changeInput, isError };
