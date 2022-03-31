import { combineReducers } from "redux";
import movieReducer from "./movieReducers";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

export const allReducers = combineReducers({
    movieReducer,
    loginReducer,
    registerReducer
})