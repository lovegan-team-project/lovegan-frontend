import { combineReducers } from "redux";
import lovegan from "./lovegan";
import user from "./user";

const rootReducer = combineReducers({
    user,
    lovegan
})

export default rootReducer;