import axios from "axios";
import baseUrl from "../baseUrl";

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, { email, password });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (email, fullName, password) => {
  try {
    const res = await axios.post(`${baseUrl}/signup`, {
      email,
      fullName,
      password,
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
