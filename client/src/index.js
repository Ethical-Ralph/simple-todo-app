import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import store from "./Redux/store";
import AlertTemplate from "./Components/AlertTemplate";
import setAuthToken from "./utils/setToken";
import JwtDecode from "jwt-decode";
import { loginSuccess } from "./Redux/auth/action";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

if (!!localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
  const { name, email } = JwtDecode(localStorage.getItem("token"));
  const user = {
    name,
    email,
  };
  store.dispatch(loginSuccess({ user }));
}

ReactDom.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById("root")
);
