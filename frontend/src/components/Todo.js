import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TodoService from "../services/TodoService";

const Todo = props => {
  const { title } = useParams();
  let navigate = useNavigate();

  const initialTodoState = {
    id: null,
    title: "",
    description: "",
    isCompleted: false,
    todoDate: null
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);
  const [message, setMessage] = useState("");

  const getTodo = title => {
    TodoService.get(title)
      .then(response => {
        setCurrentTodo(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (title)
      getTodo(title);
  }, [title]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateIsCompleted = status => {
    var data = {
      //id: null,
      title: currentTodo.title,
      description: currentTodo.description,
      isCompleted: status,
      todoDate: null
    };

    TodoService.update(currentTodo.title, data)
      .then(response => {
        setCurrentTodo({ ...currentTodo, isCompleted: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTodo = () => {
    TodoService.update(currentTodo.title, currentTodo)
      .then(response => {
        console.log(response.data);
        setMessage("The Todo was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTodo = () => {
    TodoService.remove(currentTodo.title)
      .then(response => {
        console.log(response.data);
        navigate("/Todos");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTodo ? (
        <div className="edit-form">
          <h4>Todo</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTodo.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTodo.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTodo.isCompleted ? "Completed" : "Pending"}
            </div>
          </form>

          {currentTodo.isCompleted ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateIsCompleted(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateIsCompleted(true)}
            >
              Mark as Completed
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTodo}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTodo}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Todo...</p>
        </div>
      )}
    </div>
  );
};

export default Todo;