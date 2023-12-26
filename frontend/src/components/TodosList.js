import React, { useState, useEffect } from "react";
import TodoService from "../services/TodoService";
import { Link } from "react-router-dom";

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTodos();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTodos = () => {
    TodoService.getAll()
      .then(response => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTodos();
    setCurrentTodo(null);
    setCurrentIndex(-1);
  };

  const setActiveTodo = (todo, index) => {
    setCurrentTodo(todo);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    TodoService.findByTitle(searchTitle)
      .then(response => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Todos List</h4>

        <ul className="list-group">
          {todos &&
            todos.map((todo, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTodo(todo, index)}
                key={index}
              >
                {todo.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentTodo ? (
          <div>
            <h4>Todo</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTodo.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTodo.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTodo.isCompleted ? "Completed" : "Pending"}
            </div>

            <Link
              to={"/todos/" + currentTodo.title}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Todo...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodosList;