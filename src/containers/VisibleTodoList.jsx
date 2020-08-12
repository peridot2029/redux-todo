import { connect } from 'react-redux';
import { toggleTodo, todoListFilters } from '../redux/actions';
import TodoList from '../components/TodoList/TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log(todos);
  switch (filter) {
    case todoListFilters.SHOW_ALL:
      return todos;
    case todoListFilters.SHOW_COMPLETED:
      return todos.filter(t => t.isCompleted);
    case todoListFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.isCompleted);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.todoListFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
