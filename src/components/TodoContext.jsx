import axios from "axios";
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [todos, setTodos] = useState([]);

  /* SearchTodo.jsx */
  const searchWord = (word) => {
    axios
      .get("http://localhost:8081/todos", { headers: { token: token } })
      .then((res) => {
        if (res.status === 200) {
          const search = res.data.filter(
            (todo) => todo.todo.toLowerCase().indexOf(word.toLowerCase()) >= 0
          );
          setTodos(search);
        } else {
          alert("응답 실패");
        }
      });
  };

  /* TodoList.jsx */
  const getAllTodos = () => {
    axios
      .get("http://localhost:8081/todos", { headers: { token: token } })
      .then((res) => {
        if (res.status === 200) {
          setTodos(res.data);
        } else {
          alert("응답 실패");
        }
      });
  };

  /* Checkbox.jsx */
  const updateCheckbox = (idx) => {
    const { id, done } = todos[idx];

    axios
      .put(
        "http://localhost:8081/todos/done",
        {},
        { headers: { token: token }, params: { id: id, done: !done } }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.done) {
            const todosCopy = [...todos];
            todosCopy[idx].done = !done;
            setTodos(todosCopy);
          } else {
            alert("수정 실패");
          }
        } else {
          alert("응답 실패");
        }
      });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        getAllTodos,
        searchWord,
        updateCheckbox,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
/* 연관관계 맵핑, 엔티티, 영속성 */
