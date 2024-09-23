import axios from "axios";
import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const Todo = ({ idx }) => {
  const token = localStorage.getItem("token");

  const { todos, setTodos } = useContext(TodoContext);

  const [edit, setEdit] = useState(false);

  const { id, todo, done } = todos[idx];
  const [editTodo, setEditTodo] = useState(todo);

  const onChangeHandler = (e) => {
    setEditTodo(e.target.value);
  };

  const editHandler = () => {
    axios
      .put(
        "http://localhost:8081/todos/todo",
        {},
        { headers: { token: token }, params: { id: id, todo: editTodo } }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.edit) {
            const todosCopy = [...todos];
            todosCopy[idx].todo = editTodo;
            setTodos(todosCopy);

            setEdit(!edit);
          } else {
            alert("수정 실패");
          }
        } else {
          alert("응답 오류");
        }
      });
  };

  return (
    <>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => onChangeHandler(e)}
          onBlur={() => editHandler()}
        />
      ) : (
        <span
          onClick={() => setEdit(!edit)}
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {editTodo}
        </span>
      )}
    </>
  );
};

export default Todo;
