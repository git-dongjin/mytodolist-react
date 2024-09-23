import axios from "axios";
import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const DeleteTodo = ({ idx }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const { id } = todos[idx];

  const deleteHandler = () => {
    axios.delete(`http://localhost:8081/todos/${id}`).then((res) => {
      if (res.status === 200) {
        if (res.data.delete) {
          const todosCopy = [...todos];
          todosCopy.splice(idx, 1);
          setTodos(todosCopy);
        } else {
          alert("삭제 실패");
        }
      } else {
        alert("응답 오류");
      }
    });
  };

  return (
    <button type="button" onClick={() => deleteHandler()}>
      삭제
    </button>
  );
};

export default DeleteTodo;
