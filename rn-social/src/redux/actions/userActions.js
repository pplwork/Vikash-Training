import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  LOAD_USER_DATA,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../../firebase.config";
import {
  doc,
  setDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore/lite";

export const register = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then((res) => dispatch({ type: USER_REGISTER_SUCCESS }))
      .catch((err) => {
        console.log(err);
        dispatch({ type: USER_REGISTER_FAILED, payload: err });
      });

    if (auth.currentUser) {
      console.log("adding name", auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: userData.name,
      })
        .then((res) => console.log("sucess", res))
        .then(() =>
          createUserSchema(auth.currentUser.uid, userData.name, userData.email)
        )
        .catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_REGISTER_FAILED });
  }
};

const createUserSchema = async (uid, username, email) => {
  const docData = {
    username,
    isAdmin: false,
    email,
    followers: 0,
    following: 0,
    posts: 0,
    Timestamp: Timestamp.fromDate(new Date("January 1 2000")),
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, uid, "details"), docData).then(() =>
    console.log("user details saved")
  );
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    await signInWithEmailAndPassword(auth, email, password);

    dispatch({ type: USER_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
  }
};

export const getUserData = (user) => async (dispatch) => {
  // console.log(user)
  dispatch({ type: LOAD_USER_DATA, payload: user });
};
