import * as todoActiontypes from "./actiontypes";

const initialState = {
  todos: [],
  todo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActiontypes.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case todoActiontypes.CREATE_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case todoActiontypes.ADD_TASK:
    case todoActiontypes.FETCH_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case todoActiontypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((val) => val._id !== action.payload),
      };
    case todoActiontypes.REMOVE_TASK:
      return {
        ...state,
        todo: {
          ...state.todo,
          tasks: state.todo.tasks.filter((val) => val._id !== action.payload),
        },
      };
    case todoActiontypes.MARK_AS_COMPLETE:
    case todoActiontypes.MARK_AS_UNCOMPLETE:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
