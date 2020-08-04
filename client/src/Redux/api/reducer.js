import * as apiActionTypes from "./actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiActionTypes.API_CALL_LOADING:
      return {
        ...state,
        loading: true,
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
