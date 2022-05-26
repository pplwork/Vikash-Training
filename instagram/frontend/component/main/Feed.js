import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let posts = [];
    if (props.usersFollowingLoaded == props.following.length && props.following.length !== 0) {
      for (let i = 0; i < props.following.length; i++) {
        const user = props.users.find((el) => el.uid === props.following[i]);
        if (user != undefined) {
          posts = [...posts, ...user.posts];
        }
      }
      posts.sort((x, y) => x.creation - y.creation);

      // posts.feed.sort((x, y) => x.creation - y.creation);


      // setPosts(props.feed);

      setPosts(posts);
    }
  }, [props.usersFollowingLoaded, props.feed]);

  const onLikePress = (userId, postId) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(uid)
      .collection("userPosts")
      .doc(postId)
      .collection("likes")
      .doc(firebase.auth().currentUser.uid)
      .set({})
  }

  const onDislikePress = (userId, postId) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(uid)
      .collection("userPosts")
      .doc(postId)
      .collection("likes")
      .doc(firebase.auth().currentUser.uid)
      .delete()
  }

  return (
    <View style={style.container}>
      <View style={style.userInfo}>
        <Text>User Info</Text>
      </View>
      <View style={style.containerGallery}>
        <FlatList
          numColumns={1}
          horizontal={false}
          data={posts}
          renderItem={({ item }) => (
            <View style={style.containerImage}>
              <Text style={style.container}>{item.user.name}</Text>
              <Image style={style.image} source={{ uri: item.downloadURL }} />
              {
                item.currentUserLike?(
                  <Button title="Dislike" onPress={()=>onDislikePress(item.user.uid,item.id)} />
                ):(
                  <Button title="Like" onPress={()=>onLikePress(item.user.uid,item.id)} />
                )
              }
              <Text
                onPress={() => props.navigation.navigate("Comment", { postId: item.id, uid: item.user.uid })}
              >
                View Comments...
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    margin: 20,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    flex: 1 / 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.user.currentUser,
  following: store.user.following,
  feed: store.users.feed,
  users: store.users.users,
  usersFollowingLoaded: store.user.usersFollowingLoaded,
});

export default connect(mapStateToProps, null)(Feed);
