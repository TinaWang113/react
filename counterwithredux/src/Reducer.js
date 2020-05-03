

const initialState ={
    count: 0
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "INCREMENT":
            console.log("We caught an increment action.");
            return Object.assign({}, state, {
                count:state.count +1
            });

        case "DECREMENT":
            console.log("We caught an decrement action.");
            return Object.assign({}, state, {
                count: state.count -1
            });

        default:
            return state;

    }
};