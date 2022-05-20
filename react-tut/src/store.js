import createStore from 'redux'
import {dispatch} from 'react-redux'

const todoActions={
    type: 'ADD_TODO',
    todo:'buy milk'
}

const iniState={
    todos:[],
    posts:[]
}

function myreducer(state=iniState,action){

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos,action.todo]
            }            
        default:
            return state
    }
}

const store= createStore(myreducer)


store.dispatch(todoActions)