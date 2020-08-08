import * as todoTypes from "./actiontypes";
import {
  getMyTodos,
  createTodo,
  removeTodo,
  getTodo,
  addTaskToTodo,
  removeTodoTask,
  markTaskAsCompleted,
  markTaskAsUnCompleted,
} from "./api";
import { apiCallError, apiCallLoading, apiCallSuccess } from "../api/action";

const getTodosSuccess = (payload) => ({
  type: todoTypes.FETCH_TODOS,
  payload,
});

const getTodoSuccess = (payload) => ({
  type: todoTypes.FETCH_TODO,
  payload,
});

const createTodoSuccess = (payload) => ({
  type: todoTypes.CREATE_TODO,
  payload,
});

const createTaskSuccess = (payload) => ({
  type: todoTypes.ADD_TASK,
  payload,
});

const removeTodoSuccess = (payload) => ({
  type: todoTypes.REMOVE_TODO,
  payload,
});

const removeTaskSuccess = (payload) => ({
  type: todoTypes.REMOVE_TASK,
  payload,
});

const markTaskSuccess = (payload) => ({
  type: todoTypes.MARK_AS_COMPLETE,
  payload,
});

const unmarkTaskSuccess = (payload) => ({
  type: todoTypes.MARK_AS_UNCOMPLETE,
  payload,
});

export const getUserTodosAction = (id) => {
  return async (dispatch) => {
    try {
      // dispatch(apiCallLoading("Fetching your Todolists"));
      const res = await getMyTodos(id);
      dispatch(apiCallSuccess());
      dispatch(getTodosSuccess(res.data));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const getTodoAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await getTodo(id);
      dispatch(getTodoSuccess(res.data));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const createTodoAction = (todoName) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Creating a new Todolist"));
      const res = await createTodo(todoName);
      dispatch(apiCallSuccess());
      dispatch(createTodoSuccess(res.data));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const removeTodoAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Removing TodoList"));
      await removeTodo(id);
      dispatch(apiCallSuccess());
      dispatch(removeTodoSuccess(id));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const addTaskAction = (todoId, taskName) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Adding Task"));
      const res = await addTaskToTodo(todoId, taskName);
      dispatch(apiCallSuccess());
      dispatch(createTaskSuccess(res.data));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const removeTaskAction = (todoId, taskId) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Removing Task"));
      await removeTodoTask(todoId, taskId);
      dispatch(apiCallSuccess());
      dispatch(removeTaskSuccess(taskId));
    } catch (error) {
      dispatch(apiCallError(error.error));
    }
  };
};

export const markAsCompleted = (todoId, taskId) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Marking"));
      const res = await markTaskAsCompleted(todoId, taskId);
      dispatch(apiCallSuccess());
      dispatch(markTaskSuccess(res.data));
    } catch (error) {
      apiCallError(error.error);
    }
  };
};

export const markAsUncompleted = (todoId, taskId) => {
  return async (dispatch) => {
    try {
      dispatch(apiCallLoading("Unmarking"));
      const res = await markTaskAsUnCompleted(todoId, taskId);
      dispatch(apiCallSuccess());
      dispatch(unmarkTaskSuccess(res.data));
    } catch (error) {
      apiCallError(error.error);
    }
  };
};
