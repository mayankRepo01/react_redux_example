import { createAction } from 'redux-actions';

// Here we are defining what our action will be
/**
 * Action creators for counter operations.
 */

/**
 * Creates an action to increment the counter.
 * @returns {Object} An action object with a type of "INCREMENT".
 */

// createAction is a function that takes two arguments: the first argument is the type of the action, and the second argument is a function that returns the payload of the action.
/*
{ type: 'INCREMENT', payload: 10 }.
 */

//Automated way of creating payload

export const increment = createAction("INCREMENT", (payload) => payload );

/**
 * Creates an action to decrement the counter.
 * @returns {Object} An action object with a type of "DECREMENT".
 */

//Manual way of creating action
export const decrement = (num) => ({
    type: "DECREMENT",
    payload: num
});

export const setWeatherData = (data)=> {
    return {
        type: "SET_WEATHER_DATA",
        payload: data
    }
}


export const fetchUserData= createAction("FETCH_USER_DATA");
export const fetchUserDataSuccess= createAction("FETCH_USER_DATA_SUCCESS");