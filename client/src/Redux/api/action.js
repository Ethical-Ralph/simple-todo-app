import * as apiActionTypes from "./actionTypes";

export const apiCallLoading = (payload) => ({
  type: apiActionTypes.API_CALL_LOADING,
  payload,
});

export const apiCallError = (payload) => ({
  type: apiActionTypes.API_CALL_ERROR,
  payload,
});

export const apiCallSuccess = () => ({
  type: apiActionTypes.API_CALL_SUCCESS,
});

// export const apiCallSuccess = () => {
//   return (dispatch) => {
//     dispatch(apiSuccess());
//   };
// };

// export const apiCallLoading = () => {
//   return (dispatch) => {
//     dispatch(apiLoading());
//   };
// };

// export const apiCallError = () => {
//   return (dispatch) => {
//     dispatch(apiError());
//   };
// };
