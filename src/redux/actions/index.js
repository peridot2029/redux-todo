import { ADD_TODO, CHANGE_INPUT, IS_ERROR } from './actionTypes';
import uuid from 'uuid/dist/v1';

const addTodo = text => ({
  type: ADD_TODO,

  payload: {
    id: uuid(),
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
});

export { addTodo, changeInput, isError };
