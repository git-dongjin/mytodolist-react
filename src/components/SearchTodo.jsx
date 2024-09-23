import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const SearchTodo = () => {
  const { searchWord } = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    const word = e.target.value;

    setSearch(word);
    searchWord(word);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => onChangeHandler(e)}
        placeholder="검색어를 입력하세요"
      />
    </div>
  );
};

export default SearchTodo;
