import { combineReducers } from "redux";
import watchReducer from "./redux/reducer";

const rootReducer= combineReducers({
    watch:watchReducer
})

export default rootReducer