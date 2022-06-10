import {START, RESET, PAUSE, TIME, LAP} from './constants'

const initialState={
    time:0,
    lap:[],
    isActive:false,
    isPaused:true,
}

const watchReducer=(state=initialState, action)=>{
    switch (action.type) {
        case START:
            return {
                ...state,
                isActive:true,
                isPaused:false
            }
        case TIME:
            return {
                ...state, time:state.time+10
            }
        case RESET:
            return {
                ...state,
                isActive:false,
                isPaused:true,
                time:0,
            }
        case PAUSE:
            return {
                ...state,
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