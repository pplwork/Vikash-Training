import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";

const SingleReel = ({ item, index, currentIndex }) => {

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  const onBuffer = (buffer) => {
    console.log("buffering", buffer);
  };

  const onError = (err) => {
    console.log("err", err);
  };

  return (
    <View
      style={{
        width,
        height,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />

        {/* <VideoPlayer
          onBuffer={onBuffer}
          mute={mute}
          ref={videoRef}
          onError={onError}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;
