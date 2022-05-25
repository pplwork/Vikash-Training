import { Text, View, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");

const Save = (props) => {
    console.log(props.route.params), "______";
    let { image } = props.route.params;
    console.log(image.toString());

    const [caption, setCaption] = useState("");
    console.log(firebase.auth())

    const uploadImage = async () => {
        const { image } = props.route.params;
        // console.log(image)
        // const image = props.route.params.image;
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
                savePostData(snapshot)
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
            caption,
            creation:firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>props.navigation.popToTop())
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: { image } = props.route.params }} />
            <TextInput
                placeholder="Write Something..."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Save" onPress={() => uploadImage()} />
        </View>
    );
};

export default Save;
