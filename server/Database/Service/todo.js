exports.todoStatics = {
  findByEmail: async function (email) {
    const tasks = await this.find({ user: email });
    return tasks;
  },

  createTodo: async function (todoName, userEmail) {
    try {
      const todo = new this();
      todo.user = userEmail;
      todo.todoName = todoName;
      todo.tasks = [];
      return await todo.save();
    } catch (error) {
      throw error;
    }
  },
};

exports.todoMethods = {
  deleteTodo: async function (id) {
    try {
      const tasks = this.tasks;

      const filteredTasks = tasks.filter((val) => {
        return String(val._id) !== String(id);
      });

      this.tasks = filteredTasks;
      return await this.save();
    } catch (error) {
      throw error;
    }
  },

  addTask: async function (taskName) {
    const tasks = this.tasks;
    tasks.push({ taskName });
    return await this.save();
  },

  markTaskAsCompleted: async function (id) {
    try {
      const task = this.tasks.id(id);
      task.isCompleted = true;
      return await this.save();
    } catch (error) {
      throw error;
    }
  },

  markTaskAsUnCompleted: async function (id) {
    try {
      const task = this.tasks.id(id);
      task.isCompleted = false;
      return await this.save();
    } catch (error) {
      throw error;
    }
  },
};
