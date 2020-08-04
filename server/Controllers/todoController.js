const { Todo } = require("../Database");

exports.getUserTodos = async (req, res, next) => {
  try {
    const email = req.user.email;
    const data = await Todo.findByEmail(email);
    if (!data) throw Error("You dont have any todo list");

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { todoName } = req.body;
    if (!todoName) throw Error("Please Input a TodoList Name");
    const userEmail = req.user.email;
    const data = await Todo.createTodo(todoName, userEmail);

    return res.status(201).json({
      message: "Todo created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.removeTodo = async (req, res, next) => {
  try {
    const todoId = req.todo._id;
    await Todo.findByIdAndDelete(todoId);
    return res.json({
      success: true,
      message: "Todo List deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = req.todo;
    res.json({
      data: todo,
    });
  } catch (error) {
    next(Error);
  }
};

exports.addTaskToTodo = async (req, res, next) => {
  try {
    const { taskName } = req.body;
    if (!taskName) throw Error("Task name can't be empty");
    const todo = req.todo;
    const data = await todo.addTask(taskName);
    return res.status(201).json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.markTaskAsCompleted = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    const todo = req.todo;
    const data = await todo.markTaskAsCompleted(taskId);
    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.markTaskAsUnCompleted = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    const todo = req.todo;
    const data = await todo.markTaskAsUnCompleted(taskId);
    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.removeTodoTask = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    const todo = req.todo;
    const data = await todo.deleteTodo(taskId);
    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
