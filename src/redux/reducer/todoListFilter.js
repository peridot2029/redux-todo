import { todoListFilters } from '../actions';
import { SET_TODOLIST_FILTER } from '../actions/actionTypes';

const todoListFilter = (state = todoListFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_TODOLIST_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default todoListFilter;
