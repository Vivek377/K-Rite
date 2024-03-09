import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as taskReducer } from "./task/reducer";

const rootReducer = combineReducers({
  user: authReducer,
  tasks: taskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
