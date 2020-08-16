import {
  ADD_TODO,
  TOGGLE_TODO,
  COMPLETE_TODO,
  DELTE_TODO,
} from '../actions/actionTypes';

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
    // case TOGGLE_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id
    //       ? { ...todo, isCompleted: !todo.isCompleted }
    //       : todo
    //   );
    case COMPLETE_TODO:
      
    case DELTE_TODO: {
      const list = [...state.todos];
      list.splice(action.index, 1);
      return { todos: list };
    }

    default:
      return state;
  }
};

export default todos;
