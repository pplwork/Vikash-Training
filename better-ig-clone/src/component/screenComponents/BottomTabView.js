import { Text, View, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const BottomTabView = () => {

  const Tab = createMaterialTopTabNavigator();

  let squares = [];

  for (let index = 0; index < 8; index++) {
    squares.push(
      <View key={index}>
        <View
          style={{
            width: 150,
            height: 150,
            marginVertical: 0.5,
            backgroundColor: "black",
            opacity: 0.1,
          }}
        ></View>
      </View>
    );
  }

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{
        //   width: "100%",
        //   height: "100%",
        // }}
      >
        <View
          style={{
            width: "100%",
            // height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Videos = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "blue",
          height: 1.5,
        },

        tabBarIcon: ({ focused, colour }) => {
          let icon;
          if (route.name === "Posts") {
            icon = focused ? "ios-apps-sharp" : "ios-apps-sharp";
            colour = focused ? "#02014f" : "grey";
          } else if (route.name === "Videos") {
            icon = focused ? "ios-play-circle" : "ios-play-circle-outline";
            colour = focused ? "#02014f" : "grey";
          } else if (route.name === "Tags") {
            icon = focused ? "ios-person" : "ios-person-outline";
            colour = focused ? "#02014f" : "grey";
          }

          return <Ionic name={icon} color={colour} size={22} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;
