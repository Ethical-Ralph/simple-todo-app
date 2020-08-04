import axios from "axios";
import baseUrl from "../baseUrl";

export const getMyTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todo`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTodo = async (todoName) => {
  try {
    const res = await axios.post(`${baseUrl}/todo`, { todoName });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const removeTodo = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/todo/${id}`);
    return res;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTodo = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/todo/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addTaskToTodo = async (todoId, taskName) => {
  try {
    const res = await axios.post(`${baseUrl}/todo/${todoId}`, { taskName });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const removeTodoTask = async (todoId, taskId) => {
  try {
    const res = await axios.delete(`${baseUrl}/todo/${todoId}/${taskId}`);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const markTaskAsCompleted = async (todoId, taskId) => {
  try {
    const res = await axios.patch(
      `${baseUrl}/todo/${todoId}/${taskId}/completed`,
      {}
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const markTaskAsUnCompleted = async (todoId, taskId) => {
  try {
    const res = await axios.patch(
      `${baseUrl}/todo/${todoId}/${taskId}/uncompleted`,
      {}
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
