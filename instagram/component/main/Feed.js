import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { connect } from 'react-redux'
import firebase from 'firebase';
require('firebase/firestore')

const Feed = (props) => {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    let posts = [];
    if(props.usersLoaded== props.following.length){
      for(let i=0; i< props.following.length;i++){
        const user= props.users.find((el) => el.uid === props.following[i]);
        if(user!= undefined){
          posts=[...posts,...user.posts]
        }
      }
      
      posts.sort((x,y)=>x.creation-y.creation)

      setPosts(posts)
    }

  }, [props.usersLoaded])

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
          // keyExtractor={}
          renderItem={({ item }) => (
            <View style={style.containerImage}>
              <Text style={style.container}>{item.user.name}</Text>
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
  following: store.user.following,
  users: store.users.users,
  usersLoaded: store.user.usersLoaded
})

export default connect(mapStateToProps, null)(Feed)