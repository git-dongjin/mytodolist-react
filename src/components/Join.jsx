import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    uid: "",
    name: "",
    password: "",
    email: "",
  });
  const { uid, name, password, email } = input;

  const onChangeHandler = (e) => {
    const { id, value } = e.target;

    setInput({ ...input, [id]: value });
  };

  const joinHandler = () => {
    axios
      .post(
        "http://localhost:8081/join",
        {},
        { params: { uid: uid, name: name, password: password, email: email } }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.join) {
            alert("회원가입 성공");
            navigate("/");
          } else {
            alert("가입 실패");
          }
        } else {
          alert("응답 오류");
        }
      });
  };

  return (
    <div>
      <p>
        <label htmlFor="uid">아이디: </label>
        <input
          type="text"
          id="uid"
          value={uid}
          onChange={(e) => onChangeHandler(e)}
        />
      </p>
      <p>
        <label htmlFor="password">비밀번호: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => onChangeHandler(e)}
        />
      </p>
      <p>
        <label htmlFor="name">이름: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onChangeHandler(e)}
        />
      </p>
      <p>
        <label htmlFor="email">이메일: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onChangeHandler(e)}
        />
      </p>
      <p>
        <button type="button" onClick={() => joinHandler()}>
          가입
        </button>
      </p>
    </div>
  );
};

export default Join;
