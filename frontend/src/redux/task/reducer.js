import {
  ADD_TASK,
  GET_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TASK_ERROR,
  TASK_LOADING,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  tasks: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TASK_LOADING:
      return { ...state, loading: true };
    case TASK_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TASK:
      return { ...state, loading: false, tasks: payload };
    case ADD_TASK:
      return { ...state, loading: false, tasks: [...state.tasks, payload] };
    case EDIT_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((ele) =>
          ele.id === payload.id ? payload : ele
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((ele) => ele.id === payload.id),
      };
    default:
      return state;
  }
};
