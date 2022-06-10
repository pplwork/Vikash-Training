import React from 'react'
import './screen.css'
import { useSelector } from "react-redux";


const Screen = () => {
  
  const {time} = useSelector(state => state.watch);
  console.log(time)

  return (
    <div className='screen'>
        <h2 className='timer'>
          <span>
            {("0"+Math.floor((time/60000)%60)).slice(-2)}m:
          </span>
          <span>
            {("0"+Math.floor((time/1000)%60)).slice(-2)}s:
          </span>
          <span>
            {("0"+Math.floor((time/10)%100)).slice(-2)}
          </span>
        </h2>
    </div>
  )
}

export default Screen