import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./auth/reducer";
import todoReducer from "./todo/reducer";
import apiReducer from "./api/reducer";

const reducers = {
  auth: authReducer,
  todo: todoReducer,
  api: apiReducer,
};
const rootReducers = combineReducers(reducers);

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => console.log(store.getState()));

export default store;
