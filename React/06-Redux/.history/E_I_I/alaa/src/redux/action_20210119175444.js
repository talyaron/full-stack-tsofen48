import { ADD_QUESTION, ADD_SCORE } from "./actionTypes";

export const addQuestion = (content) => ({
  type: ADD_QUESTION,
  payload: {
    content,
  },
});
