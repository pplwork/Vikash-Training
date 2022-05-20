import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'

const Controllers = ({props}) => {

  console.log(props)

    const isActive=props.isActive
    const setTime=props.setTime
    const setIsActive=props.setIsActive
    const isPaused=props.isPaused
    const handleStart=props.handleStart
    const handleReset=props.handleReset
    const handlePause=props.handlePause
    const setIsPaused=props.setIsPaused

  return (
    <div className='controllers'>
      <Button
        className='btn'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        onClick={handleStart}
      >
        START
      </Button>
      <Button
        className='btn'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        onClick={handlePause}
      >
        PAUSE
      </Button>
      <Button
        className='btn'
        buttonStyle='btn--test'
        buttonSize='btn--large'
        onClick={handleReset}
      >
        RESET
      </Button>
    </div>
  )
}

export default Controllers