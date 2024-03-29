import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FriendsProfileData } from "../screenComponents/Database";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux/es/exports";
import Earlier from "../miniComponents/Earlier";

const Activity = () => {
  const navigation = useNavigation();
  const {
    loading,
    user: { email, fullName, likes, followers, following, username, userId },
  } = useSelector((state) => state.user);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <Text
            style={{
              fontWeight: "bold",
              margin: 10,
              marginBottom: 15,
              fontSize: 25,
              borderBottomColor: "#DEDEDE",
            }}
          >
            Activity
          </Text>
          <ScrollView
            style={{ margin: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={{ fontWeight: "700" }}>This Week</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {FriendsProfileData.slice(0, 3).map((item, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() =>
                      navigation.push("FriendProfile", {
                        name: item.name,
                        profileImage: item.profileImage,
                        follow: item.follow,
                        post: item.posts,
                        followers: item.followers,
                        following: item.following,
                      })
                    }
                  >
                    <Text
                      style={{
                        paddingRight: 3,
                        paddingVertical: 10,
                        fontWeight: 500,
                        fontSize: 15,
                      }}
                    >
                      {item.name},
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <Text style={{ marginLeft: 5, fontWeight: 500, color: "blue" }}>
                Started Following you
              </Text>
            </View>
            <Text style={{ fontWeight: "700", marginVertical: 12 }}>
              Earlier
            </Text>
            <View>
              <Earlier currentUser={userId} following={following}/>
            </View>
            <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
              Suggestion for you
            </Text>
            {FriendsProfileData.slice(6, 12).map((item, idx) => {
              const [follow, setFollow] = useState(item.follow);
              const [close, setClose] = useState(false);
              return (
                <View key={idx}>
                  {close ? null : (
                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={item.profileImage}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                          }}
                        />
                        <View>
                          <Text style={{ marginLeft: 8, fontWeight: "bold" }}>
                            {item.accountName}
                          </Text>
                          <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                          <Text style={{ marginLeft: 8 }}>
                            Suggested for you
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity onPress={() => setFollow(!follow)}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              padding: 8,
                              marginBottom: 5,
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
                        <TouchableOpacity
                          onPress={() => setClose(!close)}
                          style={{
                            paddingHorizontal: 5,
                          }}
                        >
                          <AntDesign
                            name="close"
                            style={{
                              fontSize: 14,
                              color: "black",
                              opacity: 0.8,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
            <View style={{ justifyContent: "center" }}>
              <Text>Show more suggestions</Text>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Activity;
