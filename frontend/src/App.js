import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/todos" className="navbar-brand">
          TODO App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TodosList/>} />
          <Route path="/todos" element={<TodosList/>} />
          <Route path="/add" element={<AddTodo/>} />
          <Route path="/todos/:title" element={<Todo/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;