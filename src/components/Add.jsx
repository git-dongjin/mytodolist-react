// import axios from "axios";
// import React, { useState } from "react";

// const Add = ({ todos, setTodos }) => {
//   const token = localStorage.getItem("token");

//   const [tdo, setTodo] = useState({ id: -1, todo: "" });
//   const { id, todo } = tdo;

//   const onChangeHandler = (e) => {
//     setTodo({ ...tdo, todo: e.target.value });
//   };

//   const addHandler = () => {
//     axios
//       .post(
//         "http://localhost:8081/todos",
//         {},
//         { headers: { token: token }, params: { id: id, todo: todo } }
//       )
//       .then((res) => {
//         if (res.status === 200) {
//           if (res.data.add) {
//             const todoDto = { ...tdo, done: false };
//             todoDto.id = res.data.id;
//             setTodos([...todos, todoDto]);
//             setTodo({ ...tdo, todo: "" });
//           } else {
//             alert("추가 실패");
//           }
//         } else {
//           alert("응답 오류");
//         }
//       });
//   };

//   return (
//     <div>
//       <input type="text" value={todo} onChange={(e) => onChangeHandler(e)} />
//       &nbsp;
//       <button type="button" onClick={() => addHandler()}>
//         추가
//       </button>
//     </div>
//   );
// };

// export default Add;
