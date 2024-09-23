import React, { useState } from "react";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import { TodoProvider } from "./TodoContext";

const TodoRoot = () => {
  return (
    <TodoProvider>
      <div>
        <SearchTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoRoot;
