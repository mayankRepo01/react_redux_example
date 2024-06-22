import {createSelector } from "reselect";
import updateState from "../reducers/IncrementDecrementReducer.js";


// create selector should be used when we want to combine result of various selector

/*

In your case, if updateState is the part of the state you're interested in,
you should return it in the first function.
The second function should then take this result and return it directly
 (or perform some computation on it if needed). Here's how you can modify your selector:
 */
export const  getchangeNumberState= createSelector(
    (state)=> state.updateState,(statefromFirstSelector)=> statefromFirstSelector
    );
