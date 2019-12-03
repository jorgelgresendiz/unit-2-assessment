const todos = [
  { todo: "Feed Dogs", done: true },
  { todo: "Learn python", done: false }
];

module.exports = { getAll, create, deleteOne };

function getAll() {
  return todos;
}

function create(todo) {
  todos.push(todo);
}

function deleteOne(id) {
  todos.splice(id, 1);
}
