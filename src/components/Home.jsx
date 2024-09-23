import React, { useEffect, useState } from "react";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";
import axios from "axios";

const Home = () => {
  const token = localStorage.getItem("token");
  const [type, setType] = useState("USER");

  useEffect(() => {
    if (token === null) {
      setType("USER");
    } else {
      axios
        .get("http://localhost:8081/auths/type", {
          headers: { token: token },
        })
        .then((res) => {
          if (res.status === 200) {
            setType(res.data.type);
          } else {
            alert("응답 오류");
          }
        });
    }
  }, []);

  return token != null && type === "ADMIN" ? (
    <AdminHome setType={setType} />
  ) : (
    <UserHome />
  );
};

export default Home;
