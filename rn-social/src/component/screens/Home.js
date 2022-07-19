import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";
import { auth, db, storage } from "../../../firebase.config";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";

import { getUserData } from "../../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.userData);
  console.log(name, email);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      } else {
        dispatch(getUserData({ name: user.displayName, email: user.email }));
      }
    });
  }, []);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        {/* <Post/> */}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
