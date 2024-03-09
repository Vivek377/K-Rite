import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import { login, signup } from "./api";

const signupError = () => {
  return { type: SIGNUP_ERROR };
};

const signupSuccess = (data) => {
  return { type: SIGNUP_SUCCESS, payload: data };
};

const signupLoading = () => {
  return { type: SIGNUP_LOADING };
};

const signupUser = (user) => async (dispatch) => {
  dispatch(signupLoading());
  try {
    let payload = await signup(user).then((res) => res.data);

    dispatch(signupSuccess(payload));
    alert("Successfully signed up!");
  } catch (e) {
    console.log(e);
    dispatch(signupError());
  }
};

const loginError = () => {
  return { type: LOGIN_ERROR };
};

const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};

const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

const loginUser = (user) => async (dispatch) => {
  dispatch(loginLoading());
  try {
    let payload = await login(user).then((res) => res.data);
    console.log(payload);

    dispatch(loginSuccess(payload));

    alert("Successfully logged in!");
    
  } catch (e) {
    console.log(e);
    dispatch(loginError());
  }
};

const logoutError = () => {
  return { type: LOGOUT_ERROR };
};

const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

const logoutLoading = () => {
  return { type: LOGOUT_LOADING };
};

const logoutUser = () => async (dispatch) => {
  dispatch(logoutLoading());
  try {
    dispatch(logoutSuccess());
  } catch (e) {
    console.log(e);
    dispatch(logoutError());
  }
};

export { loginUser, signupUser, logoutUser };
