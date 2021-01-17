import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actionTypes";

const initialState = {
  counter:0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER: {
      const { counter } = action.payload;
      return {
        ...state,
        counter: state.counter + 1
      }

    };

    case DECREASE_COUNTER: {
        const { counter } = action.payload;
        return {
          ...state,
          counter: state.counter - 1
        }
  

    };

 
    default:
      return state;
  }
}

export default counter;