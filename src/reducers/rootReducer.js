import updateState from "./IncrementDecrementReducer";
import {combineReducers} from "redux";
import {weatherData} from "./WeatherDataReducer.js";

const rootReducer = combineReducers({
    // here the key is the name of the state variable and the value is the reducer itself

    weather: weatherData,
    //add all the reducers here
    updateState :updateState
})


export default rootReducer;