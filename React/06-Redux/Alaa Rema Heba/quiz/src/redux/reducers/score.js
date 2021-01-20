import { UPDATE_SCORE } from "../actionTypes";

const scoreReducers = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_SCORE: 
            return state+action.payload;

        default:
            return state;
    }
};

export default scoreReducers;