import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { FriendsProfileData } from "./Database";
import SuggestedProfileCard from "./SuggestedProfileCard.js";

const FriendProfile = ({ route, navigation }) => {
  const { name, profileImage, follow, post, followers, following } =
    route.params;

  const data = FriendsProfileData[0];
  console.log(data);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <View
        style={{
          marginBottom: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Ionic name="arrow-back" style={{ fontSize: 20, color: "black" }} />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {name}
          </Text>
        </View>
        <View>
          <Feather
            name="more-vertical"
            style={{ fontSize: 20, color: "black" }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Image
            source={profileImage}
            style={{
              height: 120,
              width: 120,
              borderRadius: "50%",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            {post}
          </Text>
          <Text>Posts</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            {followers}
          </Text>
          <Text>Followers</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            {following}
          </Text>
          <Text>Following</Text>
        </View>
      </View>

      <ProfileButtons follow={follow} />
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 15,
            marginVertical: 0,
            fontWeight: "bold",
          }}
        >
          Suggested for you
        </Text>
      </View>

      <ScrollView style={{ marginTop: 10 }} horizontal={true}>
        {name === FriendsProfileData.name
          ? null
          : FriendsProfileData.map((item, idx) => {
              return <SuggestedProfileCard key={idx} id={idx} item={item} />;
            })}
        {/* <SuggestedProfileCard item={data} /> */}
      </ScrollView>
    </View>
  );
};

export default FriendProfile;
