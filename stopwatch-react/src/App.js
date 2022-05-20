import './App.css';
import React,{useState, useEffect} from 'react';
import Screen from './components/Screen';
import Controllers from './components/Controllers';

function App() {
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

  useEffect(() => {
    let interval=null;

    if(isActive && isPaused==false){
      interval=setInterval(()=>{
        setTime((time)=>{
          return time+10
        })
      },10)
    }else{
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [isActive, isPaused])
  

  return (
    <div className="App">

      <Screen time={time}/>
      <Controllers props={{
        setTime,isActive,
        setIsActive,isPaused,
        setIsPaused, handleStart,
        handlePause, handleReset}}/>
    </div>
  );
}

export default App;
