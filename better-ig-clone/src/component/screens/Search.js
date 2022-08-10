import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";

import SearchBox from "../screenComponents/SearchBox";
import SearchContent from "../screenComponents/SearchContent";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Search = () => {
  const [image, setImage] = useState("");

  const getData = (data) => {
    setImage(data);
  };
  
  const windowWidth = Dimensions.get("window").width;
  console.log(Dimensions.get("window").width);
  const windowHight = Dimensions.get("window").height;
  console.log(Dimensions.get("window").height);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="pluscircleo"
            style={{ fontSize: 30, opacity: 0.5 }}
          />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: "absolute",
              top: windowHight / 6,
              left: windowWidth / 18,
              backgroundColor: "#fff",
              width: "90%",
              height: 450,
              borderRadius: 15,
              zIndex: 10,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: "600" }}>
                  Hello My Guy
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", height: "80%" }}>
              <Image source={image} style={{ width: "100%", height: "100%" }} />
            </View>
            <View
              style={{
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
              }}
            >
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 26 }}
              />
              <Feather name="navigation" style={{ fontSize: 26 }} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
