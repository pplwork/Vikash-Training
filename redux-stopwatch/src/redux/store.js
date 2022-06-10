import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store