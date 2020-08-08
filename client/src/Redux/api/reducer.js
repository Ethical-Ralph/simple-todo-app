import * as apiActionTypes from "./actionTypes";

const initialState = {
  loading: false,
  error: null,
  message: "working....",
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.API_CALL_LOADING:
      return {
        ...state,
        loading: true,
        message: action.payload,
      };
    case apiActionTypes.API_CALL_SUCCESS:
      return {
        error: null,
        loading: false,
      };
    case apiActionTypes.API_CALL_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
