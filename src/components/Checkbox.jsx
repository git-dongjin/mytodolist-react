import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Checkbox = ({ idx }) => {
  const { todos, updateCheckbox } = useContext(TodoContext);
  const { done } = todos[idx];

  return (
    <input
      type="checkbox"
      checked={done}
      onChange={() => updateCheckbox(idx)}
    />
  );
};

export default Checkbox;
