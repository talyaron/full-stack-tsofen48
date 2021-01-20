import { ADD_QUESTION, UPDATE_SCORE} from './actionTypes';

let nextQuestionId = 0, score = 0;

export const addQuestion = (content)=> {
    return{
        type: ADD_QUESTION,
        payload: {
            id: ++nextQuestionId,
            content
        }
    };
};

export const updateScore = (num) => {
    return{
        type: UPDATE_SCORE , 
        payload: num
    };
};