import React, { useContext, useEffect } from "react";
import Checkbox from "./Checkbox";
import Todo from "./Todo";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, getAllTodos } = useContext(TodoContext);

  useEffect(() => getAllTodos(), []);

  return (
    <div>
      <ul>
        {todos.map((element, idx) => {
          return (
            <li key={element.id}>
              <Checkbox idx={idx} />
              &nbsp;
              <Todo idx={idx} />
              &nbsp;
              <DeleteTodo idx={idx} />
            </li>
          );
        })}
        <AddTodo />
      </ul>
    </div>
  );
};

export default TodoList;
