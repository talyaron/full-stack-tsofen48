import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actionTypes";
let counter = 0


export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
  payload: ++counter
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
  payload: --counter
});