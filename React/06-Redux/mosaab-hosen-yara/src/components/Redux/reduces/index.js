import scoreReducer  from './score'
import { combineReducers } from 'redux';
import {isCorrectReducer} from './isCorrect';
import {isRightReducer} from './isRightCss'

const allReducers = combineReducers({
    score:scoreReducer,
    isCorrect:isCorrectReducer,
    isRight:isRightReducer
})

export default allReducers;