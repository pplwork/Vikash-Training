import { Alert } from 'react-native'

import { LAP, PAUSE, RESET, START, TIME } from "./constants"

const initialState={
    time:0,
    lap:[],
    isActive:false,
    isPaused:true,
    flag:false,
}

const watchReducer=(state=initialState, action)=>{
    switch (action.type) {
        case START:
            return {
                ...state,
                flag:false,
                isActive:true,
                isPaused:false
            }
        case TIME:
            return {
                ...state, time:state.time+10
            }
        case RESET:
            console.log(state.flag)
            Alert.alert('Simple Button pressed')
            if(state.flag){
                return {
                    ...state,
                    isActive:false,
                    isPaused:true,
                    time:0,
                }
            }else{
                return state
            }
        case PAUSE:
            return {
                ...state,
                flag:true,
                isActive:(state)=>state.isActive?true:false,
                isPaused:(state)=>state.isActive?true:false,
            }
        case LAP:
            return{
                ...state,
                lap:[...state.lap,state.time]
            }
    
        default:
            return state;
    }
}

export default watchReducer;