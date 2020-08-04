const express = require("express");
const router = express.Router();
const auth = require("../Middlewares/auth");
const {
  getUserTodos,
  createTodo,
  removeTodo,
  getTodo,
  addTaskToTodo,
  removeTodoTask,
  markTaskAsCompleted,
  markTaskAsUnCompleted,
} = require("../Controllers/todoController");
const isOwner = require("../Middlewares/IsOwner");

router.get("/todo", auth, getUserTodos);
router.post("/todo", auth, createTodo);
router.get("/todo/:todoId", auth, isOwner, getTodo);
router.post("/todo/:todoId", auth, isOwner, addTaskToTodo);
router.delete("/todo/:todoId", auth, isOwner, removeTodo);
router.delete("/todo/:todoId/:taskId", auth, isOwner, removeTodoTask);
router.patch(
  "/todo/:todoId/:taskId/completed",
  auth,
  isOwner,
  markTaskAsCompleted
);
router.patch(
  "/todo/:todoId/:taskId/uncompleted",
  auth,
  isOwner,
  markTaskAsUnCompleted
);

module.exports = router;
