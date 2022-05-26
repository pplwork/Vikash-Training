import { CLEAR_DATA, USERS_POST_STATE_CHANGE, USERS_STATE_CHANGE, USERS_LIKES_STATE_CHANGE } from "../constants"

const initialState={
    following:[],
    users:[],
    usersFollowingLoaded:0,
    feed:[],
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
                users:state.users.map(user=>user.id===action.id? {...user,posts:action.post}:user),
                usersFollowingLoaded:state.usersFollowingLoaded+1,
                feed: [...state.feed, ...action.posts]
            }
        case USERS_LIKES_STATE_CHANGE:
            return{
                ...state,
                feed: state.feed.map(post=>post.id == action.postId ? {...post,currentUserLike: action.currentUserLike}
                    :post
                )
            }
        case CLEAR_DATA:
            return initialState
            
        default:
            return state;
    }
}