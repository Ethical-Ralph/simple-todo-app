const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { todoStatics, todoMethods } = require("../Service/todo");

const task = new Schema({
  taskName: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TodoSchema = new Schema({
  todoName: {
    type: String,
    required: true,
  },
  tasks: [task],
  user: {
    type: String,
    ref: "User",
  },
});

TodoSchema.statics = todoStatics;
TodoSchema.methods = todoMethods;

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
