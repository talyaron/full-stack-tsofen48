import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: {
    question
  }
});



export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });