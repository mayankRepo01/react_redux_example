import updateState from "./IncrementDecrementReducer";
import {combineReducers} from "redux";
import {weatherData} from "./WeatherDataReducer.js";
import {userData} from "./userReducer.js";

const rootReducer = combineReducers({
    // here the key is the name of the state variable and the value is the reducer itself
    //add all the reducers here
    weather: weatherData,
    updateState :updateState,
    usersState: userData
})


export default rootReducer;