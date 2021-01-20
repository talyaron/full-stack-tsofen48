export function increment(number) {
    return {
      type: "@auth/INCREMENT",
      payload: number
    };
  }
  export function decrement(number) {
    return {
      type: "@auth/DECREMENT",
      payload: number
    };
  }