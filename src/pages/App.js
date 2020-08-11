import React from 'react';
import TodoList from './../components/TodoList/TodoList';
import './App.css';
import TodosContainer from './../containers/TodosContainer';

function App() {
  return (
    <>
      <TodoList />
      <TodosContainer />
    </>
  );
}

export default App;
