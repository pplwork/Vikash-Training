import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_AUTH_STATE_CHANGE,
  USER_DATA_LOADING,
  USER_DATA_FOUND,
} from "../constants/userConstants";

const initialState = {
  user: "",
  loading: true,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
    case USER_DATA_FOUND:
      console.log('action.payload', action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};

const loggedInUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case value:
      break;

    default:
      break;
  }
};
