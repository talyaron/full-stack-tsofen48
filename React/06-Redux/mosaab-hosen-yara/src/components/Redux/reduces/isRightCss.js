export const isRightReducer = (state=false,action) => {
    switch (action.type){

        case "isRightIsTrue":
            return "green";

            case "isRightIsFalse":
                return "red";

                default:
            return state;    
    }
} 