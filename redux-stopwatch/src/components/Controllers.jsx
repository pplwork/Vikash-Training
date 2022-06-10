import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { LAP, PAUSE, RESET, START } from '../redux/constants';

const Controllers = ({props}) => {

  const dispatch = useDispatch(); 


  return (
    <div className='controllers'>
      <Button
        className='btn'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        onClick={()=>dispatch({type:START})}
      >
        START
      </Button>
      <Button
        className='btn'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        onClick={()=>dispatch({type:PAUSE})}
      >
        PAUSE
      </Button>
      <Button
        className='btn'
        buttonStyle='btn--test'
        buttonSize='btn--large'
        onClick={()=>dispatch({type:RESET})}
      >
        RESET
      </Button>
      <Button
        className='btn'
        buttonStyle='btn--test'
        buttonSize='btn--large'
        onClick={()=>dispatch({type:LAP})}
      >
       ADD LAP
      </Button>
    </div>
  )
}

export default Controllers