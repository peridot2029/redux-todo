import { ADD_TODO, COMPLETE_TODO, DELTE_TODO } from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ ...action.payload }),
      };
    case DELTE_TODO: {
      const index = state.todos.findIndex(item => {
        return item.id === action.payload.id;
      });
      const list = [...state.todos];
      list.splice(index, 1);
      return {
        todos: list,
      };
    }
    case COMPLETE_TODO: {
      const index = state.todos.findIndex(item => {
        return item.id === action.payload.id;
      });

      const item = state.todos.find(item => {
        return item.id === action.payload.id;
      });

      const list = [...state.todos];
      item.completed = true;
      item.created = new Date();

      list.splice(index, item);

      return {
        todos: list,
      };
    }
    default:
      return state;
  }
};

export default todos;
