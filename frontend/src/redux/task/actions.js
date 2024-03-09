import {
  ADD_TASK,
  GET_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TASK_ERROR,
  TASK_LOADING,
} from "./actionTypes";
import { addTaskApi, deleteTaskApi, editTaskApi, getTaskApi } from "./api";

const taskLoading = () => {
  return { type: TASK_LOADING };
};

const taskError = () => {
  return { type: TASK_ERROR };
};

const getTaskSuccess = (payload) => {
  return { type: GET_TASK, payload };
};

const addTaskSuccess = (payload) => {
  return { type: ADD_TASK, payload };
};

const editTaskSuccess = (payload) => {
  return { type: EDIT_TASK, payload };
};

const deleteTaskSuccess = (payload) => {
  return { type: DELETE_TASK, payload };
};

const getTask = () => async (dispatch) => {
  dispatch(taskLoading());
  try {
    const payload = await getTaskApi().then((res) => res.data);

    dispatch(getTaskSuccess(payload));
  } catch (e) {
    console.log(e);
    dispatch(taskError());
  }
};

const addTask = (task) => async (dispatch) => {
  dispatch(taskLoading());
  try {
    const payload = await addTaskApi(task).then((res) => res.data);

    dispatch(addTaskSuccess(payload));
  } catch (e) {
    console.log(e);
    dispatch(taskError());
  }
};

const editTask = (id, task) => async (dispatch) => {
  dispatch(taskLoading());
  try {
    const payload = await editTaskApi(id, task).then((res) => res.data);

    dispatch(editTaskSuccess(payload));
  } catch (e) {
    console.log(e);
    dispatch(taskError());
  }
};

const deleteTask = (task) => async (dispatch) => {
  dispatch(taskLoading());
  try {
    const payload = await deleteTaskApi(task).then((res) => res.data);

    dispatch(deleteTaskSuccess(payload));
  } catch (e) {
    console.log(e);
    dispatch(taskError());
  }
};

export { getTask, addTask, editTask, deleteTask };
