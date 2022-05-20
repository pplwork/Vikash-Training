import React from 'react'

const Lap = ({lap}) => {

  console.log(lap)

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