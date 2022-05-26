import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { connect } from 'react-redux'
import firebase from 'firebase';
require('firebase/firestore')

const Profile = (props) => {

  const [userPosts, setUserPosts] = useState([])
  const [user, setuser] = useState(null)
  const [isfollowing, setIsfollowing] = useState(false)
  console.log(user)

  useEffect(() => {

    const { currentUser, posts } = props;

    console.log(currentUser, posts)

    if (props.route.params.uid === firebase.auth().currentUser.uid) {
      setuser(currentUser)
      setUserPosts(posts)
    } else {

      firebase.firestore()
        .collection("users")
        .doc(props.route.params.uid)
        .get()
        .then((snapshot) => {
          console.log(snapshot.data())
          if (snapshot.exists) {
            setuser(snapshot.data())
          } else {
            console.log('user does not exist')
          }
        })

      firebase.firestore()
        .collection("posts")
        .doc(props.route.params.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
          let posts = snapshot.docs.map(doc => {
            const data = doc.data()
            const docId = doc.id;
            return { docId, ...data }
          })
          console.log(posts)
          setUserPosts(posts)
        })
    }

    if(props.following.indexOf(props.route.params.uid) > -1){
      setIsfollowing(true);
    }else{
      setIsfollowing(false);
    }

  }, [props.route.params.uid, props.following])

  const onFollow=()=>{
    firebase.firestore()
    .collection("following")
    .doc(firebase.auth().currentUser.uid)
    .collection("userFollowing")
    .doc(props.route.params.uid)
    .set({})
  }

  const onUnfollow=()=>{
    firebase.firestore()
    .collection("following")
    .doc(firebase.auth().currentUser.uid)
    .collection("userFollowing")
    .doc(props.route.params.uid)
    .delete()
  }

  const onLogout=()=>{
    firebase.auth().signOut();
  }

  // if (user === null) {
  //   return <View />
  // }

  return (
    <View style={style.container}>
      <View style={style.userInfo}>
        <Text>User Info</Text>
        <View >
          <Text>{user?.name}</Text>
        </View>
        <View>
          <Text>{user?.email}</Text>
        </View>

        {props.route.params.uid !== firebase.auth().currentUser.uid ? (
          <View>

            {isfollowing? (
              <Button title='Following' onPress={()=>onUnfollow()} />
            ):(
              <Button title='Follow' onPress={()=>onFollow()} />
            )}
            
          </View>
        ) : (
          <View>
            <Button title='logout' onPress={()=>onLogout()} />
          </View>
        )}

      </View>
      <View style={style.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={userPosts}
          renderItem={({ item }) => (
            <View style={style.containerImage}>
              <Image
                style={style.image}
                source={{ uri: item.downloadURL }}
              />
            </View>
          )}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    margin: 20
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    flex: 1 / 3,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1
  },
})

const mapStateToProps = (store) => ({
  currentUser: store.user.currentUser,
  posts: store.user.posts,
  following: store.user.following,
})

export default connect(mapStateToProps, null)(Profile)