import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FriendsProfileData } from "./Database";
import { useState } from "react";

const SuggestedProfileCard = ({ item, close, idx }) => {
  const {
    id,
    name,
    profileImage,
    accountName,
    // follow,
    post,
    followers,
    following,
  } = item;

  const [follow, setFollow] = useState(item.follow);

  return (
    <View
      style={{
        width: 180,
        height: 220,
        position: "relative",
        borderWidth: 1,
        borderColor: "#e3e3e3",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 4,
      }}
    >
      <TouchableOpacity
        onPress={() => close(idx)}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <AntDesign
          name="close"
          style={{
            fontSize: 20,
            color: "black",
            opacity: 0.5,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: 100,
          height: 100,
        }}
      >
        <Image
          source={profileImage}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            marginBottom: 5,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          marginVertical: 0,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <Text>{accountName}</Text>
      <TouchableOpacity
        onPress={() => setFollow(!follow)}
        style={{
          backgroundColor: "#3493D9",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          padding: 6,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          {follow ? "unFollow" : "Follow"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestedProfileCard;
