import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

const initialState = {
  user: "",
  loading: true,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
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
