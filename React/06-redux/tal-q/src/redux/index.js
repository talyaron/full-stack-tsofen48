import { combineReducers } from "redux";

import questions from "./questions/reducers";
import counter from './counter/reducers'

export default combineReducers({ counter,questions });