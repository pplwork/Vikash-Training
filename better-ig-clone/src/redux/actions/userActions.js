import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

import { auth, db, storage } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const register = (username, email, password) => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    await signInWithEmailAndPassword(auth, email, password);

    dispatch(getUserData());
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
  }
};

export const getUserData = () => async (dispatch) => {
  const user = auth.currentUser();

  dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
};
