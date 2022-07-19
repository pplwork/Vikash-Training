import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

export const ProfileBody = ({ name, accountName, postImage }) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: "100%",
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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {name}
            </Text>
            <TouchableOpacity
              style={{ marginRight: 20, alignSelf: "flex-end" }}
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="chevron-down"
                style={{ fontSize: 20, color: "black" }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="plus-square"
              style={{ fontSize: 25, color: "black", marginRight: 8 }}
            />
            <Feather name="menu" style={{ fontSize: 25, color: "black" }} />
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
              source={postImage}
              style={{
                height: 100,
                width: 100,
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
              {/* {post} */}
              9000
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
              {/* {followers} */}
              6854
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
              {/* {following} */}
              700
            </Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtons = ({ follow }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        style={{
          width: "42%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 35,
            backgroundColor: follow ? null : "#3493D9",
            borderWidth: follow ? 1 : 0,
            borderColor: "#dedede",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: follow ? "black" : "white" }}>Follow</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "42%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 35,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#dedede",
            justifyContent: "center",
            alignItems: "center",
            color: "#3493D9",
          }}
        >
          <Text
            style={{
              color: "black",
            }}
          >
            Message
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "10%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 35,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#dedede",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#3493D9",
            }}
          >
            <Feather
              name="chevron-down"
              style={{ fontSize: 20, color: "black" }}
            />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
