import * as authTypes from "./actiontypes";

const initialState = {
  email: "",
  fullName: "",
  error: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.user.email,
        fullName: action.payload.user.fullName,
      };
    case authTypes.LOGIN_ERROR:
    case authTypes.SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case authTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
