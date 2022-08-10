import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { ProfileBody } from "../screenComponents/ProfileBody";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTabView from "../screenComponents/BottomTabView";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

import { useSelector, useDispatch } from "react-redux/es/exports";

const Profile = () => {
  const { name, email } = useSelector((state) => state.userData);
  console.log(name, email);

  const navigation = useNavigation();
  let profile;
  try {
    profile = require("../../storage/images/profile1.jpg");
  } catch (err) {
    profile = require("../../storage/images/profile1.jpg");
  }

  const signOff = async () => {
    try {
      await signOut(auth);
      console.log("sign out successfull");
    } catch (error) {
      console.log(error);
    }
  };

  let userStatus = [];

  for (let i = 0; i < 10; i++) {
    userStatus.push(
      <View key={i}>
        {i == 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="plus" style={{ fontSize: 40, color: "black" }} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "black",
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ width: "100%", padding: 8 }}>
        <ProfileBody
          name={name}
          accountName={name}
          postImage={profile}
          following="34"
          followers="1234"
          posts="234"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.push("EditProfile", {
                name: "Mr Stickey",
                accountName: "Mr_Freaky",
                postImage: profile,
                following: "34",
                followers: "1234",
                posts: "234",
              })
            }
            style={{ width: "45%" }}
          >
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                borderColor: "#dedede",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>EditProfile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => signOff()} style={{ width: "45%" }}>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                borderColor: "#dedede",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Sign out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: "100%", paddingVertical: 10 }}>
        <Text style={{ padding: 10, letterSpacing: 1, fontSize: 14 }}>
          story highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          {userStatus}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;
