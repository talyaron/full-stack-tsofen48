import produce from "immer";

const INITIAL_STATE = {
  counter: 0
};
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/INCREMENT":
        draft.counter += action.payload;
        break;
      case "@auth/DECREMENT":
        draft.counter -= action.payload;
        break;
      default:
    }
  });
}