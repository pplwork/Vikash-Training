import { View, Button, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../../firebase.config";
import { doc, setDoc, Timestamp } from "firebase/firestore/lite";

const Save = ({ route, navigation }) => {
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let { image } = route.params;
    setImageUrl(image);
  }, []);

  const uploadImage = async () => {
    const image = route.params.image;

    const response = await fetch(image);
    const blob = await response.blob();

    const metadata = {
      contentType: "image/jpeg",
    };

    const imageRef = ref(
      storage,
      `post/${auth.currentUser.uid}/${Math.random().toString(36)}`
    );
    const uploadTask = uploadBytesResumable(imageRef, blob, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(
          `Upload is ${progress}% done, transferred: ${snapshot.bytesTransferred}`
        );
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          savePostData(downloadURL);
        });
      }
    );
  };

  const nanoid = (uid) => {
    const newId=uid.slice(0,(uid.length-1)/2);
    return newId+Date.now().toString();
  };

  const savePostData = async (downloadUrl) => {
    setDoc(
      doc(db, "posts", auth.currentUser.uid, "userPosts", nanoid(auth.currentUser.uid)),
      {
        downloadUrl,
        likesCount: 0,
        caption,
        creation: Timestamp.fromDate(new Date("December 10, 2020")),
      }
    ).then(() => navigation.popToTop())
    .catch(err=>console.log(err))
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, aspectRatio: 1 / 1, height: 45 }}
        source={{ uri: imageUrl }}
      />
      <TextInput
        placeholder="Write Something..."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" onPress={() => uploadImage()} />
    </View>
  );
};

export default Save;
