import "./App.css";
import React, { useState, useEffect } from "react";
import Screen from "./components/Screen";
import Controllers from "./components/Controllers";
import Lap from "./Lap.js";
import { useDispatch, useSelector } from "react-redux";
import { TIME } from "./redux/constants";


function App() {
  const dispatch = useDispatch(); 

  const {isActive, isPaused, lap, time} = useSelector(state => state.watch);
  const data = useSelector(state => state.watch);
  console.log(data)

  let laps = [];

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        dispatch({type:TIME})
        // setTime((time) => {
        //   return time + 10;
        // });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isActive]);

  return (
    <>
      <Screen />
      <Controllers />
        <Lap />
        {/* <button onClick={(()=>dispatch({type:"START"}))} >HI</button> */}
    </>
  );
}

export default App;