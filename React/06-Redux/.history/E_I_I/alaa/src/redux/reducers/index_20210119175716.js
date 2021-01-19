import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
import question from "./questions";
import score from "./score";
export default combineReducers({ question, score });
