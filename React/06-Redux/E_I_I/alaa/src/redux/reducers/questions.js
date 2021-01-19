import { ADD_QUESTION } from "../actionTypes";
const initialState = {
  question: [],
};
const todoReducers = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_QUESTION: {
      const { content } = action.payload;
      console.log(content);
      return {
        ...state,
        question: [...state.question, content],
      };
    }
    default:
      return state;
  }
};
export default todoReducers;
