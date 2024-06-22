import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from "react-redux";

import {increment, decrement, setWeatherData} from './actions/Actions';

import {getchangeNumberState} from "./selectors/Selectors"


function App() {

  //Previously we were doing it using state 
  /* const [count, setCount] = useState(0);

  const incrementMethod= ()=> {
    setCount(prev => prev +1);
  }

  const decrementMethod= ()=> {
    setCount(prev => prev - 1);
  } */
  const counter=useSelector(getchangeNumberState);
  const wdata= useSelector((state) => state.weather);

  const dispatch =useDispatch();
  
  const incrementHandler= ()=> {
    dispatch(increment(10));
  }

  const decrementHandler= ()=> {
    dispatch(decrement(5));
  }

  const fetchWeatherDetails=() => {
    fetch('http://api.weatherapi.com/v1/current.json?q=London', {
      method: 'GET',
      headers: {
        'key': '0d535d0ccdd74730aa9175910242206'
      }
    })
        .then(response => response.json())
        .then(data => {
          console.log("Data",data);
          dispatch(setWeatherData(data)); // Dispatch the action with the received data
        })
        .catch(error => console.error('Error:', error));
  }

  useEffect(fetchWeatherDetails, []);
  console.log("Weather Data",wdata);
  return (
      <>
        <h1>Learning Redux</h1>

        <div>
          <button onClick={decrementHandler}>-</button>
          Current Counter Value : {counter}
          <button onClick={incrementHandler}>+</button>
        </div>

        <h2>Weather data is being display</h2>
        <p>

          {wdata.location && wdata.location.name}
        </p>
      </>
  )
}

export default App
