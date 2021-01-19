import { ADD_QUESTION } from "../actionTypes";

let initialState = {
    questions: []
};

const questionsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION: {
            const { id, content } = action.payload;
            return {
                ...state,
                questions: [...state.questions, { id, content }] // content = [ question , answers] ;
            }

        };

        default:
            return state;
    }
}

export default questionsReducers;