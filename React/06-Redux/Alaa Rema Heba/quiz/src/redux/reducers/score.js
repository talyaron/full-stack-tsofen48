import { UPDATE_SCORE } from "../actionTypes";

let initialState = {
    score: 0
};

const scoreReducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCORE: {
            const score = action.payload;
            return {
                ...state,
                score: ++score
            }

        };

        default:
            return state;
    }
}

export default scoreReducers;