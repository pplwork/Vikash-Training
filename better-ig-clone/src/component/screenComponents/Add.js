import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import {useNavigation} from '@react-navigation/native';


export default function Add() {
  const navigation = useNavigation();

  const [hasCameraPermission, sethasCameraPermission] = useState(null);
  const [hasGalleryPermission, sethasGalleryPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      sethasCameraPermission(cameraStatus.status === "granted");

      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();

      sethasGalleryPermission(galleryStatus.status === "granted");

      // if(galleryStatus.status !== 'granted'){
      //   sethasGalleryPermission("granted")
      //   alert('sorry, we need camera roll permission to make it work!')
      // }
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission == false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.fixedRationTag}
          ratio={"1:1"}
          type={type}
          ref={(ref) => setCamera(ref)}
        />
      </View>
      <Button
        style={styles.button}
        onPress={() => {
          setType(
            type === CameraType.back ? CameraType.front : CameraType.back
          );
        }}
      >
        <Text style={styles.text}> Flip </Text>
      </Button>
      <Button title="Take Picture" onPress={() => takePicture()} />
      <Button title="Pick Picture from agmllery" onPress={() => pickImage()} />
      <Button
        title="Save"
        onPress={() => {
          console.log(image)
          navigation.navigate("Save", { image })
        }}
      />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRationTag: {
    flex: 1,
    aspectRatio: 1,
  },
});
