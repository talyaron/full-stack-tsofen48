import { ADD_QUESTION, UPDATE_SCORE} from './actionTypes';

let nextQuestionId = 0, score = 0;

export const addQuestion = content => ({
    type: ADD_QUESTION,
    payload: {
        id: ++nextQuestionId,
        content
    }

});

export const updateScore = content => ({
    type: UPDATE_SCORE,
    payload: {
        score: ++score,
        content
    }

});