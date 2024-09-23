import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <h3>MyTodoList</h3>
        <Link to="/">홈</Link>
        <hr />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
