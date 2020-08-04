import * as authTypes from "./actiontypes";
import { login, signup } from "./api";
import setAuthToken from "../../utils/setToken";

export const loginSuccess = (payload) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload,
});

const loginError = (payload) => ({
  type: authTypes.LOGIN_ERROR,
  payload,
});

const signupSuccess = (payload) => ({
  type: authTypes.SIGNUP_SUCCESS,
  payload,
});

const signupError = (payload) => ({
  type: authTypes.SIGNUP_ERROR,
  payload,
});

const logoutSuccess = () => ({
  type: authTypes.LOGOUT,
});

export const loginAction = (email, password, history) => {
  return async (dispactch) => {
    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.user.token);
      setAuthToken(res.user.token);
      dispactch(loginSuccess(res));
      history.push("/todo");
    } catch (error) {
      dispactch(loginError(error));
    }
  };
};

export const signupAction = (email, fullName, password, history) => {
  return async (dispactch) => {
    try {
      const res = await signup(email, fullName, password);
      dispactch(signupSuccess(res));
      localStorage.setItem("token", res.user.token);
      setAuthToken(res.user.token);
      history.push("/todo");
    } catch (error) {
      dispactch(signupError(error));
    }
  };
};

export const logoutAction = (history) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
    history.push("/");
  };
};
