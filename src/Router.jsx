import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoRoot from "./components/TodoRoot";
import Login from "./components/Login";
import Join from "./components/Join";
import Home from "./components/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/todo" element={<TodoRoot />}></Route>
    </Routes>
  );
};

export default Router;
