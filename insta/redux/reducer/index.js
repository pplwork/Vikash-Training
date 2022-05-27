import { combineReducers } from "redux";
import {user} from './user'
import { users } from "./users";

const Reducers= combineReducers({
    user,
    users
})
export default Reducers;