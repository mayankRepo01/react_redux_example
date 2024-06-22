// initial state is not mandatory it can be null

import { handleActions } from "redux-actions";
import { increment,decrement } from "../actions/Actions";


//Old way 
/* const initialState = 0;

const changeTheNumber = (state=initialState,action) =>{
    switch(action.type){

        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default: return state;
    }
} 
    
export default changeTheNumber; */


const initialState = 0;

const updateState=handleActions(
    {
        [increment] : (state,action) => state + action.payload,
        [decrement] : (state) => state - 1
    },
    initialState
)

export default updateState;
