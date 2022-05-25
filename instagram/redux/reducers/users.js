import { CLEAR_DATA, USERS_POST_STATE_CHANGE, USERS_STATE_CHANGE } from "../constants"

const initialState={
    following:[],
    users:[],
    usersLoaded:0,
}

export const users= (state=initialState ,action)=>{
    switch(action.type){
        case USERS_STATE_CHANGE:
            return{
                ...state,
                users:[...state.users,action.user]
            }
        case USERS_POST_STATE_CHANGE:
            return{
                ...state,
                usersLoaded:state.usersLoaded+1,
                users: state.users.map(user=>user.uid===action.uid ?{...user,posts:action.post}:{...user})
            }
        case CLEAR_DATA:
            return initialState
            
        default:
            return state;
    }
}

