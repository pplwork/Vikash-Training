import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {userReducer} from '././src/redux/reducers/userReducer';
import { suggestedUserReducer } from "./src/redux/reducers/suggestedUserReducer";

const rootReducer= combineReducers({
    user:userReducer,
    suggest:suggestedUserReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
