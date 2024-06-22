// initial state is not mandatory it can be null

import { handleActions } from "redux-actions";
import { increment,decrement } from "../actions/Actions";


const initialState = 0;

const updateState=handleActions(
    {
        [increment().type] : (state,action) => state + action.payload,
        [decrement().type] : (state) => state - 1
    },
    initialState
)

export default updateState;
