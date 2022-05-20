import './App.css';
import React, { useState, useEffect } from 'react';
import Screen from './components/Screen';
import Controllers from './components/Controllers';
import Lap from './Lap.js'
import {useAlert} from 'react-alert'

function App() {
  const alert=useAlert()
  let laps=[];
  const [lap, addLap] = useState(0)
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const handleStart = (e) => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePause = (e) => {
    setIsPaused(!isPaused)
    setIsActive(!true)
  }

  const handleReset = (e) => {
    setIsActive(false)
    setIsPaused(true)
    setTime(0)
  }

  const handleLap = (e) => {
    addLap(time)
    laps.push(time)
    alert.show(Math.round((time/100).toFixed(1)/10)+":"+time%100+" s")
  }

  useEffect(() => {
    let interval = null;

    console.log(time)

    if (isActive && isPaused == false) {
      interval = setInterval(() => {
        setTime((time) => {
          return time + 10
        })
      }, 10)
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [isActive, isPaused, time])


  return (
    <div className="App">

      <Screen time={time} />
      <Controllers props={{
        handleLap,
        setTime, isActive, time,
        setIsActive, isPaused,
        setIsPaused, handleStart,
        handlePause, handleReset
      }} />
      <Lap laps={laps}/>

    </div>
  );
}

export default App;
