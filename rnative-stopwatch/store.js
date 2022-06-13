import { legacy_createStore as createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store