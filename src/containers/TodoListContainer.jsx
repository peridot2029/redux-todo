import React from 'react';
import { connect, useSelector } from 'react-redux';
import { toggleTodo, todoListFilters } from '../redux/actions';
import TodoList from '../components/TodoList/TodoList';

const TodoListContainer = () => {
  const { todos } = useSelector(state => state.todos, []);
  console.log(todos);

  return <TodoList todos={todos} />;
};

export default TodoListContainer;

// const getTodoListFilters = (todos, filter) => {
//   switch (filter) {
//     case todoListFilters.SHOW_ALL:
//       return todos;
//     case todoListFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.isCompleted);
//     case todoListFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.isCompleted);
//     default:
//       throw new Error('Unknown filter: ' + filter);
//   }
// };

// const mapStateToProps = state => ({
//   todos: getTodoListFilters(state.todos, state.todoListFilter),
// });

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
