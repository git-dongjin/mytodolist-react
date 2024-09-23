import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = ({ setType }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setType("USER");
    navigate("/");
  };

  return (
    <div>
      <h3>관리자페이지</h3>
      <button type="button" onClick={() => logoutHandler()}>
        로그아웃
      </button>
      &nbsp;
      <button type="button" onClick={() => navigate("/todo")}>
        전체 목록
      </button>
    </div>
  );
};

export default AdminHome;
