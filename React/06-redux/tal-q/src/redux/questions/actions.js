import { ADD_QUESTION, REMOVE_QUESTION } from "./actionTypes";

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: question
});

export const removeQuestion = (id) => ({
  type: REMOVE_QUESTION,
  payload: id
});