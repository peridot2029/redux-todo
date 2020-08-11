import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TodosContainer() {
  const todos = useSelector(state => state.todos);
  console.log('dd', todos);

  return <div></div>;
}
export default TodosContainer;
