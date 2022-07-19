import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { userReducer, userDataReducer } from './src/redux/reducers/userReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  userData:userDataReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
