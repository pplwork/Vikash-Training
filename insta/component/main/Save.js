import { View, Button, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

const Save = (props) => {

    const [caption, setCaption] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    useEffect(()=>{
        let { image } = props.route.params;

        setImageUrl(image)

    },[])

    const uploadImage = async () => {

        const image = props.route.params.image;

        console.log(image)
        const response = await fetch(image);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(
                `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
            )
            .put(blob)

        const taskProgress = snapshot => console.log(`transferred: ${snapshot.bytesTransferred}`)

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then(snapshot => {
                console.log(snapshot)
                savePostData(snapshot) //to save it in firestore also line 46
            }
            )
        }

        const taskError = snapshot => console.log(snapshot)

        task.on("state_changed", taskProgress, taskError, taskCompleted)

    };

    const savePostData= (downloadUrl)=>{
        firebase.firestore()
        .collection('posts')
        .doc(firebase.auth().currentUser.uid)
        .collection('userPosts')
        .add({
            downloadUrl,
            likesCount:0,
            caption,
            creation:firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>props.navigation.popToTop())                     //poptotop to return to main page
    }

    return (
        <View style={{ flex: 1 }}>
            <Image style={{flex:1,aspectRatio: 1 / 1, height: 45}} source={{ uri: imageUrl }} />
            <TextInput
                placeholder="Write Something..."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Save" onPress={() => uploadImage()} />
        </View>
    );
};

export default Save;
