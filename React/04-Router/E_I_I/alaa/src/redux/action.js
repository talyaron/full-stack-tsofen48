import { ADD_QUESTION } from "./actionTypes";

export const addQuestion = (content) => ({
  type: ADD_QUESTION,
  payload: {
    content,
  },
});
