import http from "../http-common";

const getAll = () => {
  return http.get("/todos");
};

const get = title => {
  return http.get(`/todos/${title}`);
};

const create = data => {
  return http.post("/todos", data);
};

const update = (title, data) => {
  return http.put(`/todos/${title}`, data);
};

const remove = title => {
  return http.delete(`/todos/${title}`);
};

const findByTitle = title => {
  return http.get(`/todos/search?title=${title}`);
};

const TodoService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};

export default TodoService;