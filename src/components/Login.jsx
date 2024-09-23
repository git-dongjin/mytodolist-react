import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({ uid: "", password: "" });
  const { uid, password } = input;

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setInput({ ...input, [id]: value });
  };

  const loginHandler = () => {
    axios
      .post(
        "http://localhost:8081/login",
        {},
        { params: { uid: uid, password: password } }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.login) {
            localStorage.setItem("token", res.data.token);
            alert("로그인 성공");
            navigate("/");
          } else {
            alert("로그인 실패");
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
        <button type="button" onClick={() => loginHandler()}>
          로그인
        </button>
      </p>
    </div>
  );
};

export default Login;
