var Todo = require("../models/todo");

module.exports = {
  index,
  create,
  delete: deleteTodo
};

function index(req, res) {
  res.render("/", {
    todos: Todo.getAll()
  });
}

function create(req, res) {
  req.body.done = false;
  Todo.create(req.body);
  res.render("/");
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.render("/");
}
