import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  let menu;

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  if (token === null) {
    menu = (
      <div>
        <button
          type="button"
          variant="primary"
          onClick={() => navigate("/login")}
        >
          로그인
        </button>
        &nbsp;
        <button type="button" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    );
  } else {
    menu = (
      <div>
        <button type="button" onClick={() => navigate("/todo")}>
          할 일
        </button>
        &nbsp;
        <button type="button" onClick={() => logoutHandler()}>
          로그아웃
        </button>
      </div>
    );
  }

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <br />
      {menu}
    </div>
  );
};

export default UserHome;
