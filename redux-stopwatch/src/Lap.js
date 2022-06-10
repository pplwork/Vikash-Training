import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Lap = () => {
  const {isActive, isPaused, lap, time} = useSelector(state => state.watch);

  return (
    <div className='laps'>
      {lap && lap.map((element)=>(
        <div key={element}>
          {Math.round((element/100).toFixed(1)/10)+":"+element%100+" s"}
        </div>
      ))}
        
    </div>
  )
}

export default Lap