export const isCorrectReducer = (state=false,action) => {
    switch (action.type){
        case "True":
            return true;
        default:
            return state;    
    }
}