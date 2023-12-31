import React, { useState } from "react";
import TodoService from "../services/TodoService";

const AddTodo = () => {
  const initialTodoState = {
    id: "",
    title: "",
    description: "",
    isCompleted: false,
    todoDate: null
  };

  const [todo, setTodo] = useState(initialTodoState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const saveTodo = () => {
    var data = {
      title: todo.title,
      description: todo.description,
      todoDate: null,
      isCompleted: false
    };

    TodoService.create(data)
      .then(response => {
        setTodo({
          id: null,
          title: response.data.title,
          description: response.data.description,
          isCompleted: response.data.isCompleted,
          todoDate: response.data.todoDate
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTodo = () => {
    setTodo(initialTodoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTodo}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={todo.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={todo.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTodo} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTodo;