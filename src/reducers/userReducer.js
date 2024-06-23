import {handleActions} from "redux-actions";
import {fetchUserData, fetchUserDataSuccess} from "../actions/Actions.js";

export const userData= handleActions({
    [fetchUserDataSuccess().type]: (state,action) => {
        return {...state,users: action.payload}
    }
}, {users: []});
