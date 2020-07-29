import React from "react";
import Form from "../Form/Form";
import "./TodoList.scss";
import Button from "../Button/Button";

const TodoList = () => {
  return (
    <>
      <main className="todo__main">
        <header className="todo__header">
          <h1 className="todo__header-title">Wed Jul 29 2020</h1>
        </header>

        <nav className="todo__nav">
          <div className="todo__nav-task-count">3 tasks</div>

          <div className="todo__nav-task-btngroup">
            <Button type="button" name="all" />
            <Button type="button" name="active" />
            <Button type="button" name="completed" />
          </div>
        </nav>

        <Form />

        <div className="todo__completed-wrapper">
          <ul className="todo__completed-list">
            <li>Test One</li>
          </ul>
        </div>

        <div className="todo__incompleted-wrapper">
          <ul className="todo__incompleted-list">
            <li>Test Two</li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default TodoList;
