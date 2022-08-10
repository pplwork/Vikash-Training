import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { handleFollow } from "../../redux/actions/userActions";

const SuggestedProfile = ({ item, currentUser }) => {
  const [follow, setFollow] = useState(false);

  const handleFollowers = (currentUser, followedUserId, follow) => {
    setFollow((prev) => !prev);
    handleFollow(currentUser, followedUserId, follow);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "70%",
        }}
      >
        <Image
          source={item.profileImage}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginRight: 10,
          }}
        />

        <Text style={{ fontSize: 15, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>{item.fullName}</Text> who you
          might know is on instagram
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleFollowers(currentUser, item.userId, follow)}
        style={{
          width: follow ? 90 : 68,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 30,
            borderRadius: 5,
            backgroundColor: follow ? null : "#3493D9",
            borderWidth: follow ? 1 : 0,
            borderColor: "#DEDEDE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: follow ? "black" : "white" }}>
            {follow ? "following" : "follow"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestedProfile;
