import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ReelsComponent from "../screenComponents/ReelsComponent";

const Reels = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View
      style={{
        width,
        height,
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          // top: 0,
          // left: 0,
          // right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Reels
        </Text>
        <TouchableOpacity>
          <Feather name="camera" style={{ fontSize: 25, color: "white" }} />
        </TouchableOpacity>
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
