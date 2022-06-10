import { combineReducers } from "redux";
import watchReducer from "./reducers";

const rootReducer= combineReducers({
    watch:watchReducer
})

export default rootReducer