 const scoreReducer = (state = 0 , action)=>{
    switch (action.type){
        case "upScore":
            return state + 1;
        case "downScore":
            return state - 1; 
            default:
                return state;
    }
}
export default scoreReducer;