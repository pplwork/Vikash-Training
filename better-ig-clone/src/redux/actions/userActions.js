import {
  REDIRECT_USER_TOEDIT,
  SUGGESTED_PROFILE_FAIL,
  SUGGESTED_PROFILE_LOADING,
  SUGGESTED_PROFILE_SUCCESS,
  USER_DATA_FOUND,
  USER_DATA_LOADING,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

import { auth, db, storage } from "../../../firebase.config";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  where,
  docs,
  getDocs,
  query,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  limit,
} from "firebase/firestore/lite";

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
  dispatch({ type: USER_DATA_LOADING });
  const userId = auth.currentUser.uid;

  const result = query(collection(db, "users"), where("userId", "==", userId));

  const userInfo = await getDocs(result);
  const [user] = userInfo.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  dispatch({ type: USER_DATA_FOUND, payload: user });
};

export const updateCurrentUserFollowing = async (
  currentuserId,
  followedUserId,
  flag
) => {
  const currentUserdocRef = doc(db, "users", currentuserId);
  const currentUserdoc = await getDoc(currentUserdocRef);
  if (currentUserdoc.exists()) {
    console.log("currentUserdoc.data()", currentUserdoc.data());
  }
  await updateDoc(currentUserdocRef, {
    following: flag ? arrayRemove(followedUserId) : arrayUnion(followedUserId),
  });
};

export const updateFollowedUserFollowers = async (
  currentuserId,
  followedUserId,
  flag
) => {
  const followedUserdocRef = doc(db, "users", followedUserId);
  const followedUserdoc = await getDoc(followedUserdocRef);
  if (followedUserdoc.exists()) {
    console.log("followedUserdoc", followedUserdoc);
  }
  await updateDoc(followedUserdocRef, {
    followers: flag ? arrayRemove(currentuserId) : arrayUnion(currentuserId),
  });
};

export const handleFollow = (currentUserId, followedUserId, follow) => {
  updateCurrentUserFollowing(currentUserId, followedUserId, follow);
  updateFollowedUserFollowers(currentUserId, followedUserId, follow);
  console.log("first", currentUserId, followedUserId, follow);
};

export const getUserSuggestion =
  (currentUserId, following = []) =>
  async (dispatch) => {
    console.log("currentUserId", currentUserId);

    try {
      dispatch({ type: SUGGESTED_PROFILE_LOADING });
      const profiles = query(collection(db, "users"), limit(10));
      const profileData = await getDocs(profiles);

      const users = profileData.docs
        .map((item) => ({
          ...item.data(),
          docId: item.id,
        }))
        .filter(
          (item) =>
            item.userId !== currentUserId && !following.includes(item.userId)
        );

      console.log("users", users);
      dispatch({ type: SUGGESTED_PROFILE_SUCCESS, payload: users });
    } catch (error) {
      dispatch({ type: SUGGESTED_PROFILE_FAIL });
    }
  };

export const getFollowedUserPosts =
  (currentUserId, following = []) =>
  async (dispatch) => {
    // const
  };

export const handleProfileUpdate = (displayName, photoUrl) => {
  updateProfile(auth.currentUser, {
    displayName,
    photoUrl,
  })
    .then(() => true)
    .catch(() => false);
};

export const redirectEditProfile=()=>async(dispatch)=>{
  dispatch({type:REDIRECT_USER_TOEDIT})
}