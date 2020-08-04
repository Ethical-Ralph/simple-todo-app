const { Todo } = require("../Database");

const isOwner = async (req, res, next) => {
  const todoId = req.params.todoId;
  const userEmail = req.user.email;
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) throw Error("Todolist not found");
    const todoCreator = todo.user;
    if (todoCreator === userEmail) {
      req.todo = todo;
      return next();
    }
    throw Error("You do not own this todo list");
  } catch (error) {
    next(error);
  }
};

module.exports = isOwner;
