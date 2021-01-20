import { combineReducers } from "redux";
import questions from "./questions";
import score from "./score";

export default combineReducers({ questions, score });
