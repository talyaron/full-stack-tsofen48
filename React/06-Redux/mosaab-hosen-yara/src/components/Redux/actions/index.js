export const downOne = () => {
  return {
    type: "downScore",
  };
};

export const upOne = () => {
  return {
    type: "upScore",
  };
};

export const isRightTrue = () => {
  return {
    type: "isRightIsTrue",
  };
};

export const isRightFalse = () => {
  return {
    type: "isRightIsFalse",
  };
};

export const NotCorrect = () => {
    return {
      type: false
    };
  };
  
  export const itsAnCorrect = () => {
    return {
        type: true
    };
  };
  