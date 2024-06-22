import {useDispatch} from "react-redux";
import {setWeatherData} from "../actions/Actions.js";
//
// const dispatch = useDispatch(); // Get the dispatch function from the useDispatch hook
// export const fetchWeatherDetails=() => {
//     fetch('http://api.weatherapi.com/v1/current.json?q=London', {
//         method: 'GET',
//         headers: {
//             'key': '0d535d0ccdd74730aa9175910242206'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             dispatch(setWeatherData(data)); // Dispatch the action with the received data
//         })
//         .catch(error => console.error('Error:', error));
// }