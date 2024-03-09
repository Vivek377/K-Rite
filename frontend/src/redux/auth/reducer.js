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

let user = localStorage.getItem("token");

const initialState = {
  loading: false,
  error: false,
  isAuth: user ? true : false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return { ...state, loading: false, isAuth: true };
    }
    case LOGIN_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case SIGNUP_LOADING: {
      return { ...state, loading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, loading: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case LOGOUT_LOADING: {
      return { ...state, loading: true };
    }
    case LOGOUT_SUCCESS: {
      localStorage.removeItem("token");
      return { ...state, loading: false, isAuth: false };
    }
    case LOGOUT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
};
