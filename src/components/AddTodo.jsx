import axios from "axios";
import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const AddTodo = () => {
  const token = localStorage.getItem("token");

  const { todos, setTodos } = useContext(TodoContext);

  const [add, setAdd] = useState(false);
  const [tdo, setTdo] = useState({ id: -1, todo: "" });
  const { id, todo } = tdo;

  const onChangeHandler = (e) => {
    setTdo({ ...tdo, todo: e.target.value });
  };

  const addHandler = () => {
    axios
      .post(
        "http://localhost:8081/todos",
        {},
        { headers: { token: token }, params: { id: id, todo: todo } }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.add) {
            const todoDto = { ...tdo, done: false };
            todoDto.id = res.data.id;
            setTodos([...todos, todoDto]);
            setTdo({ ...tdo, todo: "" });
            setAdd(!add);
          } else {
            alert("추가 실패");
          }
        } else {
          alert("응답 오류");
        }
      });
  };

  const cancelHandler = () => {
    setAdd(!add);
  };

  return add ? (
    <li>
      <input value={todo} onChange={(e) => onChangeHandler(e)} />
      &nbsp;
      <button type="button" onClick={() => addHandler()}>
        추가
      </button>
      &nbsp;
      <button type="button" onClick={() => cancelHandler()}>
        취소
      </button>
    </li>
  ) : (
    <button type="button" onClick={() => setAdd(!add)}>
      추가
    </button>
  );
};

export default AddTodo;
