import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  LOAD_USER_DATA,
} from "../constants/userConstants";

const initialState = {
  user: "",
  loading: true,
  error: "",
};

export const userReducer = (state = initialState, action) => {
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

const userDataInitialState = {
  email: "",
  name: "",
};
export const userDataReducer = (state = userDataInitialState, action) => {
  switch (action.type) {
    case LOAD_USER_DATA:
      // console.log(action.payload);
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      };
    default:
      return {};
  }
};
