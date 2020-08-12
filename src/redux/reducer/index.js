import { combineReducers } from 'redux';
import todos from './todos';
import todoListFilter from './todoListFilter';
const rootReducer = combineReducers({
  todos,
  todoListFilter,
});

export default rootReducer;
