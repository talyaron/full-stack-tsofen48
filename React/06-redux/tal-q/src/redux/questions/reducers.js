import { ADD_QUESTION, REMOVE_QUESTION } from "./actionTypes";

const initialState = [];

const questions = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_QUESTION: {
            const id = revisedRandId();
            const question = action.payload;
            question.id = id;

            return [...state, question]

        };

        case REMOVE_QUESTION: {
            console.log(action)
            const id = action.payload;
            return state.filter(element => element.id !== id);

        };


        default:
            return state;
    }
}

export default questions;

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}