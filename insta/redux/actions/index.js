import {
    USER_POST_STATE_CHANGE,
    USER_STATE_CHANGE,
    USER_FOLLOWING_STATE_CHANGE,
    USERS_STATE_CHANGE,
    USERS_POST_STATE_CHANGE,
    USERS_LIKES_STATE_CHANGE,
    CLEAR_DATA,
} from "../constants/index";

import firebase from "firebase";

export function clearData() {
    return (dispatch) => {
        dispatch({ type: CLEAR_DATA });
    };
}

export function fetchUser() {
    return ((dispatch) => {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                console.log(snapshot.data());
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data()});
                } else {
                    console.log("user does not exist");
                }
            }).catch(err=>console.log(err))
    })
}

export function fetchUserPosts() {
    return ((dispatch) => {
        firebase
            .firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                });
                console.log(posts);
                dispatch({ type: USER_POST_STATE_CHANGE, posts });
            });
    })
}


export function fetchUserFollowing() {
    return (dispatch) => {
        firebase
            .firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFollowing")
            .onSnapshot((snapshot) => {
                let following = snapshot.docs.map((doc) => {
                    const id = doc.id;
                    return id;
                });
                console.log(following)
                dispatch({ type: USER_FOLLOWING_STATE_CHANGE, following });

                for (let i = 0; i < following.length; i++) {
                    dispatch(fetchUsersData(following[i], true));
                }
            });
    };
}

export function fetchUsersData(uid, getPosts) {
    return ((dispatch, getState) => {
        const found = getState().users.users.some((item) => item.uid === uid);
        console.log(found, uid)

        if (!found) {
            firebase
                .firestore()
                .collection("users")
                .doc(uid)
                .get()
                .then((snapshot) => {
                    console.log(snapshot.data());
                    console.log(snapshot.exists);
                    console.log(uid)
                    if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;
                        dispatch({ type: USERS_STATE_CHANGE, user });
                    } else {
                        console.log("user does not exist");
                    }
                });
            if (getPosts) {
                dispatch(fetchUserFollowingPosts(uid));
            }
        }
    })
}


export function fetchUserFollowingPosts(uid) {
    return ((dispatch, getState) => {
        firebase
            .firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                console.log(snapshot.query._.C_.path.segments[1])
                // console.log(snapshot.docs[0].ref.path.split('/')[1])

                const uid = snapshot.query._.C_.path.segments[1];
                console.log(uid);
                // console.log(snapshot.docs)
                const user = getState().users.users.find((item) => item.uid === uid);

                let posts = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data, user };
                });
                
                console.log(posts);

                for (let i = 0; i < posts.length; i++) {
                    dispatch(fetchUserFollowingLikes(uid, posts[i].id));
                    console.log(uid)
                }
                dispatch({ type: USERS_POST_STATE_CHANGE, posts, uid });
                console.log(getState());
            });
    })
}

export function fetchUserFollowingLikes(uid, postId) {
    return (dispatch, getState) => {
        firebase
            .firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .doc(postId)
            .collection("likes")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot) => {
                
                // console.log(snapshot.ZE.path.segments[3])
                const postId = snapshot._.S_.path.segments[3];

                let currentUserLike = false;
                if (snapshot.exists) {
                    currentUserLike = true;
                }
                console.log(uid);
                dispatch({ type: USERS_LIKES_STATE_CHANGE, postId, currentUserLike });
                console.log(getState());
            });
    };
}

