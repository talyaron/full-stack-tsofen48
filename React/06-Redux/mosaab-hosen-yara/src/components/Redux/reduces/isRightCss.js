export const isRightReducer = (state=false,action) => {
    switch (action.type){

        case "isRightIsTrue":
            return "true";

            case "isRightIsFalse":
                return "false";

                default:
            return state;    
    }
} 