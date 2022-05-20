import React from 'react'
import './screen.css'

const screen = ({time}) => {
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

export default screen