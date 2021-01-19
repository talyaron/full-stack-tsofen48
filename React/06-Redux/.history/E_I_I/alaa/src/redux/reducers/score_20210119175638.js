import { ADD_SCORE } from "../actionTypes";
const initialState = {
  score: 0,
};
const todoReducers = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_SCORE: {
      const { add } = action.payload;
      console.log(add);
      return {
        ...state,
        score: state.question + add,
      };
    }
    default:
      return state;
  }
};
export default todoReducers;
