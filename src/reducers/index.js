import { combineReducers } from "redux";
import movieReducer from "./movieReducers";
import loginReducer from "./loginReducer";

export const allReducers = combineReducers({
    movieReducer,
    loginReducer
})