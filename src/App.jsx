import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from "react-redux";

import { increment,decrement } from './actions/Actions';



function App() {

  //Previously we were doing it using state
  /* const [count, setCount] = useState(0);

  const incrementMethod= ()=> {
    setCount(prev => prev +1);
  }

  const decrementMethod= ()=> {
    setCount(prev => prev - 1);
  } */
  const counter=useSelector((state)=> state.changeTheNumber);

  const dispatch =useDispatch();

  const incrementHandler= ()=> {
    dispatch(increment());
  }

  const decrementHandler= ()=> {
    dispatch(decrement());
  }



  return (
      <>
        <h1>Learning Redux</h1>

        <div>
          <button onClick={decrementHandler}>-</button>
          Current Counter Value : {counter}
          <button onClick={incrementHandler}>+</button>
        </div>
      </>
  )
}

export default App
