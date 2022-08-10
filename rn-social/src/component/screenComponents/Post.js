import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Post = () => {
  const postInfo = [
    {
      postTitle: "mr shermon",
      postPersonImage: require("../../storage/images/userProfile.png"),
      postImage: require("../../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
      commene: "ahaha this is really the best i can get #Time",
      bookmarked: true,
    },
    {
      postTitle: "chillhouse",
      postPersonImage: require("../../storage/images/profile5.jpg"),
      postImage: require("../../storage/images/post2.jpg"),
      likes: 345,
      commene: "Hey look this is me get #Time",
      isLiked: true,
      bookmarked: false,
    },
    {
      postTitle: "Tom",
      postPersonImage: require("../../storage/images/profile4.jpg"),
      postImage: require("../../storage/images/post3.jpg"),
      likes: 734,
      commene: "Best things yet to come #life",
      isLiked: false,
      bookmarked: false,
    },
    {
      postTitle: "The_Groot",
      postPersonImage: require("../../storage/images/profile3.jpg"),
      postImage: require("../../storage/images/post4.jpg"),
      likes: 875,
      commene: "Best Thing come with time and how you doinng?",
      isLiked: true,
      bookmarked: true,
    },
  ];

  return (
    <View>
      {/* // */}

      <FlatList
        numColumns={1}
        horizontal={false}
        key={postInfo.likes}
        data={postInfo}
        renderItem={({ item }) => {
          // const [like, setLike] = useState(item.isLiked);
          // const [bookmark, setBookmark] = useState(false)
          return (
            <View
              // key={idx}
              style={{
                borderBottomColor: "#666",
                borderBottomWidth: 1,
                paddingBottom: 15,
                marginVertical: 3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 5,
                  margin: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ borderRadius: 100, height: 40, width: 40 }}
                    source={item.postPersonImage}
                  />
                  <Text
                    style={{ fontSize: 15, marginLeft: 10, fontWeight: 600 }}
                  >
                    {item.postTitle}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Feather name="more-vertical" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  style={{ height: 400, width: "100%" }}
                  source={item.postImage}
                />
              </View>
              <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginVertical: 5,
                    }}
                  >
                    <TouchableOpacity>
                      <AntDesign
                        name={item.isLiked ? "heart" : "hearto"}
                        style={{
                          paddingLeft: 10,
                          fontSize: 25,
                          color: item.isLiked ? "red" : "grey",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                      <Ionic
                        name="ios-chatbubble-outline"
                        style={{
                          paddingLeft: 10,
                          fontSize: 25,
                          color: "grey",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Feather
                        name="navigation"
                        style={{
                          paddingLeft: 10,
                          fontSize: 25,
                          color: "grey",
                          marginTop: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <Feather
                      name="bookmark"
                      style={{
                        fontSize: 20,
                        fontSize: 25,
                        color: item.bookmarked ? "purple" : "#666",
                        marginRight: 4,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 8 }}>
                  <Text>
                    Liked by {item.isLiked ? "you and " : ""} {item.likes}{" "}
                    {item.isLiked ? "others" : "peoples"}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                      paddingVertical: 2,
                    }}
                  >
                    {item.commene}
                  </Text>
                  <TouchableOpacity
                    style={{ opacity: 0.4, paddingVertical: 2 }}
                  >
                    <Text>View all comments</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 5,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={item.postPersonImage}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 100,
                          backgroundColor: "orange",
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        placeholder="Add a comment"
                        style={{ opacity: 0.8 }}
                      />
                      <TouchableOpacity
                        style={{ opacity: 0.4, paddingVertical: 2, borderBottomWidth:1, borderBottomColor:"#666" }}
                      >
                        <Text>Add</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Entypo
                        name="emoji-happy"
                        style={{
                          fontSize: 15,
                          color: "lightgreen",
                          marginRight: 10,
                        }}
                      />
                      <Entypo
                        name="emoji-neutral"
                        style={{ fontSize: 15, color: "pink", marginRight: 10 }}
                      />
                      <Entypo
                        name="emoji-sad"
                        style={{ fontSize: 15, color: "red" }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />

      {/* // */}

      {/* {postInfo.map((item, idx) => {
        const [like, setLike] = useState(item.isLiked);
        const [bookmark, setBookmark] = useState(false)

        return (
          
        );
      })} */}
    </View>
  );
};

export default Post;
