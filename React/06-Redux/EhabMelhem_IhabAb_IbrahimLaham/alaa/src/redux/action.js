<<<<<<< Updated upstream
import { ADD_QUESTION, ADD_SCORE } from "./actionTypes";
=======
import { ADD_QUESTION } from "./actionTypes";
>>>>>>> Stashed changes

export const addQuestion = (content) => ({
  type: ADD_QUESTION,
  payload: {
    content,
  },
});
<<<<<<< Updated upstream
export const addScore = (add) => ({
  type: ADD_SCORE,
  payload: {
    add,
  },
});
=======
>>>>>>> Stashed changes
