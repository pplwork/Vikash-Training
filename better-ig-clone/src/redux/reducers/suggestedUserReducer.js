import {
  REDIRECT_USER_TOEDIT,
  SUGGESTED_PROFILE_LOADING,
  SUGGESTED_PROFILE_SUCCESS,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  users: [],
  error: false,
  canRedirect:false,
};

export const suggestedUserReducer = (state = initialState, action) => {
  console.log('action.payload', action.payload)
  switch (action.type) {
    case SUGGESTED_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUGGESTED_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case SUGGESTED_PROFILE_LOADING:
      return {
        ...state,
        loading: false,
        error: false,
        users: [],
      };
    case REDIRECT_USER_TOEDIT:
      return{
        ...state,
        canRedirect:true
      }
    default:
      return state;
  }
};
