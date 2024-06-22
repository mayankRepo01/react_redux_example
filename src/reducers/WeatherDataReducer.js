import {handleActions} from "redux-actions";
import {setWeatherData} from "../actions/Actions";

const initialState = { location : {name: "India"}};

export const weatherData = handleActions(
    {
            [setWeatherData().type]: (state, action) => {
                return action.payload;
            }
       }, initialState);